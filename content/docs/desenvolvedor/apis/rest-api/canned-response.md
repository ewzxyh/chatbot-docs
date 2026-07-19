---
title: "# Obter todas as respostas enlatadas"
description: "Respostas enlatadas"
---

Respostas enlatadas

Você pode usar a API para obter ou definir informações de resposta enlatadas.

O modelo de repouso em lata

Descrição
-------------- -----------------------------------------------------------------------------------------
O identificador único para o respose enlatado que é dado por ChatCase.
O título em lata.
texto O conteúdo em lata respose
Atribuições do objeto Os atributos personalizados que são definidos para o respose enlatado.
O tempo (ISO-8601 data string) quando o respose enlatado foi criado. □
O tempo (ISO-8601 data string) quando o respose enlatado foi atualizado. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Obter todas as respostas enlatadas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/canned`Permite a uma conta listar todas as respostas enlatadas.

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
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
[
   {
      "status":100,
      "_id":"5e67c1c89d86fa001755ed90",
      "title":"howcanhelpyou",
      "text":"Hi $recipient_name my name is $agent_name how can I help you?",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T16:35:20.458Z",
      "updatedAt":"2020-03-10T16:35:20.458Z",
      "__v":0
   },
   ...
]
```

{% endtab %}
{% endtabs %}# # Obter um descanso enlatado por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/canned/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador enlatado
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
      "status":100,
      "_id":"5e67c1c89d86fa001755ed90",
      "title":"howcanhelpyou",
      "text":"Hi $recipient_name my name is $agent_name how can I help you?",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T16:35:20.458Z",
      "updatedAt":"2020-03-10T16:35:20.458Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}# # Criar uma nova resposta enlatada

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/canned`Parâmetros do Caminho

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
----------- ----------- -----------------
O título da resposta enlatada
texto , string , o conteúdo de resposta enlatada ,
Atribuições Os atributos personalizados da resposta enlatada

{% tabs %}
{% tab title="200 " %}

```
{
      "status":100,
      "_id":"5e67c1c89d86fa001755ed90",
      "title":"howcanhelpyou",
      "text":"Hi $recipient_name my name is $agent_name how can I help you?",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T16:35:20.458Z",
      "updatedAt":"2020-03-10T16:35:20.458Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}# # Atualizar uma resposta enlatada por ID

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/canned/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de resposta em lata. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
----------- ----------- -----------------
O título da resposta enlatada
texto , string , o conteúdo de resposta enlatada ,
Atribuições Os atributos personalizados da resposta enlatada

{% tabs %}
{% tab title="200 " %}

```
{
      "status":100,
      "_id":"5e67c1c89d86fa001755ed90",
      "title":"howcanhelpyou",
      "text":"Hi $recipient_name my name is $agent_name how can I help you?",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T16:35:20.458Z",
      "updatedAt":"2020-03-10T16:35:20.458Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}# # Excluir uma resposta enlatada por id

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/canned/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de resposta em lata. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
      "status":100,
      "_id":"5e67c1c89d86fa001755ed90",
      "title":"howcanhelpyou",
      "text":"Hi $recipient_name my name is $agent_name how can I help you?",
      "id_project":"5e5d40b2bd0a9b00179ff3cd",
      "createdBy":"5e09d16d4d36110017506d7f",
      "createdAt":"2020-03-10T16:35:20.458Z",
      "updatedAt":"2020-03-10T16:35:20.458Z",
      "__v":0
   }
```

{% endtab %}
{% endtabs %}
