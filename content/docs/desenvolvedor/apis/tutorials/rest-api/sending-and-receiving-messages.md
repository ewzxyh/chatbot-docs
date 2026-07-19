---
title: "Enviar e receber mensagens com APIs do ChatCase"
description: "Este tutorial irá ajudá-lo a entender como enviar e receber \"mensagens de suporte\" entre os Usuários Final do ChatCase e Agentes usando APIs REST do ChatCase e Webhooks."
---

# # Alvos

Este tutorial irá ajudá-lo a entender como enviar e receber "mensagens de suporte" entre os *Usuários Final* do ChatCase e *Agentes* usando APIs REST do ChatCase e Webhooks.

Passos

1. Inscrição de um usuário no ChatCase
2. Autenticação anônima do usuário final através de APIs
3. Enviando mensagens para uma conversa
4. Recebendo novas notificações de mensagens usando Webhooks

# # Inscrição em ChatCase

Usar APIs do ChatCase é obrigatório para se inscrever um novo usuário em nosso ambiente beta disponível em<https://panel.chatcase.com/v3/dashboard>O ponto final das APIs anteriores irá mudar assim que a versão beta for lançada como **ChatCase v2**. Este tutorial será atualizado em conformidade.

![](/developer-files/UYhILGFOYRD8zJUlGEI)

Após a inscrição, siga o assistente proposto para criar seu primeiro projeto ChatCase.

Obtenha o **PROJECT\ ID** do projeto criado no menu *Configurações do Projeto*. Usaremos isto mais tarde.

![](/developer-files/NDjJCxzqg5qKFypNPoRN)

# # Autenticação anônima do usuário final através de APIs

Neste tutorial, autenticaremos *end-users* através de autenticação anônima (você pode encontrar mais informações sobre autenticação anônima [aqui](/docs/desenvolvedor/apis/rest-api/authentication#anonymous-autentication-for-a-usuário)).

Todas as APIs neste tutorial usarão o seguinte endpoint:

```bash
https://api.chatcase.com/v3/
`$([Environment]::NewLine)
O ponto final das APIs anteriores irá mudar assim que a versão beta for lançada como **ChatCase v2**. Este tutorial será atualizado em conformidade.

```bash
curl -v -X POST -H 'Content-Type:application/json' \
-d '{"id_project":"5e2c35c8f0dbc10017bb3aac", "firstname":"John"}' \
https://api.chatcase.com/v3/auth/signinAnonymously
`$([Environment]::NewLine)
Isso responderá com o token JWT que usaremos para enviar nossa primeira mensagem:

```bash
{
   "success":true,
   "token":"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.XYZ....",
   "user":{
      "_id":"fc43a0e1-ba85-404e-9a44-bf0050330898",
      "firstname":"John",
      "id":"fc43a0e1-ba85-404e-9a44-bf0050330898",
      "fullName":"John"
   }
}
`$([Environment]::NewLine)
# # Enviando mensagens para uma conversa

Você pode enviar uma mensagem usando a API [Enviar mensagem](/docs/desenvolvedor/apis/rest-api/messages#send-a-message).

Para enviar uma mensagem você precisa escolher um identificador * único* ** solicitar.** Um *request* é um objeto que contém todos os metadados que descrevem a conversa entre o usuário final e *support team*).

O identificador do pedido deve seguir o seguinte padrão:

**support-group-\<UUID>**

Por favor, considere que a primeira mensagem que você envia para uma conversa também cria pedido e conversa correspondente se eles não existem.

```bash
curl -v -X POST -H 'Content-Type:application/json' \
 -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.XYZ...." \
 -d '{"text":"hello from anonym user"}' \
 https://api.chatcase.com/v3/<PROJECT_ID>/requests/support-group-<UUID>/messages
`$([Environment]::NewLine)
Exemplo com instâncias de variáveis realistas:

```bash
curl -v -X POST -H 'Content-Type:application/json' \
 -H "Authorization: JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.XYZ...." \
 -d '{"text":"hello my name is John and I need help"}' \
 https://api.chatcase.com/v3/5e2c35c8f0dbc10017bb3aac/requests/support-group-27df7cbf-3946-4ca4-9b17-dc16114108f8/messages
`$([Environment]::NewLine)
Olhando para o painel do seu projeto, você verá sua primeira conversa no painel Solicitações. As solicitações são atualizadas em tempo real, então você não precisa atualizar manualmente a página de Solicitações. Se você deixar inalteradas todas as configurações padrão, a solicitação será atribuída a você (se certifique de que você está "disponível", olhando no canto inferior direito da sua imagem de perfil no painel esquerdo do menu).

O agente (você) agora pode ver a mesma conversa no chat do agente (primeira opção do painel de menu irá abrir o chat do desktop).

# # Recebendo novas notificações de mensagens usando Webhooks

Você pode assinar os eventos de mensagens enviados para uma conversa usando [Webhook](/docs/desenvolvedor/apis/tutorials/rest-api/sending-and-receiving-messages)s.

Você deve primeiro [criar uma assinatura](/docs/desenvolvedor/apis/webhooks/subscriptions#create-a-new-subscription) para um [event](/docs/desenvolvedor/apis/tutorials/rest-api/sending-and-receiving-messages) que aponta para um url em seu servidor.

Neste caso, vamos subscrever o *message creation* evento em um url personalizado (/teste) em requestcatcher.com, um serviço gratuito, bonito para depurar seus webhooks:

```
curl -v -X POST -H 'Content-Type:application/json' \
-u redacted@example.invalid:123456 \
-d '{"event":"message.create", "target":"https://chatcase.requestcatcher.com/test"}' \
https://api.chatcase.com/v3/5e2c35c8f0dbc10017bb3aac/subscriptions
`$([Environment]::NewLine)
O endpoint da assinatura retorna:

```
{
   "secret":"0fd2a8a1-a3e6-443b-9fe5-49b83612cd72",
   "_id":"5e2c6a24f5b11c00175f1705",
   "target":"https://chatcase.requestcatcher.com/test",
   "event":"message.create",
   "id_project":"5e2c35c8f0dbc10017bb3aac",
   "createdBy":"5e2c357af0dbc10017bb3aa7",
   "createdAt":"2020-01-25T16:17:40.088Z",
   "updatedAt":"2020-01-25T16:17:40.088Z",
   "__v":0
}
`$([Environment]::NewLine)
Agora você é notificado para cada mensagem enviada para o seu projeto ChatCase. Agora, por exemplo, se o agente enviar uma mensagem ao usuário final, seu endpoint webhook será notificado com a carga útil da mensagem.

Esta é a notificação webhook com a mensagem carga útil. Você pode usar esta notificação para criar uma cópia de todas as mensagens enviadas/recebidas em seu projeto, gerar novos eventos personalizados, comunicar em tempo real em outros canais etc.

```
{
   "timestamp":1579969429552,
   "payload":{
      "type":"text",
      "status":200,
      "_id":"5e2c6b958c9612001716bede",
      "sender":"5e2c357af0dbc10017bb3aa7",
      "senderFullname":"demo demo",
      "recipient":"support-group-27df7cbf-3946-4ca4-9b17-dc16114108f10",
      "text":"Hi I'm Rosy. How can help you?",
      "id_project":"5e2c35c8f0dbc10017bb3aac",
      "createdBy":"5e2c357af0dbc10017bb3aa7",
      "metadata":"",
      "attributes":{
         "client":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
         "sourcePage":"https://api.chatcase.com/v3/chat/index.html",
         "userEmail":"redacted@example.invalid",
         "userFullname":"aaa22 aaa22"
      },
      "createdAt":"2020-01-25T16:23:49.394Z",
      "updatedAt":"2020-01-25T16:23:49.394Z",
      "__v":0,
      "request":{
         ....
      }
   },
   "hook":{
      "_id":"5e2c6a24f5b11c00175f1705",
      "target":"https://chatcase.requestcatcher.com/test",
      "event":"message.create",
      "id_project":"5e2c35c8f0dbc10017bb3aac",
      "createdBy":"5e2c357af0dbc10017bb3aa7",
      "createdAt":"2020-01-25T16:17:40.088Z",
      "updatedAt":"2020-01-25T16:17:40.088Z",
      "__v":0
   }
}
`$([Environment]::NewLine)
Você tem comentários sobre este artigo? Por favor, envie-nos o seu feedback escrevendo um email para[redacted@example.invalid](mailto:redacted@example.invalid)
