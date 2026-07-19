---
title: "# O Modelo Principal"
description: "Chumbo"
---

Chumbo

Você pode usar a API para obter ou definir informações de liderança.

# # O Modelo Principal

Nossa API Lead é um lugar central para reunir todas as informações e tomar medidas sobre seus contatos (líderes), como buscar, pesquisar, criar, atualizar e excluir.

Descrição
--------------- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O identificador único para o lead que é dado pelo ChatCase.
Um identificador único para o lead que é dado ao ChatCase. É um ID externo
O nome principal e sobrenome.
Atribuições do objeto Os atributos personalizados que são definidos para o lead.
O tempo (ISO-8601 data string) quando o lead foi criado. □
(ISO-8601 date string) quando o lead foi atualizado. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Obter todas as pistas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/leads`Permite a uma conta listar todos os leads.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
---------- -------- ------- ------ ------------------------------------------------------------------------------------------------------------
OrdenarField .. string .
Direcção<p>ordenar direcção: 1 ou - 1. Retornar os resultados em ordem ascendente ou descendente.</p><p><em>por omissão para desc</em></p>□
O e-mail do e-mail da string do e-mail
O número da página de resultados a buscar. padrão para a primeira página.

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
   "leads":[
      {
         "_id":"5c81593adf767b0017d1aa66",
         "updatedAt":"2019-03-07T17:47:38.393Z",
         "createdAt":"2019-03-07T17:47:38.393Z",
         "lead_id":"SRbb2PfbSFcgICv9VQBcURZeloh1",
         "fullname":"Guest",
         "attributes":{
         ...
         },
         "id_project":"5b55e806c93dde00143163dd",
         "createdBy":"system",
         "__v":0
      },
      {
         "_id":"5c81565edf767b0017d1aa35",
         "updatedAt":"2019-03-07T17:35:26.132Z",
         "createdAt":"2019-03-07T17:35:26.132Z",
         "lead_id":"WTteQpKpGZN1aElfFYCP9YPaaLN2",
         "fullname":"Guest",
         "attributes":{
          ...
         },
         "id_project":"5b55e806c93dde00143163dd",
         "createdBy":"system",
         "__v":0
      },
      ...
   ]
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/leads
`$([Environment]::NewLine)
# # Obter uma pista por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/leads/:id`Fetches uma liderança pela sua ID de chumbo

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador de lead
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
{
         "_id":"5c81593adf767b0017d1aa66",
         "updatedAt":"2019-03-07T17:47:38.393Z",
         "createdAt":"2019-03-07T17:47:38.393Z",
         "lead_id":"SRbb2PfbSFcgICv9VQBcURZeloh1",
         "fullname":"Guest",
         "attributes":{ ... },
         "id_project":"5b55e806c93dde00143163dd",
         "createdBy":"system",
         "__v":0
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/leads/5c81593adf767b0017d1aa66
`$([Environment]::NewLine)
# # Criar uma nova liderança

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/leads`Permite adicionar mais leads.

Parâmetros do Caminho

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
------------ ------------------------------------
* e-mail * string * o endereço de e-mail principal *
* lead\ id * string * o ID externo do lead *
□ nome completo O nome completo do líder
Os atributos personalizados de chumbo

{% tabs %}
{% tab title="200 " %}

```
{
         "_id":"5c81593adf767b0017d1aa66",
         "updatedAt":"2019-03-07T17:47:38.393Z",
         "createdAt":"2019-03-07T17:47:38.393Z",
         "lead_id":"SRbb2PfbSFcgICv9VQBcURZeloh1",
         "fullname":"Guest",
         "attributes":{ ... },
         "id_project":"5b55e806c93dde00143163dd",
         "createdBy":"system",
         "__v":0
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"fullname":"andrea", "lead_id":"123456"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/leads
`$([Environment]::NewLine)
# # Atualizar uma liderança por ID

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/leads/:id`Permite atualizar um lead.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de chumbo. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
----------------- ---------------------------------
* e-mail * string * o endereço de e-mail principal *
□ nome completo O nome completo do líder
Os atributos personalizados de chumbo
Telefone, corda O telefone principal
empresa, corda A empresa líder
Notas
RuaEndereço O endereço principal
Cidade A cidade principal
região A região líder
zipcode O zipcode de chumbo
País O país líder
Marcas de etiquetas As etiquetas de lead

{% tabs %}
{% tab title="200 " %}

```
{
         "_id":"5c81593adf767b0017d1aa66",
         "updatedAt":"2019-03-07T17:47:38.393Z",
         "createdAt":"2019-03-07T17:47:38.393Z",
         "lead_id":"SRbb2PfbSFcgICv9VQBcURZeloh1",
         "fullname":"Guest",
         "attributes":{ ... },
         "id_project":"5b55e806c93dde00143163dd",
         "createdBy":"system",
         "__v":0
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"fullanem":"andrea", "lead_id":"123456"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/leads/5c81593adf767b0017d1aa66
`$([Environment]::NewLine)
# # Excluir um lead by id

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/leads/:id`Permite apagar uma pista.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de chumbo. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
         "_id":"5c81593adf767b0017d1aa66",
         "updatedAt":"2019-03-07T17:47:38.393Z",
         "createdAt":"2019-03-07T17:47:38.393Z",
         "lead_id":"SRbb2PfbSFcgICv9VQBcURZeloh1",
         "fullname":"Guest",
         "attributes":{ ... },
         "id_project":"5b55e806c93dde00143163dd",
         "createdBy":"system",
         "__v":0
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X DELETE -H 'Content-Type: application/json' -u redacted@example.invalid:123456  https://api.chatcase.com/v3/5b55e806c93dde00143163dd/leads/5c81593adf767b0017d1aa66
```
