---
title: "# Tópicos"
description: "API em tempo real"
---

API em tempo real

A API em tempo real fornece acesso programático à atividade contínua em seu servidor ChatCase.

A API em tempo real é implementada usando a tecnologia WebSocket.

Você pode usar a API para fazer o seguinte:

* Exibir dados de pedidos
* Exibir dados dos agentes
* Criar e exibir um painel em tempo real
* Previsão ou estimativa de capacidade e outras métricas derivadas

A API em tempo real permite que você receba eventos do ChatCase depois de assinar um ou mais tópicos.

Esta API é uma API SSL somente. Você deve ser um usuário verificado para fazer solicitações de API. Você pode autorizar contra a API usando o token JWT.

# # Tópicos

Tópico Descrição
----------------------------------------------------------------------------------------------------------------------------------------------------
* /PROJECT\ ID/pedidos * Receba as últimas solicitações abertas de um projeto *
/projeto\ ID/pedidos/PEDIDO\ ID Obter os detalhes dos pedidos
/projeto\ ID/requests/REQUEST\ ID/mensagens
/projeto\ ID/project\ usuários/projeto\ USER\ ID Obter as informações dos agentes

# # Limitação da Taxa

Só permitimos um certo número de novas ligações por minuto. O número de novas conexões para a API em tempo real é restrito por limites de taxa de API REST. Também permitimos um certo número de conexões em execução simultânea com a API em tempo real.

Reservamo-nos o direito de ajustar o limite de taxa para determinados objetivos, a fim de fornecer uma alta qualidade de serviço para todos os clientes. Se o limite de taxa for ultrapassado, o ChatCase responderá com um corpo que detalha a razão para o limite de taxa chutar.

Também limitamos a quantidade total de dados trocados através de APIs em tempo real. Por exemplo, o número de pedidos em tempo real trocados não pode exceder um certo número de itens. Se este número for exaed você sempre pode usar APIs REST para obter dados adicionais ou para fazer consultas mais complexas.

# # Usando a API

* Estabelecer uma conexão autenticada WebSocket para`wss://eu.rtmv3.chatcase.com/api/`.
* Subscrever um ou vários tópicos.
* Processar eventos recebidos.
* Cancelar a inscrição de tópicos.

# # Permitido

Proprietário
* Administrador
Agente

# # Estabelecer conexão

Ligue-se ao wss\://eu.rtmv3.chatcase.com/api/ Endpoint WebSocket usando seu token JWT.

```
  var ws = new WebSocket("wss://eu.rtmv3.chatcase.com/api/?token=[REDACTED_TOKEN]");

  ws.onopen = function () {
      console.log('websocket is connected.');
  }

  ws.onclose = function () {
      console.log('websocket is closed.');
  }

  ws.onerror = function () {
      console.log('websocket error ...')
  }
`$([Environment]::NewLine)
# # Assine um tópico

Uma vez estabelecida a conexão, você pode enviar mensagens para se inscrever em tópicos individuais. Consulte Tópicos para a chave do tópico.

```
{
   "action":"subscribe",
   "payload":{
      "topic":"/<YOUR_PROJECT_ID_HERE>/requests"
   }
}
`$([Environment]::NewLine)
Para se inscrever em um tópico você pode executar :

```
ws.send(JSON.stringify(subscriptionMessage));
`$([Environment]::NewLine)
Exemplo:

```
var subscriptionMessage =
{
   "action":"subscribe",
   "payload":{
      "topic":"/5df26badde7e1c001743b63c/requests"
   }
}

ws.send(JSON.stringify(subscriptionMessage));
`$([Environment]::NewLine)
# # Eventos de entrada do processo

Depois de ter assinado um ou vários tópicos, ouça as mensagens subsequentes para começar a coletar dados.

```
 ws.onmessage = function(message) {
    console.log(message);
    try {
         var data = JSON.parse(message.data);
    } catch (e) {
       return console.log('This doesn\'t look like a valid JSON: ', message.data);
    }

   //.... ADD YOUR LOGIC HERE
}
`$([Environment]::NewLine)
As seguintes são as mensagens de amostra recebidas após a inscrição no tópico solicitações:

```
{
   "action":"publish",
   "payload":{
      "topic":"/5eb45fbc1f9e1f0012d62207/requests",
      "method":"CREATE",
      "message":[
         {
            "_id":"5eb4fc911f9e1f0012d62248",
            "status":200,
            "preflight":false,
            "participants":[
               "5eb45fb21f9e1f0012d62201"
            ],
            "request_id":"support-group-1a952f2f-c09a-46be-bc75-11387a95d55f",
            "requester":"5eb45fbc1f9e1f0012d62208",
            "lead":{
               ...
            },
            "first_text":"hello world",
            "department":"5eb45fbc1f9e1f0012d62209",
            ...
            "assigned_at":"2020-05-08T06:30:41.090Z",
            "id_project":"5eb45fbc1f9e1f0012d62207",
            "createdBy":"5eb45fb21f9e1f0012d62201",
            "tags":[

            ],
            "notes":[

            ],
            "channel":{
               "name":"chat21"
            },
            "createdAt":"2020-05-08T06:30:41.094Z",
            "updatedAt":"2020-05-08T06:31:00.367Z",
            "__v":0,
            "first_response_at":"2020-05-08T06:30:58.109Z",
            "waiting_time":17015,
            "id":"5eb4fc911f9e1f0012d62248",
            ....
         },
         ..
      ]
   }
}
`$([Environment]::NewLine)
# # Cancelar a inscrição

Uma vez que você parar de processar alguns dados, você pode cancelar individualmente a inscrição de um tópico. Os eventos deixarão de ser empurrados na conexão.

```
{
   "action":"unsubscribe",
   "payload":{
      "topic":"/<YOUR_PROJECT_ID_HERE>/requests"
   }
}
`$([Environment]::NewLine)
# # Exemplo

Você pode encontrar um exemplo simples da API em tempo real [aqui](https://www.w3schools.com/code/tryit.asp?filename=GJH61IZ9OU0E)
