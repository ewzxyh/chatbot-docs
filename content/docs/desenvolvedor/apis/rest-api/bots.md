---
title: "# O modelo Bot"
description: "Chatbots"
---

Chatbots

# # O modelo Bot

Descrição
-------------------------------------------------------------------------------------------
O identificador único para o bot que é dado pelo ChatCase.
O nome do bot.
projeto O identificador único do projeto
□ Tipo □ Corda □ O tipo de bot. Valores permitidos: internos, externos.
O símbolo secreto do bot usado para autenticação JWT. □
* Criada por * String * O identificador único do criador da linha .
(Opcional) A descrição do bot.
Opcional O endereço do terminal externo do bot
* Webhook\ url * String * (Opcional)
* Webhook\  habilitado * Booleano * (Opcional)
(Opcional) O estado do bot.
Atribuições do □ Objeto (Opcional) Os atributos personalizados que são definidos para o bot.
Linguagem (Opcional) A linguagem bot.
□ criadoAt □ String (Opcional) A altura em que o robot foi criado. □
□ publico; Booleano; (Opcional) O status de compartilhamento do bot. Falso padrão.
(Opcional) A altura em que o robot foi atualizado. □

# # Obter todos os bots

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/bots`Permite a uma conta listar todos os bots do projeto.

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
      "_id":"5be9b2ecc72a050015e14951",
      "updatedAt":"2018-11-12T17:05:50.616Z",
      "createdAt":"2018-11-12T17:05:48.544Z",
      "name":"bot1",
      "id_project":"5b55e806c93dde00143163dd",
      "trashed":false,
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "external":false
   },
   {
      "_id":"5ce265596438e40017e3610d",
      "updatedAt":"2019-05-20T08:29:14.524Z",
      "createdAt":"2019-05-20T08:29:13.286Z",
      "name":"bot2",
      "id_project":"5b55e806c93dde00143163dd",
      "trashed":false,
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "external":false
   }
]
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots
`$([Environment]::NewLine)
***

# # Obter um bot por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/bots/:id`Permite que uma conta obtenha um bot do projeto.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
□ id O identificador de bots

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
  {
      "_id":"5be9b2ecc72a050015e14951",
      "updatedAt":"2018-11-12T17:05:50.616Z",
      "createdAt":"2018-11-12T17:05:48.544Z",
      "name":"bot1",
      "id_project":"5b55e806c93dde00143163dd",
      "trashed":false,
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "external":false
   }
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots/5be9b2ecc72a050015e14951
`$([Environment]::NewLine)
***

# # Exportar um bot no formato JSON

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/bots/exportjson/:id`Permite que um accont exporte o bot no formato json

Parâmetros do Caminho

Nome , Tipo , Descrição
------------- ------- ------------------------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador de bots

Parâmetros de Consulta

Nome , Tipo , Descrição
-------------- ---------------------------------------------------------------------
Apenas o booleano (Opcional) se o VERDADEIRO será exportado apenas as intenções (faqs)

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
  {"webhook_enabled":false,"language":"en","name":"bot1","intents":[{"webhook_enabled":false,"enabled":true,"question":"\start","answer":"Hello","intent_display_name":"start","language":"en"}]}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots/exportjson/5be9b2ecc72a050015e14951
`$([Environment]::NewLine)
***

# # Criar um novo bot

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/bots`Permite adicionar mais bots.

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
□ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Name O nome do bot
Descrição do texto A descrição do bot
Linguagem da língua do bot com código ISO 639-1 de duas letras.□
Ativar o endpoint de preenchimento completo do webhook
template do modelo Se for usado o tipo interno, você pode especificar o modelo usado para criar os faqs. Valores suportados : em branco, transferência, exemplo. Exemplo é o valor padrão. O Blank é um chatbot básico com intenções de iniciar e por omissão. O Handoff é como o chatbot básico com a intenção do Agente Handoff. Exemplo é um chatbot com uma vitrine das características principais. □
O tipo □ string □ Valores de tipo suportados são: "interno", "externo". O padrão é "interno". Com valor interno é usado o motor padrão de bot chatcase. Com externo você pode criar seu próprio motor chatbot especificando o parâmetro url. □
Url O endpoint do chatbot externo

{% tabs %}
{% tab title="200 " %}

```
 {
      "_id":"5be9b2ecc72a050015e14951",
      "updatedAt":"2018-11-12T17:05:50.616Z",
      "createdAt":"2018-11-12T17:05:48.544Z",
      "name":"bot1",
      "id_project":"5b55e806c93dde00143163dd",
      "trashed":false,
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "external":false
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"name":"bot1"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots
`$([Environment]::NewLine)
***

# # Garde um bot

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/bots/fork/:id`Permite bifurcar um bot existente.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador de bots

Parâmetros de Consulta

Nome , Tipo , Descrição
----------- -----------------------------------------------------------------------------------------------------------------------------------------
O status de compartilhamento do bot. Valores permitidos: true \ ou false
& Projectid; string; O ID do projeto onde quer bifurcar o bot

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
{
   "message":"Chatbot forked successfully",
   "bot_id":"5ab0f3fa57066e0014bf777e"
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots/fork/5be9b2ecc72a050015e14951?public=false&projectid=5b55e806c93dde0014316e33
`$([Environment]::NewLine)
***

# # Importar bot inteiro do JSON

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/bots/importjson/:id`Permite importar as informações e intenções do bot de um arquivo JSON.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador do bot (no qual se realiza a importação) (é nulo com opção de criação)

Parâmetros de Consulta

Nome , Tipo , Descrição
------------- ------- ------ ----- -------------------------------------------------------------------------------------------------------------------------------------
Criar uma string .. Permite criar um chatbot antes de importar valores permitidos: true \ o false \ o null
Substituir a cadeia de caracteres (BETA) Permite limpar o chatbot (todas as suas intenções) antes de importar os valores permitidos: true \ o false \ o null
Overwrite □ string Escolha se deve substituir as intenções com a mesma intenção\ display\ name com as importadas. Se falso ou nulo As intenções antigas com a mesma intenção\ display\ name não serão sobrescritas. Valores permitidos: true \ o false \ o null

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
---------- ---- -- ---------------------------------
O arquivo JSON que contém dados.

{% tabs %}
{% tab title="200 " %}

```
{
   "_id":"5be9b2ecc72a050015e14951",
   "updatedAt":"2018-11-12T17:05:50.616Z",
   "createdAt":"2018-11-12T17:05:48.544Z",
   "name":"bot1",
   "id_project":"5b55e806c93dde00143163dd",
   "trashed":false,
   "createdBy":"5ab0f3fa57066e0014bfd71e",
   "__v":0,
   "external":false
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d "@path_to_file/bot.json" https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots/importjson/5be9b2ecc72a050015e14951
`$([Environment]::NewLine)
***

# # Atualizar um bot

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/bots/:id`Permite atualizar um bot.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador de bots

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
O que é que se passa?
Name O nome do bot
Url O objetivo externo do bot
Descrição do texto A descrição do bot
Linguagem da língua do bot com código ISO 639-1 de duas letras.
Ativar o endpoint de preenchimento completo do webhook
□ digite a string □ Valor de tipo suportados são: "interno", "externo". O padrão é "interno". Com valor interno é usado o motor padrão de bot chatcase. Com externo você pode criar seu próprio motor chatbot especificando o parâmetro url. □

{% tabs %}
{% tab title="200 " %}

```
{
      "_id":"5be9b2ecc72a050015e14951",
      "updatedAt":"2018-11-12T17:05:50.616Z",
      "createdAt":"2018-11-12T17:05:48.544Z",
      "name":"bot1",
      "id_project":"5b55e806c93dde00143163dd",
      "trashed":false,
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "external":false
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"name":"bot1"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots/5be9b2ecc72a050015e14951
`$([Environment]::NewLine)
***

# # Apagar um bot

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/bots/:id`Permite apagar um bot.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O identificador de bots

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
      "_id":"5be9b2ecc72a050015e14951",
      "updatedAt":"2018-11-12T17:05:50.616Z",
      "createdAt":"2018-11-12T17:05:48.544Z",
      "name":"bot1",
      "id_project":"5b55e806c93dde00143163dd",
      "trashed":false,
      "createdBy":"5ab0f3fa57066e0014bfd71e",
      "__v":0,
      "external":false
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X DELETE -H 'Content-Type: application/json' -u redacted@example.invalid:123456  https://api.chatcase.com/v3/5b55e806c93dde00143163dd/bots/5be9b2ecc72a050015e14951
```
