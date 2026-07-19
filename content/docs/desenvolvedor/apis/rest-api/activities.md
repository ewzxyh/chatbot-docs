---
title: "# Obter todas as atividades"
description: "Atividades"
---

Atividades

Você pode usar a API para obter os dados de atividade.

# # Obter todas as atividades

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/activities`Permite a um administrador listar todas as atividades do projeto.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
------------ ------- ------ ------ ------ ------------------------------------------------------------------
O identificador do agente.
As atividades são uma lista separada de eventos para filtrar os resultados. Ex: "projeto\ USER\ DELETE,projeto\ USER\ INVITE"
OrdenarField .. string .
Direcção<p>ordenar direcção: 1 ou - 1. Retornar os resultados em ordem ascendente ou descendente.</p><p><em>por omissão para desc</em></p>□
Página de texto de página de texto de resultados para obter. padrão para a primeira página.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel do Minumun: admin

{% tabs %}
{% tab title="200 " %}

```
{
   "perPage":40,
   "count":1,
   "activities":[
      {
         "_id":"5cbf2eec5bf27612afc0c309",
         "updatedAt":"2019-04-23T15:27:40.619Z",
         "createdAt":"2019-04-23T15:27:40.619Z",
         "actor":{
            "type":"user",
            "id":"5ac7521787f6b50014e0b592",
            "name":"Nico Lanzilotto"
         },
         "verb":"PROJECT_USER_INVITE",
         "actionObj":{
            "email":"redacted@example.invalid",
            "role":"agent",
            "id_project":"5ad5bd52c975820014ba900a",
            "project_name":"ChatCase"
         },
         "target":{
            "type":"pendinginvitation",
            "id":"5cbf2eec5bf27612afc0c308",
            "object":{
               "_id":"5cbf2eec5bf27612afc0c308",
               "createdBy":"5ac7521787f6b50014e0b592",
               "id_project":"5ad5bd52c975820014ba900a",
               "role":"agent",
               "email":"redacted@example.invalid",
               "createdAt":"2019-04-23T15:27:40.519Z",
               "updatedAt":"2019-04-23T15:27:40.519Z",
               "__v":0
            }
         },
         "id_project":"5ad5bd52c975820014ba900a",
         "__v":0
      }
   ]
}
```

{% endtab %}
{% endtabs %}
