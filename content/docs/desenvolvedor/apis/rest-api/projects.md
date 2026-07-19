---
title: "# Obter uma lista de projetos que o usuário pertence"
description: "Projetos"
---

Projetos

O modelo do projeto

Descrição
------------------------------------ -------------------------------------------------------------------------------------------------------
O identificador único para o projeto que é dado pelo ChatCase.
O nome do projeto.
AtivoHorasOperativas □ Boolena □ Determinar se a opção de horas operacionais está ativada
As configurações das horas de funcionamento.
Configuração do objeto As configurações do projeto .
O widget.
Perfil do perfil do objeto O objeto do perfil do projeto □
Estado do projeto. Valores permitidos: 100 ativos, 0 desativados
O tempo (ISO-8601 data string) quando o projeto foi criado. □
O tempo (ISO-8601 data string) quando o projeto foi atualizado. □
* Criada por * String * O identificador único do criador da linha .

# # Obter uma lista de projetos que o usuário pertence

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/projects/`Cabeçalhos

Nome , Tipo , Descrição
------------------ ----------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel Minumun: user

{% tabs %}
{% tab title="200 " %}

```
[
{
      "_id":"5acdc6d86fb82500141d56c9",
      "updatedAt":"2019-01-31T18:09:53.417Z",
      "createdAt":"2018-04-11T08:27:04.509Z",
      "id_project":{
         "versions":30,
         "_id":"5acba41a213ae3001451b723",
         "updatedAt":"2019-01-29T12:01:06.793Z",
         "createdAt":"2018-04-09T17:34:18.064Z",
         "name":"conversational landing page",
         "createdBy":"5aabade839db7d001477d3d5",
         "__v":0,
         "profile":{
            "name":"free",
            "trialDays":30,
            "agents":0,
            "type":"free"
         },
         "channels":[
            {
               "name":"chat21"
            }
         ],
         "trialExpired":true,
         "trialDaysLeft":680,
         "isActiveSubscription":false,
         "id":"5acba41a213ae3001451b723"
      },
      "id_user":"5aaa99024c3b110014b478f0",
      "role":"admin",
      "createdBy":"5aabade839db7d001477d3d5",
      "__v":0,
      "user_available":true,
      "id":"5acdc6d86fb82500141d56c9"
   },
...
]
```

{% endtab %}
{% endtabs %}# # Obter o detalhe do projeto

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/projects/:project_id`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente

{% tabs %}
{% tab title="200 " %}

```
{
   "versions":30,
   "_id":"5df2240cecd41b00173a06bb",
   "name":"000000",
   "activeOperatingHours":true,
   "createdBy":"5aaa99024c3b110014b478f0",
   "profile":{
      "name":"free",
      "trialDays":30,
      "agents":0,
      "type":"free"
   },
   "channels":[
      {
         "name":"chat21"
      }
   ],
   "createdAt":"2019-12-12T11:27:08.548Z",
   "updatedAt":"2020-01-08T10:53:12.844Z",
   "__v":0,
   "operatingHours":"{\"0\":[{\"start\":\"09:00\",\"end\":\"13:00\"},{\"start\":\"14:00\",\"end\":\"18:00\"}],\"1\":[{\"start\":\"09:00\",\"end\":\"13:00\"},{\"start\":\"14:00\",\"end\":\"18:00\"}],\"tzname\":\"Europe/Rome\"}",
   "trialExpired":false,
   "trialDaysLeft":-4,
   "isActiveSubscription":false,
   "id":"5df2240cecd41b00173a06bb"
}
```

{% endtab %}
{% endtabs %}# # Devolva os agentes disponíveis

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/projects/:project_id/users/availables`Retornar os agentes disponíveis avaliando as horas gerais de funcionamento do projeto e a carga de bate-papo dos agentes (com a atribuição inteligente ativada)

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
---- ------------------------------------------------------------------------------------------------------------------------------------
Em bruto Se for considerado apenas o estatuto dos agentes (não são consideradas as horas gerais de funcionamento do projeto)

Cabeçalhos

Nome , Tipo , Descrição
------------------ ----------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel Minumun: user

{% tabs %}
{% tab title="200 " %}

```
[
   {
      "id":"5aaa99024c3b110014b478f0",
      "firstname":"Andrea"
   },
   {
      "id":"5de9200d6722370017731969",
      "firstname":"Nuovopre"
   }
]
```

{% endtab %}
{% endtabs %}# # # Retornar se o projeto estiver aberto em relação ao horário de funcionamento

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/projects/:project_id/isopen`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel Minumun: convidado

{% tabs %}
{% tab title="200 " %}

```
   {"isopen":false}
```

{% endtab %}
{% endtabs %}# # Atualize o projeto (Configurações do Conectado)

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/projects/:project_id/availables`Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
------------------ ----------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel Minumun: user

Pedir corpo

Nome , Tipo , Descrição
------- ---------------------------------------------------------------------------------------
O objeto que contém os parâmetros de configuração do widget (Veja o exemplo curl)

{% tabs %}
{% tab title="200 " %}

```
{
   "widget": {
      "logoChat": "https://your_site_url.com/your-logo.png",
      "themeColor": "#76528B",
      "themeForegroundColor": "#CBCE91",
      "themeColorOpacity": 0,
      "align": "right",
      "displayOnDesktop": true,
      "displayOnMobile": true,
      "onPageChangeVisibilityDesktop": "open",
      "onPageChangeVisibilityMobile": "last",
      "singleConversation": false,
      "baloonImage": "https://your_site_url.com/your-baloon-logo.png",
      "poweredBy": "<a tabindex=\"-1\" target=\"_blank\" href=\"https://your_site_url.com\"><img src=\"https://your_site_url.com/your-logo.png\"/><span>Powered by YourCompany</span></a>"
   }
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X PUT -H 'Content-Type: application/json' -u redacted@example.invalid:123456 -d '{"widget": {"logoChat": "https://your_site_url.com/your-logo.png","themeColor": "#76528B","themeForegroundColor": "#CBCE91","themeColorOpacity": 0,"align": "right","displayOnDesktop": true,"displayOnMobile": true,"onPageChangeVisibilityDesktop": "open","onPageChangeVisibilityMobile": "last","singleConversation": false,"baloonImage": "https://your_site_url.com/your-baloon-logo.png","poweredBy": "<a tabindex=\"-1\" target=\"_blank\" href=\"https://your_site_url.com\"><img src=\"https://your_site_url.com/your-logo.png\"/><span>Powered by YourCompany</span></a>"}}' https://chatcase-server-pre.herokuapp.com/projects/62c3f10152dc7400352bab0d'
```
