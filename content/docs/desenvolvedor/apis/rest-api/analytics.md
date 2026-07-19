---
title: "# Obter o tempo médio de espera de resposta"
description: "Análise"
---

Análise

Você pode usar a API para obter os dados de análise.

# # Obter o tempo médio de espera de resposta

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/waiting`Isto é calculado nos últimos 30 dias.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter o tempo médio de espera resposta do último dia

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/waiting/day/last`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a contagem de conversas dos últimos 30 dias

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/count`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a contagem de conversas agregada pelo campo de status dos últimos 30 dias

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/aggregate/status`Com este endpoint, você pode obter quantas conversas atribuídas, não atribuídas e arquivadas você tem.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a contagem de conversas agregada por dias

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/aggregate/day`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a contagem de conversas agregada por meses

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/aggregate/month`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a contagem de conversas agregada por semanas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/aggregate/week`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a contagem de conversas agregada por horas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/aggregate/hours`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a duração mediana das conversas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/duration`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter o comprimento mediano das conversas calculadas nos últimos 30 dias

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/duration`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter a classificação média dos clientes das conversas (satisfação do cliente)

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/satisfaction`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter o número de conversas tratadas por um bot

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/requests/hasBot/count`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Receba o número total das mensagens enviadas e recebidas durante os últimos 30 dias

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/messages/count`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}# # Obter o número total de mensagens enviadas e recebidas agregadas por dias durante os últimos 30 dias

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/analytics/messages/aggregate/day`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
....
```

{% endtab %}
{% endtabs %}
