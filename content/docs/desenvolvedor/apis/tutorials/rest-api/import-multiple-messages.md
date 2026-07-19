---
title: "Importar várias mensagens para o ChatCase usando APIs REST do aplicativo de terceiros"
description: "Este tutorial irá ajudá-lo a entender como inserir várias mensagens no ChatCase usando a API REST do aplicativo de terceiros. Suponha que você tenha um aplicativo (ex. um framework"
---

# # Alvos

Este tutorial irá ajudá-lo a entender como inserir várias mensagens no ChatCase usando a API REST do aplicativo de terceiros. Suponha que você tenha um aplicativo (ex. um framework de chatbot ou um sistema de suporte ao cliente) e você queira conectá-lo com o ChatCase. Por exemplo, suponha que você tem um software chatbot que atende automaticamente os usuários (via um widget ou outros canais) mas em algum momento você deseja encaminhar o chat para o ChatCase para que os agentes (e não mais o chatbot) sirvam o pedido.

Passos

1. Inscrição de um usuário no ChatCase
2. Autenticação anônima do usuário final através de APIs
3. Criando a conversa (pedido)
4. Enviando mensagens para uma conversa

# # Inscrição em ChatCase

Usar APIs do ChatCase é obrigatório para se inscrever um novo usuário em nosso ambiente beta disponível em<https://panel.chatcase.com/v3/dashboard>![](/developer-files/UYhILGFOYRD8zJUlGEI)

Após a inscrição, siga o assistente proposto para criar seu primeiro projeto ChatCase.

Obtenha o **PROJECT\ ID** do projeto criado no menu *Configurações do Projeto*. Usaremos isto mais tarde.

![](/developer-files/NDjJCxzqg5qKFypNPoRN)

# # Autenticação anônima do usuário final através de APIs

Neste tutorial autenticaremos *end-users* através de [Autenticação anônima REST API](/docs/desenvolvedor/apis/rest-api/authentication#anonymous-autentication-for-a-usuário). Faremos uma autenticação anônima para obter o id do usuário (requisito) que criará a conversa (próximo parágrafo).

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
# # Criando a conversa (pedido)

Agora vamos usar [Criar uma conversa API REST](https://developer.chatcase.com/apis/rest-api/requests#create-a-request) definindo principalmente quatro parâmetros:

* SEU\ ADMIN\ EMAIL e PASSWORD: use suas credenciais de administrador aqui
* SENDER: o ID do usuário anônimo criado com o passo anterior.
* FIRST\ MESSAGE: este texto é usado para resumir o assunto da conversa. Normalmente esta é a primeira mensagem enviada pelo solicitante do usuário.
* projeto\ ID: seu ID do projeto

```bash
curl -v -X POST -H 'Content-Type:application/json' \
-u YOUR_ADMIN_EMAIL:PASSWORD -d '{"sender":"SENDER", "first_text":"FIRST_MESSAGE"}' \ https://api.chatcase.com/v3/PROJECT_ID/requests/
```

```bash
curl -v -X POST -H 'Content-Type:application/json' \
-u redacted@example.invalid:xyz -d '{"sender":"fc43a0e1-ba85-404e-9a44-bf0050330898", "first_text":"How can i restore my password"}' \ https://api.chatcase.com/v3/5e2c35c8f0dbc10017bb3aac/requests/
`$([Environment]::NewLine)
você terá uma resposta como esta:

```
{
   "_id":"6346cbed38c343d545cf8092",
   "request_id":"support-group-5e2c35c8f0dbc10017bb3aac-8e40526e6dfb4450a572cd4ede01f464",
   ....
}
`$([Environment]::NewLine)
Agora uma conversa vazia (sem mensagem) é criada. Preste atenção ao campo *request\ id* para o próximo parágrafo.

# # Enviando mensagens para uma conversa

Vamos [Inserir várias mensagens REST API](https://developer.chatcase.com/apis/rest-api/messages#insert-multiple-messages) importar as mensagens. Precisamos dos seguintes parâmetros:

* * *request\ id*: o identificador de pedido *unique* gerado pela chamada de endpoint anterior
* as credenciais dos administradores
* Um array de mensagens onde:
* texto: é o texto da mensagem
* remetente é o identificador de usuário do usuário que envia a mensagem
* atributes.clienttimestamp: use esta propriedade para forçar a hora da mensagem em milissegundos.

```bash
curl -v -X POST -H 'Content-Type:application/json' \
 -u YOUR_ADMIN_EMAIL:PASSWORD \
-d '[{"sender":"bb0d809b-b093-419b-8b48-11a192cc3619","text":"How can i restore my password", "attributes":{"clienttimestamp":1665584701710}},{"sender":"chatbot1", "text":"You can find it here https://chatcase.com", "attributes":{"clienttimestamp":1665584701711}}]'  \
 https://api.chatcase.com/v3/5e2c35c8f0dbc10017bb3aac/requests/support-group-5e2c35c8f0dbc10017bb3aac-8e40526e6dfb4450a572cd4ede01f464/messages/multi
`$([Environment]::NewLine)
Olhando para o painel do seu projeto, você verá sua conversa no painel Solicitações. As solicitações são atualizadas em tempo real, então você não precisa atualizar manualmente a página de Solicitações. Se você deixar inalteradas todas as configurações padrão, a solicitação será atribuída a você (se certifique de que você está "disponível", olhando no canto inferior direito da sua imagem de perfil no painel esquerdo do menu).

O agente (você) agora pode ver a mesma conversa no chat do agente (primeira opção do painel de menu irá abrir o chat do desktop).

Você tem comentários sobre este artigo? Por favor, envie-nos o seu feedback escrevendo um email para[redacted@example.invalid](mailto:redacted@example.invalid)
