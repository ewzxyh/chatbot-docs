---
title: "# O modelo de solicitação"
description: "Pedidos"
---

Pedidos

As solicitações são os meios através dos quais seus usuários finais (clientes) se comunicam com agentes em ChatCase. Os pedidos podem ser originados de vários canais, incluindo e-mail, chat, Facebook, Whatsapp ou API. Todos os pedidos têm um conjunto de propriedades. Normalmente, quando uma requisição é criada via canal de e-mail, também é chamado de ticket na plataforma ChatCase. Em vez disso, quando uma requisição é criada por um canal de chat, também é chamada de conversação.

# # O modelo de solicitação

Descrição
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□ id □ String O identificador único para o pedido que é dado por .
Um identificador único para o pedido que é dado ao ChatCase. Siga este padrão 'support-group-UUID'. É um ID externo, então você deve gerar este ID de forma única e passá-lo para o ChatCase. Por exemplo, você pode gerar este id assim: 'support-group-af4b54df-3237-4db5-9351' (usando [uuid](https://www.npmjs.com/package/uuid) ou outro gerador UUID) ou usando timestamp como este 'support-group-TIMESTAMP'
Primeiro\ text & período; String & período; Primeiro texto do pedido.
O departamento do departamento do [Department model](/docs/desenvolvedor/apis/rest-api/management-api/departments#the-department-model) foi selecionado para o pedido.
Liderar o objeto (o [modelo líder])(/apis/rest-api/leads#the-lead-model) envolvido nesta solicitação.
O objeto , objeto , contém informações sobre o usuário originou o pedido. Este é um [modelo de equipe](/docs/desenvolvedor/apis/rest-api/team#the-team-model).□
Os participantes Array A lista do identificador dos companheiros de equipe ou bots que participaram no pedido.
ParticipandoAgentes . A lista dos companheiros de equipe que participaram do pedido.
Grupos participantes Array A lista dos bots que participaram do pedido.
□ hasBot (Booleano) Indica se um bot está participando da conversa.□
Estado do pedido: TEMPORÁRIO : 50, DESSERVADO : 100, ABANDONADO : 150, SERVIDO : 200, FECHADO : 1000
FontePage Corda A página de origem da solicitação.
Linguagem de texto O idioma de pedido.
O usuário é um agente.□
Marcas de etiquetas de etiquetas de etiquetas de etiquetas de objetos associados à solicitação.
Notas de notas de uma lista de objectos de notas associados à solicitação.
A classificação do pedido. De 0 a 5.
A mensagem de classificação.□
O tempo de espera é calculado como a duração entre a primeira mensagem do visitante no chat e a primeira mensagem do agente. □
Tradução e Legendagem:
Atribuições do objeto Os atributos personalizados que são definidos para o pedido. □
O canal da conversa.
* criadoAtO tempo (ISO-8601 data string) quando o pedido foi criado. □
O tempo (ISO-8601 data string) quando a primeira resposta é dada por bot ou um agente
(ISO-8601 data string) quando o pedido foi atualizado. □
O tempo (ISO-8601 data string) quando o pedido foi atribuído a um agente ou bot. □
Primeiro\ resposta\ ate hora (ISO-8601 data string) quando o agente ou o bot responder pela primeira vez.
O tempo (ISO-8601 data string) quando o pedido foi fechado. □
O identificador único do usuário que fechou o pedido.
* Criada por * String * O identificador único do criador da linha .
Preflight Se verdadeiro o pedido hafoi criado proativamente pelo sistema e o usuário ainda não enviou uma mensagem
Prioridade . String . Defina a prioridade da solicitação. Valores disponíveis: normal (padrão), baixo, alto, urgente.
Localização do objeto Defina a localização do pedido obtido por uma pesquisa geo com base no endereço ip do cliente. □
& ticket\ id; String É o número que identifica exclusivamente o pedido dentro do projeto.
Descrição O objeto instantâneo contendo contexto information (como departamento, lead, requester, agents, availableAgentsCount) quando a requisição foi criada. □
projeto O identificador único do projeto

Você pode usar a API para obter as informações da solicitação.

# # Receba todos os pedidos

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/requests`Permite a uma conta listar todos os pedidos para o projeto.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
OrdenarField<p>em que campo classificar os resultados.</p><p><em>o campo padrão é criadoAt</em></p>□
Direcção<p>direcção de ordenação: 1 (asc) ou - 1 (desc). Retornar os resultados em ordem ascendente (1) ou descendente (-1).</p><p><em>por omissão para desc (- 1)</em></p>□
O número da página de resultados a buscar. padrão para a primeira página.
O limite é o número<p>especificar o número máximo de resultados a devolver.</p><p><em>padrão é 40 linhas</em></p>□
Como fazer uma pesquisa de texto completo
Estado de status de string de texto de filtro por status de solicitação. Valores: 100 para pedidos não servidos, 150 para pedidos abandonados, 1000 para pedidos fechados, "todos" para recuperar todos os status. O valor padrão é o estado< 1000 so it returns all the opened requests. You can also search for multiple statuses separating the statuses with a comma (i.e. 100,200) |
| start\_date          | string  | filter by date interval. Use the format DD/MM/YYYY to define the start of the interval (i.e. 01/09/2024)                                                                                                                                                                                                               |
| end\_date            | string  | filter by date interval. Use the format DD/MM/YYYY to define the end of the interval (i.e. 30/09/2024)                                                                                                                                                                                                                 |
| start\_date\_time    | string  | filter by date/time interval. Use the format DD/MM/YYYY HH:mm:ss to define the start of the interval. Please encode the query parameter like the example (07/10/2025 12:10:09 ->codificado 07%2F10%2F2025%2012%3A10%3A09)
□ fim\  data\  hora Utilizar o formato DD/MM/AAAA HH:mm:ss para definir o fim do intervalo. Por favor, codifique o parâmetro consulta como o exemplo (07/10/2025 23:10:09 -> codificado 07%2F10%2F2025%2023%3A10%3A09)
* ticket\ id * string * filtro por ID de ticket *
*Dept\ id *S string *Filtro por department id *
Liderar a cadeia de fios filtrar pelo id de chumbo
Tem filtro de booleano pelo campo hasBot. Se hasBot for verdadeiro, o serviço retorna todos os pedidos servidos pelo chatbot, Se hasBot for falso, o serviço retorna todos os pedidos servidos por um agente humano.□
etiquetas de etiquetas de cadeia de caracteres
O canal , string , filtro pelo nome do canal. O nome do canal pode ser: "chat21" para mensagens de bate-papo, "email" para e-mail de ticket inboud, "form" para ticket criado usando o Painel de IU, "whatsapp" para Whatsapp canal, "telegram" para Telegram Channel, "mensageiro" para Facebook Messenger Channel
* Snap\ lead\ email * string * filtro pelo e-mail de campo do lead *
* snap\ lead\ lead\ id * string * filtro pelo lead\ id do lead *

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
   "perPage":40,
   "count":179,
   "requests":[
      {
            "_id":"5c81593adf767b0017d1aa67",
            "updatedAt":"2019-03-07T17:48:05.934Z",
            "createdAt":"2019-03-07T17:47:38.405Z",
            "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
            "requester_id":"5c81593adf767b0017d1aa66",
            "first_text":"first text message",
            "department":"5c34ba232c62730016da250e",
            "sourcePage":"https://www.chatcase.com",
            "language":"it",
            "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
            "id_project":"5b55e806c93dde00143163dd",
            "createdBy":"5c81593adf767b0017d1aa66",
            "__v":2,
            "waiting_time":21709,
            "agents":[
               {
                  "__v":0,
                  "createdBy":"5aaa99024c3b110014b478f0",
                  "user_available":true,
                  "role":"admin",
                  "id_user":"5ab0f3fa57066e0014bfd71e",
                  "id_project":"5b55e806c93dde00143163dd",
                  "createdAt":"2018-10-03T14:40:19.521Z",
                  "updatedAt":"2019-03-07T17:47:38.405Z",
                  "_id":"5bb4d4d39214830015742b00"
               }
            ],
            "tags":[
            ],
            "notes":[
               {
                  "_id":"5e6ba903261616001752b9f4",
                  "text":"note 1",
                  "createdBy":"5aaa99024c3b110014b478f0",
                  "updatedAt":"2020-03-13T15:38:43.880Z",
                  "createdAt":"2020-03-13T15:38:43.880Z"
               }
            ],
            "participants":[
               "5aaa99024c3b110014b478f0"
            ],
            "status":200,
            "lead":{..}
         }
      ...
   ]
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests
`$([Environment]::NewLine)
# # Receba um pedido por solicitação\ id

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id`Fetches um pedido por seu pedido\ id

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador externo do pedido. □
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "notes":[
      {
         "_id":"5e6ba903261616001752b9f4",
         "text":"note 1",
         "createdBy":"5aaa99024c3b110014b478f0",
         "updatedAt":"2020-03-13T15:38:43.880Z",
         "createdAt":"2020-03-13T15:38:43.880Z"
      }
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":200,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/support-group-L_OG76RYhR0XFiMf2PK
`$([Environment]::NewLine)
## Fechar um pedido por solicitação\ id

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/close`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":1000,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Reabrir um pedido por solicitação\ id

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/reopen`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Roteie um pedido para um departamento

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/departments`Leva um pedido a um departamento.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------- ------ --------- ---------------------------------------------- -------------------------------------------------------------------------------------------------------------------------------------
* Departmentid * string * o identificador do departamento *
Opcional. O padrão é falso. Se o nobot é verdadeiro, o bot é excluído da atribuição

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Atualizar um pedido por solicitação\ id

<mark style="color:purple;">`PATCH`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------------- -------------------------------------
Primeiro\ text & string; o primeiro texto do pedido
O identificador de lead
status do status do status do pedido
etiquetas de pedido
A notação de pedido
* rating\ message * string * a mensagem de classificação de pedidos *
idioma , corda , a língua de pedido ,
código fontePage string

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Adicione um participante a um pedido

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/participants`Adicione um participante (agente ou bot) a um pedido.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------- ---------------------------------------------------
Membro do grupo do participante (agente ou bot) identificador do participante

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Definir os participantes da solicitação

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/participants`Defina os participantes da solicitação (agente ou bot).

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
---- ---- ----- ------------------------------------------------------------------
Array (agente ou bot) identificadores de array

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Excluir um participante do pedido

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/participants/:participantid`Excluir um participante (agente ou bot) do pedido.

Parâmetros do Caminho

Nome , Tipo , Descrição
---------------- ------------------------------------------------------------------------------------------------------------------------------------------------
O identificador do participante (agente ou bot)
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Atualizar os atributos de solicitação

<mark style="color:purple;">`PATCH`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/attributes`Atualizar os atributos personalizados da solicitação.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
---- ---- ------- --------------------------
O objeto do objeto do pedido

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Adicione uma nota a um pedido

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/notes`Adicione um participante (agente ou bot) a um pedido.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
---- ---- -----------------------
texto , string , o conteúdo da nota

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   ...
   "tags":[
   ],
   "notes":[
      {
         "_id":"5e6ba903261616001752b9f4",
         "text":"note 1",
         "createdBy":"5aaa99024c3b110014b478f0",
         "updatedAt":"2020-03-13T15:38:43.880Z",
         "createdAt":"2020-03-13T15:38:43.880Z"
      }
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Apagar uma nota

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/notes/:noteid`Adicione um participante (agente ou bot) a um pedido.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
O identificador de notas

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
  ..
   "notes":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}# # Obter um histórico de pedidos por solicitação\ id

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/history`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador externo do pedido. □
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
..
```

{% endtab %}
{% endtabs %}# # Excluir um pedido por solicitação\ id

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id`Somente o proprietário do projeto pode excluir um pedido.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
{
  ...
}
```

{% endtab %}
{% endtabs %}# # Rate a request by request\ id

<mark style="color:purple;">`PATCH`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/rating`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel Minumun: convidado
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
----------------- -------------------------------
A taxa de solicitação de 0 a 5
taxa\ message

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "rate":5,
   "rating_message":"great work"
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X PATCH -H 'Content-Type:application/json' -u redacted@example.invalid:123456 -d '{"rating":5, "rating_message":"Very good"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/support-group-5b55e806c93dde00143163dd/rating
`$([Environment]::NewLine)
# # Adicione um seguidor a um pedido

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/followers`Adicione um seguidor (agente) a uma solicitação.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------- ----------- ---------------------------------
Membro do grupo (agente)

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "followers":["62dfbbbf6b07df3ecbb130f4"],
   ....
}
```

{% endtab %}
{% endtabs %}# # Definir os seguidores da solicitação

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/followers`Defina os seguidores da solicitação (agente).

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
---- ---- --------------------------------------------
O array do (agente) seguidor do array

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "followers":["62dfbbbf6b07df3ecbb130f4"],
   ....
}
```

{% endtab %}
{% endtabs %}# # Excluir um seguidor do pedido

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/followers/:followerid`Apagar um seguidor (agente) da solicitação.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
□ seguidor □ string □ identificador do companheiro de equipe (agente)
* request\ id * string * request\ id campo. É o identificador de pedido externo .
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "followers":[],
   ....
}
```

{% endtab %}
{% endtabs %}# # Criar um pedido

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/`Este método deve ser utilizado para a importação em massa de mensagens. Após este endpoint, use [Inserir múltiplas mensagens REST API](https://developer.chatcase.com/apis/rest-api/messages#insert-multiple-messages). Para casos comuns, use [Enviar mensagem REST API](https://developer.chatcase.com/apis/rest-api/messages#send-a-message)

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel Minumun: convidado
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------- ----------------------------
Primeiro\ text & string; o primeiro texto do pedido
* request\ id * string * o identificador de request *. Se não for especificado, é gerado um ID automático
idioma , corda , a língua de pedido ,
código fontePage string

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5c81593adf767b0017d1aa67",
   "updatedAt":"2019-03-07T17:48:05.934Z",
   "createdAt":"2019-03-07T17:47:38.405Z",
   "request_id":"support-group-L_OG76RYhR0XFiMf2PK",
   "requester_id":"5c81593adf767b0017d1aa66",
   "first_text":"first text message",
   "department":"5c34ba232c62730016da250e",
   "sourcePage":"https://www.chatcase.com",
   "language":"it",
   "userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.119 Safari/537.36",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5c81593adf767b0017d1aa66",
   "__v":2,
   "waiting_time":21709,
   "agents":[
      {
         "__v":0,
         "createdBy":"5aaa99024c3b110014b478f0",
         "user_available":true,
         "role":"admin",
         "id_user":"5ab0f3fa57066e0014bfd71e",
         "id_project":"5b55e806c93dde00143163dd",
         "createdAt":"2018-10-03T14:40:19.521Z",
         "updatedAt":"2019-03-07T17:47:38.405Z",
         "_id":"5bb4d4d39214830015742b00"
      }
   ],
   "tags":[
   ],
   "participants":[
      "5aaa99024c3b110014b478f0"
   ],
   "status":100,
   "lead":{..}
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X POST -H 'Content-Type:application/json' -u redacted@example.invalid:123456 -d '{"sender":"bb0d809b-b093-419b-8b48-11a192cc3619", "first_text":"1"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/
`$([Environment]::NewLine)
# # Obter todos os parâmetros chatbot de uma solicitação

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/chatbot/parameters`Permite obter todos os parâmetros definidos pelo chatbot durante a conversa.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
* request\ id * string * request\ id campo. É o identificador de pedido externo .

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel Minumun: convidado
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
{
    "user_email": "redacted@example.invalid",
    "user_name": "Giovanni"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/requests/support-group-63ad512e70d5ed0012ad6286-82c16d3b10dc4abba2326a5d7611b022/chatbot/parameters
```
