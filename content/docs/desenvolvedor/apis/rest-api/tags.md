---
title: "# Obter todas as etiquetas"
description: "Etiquetas"
---

Etiquetas

Você pode usar a API para obter ou definir tags.

O modelo de etiqueta

Descrição
-------------- --------------------------------------------------------------------------------------------------------------------------------------
O identificador único para a tag que é dada pelo ChatCase.
O nome da etiqueta.
Cor da corda A cor hexadecimal da tag
Atribuições do objeto Os atributos personalizados que são definidos para a etiqueta. □
O tempo (ISO-8601 data string) quando a tag foi criada. □
(ISO-8601 data string) quando a tag foi atualizada. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Obter todas as etiquetas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/tags`Permite a uma conta listar todas as marcas.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
OrdenarField<p>em que campo classificar os resultados.</p><p><em>O campo padrão é criadoAt</em></p>□
Direcção<p>ordenar direcção: 1 ou - 1. Retornar os resultados em ordem ascendente (1) ou descendente (-1).</p><p><em>por omissão para desc</em></p>□
O número da página de resultados a buscar. padrão para a primeira página.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
[
   {
      "_id":"5e67b8bafb930c0017aa4e42",
      "tag":"tag1",
      "color":"#66C549",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T15:56:42.374Z",
      "updatedAt":"2020-03-10T15:56:42.374Z",
      "__v":0
   },
   {
      "_id":"5e67b737fb930c0017aa4e40",
      "tag":"important",
      "color":"#43B1F2",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T15:50:15.759Z",
      "updatedAt":"2020-03-10T15:50:15.759Z",
      "__v":0
   },
```

{% endtab %}
{% endtabs %}# # Obter uma etiqueta por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/tags/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador de etiquetas
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
  {
      "_id":"5e67b737fb930c0017aa4e40",
      "tag":"important",
      "color":"#43B1F2",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T15:50:15.759Z",
      "updatedAt":"2020-03-10T15:50:15.759Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}# # Criar uma nova etiqueta

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/tags`Parâmetros do Caminho

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
------------ -----------------------------------
tag , string , o nome da tag
Cor da corda da etiqueta
Atribuições Os atributos personalizados da etiqueta

{% tabs %}
{% tab title="200 " %}

```
  {
      "_id":"5e67b737fb930c0017aa4e40",
      "tag":"important",
      "color":"#43B1F2",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T15:50:15.759Z",
      "updatedAt":"2020-03-10T15:50:15.759Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}# # Atualizar uma etiqueta por ID

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/tags/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de etiquetas. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------ -----------------------------------
tag , string , o nome da tag
Cor da corda da etiqueta
Atribuições Os atributos personalizados da etiqueta

{% tabs %}
{% tab title="200 " %}

```
  {
      "_id":"5e67b737fb930c0017aa4e40",
      "tag":"important",
      "color":"#43B1F2",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T15:50:15.759Z",
      "updatedAt":"2020-03-10T15:50:15.759Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}# # Apagar uma etiqueta por ID

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/tags/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de etiquetas. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
...
```

{% endtab %}
{% endtabs %}
