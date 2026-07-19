---
title: "# O Modelo de Eventos"
description: "Eventos"
---

Eventos

Você pode usar a API para obter ou definir informações do evento.

# # O Modelo de Eventos

Descrição
---------------- ------------------------------------------------------------------------------------------------------------------------------------
O identificador único para o evento que é dado pelo ChatCase.
O nome do evento. Você pode encontrar os eventos padrão ChatCase [aqui](/docs/desenvolvedor/apis/webhooks#webhook-events)
O usuário que cria o evento.
Atribuições do objeto Os atributos personalizados que estão definidos para o evento.
O tempo (ISO-8601 data string) quando o evento foi criado. □
O tempo (ISO-8601 data string) quando o evento foi atualizado. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Obter todos os eventos

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/events`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

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
{
   ...
}
```

{% endtab %}
{% endtabs %}# # Obter um evento por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/events/:id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador do evento
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
        ..
}
```

{% endtab %}
{% endtabs %}# # Dispare um novo evento personalizado e salve-o

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/events`Com este endpoint você pode disparar um evento personalizado. O seu nome do evento deve ser

`event.emit.EVENT_NAME`para identificar corretamente seu evento personalizado. Você pode encontrar os eventos padrão do ChatCase aqui

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
------------ ------------------------------------
Nome da string do evento
Atribuições Os atributos personalizados do evento

{% tabs %}
{% tab title="200 " %}

```
{
        ..
}
```

{% endtab %}
{% endtabs %}
