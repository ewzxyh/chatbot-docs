---
title: "NodeJS SDK"
description: "Completa Referência da API do NodeJS (https://chatcase.github.io/chatcase-nodejs-libs/ChatCaseClient.html) está hospedado no Github"
---

Completa [Referência da API do NodeJS] (https://chatcase.github.io/chatcase-nodejs-libs/ChatCaseClient.html) está hospedado no Github

# # Introdução

Com este guia você aprenderá a usar o JavaScript SDK em seu`Node.js`aplicação. O Javascript SDK do ChatCase é construído sobre as APIs [ChatCase REST] (https://developer.chatcase.com/apis/rest-api/introduction).

Antes de adicionar o ChatCase SDK ao seu aplicativo Node.js, você precisa de uma conta [ChatCase](https://gethelp.chatcase.com/articles/creating-a-chatcase-account/) e um [projeto ChatCase] (https://docs.chatcase.com/knowledge-base/creating-a-chatcase-account/). Depois de criar seu projeto, você terá um *projectID*, um *usuário* para jogar com as APIs do projeto, um *project secret* para autenticação personalizada e todas as coisas necessárias para trabalhar com o ChatCase e suas APIs.

# # Adicionar telha desk para o seu projeto

Instalar`ChatCaseClient`biblioteca com comando * npm*:

```
npm install @chatcase/chatcase-client
`$([Environment]::NewLine)
Alternativamente use package.json para importar a biblioteca na propriedade "dependências", como no exemplo a seguir:

```json
{
  "name": "Hello ChatCase nodeJS",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@chatcase/chatcase-client": "^0.8.28"
  }
}
`$([Environment]::NewLine)
Então, corre.

```
npm install
```Uma vez instalado, você pode importar`ChatCaseClient()`classe em seu arquivo Node.js usando o comando "require":

```
const { ChatCaseClient } = require('@chatcase/chatcase-client');
`$([Environment]::NewLine)
Toda a interação com as APIs ChatCase usa a classe * ChatCaseClient*.

# # Criar uma instância ChatCaseClient

Antes que você possa usar a maioria das APIs que você precisa para criar uma instância do ChatCaseClient. Para criar a instância do cliente, você precisa de um ChatCase *API Key*, o *project id* e um * token de autenticação*

```
const tdclient = new ChatCaseClient(
{
    APIKEY: APIKEY,
    projectId: PROJECT_ID,
    token: USER_TOKEN
})
`$([Environment]::NewLine)
Existem opções adicionais para inicializar o objeto cliente do ChatCase. A lista completa das opções de inicialização do ChatCaseClient segue:

* {string} options.APIKEY Obrigatório. APIKEY da plataforma
* {string} options.projectId Mandatory. projeto do 'ChatCase'. Será usado em cada chamada nas APIs do projeto.
* {string} options.token Mandatory. Token de autenticação do ChatCase. Será usado em cada chamada nas APIs do projeto.
* Opções {string}.**APIURL** Opcional. Endpoint da API do servidor ChatCase.
* {boolean} options.log Opcional. Se os pedidos HTTP verdadeiros forem registrados.

A opção mais importante é **APIURL** que oferece a oportunidade de usar *TileleskClient* com sua própria instalação do servidor ChatCase.

Você pode obter o token usando algum método de autenticação. O token também é fornecido automaticamente enquanto você interage com o chatbot usando através de APIs.

# # Autenticação

Antes que você possa interagir com as APIs do ChatCase você precisa autenticar. O ChatCase fornece três métodos de autenticação * estático*:

1. *ChatCaseClient.authEmailPassword()* - Autenticação com e-mail e senha
2. *ChatCaseClient.anonymousAutentication()* - Autenticação como usuário anônimo
3. * ChatCaseClient.customAutentication()* - Autenticação personalizada

Autenticação com e-mail e senha

Este é o método de autenticação que você precisa ao trabalhar com as APIs do ChatCase. Todos os métodos de API, exceto os de autenticação, funcionam em um *projeto* + *role* + *token* base. Para autenticar e obter um * token* com e-mail e senha use o`authEmailPassword()`método da classe ChatCaseClient. Você deve fornecer o APIKEY para autenticar. Na verdade APIKEYs são experimentais e podem ser omitidos. Basta usar a string 'APIKEY' no lugar da verdadeira.

```javascript
ChatCaseClient.authEmailPassword(
  'APIKEY',
  /* EMAIL */,
  /* PASSWORD */,
  null,
  function(err, result) {
      if (!err && result) {
          console.log('You got your auth token!', result.token);
          console.log('Your user ID!', result.user._id);
      }
  else {
      console.err("An error occurred", err);
  }
});
`$([Environment]::NewLine)
Em resposta, você receberá um *token* para interagir com APIs usando sua conta e o *ID do usuário* correspondente.

## # Autenticação como usuário anônimo

Este método de autenticação é útil para usuários anônimos que precisam interagir com APIs de suporte

```javascript
ChatCaseClient.anonymousAuthentication(
  PROJECT_ID,
  APIKEY,
  null,
  function(err, result) {
    assert(result.token != null);
    let token = result.token;
  }
);
`$([Environment]::NewLine)
Em resposta, você receberá um *token* para interagir com APIs em modo anônimo.

## # Autenticação personalizada

Com autenticação personalizada você pode trabalhar com seus próprios usuários tornando-os auto-sinal em ChatCase sem inscrição anterior. Isso pode ser usado no lugar da autenticação anônima para certificar usuários vindos de aplicação externa, dando-lhes uma identidade certificada em ChatCase.

Para este exemplo, importar uuid:

```
npm install uuid
```

```javascript
const { v4: uuidv4 } = require('uuid');
var externalUserId = uuidv4();
var externalUser = {
    _id: externalUserId,
    firstname:"John",
    lastname:"Wick",
    email: "redacted@example.invalid"
};
var signOptions = {
  subject:  'userexternal',
  audience:  'https://chatcase.com/projects/' + YOUR_PROJECT_ID
};
var jwtCustomToken = "JWT " + jwt.sign(externalUser, YUOR_PROJECT_SECRET, signOptions);

ChatCaseClient.customAuthentication(
  jwtCustomToken,
  APIKEY,
  null,
  function(err, result) {
      if (!err && result) {
          let token = result.token;
      }
  }
);
`$([Environment]::NewLine)
# # A classe ChatCaseClient

Para interagir com as APIs do ChatCase você precisa criar uma instância de uma classe ChatCaseClient() usando seu construtor. Você deve fornecer um *APIKEY*, um *Project ID* existente e um * token* válido, este último passou por alguns dos métodos de autenticação acima.

No próximo exemplo, primeiro autenticamos usando nossas credenciais de usuário, então criamos uma nova instância do ChatCaseClient usando uma`PROJECT_ID`e a`token`Recebemos da autenticação:

```javascript
ChatCaseClient.authEmailPassword(
  'APIKEY',
  /* EMAIL */,
  /* PASSWORD */,
  null,
  function(err, result) {
      if (!err && result) {
          console.log('You got the token!', result.token);
          const tdclient = new ChatCaseClient({
              APIKEY: /* APIKEY */,
              projectId: /* PROJECT_ID */,
              token: result.token
          });
      }
  else {
      console.err("An error occurred", err);
  }
});
`$([Environment]::NewLine)
# # Trabalhar com pedidos de suporte

Um *Support Request* é um conjunto de metadados e mensagens *decorando* uma conversa. Uma Solicitação de Suporte contém dados sobre o status (aberto/atribuído/fechado, etc.), a página fonte da conversação, o ID do usuário final, seu e-mail etc. As principais informações consistem nas mensagens enviadas e recebidas pelo pedido. Usar APIs de mensagens é de fato a maneira mais comum de interagir com a solicitação.

Yiou pode interagir com as mensagens de solicitação usando [Mensagem APIs](https://developer.chatcase.com/apis/rest-api/messages). Ou você pode interagir diretamente com os metadados do Request usando as APIs [Pedir](https://developer.chatcase.com/apis/rest-api/requests).

## # Criar uma solicitação de suporte (enviar uma mensagem)

Para criar uma solicitação de suporte você simplesmente **envia uma mensagem para um request-id não existente **. Um novo objeto Request é criado automaticamente pelo ChatCase cada vez que você envia uma mensagem para um request-id não existente.

Cabe a você criar um novo, UNIQUE request-id, seguindo as regras do ChatCase. Se você não quer saber como criar um novo request-id, para obter um novo você pode simplesmente usar a função`ChatCaseClient.newRequestId()`passando o`PROJECT_ID`como parâmetro. O envio de uma mensagem para este novo ID Request criará automaticamente um novo objeto Request, como no exemplo a seguir:

```
const text_value = 'test message';
const request_id = ChatCaseClient.newRequestId(PROJECT_ID);
tdclient.sendSupportMessage(
  request_id,
  {text: text_value},
  (err, result) => {
    assert(err === null);
    assert(result != null);
    assert(result.text === text_value);
});
`$([Environment]::NewLine)
Assim que você enviar uma nova mensagem para o ChatCase com o novo request-id, o pedido é criado e pronto.

## # Enviar mensagens para um pedido de suporte

Com a mesma função *sendSupportMessage()* que usamos acima, você pode enviar mensagens adicionais para a conversação da requisição. Neste exemplo enviamos uma segunda mensagem para o pedido usando o mesmo request-id que usamos para criar o request no exemplo anterior.

```
tdclient.sendSupportMessage(
  request_id,
  {text: 'second message'},
  (err, result) => {
    assert(err === null);
    assert(result != null);
    assert(result.text === text_value);
});
`$([Environment]::NewLine)
Com o ChatCase você também pode [receber mensagens](https://developer.chatcase.com/apis/tutorials/rest-api/sending-and-receiving-messages) para uma conversa de pedido usando Webhooks, assinando o evento *Message.create*.

Obter um pedido de suporte por ID

```
let REQUEST_ID = /* THE REQUEST ID */;
tdclient.getRequestById(REQUEST_ID, (err, result) => {
    const request = result;
    if (request.request_id != null) {
      console.log("Got request with first text:", request.first_text);
    }
});
`$([Environment]::NewLine)
## # Pedidos de apoio à consulta

```
tdclient.getAllRequests(
  {
      limit: 1,
      status: ChatCaseClient.UNASSIGNED_STATUS
  },
  (err, result) => {
    assert(result);
    const requests = result.requests;
    assert(requests);
    assert(result.requests);
    assert(Array.isArray(requests));
    assert(result.requests.length > 0);
  }
);
`$([Environment]::NewLine)
# # Trabalhando com colaboradores

O **teammate** de um Projeto é um usuário que colabora com você em um projeto específico.

Enquanto o nome no *User Interface* e nível de documento é sempre companheiro de equipe, no nível de APIs um teamate é chamado *ProjectUser*. Como o nome sugere, um ProjectUser é um usuário ChatCase convidado com um papel específico em um Projeto específico.

### Atualizar status de equipe para disponível/indisponível

Com`ChatCaseClient.updateProjectUserCurrentlyLoggedIn()`você irá atualizar o status do token de usuário no construtor do ChatCaseClient.

```javascript
const tdclient = new ChatCaseClient({
    APIKEY: /* APIKEY */,
    projectId: /* PROJECT_ID */,
    token: result.token
});
tdclient.updateProjectUserCurrentlyLoggedIn(
    {
        user_available: true
    },
    function(err, result) {
        if (!err && result) {
            assert(result);
            assert(result.user_available === true);
        }
    }
);
`$([Environment]::NewLine)
## # Verificar o estado da equipe

```javascript
const tdclient = new ChatCaseClient({
    APIKEY: /* APIKEY */,
    projectId: /* PROJECT_ID */,
    token: result.token
});
tdclient.getProjectUser(
  USER_ID,
  function(err, result) {
      if (!err && result) {
          assert(Array.isArray(result));
          assert(result[0]._id != null);
          assert(result[0].user_available === true);
          let PROJECT_USER_ID = result[0]._id;
      }
      else {
          assert.ok(false);
      }
  }
);
```A`PROJECT_USER_ID`variável é o ID do seu usuário (`USER_ID`) sobre`PROJECT_ID`você especificou no custor ChatCaseClient.

# # Alternar entre instâncias da nuvem e do Self hospedado

# # Opção auto-sediada

Estas APIs funcionam automaticamente com a instância de nuvem do ChatCase.

Se você estiver executando sua própria instância hospedada do ChatCase, as APIs fornecem uma opção específica para selecionar seu endpoint.

### # Especificar o endpoint da API em métodos de classe

Se você estiver usando um método de classe, ou seja, métodos de autenticação, use o`options.APIURL`parâmetro para especificar o endpoint, como no seguinte exemplo:

```
ChatCaseClient.authEmailPassword(
    APIKEY,
    EMAIL,
    PASSWORD,
    {
      APIURL: API_ENDPOINT
    }
});
`$([Environment]::NewLine)
### # Especificar o endpoint da API em métodos de exemplo

Se você estiver usando métodos de instância trabalhando com uma instância do ChatCaseClient, você deve especificar o parâmetro no objeto de configuração do construtor como configuração. APIRUL:

```
const tdclient = new ChatCaseClient({
    APIKEY: APIKEY,
    projectId: PROJECT_ID,
    token: YOUR_TOKEN,
    APIURL: API_ENDPOINT
})
```
