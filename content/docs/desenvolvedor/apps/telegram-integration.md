---
title: "Tutorial de integração do Telegram"
description: "A integração do Telegram para o ChatCase permite expandir a oferta de serviço ao cliente através da troca de mensagens entre o suporte ao Telegram e ao ChatCase. Esta integração pe"
---

# # Introdução

![](https://user-images.githubusercontent.com/45603238/175036688-f26d0efe-3150-425b-bab2-6ca07b63adf6.png)

A integração do Telegram para o ChatCase permite expandir a oferta de serviço ao cliente através da troca de mensagens entre o suporte ao Telegram e ao ChatCase. Esta integração permite conectar o bot Telegram da sua empresa à sua conta ChatCase, criando assim um túnel entre as duas plataformas. Portanto, os clientes podem chegar ao seu suporte simplesmente escrevendo para o seu bot Telegram e estas mensagens serão entregues para o webchat ChatCase, juntamente com mensagens de outros canais. Os seus agentes terão um único ambiente de trabalho.

# # Passos

A seguir estão os passos envolvidos em nosso tutorial:

1. Criar um Projeto ChatCase
2. Criar um Bot Telegram
3. Configurar o Webhook
4. Definir o ponto final Webhook para o Telegram
5. Inscreva-se a um Webhook no ChatCase
6. Teste a integração

# # Crie um Projeto ChatCase

Primeiro de tudo, crie um projeto ChatCase. Entrar na [Console ChatCase] (https://panel.chatcase.com/), em seguida, clique em "Adicionar projeto".

![Criar um novo projeto](https://user-images.githubusercontent.com/45603238/174244101-5d096a58-857d-45e2-9311-bca7c05063bf.png)

Agora escolha um nome para seu projeto (ou seja, Tutorial de Telegram) e clique no botão "CREAR PROJETO" (deixar todas as opções em seus valores padrão).

![Escolha o nome do projeto](https://user-images.githubusercontent.com/45603238/175033347-d45427f5-6654-420e-a1da-f77fba15ab1b.png)

Boa, o seu projeto está pronto.

# # Criar um Bot Telegram

Bem, vamos avançar no aplicativo Telegram, na versão desktop ou no móvel. Procurar e iniciar a conversa com [@ BotPai](https://t.me/botfather).

Agora digite */newbot* para criar um novo bot ou escolha entre as opções propostas pelo bot.

Então, escolha um nome para seu bot e um nome de usuário também, seguindo a instrução dada por @BotPather.

! [Novo telegrama bot] (https://user-images.githubusercontent.com/45603238/174252867-0c159500-2937-4a50-9993-d11226fbc9af.png)

O seu robot está agora operacional. Vês o símbolo? Vamos precisar dele em breve.

# # Configurar o Webhook

Usamos o [Replit] (https://replit.com/~) serviço para criar rapidamente o nosso próprio NodeJS web application endpoint. Forque o aplicativo tutorial, disponível neste URL: [[REDACTED_BASIC_AUTH_URL]

Use o botão do garfo e escolha um nome para o seu aplicativo.

! [projeto Fork Replit] (https://user-images.githubusercontent.com/45603238/174968675-5813f440-a39f-4af8-8a3d-10596e117e98.png)

O aplicativo está bifurcado e pronto para ser executado.

Agora volte para o projeto do seu ChatCase. *Configurações do projeto* > *General* seção e copiar o **Id do projeto**

[Id Projeto ChatCase] (https://user-images.githubusercontent.com/45603238/174268648-d3f28bab-67aa-4683-93d3-8de33e97a324.png)

Colar o ID do Projeto no arquivo *index.js* da sua aplicação NodeJS em Replit, como mostrado na figura:

! [projeto Colado ID] (https://user-images.githubusercontent.com/45603238/174282279-1c069dc4-02cf-4597-9002-74c4f7650440.png)

Agora volte (de novo) para a seção *Configurações* > *Configurações do projeto* > *Desenvolvedor* do seu projeto. Geraremos uma nova chave **secreta** que será usada para assinar seu token JWT. Pressione o botão "GENERATE shared SECRET", mas note que cada vez que você gerar um novo segredo o anterior não será mais válido e você tem que substituir onde você o usou. Em seguida, clique em "GENERATE".

![Segredo Compartilhado] (https://user-images.githubusercontent.com/45603238/174272766-a397b947-2cca-4f5d-99b1-53efe6ff96b9.png)

Essa é a sua chave secreta partilhada, clique em "Copiar".

! [Copy Shared Secret] (https://user-images.githubusercontent.com/45603238/174273202-104b99fe-c790-4081-b60a-d843b9554eca.png)

Colar a chave secreta no arquivo *index.js* da sua aplicação NodeJS na Replit, como mostrado na figura:

[Paste Shared Secret] (https://user-images.githubusercontent.com/45603238/174282285-f2720cc6-91f6-4f51-9974-18140edb3df8.png)

# # Definir o ponto final do Webhook para o Telegram

Agora é hora de usar o token fornecido por @BotPather mais cedo. Copie e cole no arquivo *index.js* do aplicativo NodeJS no Replit, como mostrado na figura:

! [Toque de Telegrama de Pasta] (https://user-images.githubusercontent.com/45603238/175038765-04233d8b-a05f-452c-95f5-4dc8c6f2bda1.png)

No mesmo arquivo, precisamos definir também o endpoint webhook para o Telegram, que é o endpoint relacionado ao seu webhook para o qual o Telegram irá enviar mensagens.

Clique no botão "Executar" para iniciar o servidor, em seguida, copie o URL no círculo vermelho em *index.js*, dentro da função **setWebhookEndpoint()**, adicionando "/telegram" no final do URL, como na figura:

![Endpoint Url] (https://user-images.githubusercontent.com/45603238/174815348-e1dfb890-aec4-4640-acb8-100a9f545935.png)

# # Assine um Webhook no ChatCase

Nós quase fizemos, a última coisa a fazer é adicionar uma assinatura para ChatCase. Vamos!

Mova-se para o projeto do seu ChatCase *Configurações* > *Configurações do projeto* > *Desenvolvedor* e clique no botão "MANAGEM WEBHOOK".

[Manage Webhook Button] (https://user-images.githubusercontent.com/45603238/174817082-e01011ae-8977-42e8-a10d-53dd21b1e5c5.png)

Em seguida, clique em "ADD SUBSCRIPTION" botão.

![Adicionar subscrição](https://user-images.githubusercontent.com/45603238/174286884-5a229142-cef0-4be8-8e5f-418b3568586e.png)

Na opção **New Subscription** popup selecione a opção **Message Create (apenas para o canal Telegram)** do dropdown e digite o Webhook Target que é o mesmo URL que antes, adicionando "/chatcase" no final do URL, como na figura:

![Criar configuração da subscrição](https://user-images.githubusercontent.com/45603238/174843423-062a80c0-dcb5-4235-bf28-aeec74cdc675.png)

Agora clique em "CREAR SUBSCRIÇÃO" botão.

O que você verá a seguir será o segredo associado ao seu webhook. Mantenha o segredo para interagir com webhook através das APIs do webhook (veja [aqui](https://developer.chatcase.com/apis/webhooks/subscriptions)). Nós não precisamos dele para o nosso objetivo, mas salvá-lo em um lugar seguro porque ele só será exibido uma vez.

! [Segredo Webhook] (https://user-images.githubusercontent.com/45603238/174982652-773fa46c-a3f2-4cf6-b571-bb0d484468fb.png)

**Bem, o Webhook agora está configurado!**

# # Teste a integração

Finalmente podemos testar a integração do Telegram. Mova-se para o aplicativo Telegram e pesquise o bot criado mais tarde (procure pelo nome ou nome de usuário ou apenas clique no link presente em @BotPai). Em seguida, clique em "Iniciar".

! [Iniciar conversa no Telegram] (https://user-images.githubusercontent.com/45603238/174973179-d006755f-7bb6-46e9-bec1-50f6bfcede43.png)

Uma mensagem padrão "/start" será enviada para o webchat do ChatCase e um agente pode agora responder.

! [Conversa do ChatCase] (https://user-images.githubusercontent.com/45603238/175004664-93cc2b04-2d48-4c43-ac54-d54d929528d6.png)

A mensagem enviada do ChatCase será enviada no chat do Telegram Bot, como qualquer outra conversa.

! [Conversa do Telegrama] (https://user-images.githubusercontent.com/45603238/175005794-baa995b3-c150-45a6-ba20-adbcd50a3ba8.png)

Feito! A integração está concluída.

[Aqui] (https://replit.com/@andrealeo83/chatcase-whatsapp-twilio-app) você pode encontrar um código de exemplo para integrar com **Twilio (WhatsApp)** baseado nos mesmos princípios tratados neste tutorial

E [aqui] (https://replit.com/@andrealeo83/chatcase-facebook-app#index.js), outro código de exemplo, desta vez para ** integração do Facebook Messenger**.

Se tiver algum problema, não se esforce para nos escrever no nosso [fórum comunitário](https://chatcase.discourse.group/)!

Vejo você no nosso próximo tutorial!

Tem sugestões sobre este artigo? Por favor, envie-nos o seu feedback escrevendo um email para **[redacted@example.invalid](mailto:redacted@example.invalid)**
