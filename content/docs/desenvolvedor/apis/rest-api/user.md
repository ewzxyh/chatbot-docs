---
title: "# Obter o usuário autenticado atual"
description: "Usuário"
---

Usuário

Você pode usar a API para obter ou definir informações do usuário.

O Modelo

Descrição
------------------ ------------------------------------------ -----------------------------------------------------------------------------
O identificador único para o usuário que é dado pelo ChatCase.
O email do usuário.
Senha do usuário.
O primeiro nome do usuário.
O último nome do usuário.
□ email verified □ Boolean □ Determine se o usuário tem um email validado. □
Estado do usuário. Valores permitidos: 100 ativos, 0 desativados
O tempo (ISO-8601 data string) quando o usuário foi criado. □
O tempo (ISO-8601 data string) quando o usuário foi atualizado. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Obter o usuário autenticado atual

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/users`Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
...
```

{% endtab %}
{% endtabs %}# # Atualizar o usuário autenticado atual

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/users/`Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------ -------------------------------------
* Primeiro nome * O primeiro nome do usuário
Último nome O último nome do usuário
Atribuições Os atributos personalizados do usuário

{% tabs %}
{% tab title="200 " %}

```
...
```

{% endtab %}
{% endtabs %}
