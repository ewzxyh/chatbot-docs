---
title: "# Autenticação com email e senha"
description: "Autenticação"
---

Autenticação

# # Autenticação com email e senha

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/auth/signin`Permite autenticar um agente usando e-mail e senha.

Cabeçalhos

Nome , Tipo , Descrição
--------------- --------------------------------------
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
---------- --------- ----------------------------
* e-mail * string * o endereço de email do usuário *
Senha do usuário

{% tabs %}
{% tab title="200 " %}

```
{
   "success":true,
   "token":"JWT  XYZ",
   "user":{
      "_id":"5ab11c6b83dc240014d46095",
      "email":"redacted@example.invalid"
   }
```

{% endtab %}
{% endtabs %}# # Autenticação anônima para um usuário

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/auth/signinAnonymously`Permite que um usuário autentice anonimamente no sistema.

Cabeçalhos

Nome , Tipo , Descrição
--------------- --------------------------------------
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------------- --------- ------ ------------------------------------------
O projeto a que pertence o usuário
O primeiro nome do usuário
□ sobrenome □ string □ a senha do usuário
* e-mail * string * o e-mail do usuário *
Atributos do usuário

{% tabs %}
{% tab title="200 " %}

```
{
   "success":true,
   "token":"JWT XYZ",
   "user":{
      "_id":"5e25944ecf6bcc00178e75fa",
      "email":"redacted@example.invalid",
      "emailverified":false,
      "createdAt":"2020-01-20T11:51:42.115Z",
      "updatedAt":"2020-01-20T11:51:42.115Z",
      "__v":0
   }
}
```

{% endtab %}
{% endtabs %}# # Autenticação personalizada para um usuário

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/auth/signinWithCustomToken`Permite autenticar com um token JWT personalizado.

Cabeçalhos

Nome , Tipo , Descrição
----------------- ------------------------------------------ -----------------------------------------
Autorização . string .Custom JWT Authorization token.

{% tabs %}
{% tab title="200 " %}

```
{
   "success":true,
   "token":"JWT eyJ0eXYZ",
   "user": {
     "_id":"123456",
     "firstname":"Andrea",
     "lastname":"Leo",
     "email":"redacted@example.invalid",
     "code":"123456",
     "sub":"userexternal",
     "aud":"https://chatcase.com/projects/5ec688ed13400f0012c2edd1",
     "iat":1598865103,
     "exp":1598865223
  }
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl 'https://api.chatcase.com/v3/auth/signinWithCustomToken' \
  -X 'POST' \
  -H 'authorization: JWT eyJ0eXAiOiJKVXYZZ....ZZZZZ'
`$([Environment]::NewLine)
Você pode encontrar aqui [Como Gerar um Token de Autenticação Personalizada](/docs/desenvolvedor/apis/authentication)
