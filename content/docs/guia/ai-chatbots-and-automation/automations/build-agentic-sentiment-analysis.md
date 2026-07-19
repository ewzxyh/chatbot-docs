---
title: "Construir Análise de Sentimento Agentico"
description: "Saiba como analisar conversas fechadas automaticamente, atribuir uma pontuação de sentimento, gerar um breve resumo de IA e classificar chats com tags úteis em ChatCase."
---

Saiba como analisar conversas fechadas automaticamente, atribuir uma pontuação de sentimento, gerar um breve resumo de IA e classificar chats com tags úteis em ChatCase.

Este tutorial explica como construir um fluxo Agentic Sentiment Analysis em ChatCase.

O objetivo é analisar uma conversa quando o chat é fechado, mesmo que o usuário não deixe uma classificação explícita ou feedback escrito.

No final do fluxo, ChatCase pode:

* detectar se a transcrição é significativa
* atribuir uma pontuação de sentimento de 1 a 5
* gerar um breve resumo de IA de como a conversa foi percebida
* aplicar tags como feedback, sugestão, relatório de erro ou solicitação de recursos

Esta abordagem ajuda as equipes a extrair valor de conversas que de outra forma acabariam sem qualquer sinal estruturado.

<figure><img src="/doc-images/1gUOupzVuEf5Pid24U1f.png" alt=""><figcaption></figcaption></figure># # O que este fluxo de trabalho faz

Quando uma conversa é fechada, o fluxo de trabalho desencadeia uma etapa de IA que lê a transcrição da conversa.

A IA retorna:

* **NC** (Sem Comentário) se a transcrição não é útil ou não contém informações significativas suficientes
* uma pontuação de **1 a 5** para representar o sentimento provável do usuário
* um pequeno mini-relatório que explica o provável resultado da interacção
* uma categoria baseada na conversa geral

Isso torna possível monitorar a qualidade da conversação mesmo quando o usuário não deixa uma classificação.

{% stepper %}
{% step %}Passo 1: Identifique o ponto de encerramento do chat

Abra seu fluxo no ChatCase Design Studio e identifique onde termina a conversa.

Isto pode ser:

* uma ação manual fechada
* um fechamento automático após a mensagem final
* um encerramento desencadeado após um período de inatividade
* um encerramento após uma entrega humana é concluída

Este é o ponto onde a Análise de Sentimento Agente deve começar.
{% endstep %}

{% step %}Passo 2: Activar um fluxo de análise pós-chat

Após o ponto de fechamento, adicione um passo que inicia o fluxo de trabalho de análise de sentimentos.

O objetivo desta etapa é executar a análise apenas após a conversa ser concluída.

Isto é útil porque:

* A IA pode avaliar a transcrição completa
* o fluxo de trabalho permanece leve
* a análise é feita apenas uma vez por conversa
{% endstep %}

{% step %}Passo 3: Passe a transcrição para a IA

Configure uma etapa de IA que receba a transcrição completa da conversa.

No mínimo, a IA deve analisar:

* as mensagens do usuário
* o assistente ou agente responde
* o resultado geral da conversa
{% endstep %}

{% step %}Passo 4: Peça à IA uma saída estruturada

Configure o prompt para que o IA retorne um resultado estruturado.

Uma saída recomendada inclui:

* **análise\ status**
* **Sentimento\ score**
* **mini\ report**
* ** categoria**

Estrutura de exemplo

```
analysis_status: NC or valid

sentiment_score: number from 1 to 5

mini_report: short explanation of the likely user perception

category: one category based on the overall conversation
`$([Environment]::NewLine)
A parte importante é a consistência. A saída deve sempre seguir o mesmo formato.
{% endstep %}

{% step %}Passo 5: Salve o resultado em atributos

Uma vez que o IA retorna o resultado, salve-o em atributos de conversação.

Por exemplo:

* **análise\ status**
* **Sentimento\ score**
* **mini\ report**
* **ai\ category**

Isso permite que você reutilize a saída mais tarde em automação de análise, filtragem e acompanhamento.

<figure><img src="/doc-images/2fD8MFfJjfNIwFF3VaRh.png" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}### Passo 6: Aplicar tags automaticamente

Se seu IA retornar uma categoria, use-a para classificar a conversa automaticamente e adicioná-la como uma tag usando [Adicionar Tag](/docs/guia/ai-chatbots-and-automation/actions-explained/add-tag)action.

Você pode usar uma destas categorias:

* **Product\ feedback**
* ** Falta de recursos\
* **suporte\ qualidade\ questões**
* **Repetido\ error\ reports**

Este passo transforma a análise de sentimentos em algo operacional, não apenas descritivo.

<figure><img src="/doc-images/VzCFsuSyOCkvUVVarrQV.png" alt=""><figcaption></figcaption></figure>Depois de aplicar tags automaticamente, você pode ir para o ChatCase Analytics e visualizar conversas junto com as tags relacionadas de uma forma simples.

<figure><img src="/doc-images/uAM9ZtYesaQPvzvBGokL.png" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}# # Exemplo simples para classificação de categoria

Para manter esta parte simples, você pode adicionar um prompt que pede à IA para ler a conversa completa e retornar apenas uma categoria.

Use um prompt como este:

```
Read the full conversation carefully.

Based on the overall conversation, classify it into one and only one of the following categories:

product_feedback
missing_features
support_quality_issues
repeated_error_reports

Rules:
- Read the full conversation before deciding
- Choose only one category
- Answer strictly with one of the category names above
- Do not add explanations
- Do not add any extra text

Conversation:
{{conversation}}
`$([Environment]::NewLine)
Com esse prompt, o IA atua como um classificador restrito e retorna apenas um valor que você pode salvar em um atributo ou aplicar diretamente como uma tag.

# # Por que isso é útil em ChatCase

Este fluxo de trabalho se encaixa bem no ChatCase porque ele pode ser construído com uma abordagem sem código e estendido ao longo do tempo.

Ajuda as equipes:

* capturar sinais de conversas sem classificação
* classificar feedback automaticamente
* detectar problemas recorrentes
* melhorar a qualidade do suporte
* transformar chats fechados em insight acionável


Em vez de deixar as conversas desaparecerem uma vez fechadas, você pode usá-las para gerar dados estruturados para melhoria contínua.

Espero que seja útil.

***

Para ler mais sobre o ChatCase, visite:<https://www.chatcase.com>Caso tenha uma pergunta, envie-nos um e-mail para:[redacted@example.invalid](mailto:redacted@example.invalid)
