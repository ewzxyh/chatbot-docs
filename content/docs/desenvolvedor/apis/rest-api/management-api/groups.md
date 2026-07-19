---
title: "# O modelo de grupo"
description: "Grupos"
---

Grupos

# # O modelo de grupo

Descrição
--------------- -----------------------------------------------------------------------------------------------------------------------
O identificador único para o grupo que é dado pelo ChatCase.
O nome do grupo.
Os membros do grupo Os membros do grupo
Determine se o grupo é excluído
Atribuições do objeto Os atributos personalizados que são definidos para o grupo.
O tempo em que o grupo foi criado. □
* ActualizadoEm * String * A hora em que o grupo foi atualizado.
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Obter todos os grupos

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/groups`Permite a uma conta listar todos os grupos do projeto.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
[
   {
      "_id":"5c34b5149f22a7001681e887",
      "updatedAt":"2019-01-08T14:35:09.621Z",
      "createdAt":"2019-01-08T14:35:00.625Z",
      "name":"gruppo1",
      "trashed":false,
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "members":[
         "5ad5bd40c975820014ba9009"
      ]
   },
   {
      "_id":"5c34b52a9f22a7001681e888",
      "updatedAt":"2019-01-08T14:35:29.678Z",
      "createdAt":"2019-01-08T14:35:22.489Z",
      "name":"gruppo2",
      "trashed":false,
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "members":[
         "5ab0f3fa57066e0014bfd71e"
      ]
   }
]
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/groups
`$([Environment]::NewLine)
# # Obter o grupo por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/groups/:id`Fetche o grupo por sua identidade

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador do grupo
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
  {
   "_id":"5c34b52a9f22a7001681e888",
   "updatedAt":"2019-01-08T14:35:29.678Z",
   "createdAt":"2019-01-08T14:35:22.489Z",
   "name":"gruppo2",
   "trashed":false,
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab0f3fa57066e0014bfd71e",
   "__v":0,
   "members":[
      "5ab0f3fa57066e0014bfd71e"
   ]
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/groups/5c34b52a9f22a7001681e888
`$([Environment]::NewLine)
# # Criar um novo grupo

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/groups`Permite adicionar mais grupos.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------- ------- ------- -------------------------------
Name O nome do grupo
Os membros do grupo Os IDs dos membros do grupo.

{% tabs %}
{% tab title="200 " %}

```
 {
   "_id":"5c34b52a9f22a7001681e888",
   "updatedAt":"2019-01-08T14:35:29.678Z",
   "createdAt":"2019-01-08T14:35:22.489Z",
   "name":"gruppo2",
   "trashed":false,
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab0f3fa57066e0014bfd71e",
   "__v":0,
   "members":[
      "5ab0f3fa57066e0014bfd71e"
   ]
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"name":"new group1", "members":["5ab0f3fa57066e0014bfd71e"]}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/groups
`$([Environment]::NewLine)
# # Atualizar um grupo

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/groups/:id`Permite atualizar um grupo.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador do grupo

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------- ------- ------- -------------------------------
Name O nome do grupo
Os membros do grupo Os IDs dos membros do grupo.

{% tabs %}
{% tab title="200 " %}

```
 {
   "_id":"5c34b52a9f22a7001681e888",
   "updatedAt":"2019-01-08T14:35:29.678Z",
   "createdAt":"2019-01-08T14:35:22.489Z",
   "name":"gruppo2",
   "trashed":false,
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab0f3fa57066e0014bfd71e",
   "__v":0,
   "members":[
      "5ab0f3fa57066e0014bfd71e"
   ]
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"name":"new group1", "members":["5ab0f3fa57066e0014bfd71e"]}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/groups/groups/5c34b52a9f22a7001681e888
`$([Environment]::NewLine)
# # Apagar um grupo

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/groups/:id`Permite apagar um grupo.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador do grupo

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
 {
   "_id":"5c34b52a9f22a7001681e888",
   "updatedAt":"2019-01-08T14:35:29.678Z",
   "createdAt":"2019-01-08T14:35:22.489Z",
   "name":"gruppo2",
   "trashed":false,
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab0f3fa57066e0014bfd71e",
   "__v":0,
   "members":[
      "5ab0f3fa57066e0014bfd71e"
   ]
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X DELETE -H 'Content-Type: application/json' -u redacted@example.invalid:123456  https://api.chatcase.com/v3/5b55e806c93dde00143163dd/groups/5c34b52a9f22a7001681e888
```
