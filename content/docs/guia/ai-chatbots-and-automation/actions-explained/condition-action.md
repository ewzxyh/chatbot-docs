---
title: "ação da Condição"
description: "Ação da Condição"
---

Ação da Condição

A **Condição** A ação é muito útil para projetar fluxos de trabalho dinâmicos. Sempre que você precisa dividir uma conversa em duas ou mais filiais, esta Ação vem a calhar — por exemplo, enviando consultas de vendas diretamente para a equipe de vendas.

<figure><img src="/files/7Kw4syxRICnnee3MplaR" alt=""><figcaption></figcaption></figure>Existem duas Ações de Condição em **Ações de fluxo** na barra de ferramentas esquerda. Neste tutorial vamos focar em **Condição w/ else**. Esta ação permite- lhe definir uma condição:

* se a condição for verdadeira, o endpoint ** verde é desencadeado,
* se a condição for falsa, o ponto final ** vermelho é acionado.

<figure><img src="/files/dxx9F2xN1hafUJGvVWgm" alt=""><figcaption></figcaption></figure>Como usá-lo

1. Procurar **Condição w/ else** em *Ações de fluxo* na barra de ferramentas esquerda.
2. Arraste e solte na tela onde precisar.
3. Clique nele: um painel abre à direita onde você pode escolher o atributo que você deseja avaliar.

<figure><img src="/files/vOX5eL2YOAbysW6i7Qdi" alt=""><figcaption></figcaption></figure>Para criar uma condição:

1. Clique em ** Adicionar uma nova condição**.
2. Um pop-up aparecerá.
3. Selecione o [Atributo](/docs/guia/ai-chatbots-and-automation/visual-builder-101/flows-attributes) (por exemplo, *userEmail*).
4. Defina a condição escolhendo uma das opções disponíveis.
5. Digite um valor se necessário (para algumas condições, nenhum valor é necessário).
6. Clique em **Aplicar condição**.

É isso — você estabeleceu uma nova condição.

<figure><img src="/files/ntTJQtOZoqqSGys7g2hO" alt=""><figcaption></figcaption></figure>## # Opções de condição disponíveis

Aqui está o que cada opção significa em palavras simples:

* ** = igual Como Números / = igual Como Texto** → verifique se dois valores são exatamente os mesmos (como números ou texto).
* ** Não é igual como números / □ Não é igual como texto** → verifique se dois valores são diferentes.
* **> maior que / ≥ maior que ou igual** → verifique se um número é maior (ou maior/igual).
* **< less Than / ≤ less Than Or Equal** → check if a number is smaller (or smaller/equal).
* **starts With / not starts With** → check if a text begins with (or does not begin with) a specific value.
* **starts With Ignore Case** → same as above but ignoring uppercase/lowercase differences.
* **ends With** → check if a text ends with a specific value.
* **contains / contains Ignore Case** → check if a text contains a specific value (ignoring case if selected).
* **is Empty** → true if the attribute has no value.
* **is Null** → true if the attribute is null.
* **is Undefined** → true if the attribute is not defined at all.
* **matches** → check if the value matches a specific pattern (for advanced use cases).

<figure><img src="/files/Q6Yfhr6oJtmarUi8fVYm" alt=""><figcaption></figcaption></figure>Exemplos

**1. Pedir e-mail antes de fechar um chat**\
Verifique se *userEmail* é ** Undefined**. Se for verdade, o endpoint verde irá acionar e você pode pedir o email antes de terminar a conversa.

<figure><img src="/files/u73R6IYZ7heTW4Vz06ml" alt=""><figcaption></figcaption></figure>**2. Faça uma série de perguntas antes de seguir em frente**\
Use uma tarefa [Chatgpt](/docs/guia/ai-chatbots-and-automation/actions-explained/chatgpt-task) para coletar detalhes passo a passo (por exemplo: nome, necessidades, número de telefone).\
No prompt, você pode escrever:

```
Your role is to ask one by one the questions below:
- name
- needs
- phone number
Once you receive all the responses, answer strictly with the word "eject".
`$([Environment]::NewLine)
Quando o usuário tiver respondido a tudo, o **gpt\ reply** conterá ***eject***.\
Definir uma condição: se **gpt\ reply contiver "eject"**, continue o Flow.&#x20;

Caso contrário, conecte o branch Else a um [Reply Action](/docs/guia/ai-chatbots-and-automation/actions-explained/reply-action) para que o usuário continue recebendo perguntas até que a condição seja cumprida. Tenha em mente que você também precisa de uma ação [Capture User Reply](/docs/guia/ai-chatbots-and-automation/actions-explained/capture-user-reply-action) para receber a resposta do usuário, e você precisa conectá-la à tarefa ChatGPT novamente.

Em seguida, o ChatGPT fará a próxima pergunta até que responda com "eject".

<figure><img src="/files/xGVQZecV1anUjhX16pap" alt=""><figcaption></figcaption></figure>3. Entrega imediata ao apoio humano**\
Use uma tarefa Chatgpt para executar análise de sentimento na transcrição da conversa.\
No prompt, você pode escrever:

```
Check if there are signs of frustration or negative sentiment in the lastUserText.
If yes, answer strictly with the word "human".
`$([Environment]::NewLine)
Quando o Agente IA detecta frustração, o **gpt\ reply** conterá *human*.\
Definir uma condição: se **gpt\ reply for igual a "humano"**, acionar a ação [**Transfer to human**](/docs/guia/ai-chatbots-and-automation/actions-explained/transfer-to-a-human).

<figure><img src="/files/jiZPQOnZK5H9SDTyZtd8" alt=""><figcaption></figcaption></figure>Estes são apenas alguns exemplos de como a Ação da Condição pode ser usada. Há muitas outras possibilidades de projetar fluxos de trabalho inteligentes e flexíveis.

Se você tiver alguma dúvida sobre a Condição Ação ou outros recursos ChatCase, entre em contato conosco em [**redacted@example.invalid**](mailto:redacted@example.invalid).
