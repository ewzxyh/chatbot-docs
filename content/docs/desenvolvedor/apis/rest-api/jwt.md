---
title: "Jwt"
description: "Nome , Tipo , Descrição ---------- -------- ------- ------ ------------------------------------------------------------------------------------------------------------ OrdenarField"
---

# # Listar os tokens jwt de um usuário

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/jwt/history`Parâmetros de Consulta

Nome , Tipo , Descrição
---------- -------- ------- ------ ------------------------------------------------------------------------------------------------------------
OrdenarField .. string .
Direcção<p>ordenar direcção: 1 ou - 1. Retornar os resultados em ordem ascendente ou descendente.</p><p><em>por omissão para desc</em></p>□
O número da página de resultados a buscar. padrão para a primeira página.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
..
```

{% endtab %}
{% endtabs %}# # Revogar um token jwt por JTI (identificador JWT)

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/jwt/history/:jti`Parâmetros do Caminho

Nome , Tipo , Descrição
---- ---- -------- ----------------------------------------------------
O identificador JTI Json Web Token.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
..
```

{% endtab %}
{% endtabs %}# # Revogar um símbolo jwt por ID

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/jwt/history/id/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
---- ---- ------- -------------------------
O identificador JWT

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
..
```

{% endtab %}
{% endtabs %}
