---
title: "# Criar uma nova assinatura"
description: "Subscrições"
---

Subscrições

# # Criar uma nova assinatura

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/subscriptions`Este endpoint permite adicionar mais assinaturas.

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
------- ------------ ----------------
Evento ou corda O método do evento
O alvo é a corda .

{% tabs %}
{% tab title="200 " %}

```
{
   {
   "__v":0,
   "updatedAt":"2019-03-12T12:01:56.462Z",
   "createdAt":"2019-03-12T12:01:56.462Z",
   "target":"https://webhook.site/c312005b-5042-49e9-a769-0f3ba4245b51",
   "event":"request.create",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab11c6b83dc240014d46095",
   "_id":"5c879fb4f1ae6600173b8c75",
   "secret":"56c189c8-33ae-4930-bd98-410a12aa45ce"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X POST -H 'Content-Type:application/json' -u redacted@example.invalid:123456 -d '{"event":"request.create", "target":"https://webhook.site/c312005b-5042-49e9-a769-0f3ba4245b51"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/subscriptions
`$([Environment]::NewLine)
# # Este ponto final recupera todas as assinaturas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/subscriptions`Este endpoint recupera todas as assinaturas ativas.

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
   {
   "__v":0,
   "updatedAt":"2019-03-12T12:01:56.462Z",
   "createdAt":"2019-03-12T12:01:56.462Z",
   "target":"https://webhook.site/c312005b-5042-49e9-a769-0f3ba4245b51",
   "event":"request.create",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab11c6b83dc240014d46095",
   "_id":"5c879fb4f1ae6600173b8c75"
},
...
]
```

{% endtab %}
{% endtabs %}# # Obter uma subscrição por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/subscriptions/:id`Este endpoint obtém uma subscrição por ID

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador da subscrição
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
   {
   "__v":0,
   "updatedAt":"2019-03-12T12:01:56.462Z",
   "createdAt":"2019-03-12T12:01:56.462Z",
   "target":"https://webhook.site/c312005b-5042-49e9-a769-0f3ba4245b51",
   "event":"request.create",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab11c6b83dc240014d46095",
   "_id":"5c879fb4f1ae6600173b8c75"
}
```

{% endtab %}
{% endtabs %}# # Este endpoint elimina uma assinatura por ID

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/subscriptions/:id`Este parâmetro elimina uma subscrição por ID

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador da subscrição
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

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
{% endtabs %}# # Atualizar uma assinatura

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/subscriptions/:id`Este endpoint atualiza uma assinatura.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador da subscrição

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
------- ------------ ----------------
Evento ou corda O método do evento
O alvo é a corda .

{% tabs %}
{% tab title="200 " %}

```
{
   {
   "__v":0,
   "updatedAt":"2019-03-12T12:01:56.462Z",
   "createdAt":"2019-03-12T12:01:56.462Z",
   "target":"https://webhook.site/c312005b-5042-49e9-a769-0f3ba4245b51",
   "event":"request.create",
   "id_project":"5b55e806c93dde00143163dd",
   "createdBy":"5ab11c6b83dc240014d46095",
   "_id":"5c879fb4f1ae6600173b8c75"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X PUT -H 'Content-Type:application/json' -u redacted@example.invalid:123456 -d '{"event":"request.create", "target":"https://webhook.site/c312005b-5042-49e9-a769-0f3ba4245b51"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/subscriptions/5c879fb4f1ae6600173b8c75
`$([Environment]::NewLine)
# # Obter os registros de assinaturas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/subscriptions/history`O endpoint recebe registros de chamadas de assinatura.

\\

**Experimental**

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
---- ---- ------ ----- ---------------------------------------------------------------------
O número da página de resultados a buscar. padrão para primeira página.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
[
    {
      "_id":"5e3ae8309ae7ee0017d91609",
      "event":"message.create",
      "target":"https://chatcase.requestcatcher.com/test",
      "response":"{\"statusCode\":200,\"body\":\"request caught\",\"headers\":{\"date\":\"Wed, 05 Feb 2020 16:07:11 GMT\",\"content-length\":\"14\",\"content-type\":\"text/plain; charset=utf-8\",\"connection\":\"close\"},\"request\":{\"uri\":{\"protocol\":\"https:\",\"slashes\":true,\"auth\":null,\"host\":\"chatcase.requestcatcher.com\",\"port\":443,\"hostname\":\"chatcase.requestcatcher.com\",\"hash\":null,\"search\":null,\"query\":null,\"pathname\":\"/test\",\"path\":\"/test\",\"href\":\"https://chatcase.requestcatcher.com/test\"},\"method\":\"POST\",\"headers\":{\"Content-Type\":\"application/json\",\"x-hook-secret\":\"0060287d-9486-4f00-a4db-a254f998dbd1\",\"accept\":\"application/json\",\"content-length\":6005}}}",
      "body":"\"request caught\"",
      "err":null,
      "id_project":"5e37f45c4d82de00178b96ad",
      "createdAt":"2020-02-05T16:07:12.089Z",
      "updatedAt":"2020-02-05T16:07:12.089Z",
      "__v":0
    }
    .....
]
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET -u redacted@example.invalid:123 https://api.chatcase.com/v3/5e37f45c4d82de00178b96ad/subscriptions/history
```
