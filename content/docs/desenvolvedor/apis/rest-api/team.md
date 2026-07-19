---
title: "# O Modelo de Equipe"
description: "Equipe"
---

Equipe

Um companheiro de equipe é um usuário especial que representa um usuário do ChatCase convidado para um projeto com um papel específico. Quando você trabalha com colegas de equipe muitas vezes você não vai usar o usuário\ id do usuário do ChatCase, mas sim o ID específico do seu companheiro de equipe no projeto. Na API ChatCase o temamate é chamado de projeto\ user. Por exemplo, se você quiser conhecer seu projeto\ user em um projeto específico, tudo que você tem que fazer é chamar esta API: [Get a teammate by id](#get-a-teammate-by-id).

# # O Modelo de Equipe

Descrição
------------------------------ ------------------------------------------------------------------------------------------------------------------------------------
O identificador único para o companheiro de equipe que é dado pelo ChatCase.
O papel do companheiro de equipe. Valores: proprietário, agente, administrador, usuário, convidado
Se o companheiro de equipe estiver disponível ou não estiver disponível para aceitar pedidos
□ id\ usuário □ Objeto O objeto de usuário referenciado pelo companheiro de equipe
Número Número de bate-papos que o agente pode ter ao mesmo tempo (Apenas Enterprise)
Número de pedido ativo para o companheiro de equipe (Apenas Empresa)
Estado do companheiro de equipe. Pode ser "ativo" ou "desactivado" .
□ isBusy □ Boolean □ Determine se o companheiro de equipe está ocupado (Apenas Enterprise)
Perfil Status É um nome falso associado à disponibilidade do companheiro de equipe. Por exemplo: inativo, para o banheiro, no telefone
Atribuições do objeto Os atributos personalizados que são definidos para o companheiro de equipe.
Marcas de etiquetas de etiquetas de etiquetas
As configurações de configuração do companheiro de equipe.
A presença do companheiro de equipe.
É Autenticado ou retorna true se for fortemente autenticado (custom-auth ou email/senha), falso caso contrário (anônimo). □
É busy ou Boolean devolve true se é companheiro de equipe está ocupado, falso caso contrário. Veja a atribuição inteligente do ChatCase para mais informações.
O tempo (ISO-8601 data string) quando o companheiro de equipe foi criado. □
O tempo (ISO-8601 data string) quando o companheiro de equipe foi atualizado. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto
É verdade que o companheiro de equipe foi removido do projeto

# # O modelo de presença

Presença permite rastrear o status online e offline dos companheiros de equipe em tempo real (se você usar ChatCase [Websocket](/docs/desenvolvedor/apis/realtime-api) ou [Webhook](/docs/desenvolvedor/apis/webhooks)) e armazenar o estado de informação. Valores possíveis: online, offline. Atenção: um agente passa de online para offline apenas quando ele fechou todos os aplicativos de mensagens do ChatCase (por exemplo, chat web do Agente em todas as abas e aplicativos móveis).

# # # Disponibilidade de agentes

O campo **user\ disponível** determina se o companheiro de equipe está disponível ou não está disponível para aceitar solicitações. Atenção: A disponibilidade do agente muda apenas quando o agente muda explicitamente da UI disponível para indisponível. Se um agente estiver disponível e sair, o agente permanece disponível, pois ele pode ter decidido servir chats de outro canal (por exemplo, aplicativo móvel ChatCase).

# # Apanha a equipe

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/project_users`Devolva os membros da equipe e disponibilidade. Usar o parâmetro opcional da consulta`trashed=true`incluir companheiros de equipe destruídos na resposta.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
-------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Opcional. Definir como`true`incluir companheiros de equipe destruídos na resposta. Quando`false`ou omitidos, os companheiros de equipe destruídos estão excluídos (por omissão).

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 List of teammates. Without trashed (default): only active." %}

```
[
   {
      "_id":"5df2240cecd41b00173a06bc",
      "id_project":"5df2240cecd41b00173a06bb",
      "id_user":{
         "_id":"5aaa99024c3b110014b478f0",
         "email":"redacted@example.invalid",
         "firstname":"Andrea",
         "lastname":"Leo",
         "emailverified":true,
         "__v":0,
         "resetpswrequestid":""
      },
      "role":"owner",
      "user_available":true,
      "trashed":false,
      "createdBy":"5aaa99024c3b110014b478f0",
      "createdAt":"2019-12-12T11:27:08.581Z",
      "updatedAt":"2019-12-12T11:27:08.581Z",
      "__v":0
   },
   {
      "_id":"5df34ab80bc923001792e274",
      "id_project":"5df2240cecd41b00173a06bb",
      "id_user":{
         "_id":"5de9200d6722370017731969",
         "email":"redacted@example.invalid",
         "firstname":"Nuovopre",
         "lastname":"Pre",
         "emailverified":false,
         "createdAt":"2019-12-05T15:19:41.296Z",
         "updatedAt":"2019-12-05T15:19:41.296Z",
         "__v":0
      },
      "role":"admin",
      "user_available":true,
      "trashed":false,
      "createdBy":"5aaa99024c3b110014b478f0",
      "createdAt":"2019-12-13T08:24:24.586Z",
      "updatedAt":"2020-01-04T09:45:26.331Z",
      "__v":0
   }
]
```

{% endtab %}
{% endtabs %}Exemplo (por omissão, excluir lixo):

```
curl -v -X GET \
  -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users
`$([Environment]::NewLine)
Exemplo (incluindo companheiros de equipe destruídos):

```
curl -v -X GET \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users?trashed=true"
`$([Environment]::NewLine)
# # Obter um companheiro de equipe por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/project_users/:project_user_id`Parâmetros do Caminho

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
O identificador do companheiro de equipe.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
   {
      "_id":"5df2240cecd41b00173a06bc",
      "id_project":"5df2240cecd41b00173a06bb",
      "id_user":{
         "_id":"5aaa99024c3b110014b478f0",
         "email":"redacted@example.invalid",
         "firstname":"Andrea",
         "lastname":"Leo",
         "emailverified":true,
         "__v":0,
         "resetpswrequestid":""
      },
      "role":"owner",
      "user_available":true,
      "createdBy":"5aaa99024c3b110014b478f0",
      "createdAt":"2019-12-12T11:27:08.581Z",
      "updatedAt":"2019-12-12T11:27:08.581Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET \
  -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/5df2240cecd41b00173a06bc
`$([Environment]::NewLine)
# # Obter um companheiro de equipe pelo ID do usuário

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/project_users/users/:user_id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
O identificador do usuário.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
   {
      "_id":"5df2240cecd41b00173a06bc",
      "id_project":"5df2240cecd41b00173a06bb",
      "id_user":{
         "_id":"5aaa99024c3b110014b478f0",
         "email":"redacted@example.invalid",
         "firstname":"Andrea",
         "lastname":"Leo",
         "emailverified":true,
         "__v":0,
         "resetpswrequestid":""
      },
      "role":"owner",
      "user_available":true,
      "createdBy":"5aaa99024c3b110014b478f0",
      "createdAt":"2019-12-12T11:27:08.581Z",
      "updatedAt":"2019-12-12T11:27:08.581Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET \
  -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/users/5aaa99024c3b110014b478f0
`$([Environment]::NewLine)
# # Convide um agente

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/project_users/invite`Convide um agente para um projeto.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------------ ---------------------------------------------------------------------------------
* e-mail * string * o endereço de e-mail do agente *
O papel do agente. Valores aceitos: agente, administrador
* Primeiro nome * Primeiro nome *
□ sobrenome : string : o último nome do agente
O estado inicial do agente. Disponível (verdadeiro) ou não disponível (falso).

{% tabs %}
{% tab title="200 Teammate invited successfully" %}

```
{
  "_id": "5df34ab80bc923001792e274",
  "id_project": "5df2240cecd41b00173a06bb",
  "id_user": {
    "_id": "5de9200d6722370017731969",
    "email": "redacted@example.invalid",
    "firstname": "Nuovopre",
    "lastname": "Pre",
    "emailverified": false,
    "createdAt": "2019-12-05T15:19:41.296Z",
    "updatedAt": "2019-12-05T15:19:41.296Z",
    "__v": 0
  },
  "role": "admin",
  "user_available": true,
  "createdBy": "5aaa99024c3b110014b478f0",
  "createdAt": "2019-12-13T08:24:24.586Z",
  "updatedAt": "2019-12-13T08:24:24.586Z",
  "__v": 0
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST \
  -H 'Content-Type: application/json' \
  -u redacted@example.invalid:password \
  -d '{"email":"redacted@example.invalid","role":"agent","firstname":"Mario","lastname":"Rossi","user_available":true}' \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/invite
`$([Environment]::NewLine)
# # Atualizar o atual companheiro de equipe registrado

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/project_users/`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
-------------------------------------------------------------------------------------------------
O papel do companheiro de equipe. Valores permitidos: administrador, agente.
• usuário\ disponível<p>A disponibilidade dos colegas de equipe. Verdadeiro para disponível, falso para indisponível.</p><p><em>O padrão é verdadeiro</em></p>□
O número de chats simultâneos que o companheiro de equipe pode ter ao mesmo tempo.
Atribuições Os atributos personalizados do companheiro de equipe .
Configuração do objeto O objeto de configurações do companheiro de equipe □

{% tabs %}
{% tab title="200 Updated teammate" %}

```
{
  "_id": "5df2240cecd41b00173a06bc",
  "id_project": "5df2240cecd41b00173a06bb",
  "id_user": {
    "_id": "5aaa99024c3b110014b478f0",
    "email": "redacted@example.invalid",
    "firstname": "Andrea",
    "lastname": "Leo",
    "emailverified": true,
    "__v": 0,
    "resetpswrequestid": ""
  },
  "role": "admin",
  "user_available": false,
  "createdBy": "5aaa99024c3b110014b478f0",
  "createdAt": "2019-12-12T11:27:08.581Z",
  "updatedAt": "2020-01-04T09:50:00.000Z",
  "__v": 0
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT \
  -H 'Content-Type: application/json' \
  -u redacted@example.invalid:password \
  -d '{"user_available":false,"role":"admin"}' \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/
`$([Environment]::NewLine)
# # Atualizar um companheiro de equipe por ID

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/project_users/:project_user_id`Requer papel de administrador

Parâmetros do Caminho

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador do companheiro de equipe.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
-------------------------------------------------------------------------------------------------
O papel do companheiro de equipe. Valores permitidos: administrador, agente.
• usuário\ disponível<p>A disponibilidade dos colegas de equipe. Verdadeiro para disponível, falso para indisponível.</p><p><em>O padrão é verdadeiro</em></p>□
O número de chats simultâneos que o companheiro de equipe pode ter ao mesmo tempo.
Atribuições Os atributos personalizados do companheiro de equipe .
Configuração do objeto O objeto de configurações do companheiro de equipe □

{% tabs %}
{% tab title="200 Updated teammate" %}

```
{
  "_id": "5df34ab80bc923001792e274",
  "id_project": "5df2240cecd41b00173a06bb",
  "id_user": {
    "_id": "5de9200d6722370017731969",
    "email": "redacted@example.invalid",
    "firstname": "Nuovopre",
    "lastname": "Pre",
    "emailverified": false,
    "createdAt": "2019-12-05T15:19:41.296Z",
    "updatedAt": "2019-12-05T15:19:41.296Z",
    "__v": 0
  },
  "role": "agent",
  "user_available": true,
  "createdBy": "5aaa99024c3b110014b478f0",
  "createdAt": "2019-12-13T08:24:24.586Z",
  "updatedAt": "2020-01-04T09:55:00.000Z",
  "__v": 0
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT \
  -H 'Content-Type: application/json' \
  -u redacted@example.invalid:password \
  -d '{"role":"agent","user_available":true}' \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/5df34ab80bc923001792e274
`$([Environment]::NewLine)
# # Remova um companheiro de equipe do projeto

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/project_users/:project_user_id`Remover um agente de um projeto. O tipo de remoção é controlado por parâmetros de consulta:

* **soft** (`soft=true`): Exclusão suave (exclusão fantasma). O companheiro de equipe é marcado como destruído e pode ser restaurado mais tarde. Os dados estão preservados.
* **hard** (`hard=true`): Exclusão difícil. O companheiro de equipe é removido permanentemente do banco de dados. ** Aviso:** As estatísticas referentes a este companheiro de equipe serão perdidas.
* ** desativar** (não`soft` or `hard`): O companheiro de equipe está desativado, mas permanece visível no painel e pode ser ativado novamente. Conjuntos`status: "disabled"`e`user_available: false`.

Parâmetros do Caminho

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador do companheiro de equipe.

Parâmetros de Consulta

Nome , Tipo , Descrição
---- ---- ------ -----------------------------------------------------------------------------------------------------------------------------------------------------------
, corda suave , definir para`true`para apagar o soft (fantasma apagar). O companheiro de equipe está marcado como destruído e pode ser restaurado. □
& Difícil; string; Definir para`true`para exclusão difícil. Remove permanentemente o companheiro de equipe do banco de dados; as estatísticas referentes a este companheiro de equipe serão perdidas. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 Returns the updated or removed project\_user. For soft delete: trashed is true; for disable: status is "disabled" and user\_available is false; for hard delete: the deleted project\_user object." %}

```
{
  "_id": "5df34ab80bc923001792e274",
  "id_project": "5df2240cecd41b00173a06bb",
  "id_user": {
    "_id": "5de9200d6722370017731969",
    "firstname": "Nuovopre",
    "lastname": "Pre"
  },
  "role": "admin",
  "user_available": false,
  "status": "disabled",
  "trashed": false,
  "createdBy": "5aaa99024c3b110014b478f0",
  "createdAt": "2019-12-13T08:24:24.586Z",
  "updatedAt": "2020-01-04T10:00:00.000Z",
  "__v": 0
}
```

{% endtab %}

{% tab title="404 Project user not found" %}

```
{
  "success": false,
  "error": "Project user not found with id 5df34ab80bc923001792e274"
}
```

{% endtab %}

{% tab title="500 Server error" %}

```
{
  "success": false,
  "msg": "Error deleting Project User with id ..."
}
```

{% endtab %}
{% endtabs %}Exemplo (supressão suave - pode ser restaurado):

```
curl -v -X DELETE \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/5df34ab80bc923001792e274?soft=true"
`$([Environment]::NewLine)
Exemplo (difícil delete - permanente, estatísticas perdidas):

```
curl -v -X DELETE \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/5df34ab80bc923001792e274?hard=true"
`$([Environment]::NewLine)
Exemplo (desativar - permanece visível, pode ser activado):

```
curl -v -X DELETE \
  -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/5df34ab80bc923001792e274
`$([Environment]::NewLine)
# # Restaurar um companheiro de equipe destruído

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/project_users/:project_user_id/restore`Restaurar um companheiro de equipe que foi previamente soft-eliminado (trashed). Conjuntos`trashed: false`e`status: "active"`. O companheiro de equipe deve estar em estado desfeito; se não, a API retorna 400.

Parâmetros do Caminho

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador do companheiro de equipe (ID do projeto\  usuário) a restaurar. .

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel mínimo: admin .

{% tabs %}
{% tab title="200 Teammate restored successfully" %}

```
{
  "_id": "5df34ab80bc923001792e274",
  "id_project": "5df2240cecd41b00173a06bb",
  "id_user": {
    "_id": "5de9200d6722370017731969",
    "email": "redacted@example.invalid",
    "firstname": "Nuovopre",
    "lastname": "Pre",
    "emailverified": false,
    "createdAt": "2019-12-05T15:19:41.296Z",
    "updatedAt": "2019-12-05T15:19:41.296Z",
    "__v": 0
  },
  "role": "admin",
  "user_available": true,
  "status": "active",
  "trashed": false,
  "createdBy": "5aaa99024c3b110014b478f0",
  "createdAt": "2019-12-13T08:24:24.586Z",
  "updatedAt": "2020-01-04T10:05:00.000Z",
  "__v": 0
}
```

{% endtab %}

{% tab title="400 Teammate is not trashed and cannot be restored" %}

```
{
  "success": false,
  "error": "Project user is not trashed, cannot restore"
}
```

{% endtab %}

{% tab title="404 Teammate not found" %}

```
{
  "success": false,
  "error": "Project user not found with id ..."
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT \
  -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/5df2240cecd41b00173a06bb/project_users/5df34ab80bc923001792e274/restore
```
