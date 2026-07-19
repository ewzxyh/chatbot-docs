---
title: "# # #x20; Guia passo a passo para usar Mensagens Escondidas[#] (https://gethelp.chatcase.com/articles/hidden-messages-and-how-to-use-them-in-design-studio/#step-by-step-guide-to-using-hidden-messages) <a href=\"#step-by-step-guide-to-using-hidden-messages\" id=\"step-by-step-guide-to-using-hidden-messages\"></a>Para usar a ação oculta, primeiro, navegue para o painel do ChatCase e depois para o Design Studio."
description: "Mensagens Escondidas"
---

Mensagens Escondidas

Uma das ações categorizadas na seção especial do ChatCase Design Studio é a Mensagem Escondida.&#x20;

Esta ação permite- lhe enviar mensagens para a máquina sem ser visível para o cliente final.

Existem várias aplicações para essa ação, como lógica condicional, armazenamento de dados e muito mais.

# # # #x20; Guia passo a passo para usar Mensagens Escondidas[#] (https://gethelp.chatcase.com/articles/hidden-messages-and-how-to-use-them-in-design-studio/#step-by-step-guide-to-using-hidden-messages) <a href="#step-by-step-guide-to-using-hidden-messages" id="step-by-step-guide-to-using-hidden-messages"></a>Para usar a ação oculta, primeiro, navegue para o painel do ChatCase e depois para o Design Studio.

Para este exemplo, vou avaliar o e-mail do usuário para determinar se é um e-mail da empresa. Se for, vou armazená-lo como empresa do usuário sem compartilhar essas informações com o usuário.

Para avaliar o e-mail do usuário, preciso usar uma ação chamada “[ChatGPT Task](/docs/guia/ai-chatbots-and-automation/actions-explained/chatgpt-task)” e inserir o seguinte prompt em sua seção de prompt:

* Analise o endereço de e-mail fornecido pelo usuário e responda somente e exclusivamente com o nome de sua empresa se for um email de negócios.*

* O e-mail do usuário é:*

<figure><img src="/files/eppKILf9vbHqLQ5TmvwX" alt=""><figcaption></figcaption></figure>Então, usarei a ação Mensagem Escondida e inserirei . Nesse cenário, extraimos a empresa do usuário do e-mail sem compartilhar essas informações com o usuário final, pois não é necessário compartilhar com eles.&#x20;

<figure><img src="/files/M0QFPGm2a4lyFU93lDFH" alt=""><figcaption></figcaption></figure>Na próxima etapa, usarei outra ação chamada “Atributo Set” para atribuir o nome da empresa do usuário a um novo atributo, como mostrado na imagem abaixo.

<figure><img src="/files/uAqHbIX1RAHSauVphYdq" alt=""><figcaption></figcaption></figure>Com essa estratégia, podemos registrar a empresa do usuário em um novo atributo apenas pedindo seu e-mail de trabalho.

\
Espero que tenha achado isto útil.

Se precisar de assistência, não hesite em entrar em contato-nos através de[redacted@example.invalid](mailto:redacted@example.invalid).&#x20;

Para mais informações, visite [www.ChatCase.com](https://chatcase.com/).&#x20;

Se você ainda não criou sua conta gratuita, [inicie aqui](https://panel.chatcase.com/v3/dashboard/#/signup).
