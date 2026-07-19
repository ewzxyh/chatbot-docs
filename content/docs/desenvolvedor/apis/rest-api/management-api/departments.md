---
title: "# O modelo do Departamento"
description: "Departamentos"
---

Departamentos

# # O modelo do Departamento

Descrição
------------- ------ -------- ---------------------------
O identificador único para o departamento que é dado por ChatCase.
O nome do departamento.
□ id\ bot □ Array O identificador de bot associado ao departamento
O tipo de roteamento do departamento. Valores permitidos: 'assigned', 'pooled'
□ id\ group O identificador do grupo associado ao departamento
Default (default ) Booleano (Booleano ) Determina se é o departamento padrão
O status do pedido: VISÍVEL : 1, INVISÍVEL : 0
Atribuições do objeto Os atributos personalizados que são definidos para o departamento. □
A hora em que o departamento foi criado. □
* ActualizadoEm * String * A hora em que o departamento foi atualizado.
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto
Grupos A matriz de grupos associados ao departamento

# # Obter todos os departamentos ativos

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/departments`Permite a uma conta listar todos os departamentos ativos do projeto.

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
      "_id":"5b55e806c93dde00143163df",
      "updatedAt":"2019-08-02T08:08:22.292Z",
      "createdAt":"2018-07-23T14:36:54.410Z",
      "name":"Default Department",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5aaa99024c3b110014b478f0",
      "online_msg":"Describe shortly your problem, you will be contacted by an agent..",
      "offline_msg":"",
      "__v":0,
      "id_bot":"5be9b2ecc72a050015e14951",
      "status":1,
      "default":true,
      "routing":"assigned"
   }
]
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET https://api.chatcase.com/v3/5b55e806c93dde00143163dd/departments
`$([Environment]::NewLine)
# # Obter todos os departamentos (ativos ou escondidos)

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/departments/allstatus`Permite a uma conta listar todos os departamentos do projeto.

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
      "_id":"5b55e806c93dde00143163df",
      "updatedAt":"2019-08-02T08:08:22.292Z",
      "createdAt":"2018-07-23T14:36:54.410Z",
      "name":"Default Department",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5aaa99024c3b110014b478f0",
      "online_msg":"Describe shortly your problem, you will be contacted by an agent..",
      "offline_msg":"",
      "__v":0,
      "id_bot":"5be9b2ecc72a050015e14951",
      "status":1,
      "default":true,
      "routing":"assigned"
   }
]
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/departments/allstatus
`$([Environment]::NewLine)
# # Obter um departamento por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/departments`Permite que uma conta obtenha um departamento do projeto.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
□ id O identificador do departamento .

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
   {
      "_id":"5b55e806c93dde00143163df",
      "updatedAt":"2019-08-02T08:08:22.292Z",
      "createdAt":"2018-07-23T14:36:54.410Z",
      "name":"Default Department",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5aaa99024c3b110014b478f0",
      "online_msg":"Describe shortly your problem, you will be contacted by an agent..",
      "offline_msg":"",
      "__v":0,
      "id_bot":"5be9b2ecc72a050015e14951",
      "status":1,
      "default":true,
      "routing":"assigned"
   }
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/departments/5b55e806c93dde00143163df
`$([Environment]::NewLine)
# # Criar um novo departamento

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/departments`Permite adicionar mais departamentos.

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
-------------------------------------------------------------------------------------
Name O nome do departamento
Opcional. O tipo de roteamento do departamento. Valores permitidos: 'assigned', 'pooled' (default)
Opcional. O grupo de usuários atribuído ao departamento. Se não for fornecido o pedido será encaminhado através de todos os usuários disponíveis. □
Opcional. O bot atribuído ao departamento, se houver.

{% tabs %}
{% tab title="200 " %}

```
 {
      "_id":"5b55e806c93dde00143163df",
      "updatedAt":"2019-08-02T08:08:22.292Z",
      "createdAt":"2018-07-23T14:36:54.410Z",
      "name":"Default Department",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5aaa99024c3b110014b478f0",
      "online_msg":"Describe shortly your problem, you will be contacted by an agent..",
      "offline_msg":"",
      "__v":0,
      "id_bot":"5be9b2ecc72a050015e14951",
      "status":1,
      "default":true,
      "routing":"assigned"
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"name":"new department1", "routing":"pooled"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/departments
`$([Environment]::NewLine)
# # Atualizar um departamento

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/departments/:id`Permite atualizar um departamento.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador do departamento .

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------ ------- ------ ----- ----- ------ ------ ----------------------------------------------------------------------------------------------------------------
Name O nome do departamento
Opcional. O tipo de roteamento do departamento. Valores permitidos: 'assigned', 'pooled' (default)
Opcional. O grupo de usuários atribuído ao departamento. Se não for fornecido o pedido será encaminhado através de todos os usuários disponíveis. □
Grupos Opcionais. Os grupos atribuídos ao departamento com o id\ group e porcentagem para distribuição dinâmica de carga. Se não for fornecido o pedido será encaminhado através de todos os usuários disponíveis. □
Opcional. O bot atribuído ao departamento, se houver.

{% tabs %}
{% tab title="200 " %}

```
 {
      "_id":"5b55e806c93dde00143163df",
      "updatedAt":"2019-08-02T08:08:22.292Z",
      "createdAt":"2018-07-23T14:36:54.410Z",
      "name":"Default Department",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5aaa99024c3b110014b478f0",
      "online_msg":"Describe shortly your problem, you will be contacted by an agent..",
      "offline_msg":"",
      "__v":0,
      "id_bot":"5be9b2ecc72a050015e14951",
      "status":1,
      "default":true,
      "routing":"pooled",
      "groups": [
         {
            "id_group": "6877b2eb1568590013b57fde",
            "percentage": 70
         },
         {
            "id_group": "68c9156171b6b900145f117b",
            "percentage": 30
         }
      ]
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"name":"new department1", "routing":"pooled", "groups": [{ "id_group": "6877b2eb1568590013b57fde", "percentage": 70 }, { "id_group": "68c9156171b6b900145f117b", "percentage": 30 }]}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/departments/5b55e806c93dde00143163df
`$([Environment]::NewLine)
# # Excluir um departamento

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/departments/:id`Permite apagar um departamento.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador do departamento .

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
 {
      "_id":"5b55e806c93dde00143163df",
      "updatedAt":"2019-08-02T08:08:22.292Z",
      "createdAt":"2018-07-23T14:36:54.410Z",
      "name":"Default Department",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"5aaa99024c3b110014b478f0",
      "online_msg":"Describe shortly your problem, you will be contacted by an agent..",
      "offline_msg":"",
      "__v":0,
      "id_bot":"5be9b2ecc72a050015e14951",
      "status":1,
      "default":true,
      "routing":"assigned"
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X DELETE -H 'Content-Type: application/json' -u redacted@example.invalid:123456  https://api.chatcase.com/v3/5b55e806c93dde00143163dd/departments/5b55e806c93dde00143163df
```
