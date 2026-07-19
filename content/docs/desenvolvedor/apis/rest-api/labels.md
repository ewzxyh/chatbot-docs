---
title: "# Etiquetas"
description: "Legendas"
---

Legendas

# # Etiquetas

Você pode usar a API para obter ou definir informações da etiqueta.

# # O Modelo

A tag API é usada para implementar internacionalização e multilingue para o widget e chatbots.

Descrição
------------- --------------------------------------------------------------------------------------------------------------------------------------
O identificador único para o rótulo que é dado pelo ChatCase.
Os dados do rótulo.
Atribuições do objeto Os atributos personalizados que são definidos para o rótulo. □
O tempo (ISO-8601 data string) quando o rótulo foi criado. □
O tempo (ISO-8601 data string) quando o rótulo foi atualizado. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

## # Modelo de Dados de Etiquetas

Descrição
----------------------------------------------------------------------------------------------------------------------------------------------
Lang O identificador da língua
Dados Os dados das etiquetas de tradução
□ categoria A categoria de dados do rótulo
Default □ Boolean □ Determina se esta tradução é o padrão para o projeto.

# # Obter todas as etiquetas para o projeto\ id

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/labels`Permite a uma conta listar todos os rótulos.

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
TODO
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels
`$([Environment]::NewLine)
# # Obter todos os rótulos para o idioma fornecido

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/labels/:id`Fetches os rótulos pela língua fornecida

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
(Ex. EN, IT, ES, etc.)
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
TODO
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/EN
`$([Environment]::NewLine)
# # Criar ou atualizar um rótulo

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/labels`Permite adicionar ou atualizar rótulos.

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
-------- ------------ ------------------------------------------------
o identificador de idioma ,
Dados objeto o objeto de dados
O padrão é um booleano. Dermine se este for o idioma padrão.

{% tabs %}
{% tab title="200 " %}

```
TODO
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"lang":"andrea", "data":{OBJECT}}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels
`$([Environment]::NewLine)
# # Fazer uma linguagem como padrão para o projeto

<mark style="color:purple;">`PATCH`</mark> `https://api.chatcase.com/v3/:project_id/labels/:lang/default`Criar um idioma como padrão para o projeto

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
Lang O identificador da língua

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

{% tabs %}
{% tab title="200 " %}

```
TODO
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PATCH -H 'Content-Type: application/json' -u redacted@example.invalid:123456   https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/EN/default
`$([Environment]::NewLine)
# # Excluir um rótulo por identificador de idioma

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/labels/:lang`Permite apagar um rótulo pelo identificador de idioma.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador de línguas.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
TODO
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X DELETE -H 'Content-Type: application/json' -u redacted@example.invalid:123456  https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/EN
`$([Environment]::NewLine)
# # Apagar todas as etiquetas do projeto

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/labels/`Permite remover todos os rótulos do projeto

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
TODO
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X DELETE -H 'Content-Type: application/json' -u redacted@example.invalid:123456  https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/
`$([Environment]::NewLine)
# # Obter todas as etiquetas predefinidas

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/labels/default`Parâmetros do Caminho

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
TODO
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/default
`$([Environment]::NewLine)
# # Obter todos os rótulos padrão pré-traduzidos

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/labels/default`Parâmetros do Caminho

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
TODO
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/default
`$([Environment]::NewLine)
# # Obter o rótulo padrão pré-traduzido por idioma id

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/labels/default/lang`Parâmetros do Caminho

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
TODO
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/default/EN
`$([Environment]::NewLine)
# # Criar um clone de etiqueta de uma linguagem pré-traslada

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/labels/default/clone`Parâmetros do Caminho

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
---- ---- ------- ----------------------------
o identificador de idioma ,

{% tabs %}
{% tab title="200 " %}

```
TODO
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/labels/default/clone
```
