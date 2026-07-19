---
title: "Brevo"
description: "Introduçãoa href=\"intro\" id=\"intro\"/aCom esta ação, você pode invocar diretamente a automação Brevo do ChatCase. Esta integração permite que o ChatCase crie automaticamente um no"
---

Introdução<a href="#intro" id="intro"></a>Com esta ação, você pode invocar diretamente a automação Brevo do ChatCase. Esta integração permite que o ChatCase crie automaticamente um novo contacto em Brevo.

Obter uma chave API de Brevo<a href="#get-an-api-key-from-brevo" id="get-an-api-key-from-brevo"></a>Clique no nome do seu perfil no canto superior direito e escolha a opção SMTP & API no menu suspenso. Em seguida, escolha a guia API Keys e crie sua chave API.

<figure><img src="/files/rzJmFpu5Z1qOQ1QvQs3S" alt=""><figcaption></figcaption></figure>Uma vez copiada, cole a chave API na seção Integrações em Configurações, como abaixo.

<figure><img src="/files/AtOrQWJ3VPhDbuJiWFQw" alt=""><figcaption></figcaption></figure>Obter a ação Brevo do estúdio de design<a href="#get-the-brevo-action-from-the-design-studio" id="get-the-brevo-action-from-the-design-studio"></a>Uma vez no Design Studio, basta arrastar e soltar a ação Brevo na tela do menu lateral “Integrações”, como mostrado na imagem abaixo:

\
&#x20;

<figure><img src="/files/1V20vRdeFXWb7pfn2xfv" alt=""><figcaption></figcaption></figure>Depois de arrastar a ação, você pode configurá-la. A parte principal é configurar o webhook Brevo e preencher todos os campos para enviar para o endpoint da API Brevo usando os atributos de fluxo certos:

<figure><img src="/files/aNj4Tm2TLIwUE6OpPewt" alt=""><figcaption></figcaption></figure>No exemplo a seguir, configuramos quatro campos: nome, sobrenome e endereço de e-mail, bem como o número de telefone (SMS), para o contato que será criado no banco de dados de Brevo. &#x20;

Um novo contato será transmitido a Brevo com os valores "custom\ firstname", "custom\ lastname", "custom\ email" e "custom\ SMS". A ação de Brevo irá desencadear uma chamada da API de Brevo (<https://api.brevo.com/v3/contacts>), que irá criar um novo contacto utilizando as informações transmitidas.

<figure><img src="/files/fcSzGzSIX9HRQv0YaQrE" alt=""><figcaption></figcaption></figure>Você pode conectar vários blocos para ampliar as ações de automação criadas em Brevo. Especificamente, dois blocos podem ser ligados com o bloco Brevo, que irá desencadear o sucesso ou falha da invocação webhook na plataforma Brevo. No exemplo descrito na imagem abaixo, nós apenas conectamos dois blocos ao bloco de Brevo: "Brevo ok" e "Brevo fail", que lidam com as informações enviadas e recebidas da API de Brevo, respectivamente.

<figure><img src="/files/SHValMy76oRKD4AibZKV" alt=""><figcaption></figcaption></figure>Como recuperar o resultado da automação invocada<a href="#how-to-retrieve-the-result-of-the-invoked-automation" id="how-to-retrieve-the-result-of-the-invoked-automation"></a>Para ver a resposta a partir da automação invocada, você precisa abrir a seção "Avançado" dentro do bloco "Brevo" e atribuir uma nova variável ao campo "Atribuir resultado", nomeando-o, por exemplo, "Brevo\ result". Após a conclusão da execução, a variável criada será preenchida com o resultado formatado de JSON da automação.

<figure><img src="/files/XQp5ucDM4rQa98FYWs72" alt=""><figcaption></figcaption></figure>A automação cria um novo contato na base de dados de Brevo e retorna as informações inseridas ao ChatCase na variável 'Brevo\ result' como dados JSON.

<figure><img src="/files/8axhESDaDoARl7SB5lOc" alt=""><figcaption></figcaption></figure>O seguinte é um contato criado na base de dados Brevo usando a automação descrita neste artigo.

<figure><img src="/files/RMNQf0tch4jOvvWRFUvL" alt=""><figcaption></figcaption></figure>Se você tiver dúvidas sobre a Ação Brevo ou outros recursos do ChatCase sinta-se livre para enviar um e-mail para [redacted@example.invalid ](mailto:redacted@example.invalid)ou deixe-nos [feedback](https://feedback.chatcase.com/feedback).
