---
title: "Tarefa do ChatGPT"
description: "Tarefa ChatGPT"
---

Tarefa ChatGPT

O ChatCase Design Studio permite criar chatbots que geram respostas pertinentes usando o recurso ChatGPT Task. Com este recurso, você pode melhorar o fluxo de conversação com o poder do ChatGPT. Alguns casos de uso para este recurso incluem:

* Gerando respostas com base no feedback do cliente
* Priorizar e categorizar as perguntas dos clientes
* Análise dos sentimentos
* Gerando e-mails e muito mais

Este recurso permite que você aproveite o poder de diferentes modelos OpenAI, incluindo o mais recente - ChatGPT-4o, para tornar suas conversas mais diversificadas, humanas e automatizar muitas tarefas manuais.

[Acessar recurso externo](<https://www.youtube.com/watch?v=m_gk1nnaYCg>)
Como usar a tarefa ChatGPT num fluxo de conversaçãohttps://gethelp.chatcase.com/articles/learn-how-to-use-the-chatgpt-task-feature/#how-to-use-chatgpt-task-in-a-conversation-flow) <a href="#how-to-use-chatgpt-task-in-a-conversation-flow" id="how-to-use-chatgpt-task-in-a-conversation-flow"></a>Antes de começar, é essencial ter um caso de uso claro em mente. Para este exemplo, digamos que você quer criar um bot que lida com solicitações de feedback.

\
Em primeiro lugar, navegue até o painel [ChatCase](https://panel.chatcase.com/v3/dashboard/#/projects) e depois para o Design Studio.

Em seguida, precisamos criar um novo atributo para gravar o feedback do usuário. Para fazer isso, pergunte ao usuário: “Como você encontrou nossa equipe de suporte?” e então use uma ação chamada “[Capture User Reply](/docs/guia/ai-chatbots-and-automation/actions-explained/capture-user-reply-action)” para salvar a resposta do usuário em um novo atributo chamado.

<figure><img src="/files/uDRIZ1wjs4Z0mivQLbQy" alt=""><figcaption></figcaption></figure>É isso! Você criou com sucesso um chatbot com o ChatCase Design Studio que usa o recurso GPT Task para gerar respostas pertinentes com base no feedback do cliente. Isso pode aumentar muito a capacidade do seu chatbot de fornecer respostas relevantes e conscientes do contexto aos usuários.

Em seguida, solte a “Tarefa ChatGPT” em um novo bloco. Ao clicar no bloco, um menu de recarga à direita aparecerá, permitindo que você insira seu prompt. Use o seguinte prompt:

* Tente gerar uma resposta curta e pertinente ao nosso feedback do cliente, que é.*

<figure><img src="/files/N6p6d5xkEkNoEmrTLLPr" alt=""><figcaption></figcaption></figure>\
Ao clicar nas configurações de IA no menu do lado direito, você pode definir o modelo OpenAI que você prefere e o número de tokens de IA. &#x20;

Decida o número máximo de tokens que deseja que a resposta GPT tenha.&#x20;

Tokens são pedaços de texto, e limitar seu número pode ajudar a controlar o comprimento das respostas geradas. &#x20;

Determine se deseja respostas mais curtas ou mais longas com base no seu caso de uso. Por exemplo, se você quer respostas concisas, você pode definir o número máximo de tokens para 50. Se você quer respostas mais detalhadas, você pode configurá-lo para um valor maior, como 150.

<figure><img src="/files/UqzN6mcF28qYArjlclVQ" alt=""><figcaption></figcaption></figure>Em seguida, crie uma ação “[Reply](/docs/guia/ai-chatbots-and-automation/actions-explained/reply-action)” com o atributo GPT. &#x20;

Crie um novo bloco ou use um existente onde você deseja gerar respostas GPT. Dentro do bloco, crie uma ação de “Resposta” para gerar a resposta. Na ação “Resposta”, adicione o atributo para armazenar a resposta gerada.

<figure><img src="/files/jVd3v04t0JnqQSrXmRYj" alt=""><figcaption></figcaption></figure>Teste seu chatbot para garantir que ele gera respostas pertinentes com base no feedback do cliente. Forneça feedback no chat para ver como a resposta gerada pelo GPT é tratada.

<figure><img src="/files/rZYD6ubWhpklJETgawWn" alt=""><figcaption></figcaption></figure>Espero que tenha achado isto útil.

Se precisar de assistência, não hesite em entrar em contato-nos através de[redacted@example.invalid](mailto:redacted@example.invalid).&#x20;

Para mais informações, visite [www.ChatCase.com](https://chatcase.com/).&#x20;

Se você ainda não criou sua conta gratuita, [inicie aqui](https://panel.chatcase.com/v3/dashboard/#/signup).
