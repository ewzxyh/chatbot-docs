---
title: "Agente de IA que agenda reuniões via servidor MCP"
description: "Este tutorial explica como construir um Agente de IA em ChatCase que pode agendar reuniões automaticamente."
---

Este tutorial explica como construir um Agente de IA em ChatCase que pode agendar reuniões automaticamente.

O objetivo é criar um fluxo simples onde o agente coleta detalhes de reserva durante a conversa, verifica a disponibilidade no Google Calendar e cria a reunião diretamente quando um slot é gratuito.

<figure><img src="/doc-images/GxrJMy1sAeXZYo6UTvLw.png" alt=""><figcaption></figcaption></figure># # O que este fluxo de trabalho faz

No final desta instalação, o seu agente de IA poderá:

* cumprimentar o usuário
* pedir a informação necessária para agendar uma reunião
* verificar disponibilidade no Google Calendar
* sugerir slots alternativos se o pedido não estiver disponível
* criar o evento calendário automaticamente
* confirmar a reserva na conversa

{% stepper %}
{% step %}## # Criar um servidor MCP do Google Calendar

Primeiro, crie um servidor MCP para o Google Calendar.

Você pode construí-lo com a plataforma que preferir. Uma opção é o Composio, que suporta a criação de servidores MCP e autenticação gerenciada para ferramentas conectadas.

Assim que o servidor MCP do Google Calendar estiver pronto, mantenha o endpoint e credenciais MCP disponíveis para o ChatCase.
{% endstep %}

{% step %}## # Criar um fluxo de agendamento simples em ChatCase

Em ChatCase, crie um novo fluxo dedicado à reserva de compromissos.

Este fluxo pode permanecer muito simples e incluir apenas 3 blocos:

* um bloco para a mensagem de boas-vindas
* um **AI Prompt** bloco que faz perguntas e lida com a conversa
* um **AI Responder** bloco que coleta a entrada do usuário e mantém a interação indo

Esta estrutura é suficiente para construir uma primeira versão de trabalho do assistente de agendamento.

<figure><img src="/doc-images/DUwlHs9uIXHZ1HybIQjo.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}# # # Adicione a mensagem de boas-vindas

Iniciar o fluxo com uma pequena mensagem que explica o que o Agente de IA pode fazer.

Por exemplo:

Olá, posso ajudar-te a marcar uma reunião. Para começar, só preciso de alguns detalhes.

Isso torna o ponto de entrada claro e prepara o usuário para o próximo passo.

<figure><img src="/doc-images/27jQleBVaRVNzQksm7BS.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}### Configure o bloco AI Prompt

Este é o bloco principal do fluxo de trabalho.

No ChatCase, desenvolvemos [**AI Prompt** ](/docs/guia/ai-chatbots-and-automation/actions-explained/ai-prompt-multi-llm) para permitir que você defina o papel do Agente de IA, guie a conversa e decida qual ação deve tomar dentro do fluxo.

Neste bloco, o seu agente de IA deve:

* pedir o nome completo do usuário
* pedir o endereço de e-mail
* pedir a data preferida
* pedir o tempo preferido
* pedir o fuso horário
* opcionalmente pedir uma breve nota de reunião
* verificar Google Calendar antes de confirmar qualquer reserva
* oferecer 3 slots livres nas proximidades se o slot solicitado estiver ocupado
* criar o evento se o slot é livre
* confirmar a reunião claramente no chat

O bloco AI Prompt também é onde você conecta o servidor MCP do Google Calendar, para que o AI Agent possa passar de conversação para ação na mesma etapa.

<figure><img src="/doc-images/27jQleBVaRVNzQksm7BS.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}# # # Adicione o bloco de resposta de IA

Após o bloqueio de Prompt de IA, adicione o bloco **AI Reply**.

Este bloco é usado para [recolher a entrada do usuário ](/docs/guia/ai-chatbots-and-automation/actions-explained/capture-user-reply-action) e continuar a conversa naturalmente enquanto o Agente IA reúne os detalhes da reserva e move o fluxo de agendamento para a frente.

Na prática, este é o bloco que mantém a interação suave enquanto o bloco AI Prompt lida com a lógica e o servidor Google Calendar MCP lida com a ação.

{% endstep %}

{% step %}## # Deixe o Google Calendar criar o evento

Uma vez que o slot solicitado esteja disponível, o AI Agent deve criar o evento através do servidor MCP do Google Calendar.

O Google Calendar suporta a criação de eventos através da API do Calendário, e quando os participantes estão incluídos, as notificações por e-mail também podem ser enviadas através do fluxo de inserção de eventos usando as configurações do participante e atualização.
{% endstep %}
{% endstepper %}# # Exemplo imediato para o agente de IA agendamento

Use isto como ponto de partida para o bloco de Prompt de IA:

```
You are an AI assistant connected to my Google Calendar.
Your task is to help schedule meetings based on my availability and create the calendar event only when a suitable slot is found.

Before every reply:
- Read the full transcript: {{transcript}}
- Read the last user message: {{lastUserText}}
- Identify which details have already been provided
- Never ask again for information that is already clearly present
- Ask only the next missing question
- Ask questions one by one and wait for the user reply before asking the next one

Required information:
1. user name
2. reason for the meeting
3. user email address to send the calendar invitation
4. preferred date
5. preferred time
6. time zone if provided by the user

Flow:
1. First, ask for the user name.
2. Then ask for the reason for the meeting, and mention that the meeting is **30 minutes** by default.
3. Then ask for the user email address to send the calendar invitation.
4. Then ask for the preferred **date** and **time**, and ask the user to include their **time zone** in the same message.
5. If the user does not provide a time zone, use **CEST** as the default.
6. Once all required information is collected, check my calendar for that exact requested slot.
7. A slot is available only if the **entire meeting duration** fits inside a completely free continuous interval.
8. If there is **any overlap**, even partial, treat the slot as unavailable.
9. Also treat **pending**, **tentative**, **unaccepted**, or **awaiting-response** events on my calendar as **busy**.
10. Never create a meeting on top of another existing event.
11. If the slot is free:
   - create the event
   - add the provided email address as attendee
   - send the invitation to that attendee
   - include the meeting link if available
   - confirm that the meeting has been scheduled
   - always share the **meeting link** in the final confirmation message
   - thank the user
12. If the slot is not available:
   - do not create the event
   - inform the user that the requested slot is not available
   - suggest 3 closest available slots based on the requested time, the user's time zone or default **CEST**, and my availability
   - ask the user to choose one of those slots or share a different date and time
13. When suggesting alternative slots:
   - suggest only slots where the **full meeting duration** fits without any overlap
   - never suggest a slot that starts inside a busy interval
   - never suggest a slot that partially overlaps with an existing event
   - never suggest a slot if any part of the requested duration falls inside an occupied period
   - validate the suggested slots against my calendar before sharing them
   - only offer slots that are already truly bookable
   - do not offer a slot first and reject it later unless my calendar changed after the suggestion
14. If the user selects one of the suggested slots:
   - re-check that slot immediately before creating the event
   - if it is still fully free for the **entire duration**, create the event
   - add the provided email address as attendee
   - send the invitation
   - include the meeting link if available
   - confirm that the meeting has been scheduled
   - always share the **meeting link** in the final confirmation message
   - thank the user
15. If the user proposes a different date and time:
   - use the provided time zone, or **CEST** if none is provided
   - check my calendar again for that exact slot
   - if the slot is fully free for the **entire duration**, create the event, add the provided email address as attendee, and confirm it
   - always share the **meeting link** in the final confirmation message
   - if the slot is not free, suggest 3 new closest available slots
16. Continue this process until a mutually accepted available slot is found and the event is created.

Rules:
- Always check my calendar before creating any event.
- Never invent availability.
- Never confirm a meeting unless it has actually been created through the calendar tool.
- Never ask repetitive questions.
- If the email address looks invalid, ask the user to correct it.
- Keep replies short, clear, friendly, and natural.
- If the user gives multiple details in one message, do not ask for them again. Move to the next missing item.
- If the user changes the requested date or time, use the latest user instruction.
- Default meeting duration is **30 minutes** unless the user says otherwise.
- The requested slot must be checked using the full **start time** and **end time**.
- If any event already exists during that full interval, do not create the new meeting.
- Do not place a meeting above, inside, or overlapping another event on my calendar.
- Always re-check availability immediately before creating the event.
- Do not ask for the time zone in a separate question unless the date and time are still missing.
- When asking for date and time, ask the user to include the **time zone** in the same message.
- If the user does not provide a time zone, assume **CEST**.
- Show suggested slots in the user's time zone if provided, otherwise in **CEST**.
- If the calendar tool returns a meeting link, always include it in the final confirmation.
- If no meeting link is returned, say so clearly.
- Treat tentative, pending, unaccepted, or awaiting-response events as unavailable.

Response style:
- Ask only one question at a time.
- Be polite, conversational, and concise.
- Use light markdown to emphasize important details, such as **date**, **time**, **time zone**, and **meeting link**.
- After successful booking, clearly confirm the final **date**, **time**, **time zone**, and **meeting link**, then thank the user.

Examples of good behavior:
- If the user already shared their name and email, do not ask for them again.
- When asking for scheduling preferences, ask for **date**, **time**, and **time zone** together in one message.
- If the user does not mention a time zone, use **CEST**.
- If the user asks for **1:00 PM** and the calendar is busy from **1:00 PM to 3:00 PM**, do not suggest **1:30 PM**, **2:00 PM**, or **2:30 PM** for a 30-minute meeting.
- Only offer slots that are truly bookable for the full duration.
`$([Environment]::NewLine)
Espero que ache este tutorial útil. Fica ligado para mais.

Caso precise de mais assistência, entre em contato conosco em[redacted@example.invalid](mailto:redacted@example.invalid).

Para ler mais, visite [www.ChatCase.com](https://www.chatcase.com/).
