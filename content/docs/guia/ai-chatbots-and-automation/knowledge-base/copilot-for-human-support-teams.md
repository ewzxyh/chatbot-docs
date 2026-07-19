---
title: "Copiloto para Equipes de Suporte Humano"
description: " Este recurso está disponível apenas nos planos Business and Enterprise. Para habilitá- lo, e- redacted@example.invalid."
---

<figure><img src="/doc-images/v2o4g0M4WCv4B0rpucHW.png" alt=""><figcaption></figcaption></figure>O Copilot é um assistente de IA integrado que ajuda agentes vivos a resolver as perguntas mais rapidamente. Quando um operador clica em **Solva com IA** no console, o Copilot analisa a conversa e pesquisa sua Base de Conhecimento (KB) para propor uma resposta pronta para enviar. Os operadores revêem, alteram se necessário e enviam — não é necessário pedir ajuda manual.

## # Disponibilidade e Ativação

** Este recurso está disponível apenas nos planos Business and Enterprise.** Para habilitá- lo, e- mail[redacted@example.invalid](mailto:redacted@example.invalid).

Vamos ativar o Copilot em seu projeto e podemos agendar uma caminhada para ajudar sua equipe a configurá-lo e aproveitar ao máximo.

Usando o co-piloto no painel do agente

1. Abra o painel do agente ChatCase.
2. Abra qualquer conversa ativa.
3. Clique em ** Solucione com IA** (no topo direito). O fluxo do Copilot é executado e retorna uma sugestão.

<figure><img src="/doc-images/O11xizpbSYfdD3YbGXIn.gif" alt=""><figcaption></figcaption></figure>Monta o fluxo de co-piloto

1. No painel, vá para **Flow** (barra lateral esquerda).
2. Clique em **Novo fluxo** → **Automação** → **Copilot**.
3. Nomeie o fluxo (por exemplo, *Copilot for Human Agents*) e escolha a **Knowledge Base** para consultar (por exemplo, *Default*).

<figure><img src="/doc-images/uIx7xtSFYqjJUt1u6LmK.png" alt=""><figcaption></figcaption></figure>Como funciona

A automação Copilot é construída no Visual Flow Designer e é acionada por um webhook quando o humano ** agente clica no botão.** Abaixo estão os dois caminhos de execução, com os nomes exatos de blocos como eles aparecem no modelo.

<figure><img src="/doc-images/ZOyuvV0ax54lTitCkhn8.png" alt=""><figcaption></figcaption></figure>Trigger

* Webhook carga útil fornece`payload.text`(mensagem do cliente) e`payload.request_id`(ID de conversação).
*`extract_message_and_request_id`armazena-os em`message`e`request_id`.

<figure><img src="/doc-images/t8YTtidUao7x8t2PaNxj.png" alt=""><figcaption></figcaption></figure>Validação da Mensagem

*`check_message`encaminha o fluxo:

<figure><img src="/doc-images/kB4prtNQVzpnDHaql9v9.png" alt=""><figcaption></figcaption></figure>* **Message faltando** → *Transcript Recovery Path (Block Azul)*
* ** Mensagem presente** → * Caminho da Mensagem Direta (Bloco Verde)*

<figure><img src="/doc-images/6WrjWb9eru94bjn9YrRD.png" alt=""><figcaption></figcaption></figure>Caminho de Recuperação de Transcrição (falta de mensagens)

<figure><img src="/doc-images/dgUSv5NEQ1WnSrVN3ixQ.png" alt=""><figcaption></figcaption></figure>**1- check\ request\ id** → se faltar, vá para`no_msg_no_req`(HTTP 400).

<figure><img src="/doc-images/Lb7a5la1jEjcjM8g0M6p.png" alt=""><figcaption></figcaption></figure>**2- get\ request** → obter mensagens de conversa usando`request_id`.

<figure><img src="/doc-images/FxV7qTpWX3A9HJyNftic.png" alt=""><figcaption></figcaption></figure>**3- create\ transcript** → build`transcript`apenas mensagens de autoria humana (filtrar itens com`subtype`, `intentName`, `messageLabel`), formatado como *SenderName: message*.

<figure><img src="/doc-images/AuX2tO6ChbnSwbkHYjUH.png" alt=""><figcaption></figcaption></figure>**4- extract\ question** (ChatGPT task) → resume o último problema não resolvido de`transcript`; se nenhum, retorne`NULL`.

<figure><img src="/doc-images/jPVGj7Pbf1M9hImyhPzF.png" alt=""><figcaption></figcaption></figure>**5- verificação\ pergunta** → se`gpt_reply == "NULL"`, go to `return_no_content_1`(HTTP 404); então continue.

<figure><img src="/doc-images/FSoCosjUKDsEuItzmrJu.png" alt=""><figcaption></figcaption></figure>**6- ask\ kb\  from\ request** → consulta KB com`{{gpt_reply}}`.

* Sucesso → **retorno\ resposta\ requisito** (HTTP 200, envia`kb_reply`ao co-piloto UI).
* Else → **retorno\ no\ content\ 2** (HTTP 404).

<figure><img src="/doc-images/vWethIhOE8scrr5oHMAx.png" alt=""><figcaption></figcaption></figure>Caminho da Mensagem Direta (mensagem presente)

**1- extract\ issue\ ai** (tarefa ChatGPT) → valida e reescrever`{{message}}`; retorno`NULL`Se não for accionável.

<figure><img src="/doc-images/oDudemeVW1Lb2wvLqf35.png" alt=""><figcaption></figcaption></figure>**2- verificação\ no\ questão** → se`gpt_reply == "NULL"`, go to `return_no_content_3`(HTTP 404); então continue.

<figure><img src="/doc-images/PS7FCiOOzdHlnMhkOdGz.png" alt=""><figcaption></figcaption></figure>**3- ask\ kb\  from\ message** → query KB with`{{gpt_reply}}`.

* Sucesso → **retorno\ resposta\ mensagem** (HTTP 200).
* Else → **retorno\ no\ content\ 4** (HTTP 404).

<figure><img src="/doc-images/GLYFSDE2p6XoxMY2oLpd.png" alt=""><figcaption></figcaption></figure>4- Estamos quase terminando! O passo final é publicar o fluxo usando o botão azul na parte superior direita. Você está tudo pronto!

<figure><img src="/doc-images/35P2F0uFhkedzGqJdseI.png" alt=""><figcaption></figcaption></figure>## # Como testar co-piloto para suporte humano

Para facilitar os testes, preparamos um simples mini Agente de IA que ativa a ação **Transfer to human**.

1. Adicione um botão no fluxo do seu Agente e ligue-o à ação [Transfer to a Human](/docs/guia/ai-chatbots-and-automation/actions-explained/transfer-to-a-human).
2. Execute o fluxo usando o ícone **Test** no canto superior direito do editor.
3. Na pré-visualização da conversa, clique no botão **Fale com o Operador**.
4. Faça uma pergunta para iniciar o teste.
5. Um operador será automaticamente atribuído à conversa.
6. Vá ao **Operator Dashboard** e abra a conversa.
7. No canto superior direito, clique em ** Solver com IA**.
8. O Copilot recuperará a resposta da Base de Conhecimento conectada e a exibirá para revisão.
9. O operador pode ajustar a sugestão se necessário, em seguida, pressione **Enviar** para responder instantaneamente.

<figure><img src="/doc-images/sPbIs2NlIFsibDvwyUdz.gif" alt=""><figcaption></figcaption></figure>## # Variáveis de fluxo

Variável
--------------------------------------------------------------------------------------------
□`message`Última mensagem do cliente da carga útil do webhook.
□`request_id`ID de conversação usado para recuperar histórico e respostas de rota.
□`transcript`História de conversa limpa e humana construída a partir`messages`. |
| `gpt_reply`Pergunta gerada por IA para pesquisa em KB.
□`kb_reply`Resposta Base de Conhecimento retornada pelos blocos Ask KB.
□`kb_source`O documento/página fonte para a resposta KB (opcional).

## # Devolver valores à UI co-piloto

* **200 OK** → Exibições de copiloto`kb_reply`(e opcionalmente`kb_source`) para que o agente reveja.
* **404 Not Found** → Nenhuma sugestão foi encontrada.
* **400 Pedido ruim** → Faltam dados necessários (`message` or `request_id`).

Personalização

* Ajuste as instruções de IA para extração de perguntas.
* Ponto para Bases de Conhecimento Especializadas.
* Incluir citações de origem para transparência.
* Adicione detecção de idioma e tradução para suporte multilingue.

Benefícios

* 2× respostas mais rápidas
* Menos esforço cognitivo
* Respostas mais consistentes

Reveja a sugestão, ajuste se necessário, e envie.

## # Pronto para equipar a sua equipe com o co-piloto?

As equipes que usam o Copilot já estão resolvendo perguntas mais rápido e com menos esforço.\
Não deixe seus agentes perderem — ** e-mail-nos hoje em** [**redacted@example.invalid**](mailto:redacted@example.invalid) para ativar o Copilot para sua equipe e começar a aumentar a produtividade imediatamente.
