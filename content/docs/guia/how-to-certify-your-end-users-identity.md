---
title: "Como certificar sua identidade de usuários finais"
description: "Com usuários anônimos, o Agente não tem como certificar a identidade do usuário, o e-mail do usuário, o nome completo e outros dados fornecidos pelo usuário. Isto impedirá o Agente"
---

#### Como certificar os seus usuários finais[#](https://gethelp.chatcase.com/articles/anonymous-vs-authenticated-users/#how-to-certify-your-end-users) <a href="#how-to-certify-your-end-users" id="how-to-certify-your-end-users"></a>Cada vez que um usuário final inicia uma conversa com o ChatCase (geralmente através do nosso Widget) pela primeira vez, um novo usuário anônimo é criado, por padrão. Este usuário anônimo tem um UUID ** único que é reutilizado nas conversas seguintes na mesma instância do navegador. ChatCase cria um Contato para o usuário anônimo, se alguém já não existir, e atribui a nova solicitação de suporte a ele.

Com usuários anônimos, o Agente não tem como certificar a identidade do usuário, o e-mail do usuário, o nome completo e outros dados fornecidos pelo usuário. Isto impedirá o Agente de fornecer ao usuário informações sensíveis.

O ChatCase fornece uma forma segura - com base no JWT - para fornecer um perfil de usuário certificado aos Agentes.

Esta forma segura de fornecer identidade certificada é nomeado ** visitante autenticado** e é descrito [aqui](https://developer.chatcase.com/widget/auth).

Você pode encontrar uma [exemplo instância de usuário autenticado ](https://chatcase.com/2020/07/20/chatcase-live-chat-for-education-unisalento/) em um artigo (ver § *Autenticação*) onde descrevemos o que uma Universidade Italiana fez para o seu projeto de chat ao vivo em termos de fornecer apoio e informações sensatas aos seus próprios alunos.

Como você pode ver, usuários autenticados diferem de usuários anônimos pelo “escudo” azul claro ao lado da imagem de perfil do usuário:

<figure><img src="/doc-images/Png1Wn4WEOeEu1PLFAce.png" alt=""><figcaption></figcaption></figure>\
Todos os detalhes sobre autenticação estão sempre disponíveis para Agentes na seção *senderAuthInfo* no painel de Contato e no Painel de Conversação da conversa atual:

<figure><img src="/doc-images/2imkvpRs4RKC9hOleNrL.png" alt=""><figcaption></figcaption></figure>Para qualquer feedback ou problema, sinta-se à vontade para aparecer no nosso[ canal Discord](https://discord.gg/nERZEZ7SmG) ;

Para mais informações sobre quem somos, o que fazemos, ou o que é o nosso shtick, visite [ChatCase.com](https://chatcase.com/) 👩‍🚀
