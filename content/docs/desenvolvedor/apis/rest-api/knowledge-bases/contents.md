---
title: "Teor"
description: "Gerencie o conteúdo de suas Bases de Conhecimento."
---

Gerencie o conteúdo de suas Bases de Conhecimento.

# # O modelo de conteúdo

Descrição
------------- ------- -------------------------------------------------------------------------------------------------------------------------------------------------------
* \ id * String * O identificador único para o conteúdo que é dado pelo ChatCase.
O nome do conteúdo.
projeto O identificador único do projeto
□ digite □ String □ O tipo do conteúdo. Tipos suportados: url, text, pdf, docx, faq
Fonte do conteúdo
O conteúdo textual de uma fonte. Está em branco se o tipo não for texto
□ namespace □ String O id do espaço de nomes ao qual o conteúdo pertence
Estado do conteúdo. Estado admissível: - 1 (não na fila), 100 (na fila), 200 (na indexação), 300 (indexado), 400 (error)

# # Obter todo o conteúdo de uma base de conhecimento

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/kb/`Permite listar todo o conteúdo de uma base de conhecimento

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
---------- ----------------------------------------------------------------------
O espaço de nomes ID é um código único atribuído à sua base de conhecimento quando você o cria em ChatCase. □
Estado do estado do número (Opcional) Para listar todo o conteúdo em um status de indexação determinado. □
& Tipo; string; (Opcional) Para listar todo o conteúdo de um status determinado. □
(Opcional) Determina o número de conteúdos devolvidos (utilizados para paginação). □
O número da página (usado para paginação) determina o número da página. □
OrderShortField Order Determina o campo no qual classificar.
(Opcional) Determina a direção de ordenação. -1 (ordem descendente), 1 (ordem ascendente)
Pesquisar em texto em linha (Opcional) O texto a procurar no campo de origem

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "count": 2,
    "query": {
        "limit": 20,
        "sortField": "updatedAt",
        "direction": -1
    },
    "kbs": [
        {
            "_id": "667941c90d6bac990eb908da",
            "id_project": "63ad512e70d5ed0012ad6286",
            "source": "Return an item",
            "type": "text",
            "__v": 0,
            "content": "Return an item content sample",
            "createdAt": "2024-06-24T09:52:09.613Z",
            "name": "Return an item",
            "namespace": "63ad512e70d5ed0012ad6286",
            "status": 300,
            "updatedAt": "2024-06-24T09:52:11.698Z"
        },
        {
            "_id": "6679419c0d6bac990eb8452f",
            "id_project": "63ad512e70d5ed0012ad6286",
            "source": "Shipping information",
            "type": "text",
            "__v": 0,
            "content": "Shipping informazione content sample.",
            "createdAt": "2024-06-24T09:51:24.835Z",
            "name": "Shipping information",
            "namespace": "63ad512e70d5ed0012ad6286",
            "status": 300,
            "updatedAt": "2024-06-24T09:51:26.278Z"
        }
    ]
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb?direction=-1&sortField=updatedAt&namespace=63ad512e70d5ed0012ad6286&limit=20
`$([Environment]::NewLine)
***

# # Obter detalhes de conteúdo

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/kb/:content_id`Permite obter o detalhe do conteúdo

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
O ID do conteúdo é um código único atribuído ao seu conteúdo. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "_id": "66794d310d6bac990ef72ed3",
    "id_project": "63ad512e70d5ed0012ad6286",
    "source": "Shipping information",
    "type": "text",
    "__v": 0,
    "content": "Shipping information content sample.",
    "createdAt": "2024-06-24T09:51:24.835Z",
    "name": "Shipping information",
    "namespace": "63ad512e70d5ed0012ad6286",
    "status": 300,
    "updatedAt": "2024-06-24T09:51:26.278Z"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/66794d310d6bac990ef72ed3
`$([Environment]::NewLine)
***

# # Adicione um conteúdo a uma base de conhecimento

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/kb/`Permite criar e adicionar um conteúdo a uma base específica do knwoledge

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

Pedir corpo

Nome , Tipo , Descrição
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Name O nome do conteúdo
□ digite a string □ O tipo do conteúdo. Pode ser texto, url, pdf, docx ou faq.
O nome de origem de um conteúdo. Se o tipo de conteúdo for url, pdf ou docx, o campo fonte deve ser o url do recurso.
O campo de conteúdo da entidade de conteúdo. Está vazio se o tipo for url, pdf ou docx. Se o tipo é faq o conteúdo deve ser Question\nResposta.
□ espaço de nomes O ID do espaço de nomes ao qual o conteúdo pertence. □

{% tabs %}
{% tab title="200 " %}

```
{
    "lastErrorObject": {
        "n": 1,
        "updatedExisting": false,
        "upserted": "6679502d0d6bac990e06c2fb"
    },
    "value": {
        "_id": "6679502d0d6bac990e06c2fb",
        "id_project": "63ad512e70d5ed0012ad6286",
        "source": "https://eu.rtmv3.chatcase.com/api/files?path=uploads/users/63ad512170d5ed0012ad6279/files/09d40382-3755-4d87-8cb5-e345b7fcf418/my_awesome_file.pdf",
        "type": "pdf",
        "__v": 0,
        "content": "",
        "createdAt": "2024-06-24T10:53:33.368Z",
        "name": "my_awesome_file.pdf",
        "namespace": "63ad512e70d5ed0012ad6286",
        "status": -1,
        "updatedAt": "2024-06-24T10:53:33.368Z"
    }
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X POST -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/ -d '{"type":"pdf","source":"https://eu.rtmv3.chatcase.com/api/files?path=uploads/users/63ad512170d5ed0012ad6279/files/09d40382-3755-4d87-8cb5-e345b7fcf418/my_awesome_file.pdf","content":"","name":"my_awesome_file.pdf","namespace":"63ad512e70d5ed0012ad6286"}'
`$([Environment]::NewLine)
***

# # Adicione vários conteúdos de URL a uma base de conhecimento

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/kb/multi`Permite adicionar mais de um conteúdo do tipo url a uma base específica do knwoledge em uma única operação.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
---------- ----------------------------------------------------------------------
O espaço de nomes ID é um código único atribuído à sua base de conhecimento quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

Pedir corpo

Nome , Tipo , Descrição
---- ---- ---- ---- ------------------------------------------------------------------------------------
Lista O array de URLs a ser adicionado à base do knwoledge. □

{% tabs %}
{% tab title="200 " %}

```
[
    {
        "_id": "667954840d6bac990e1dc383",
        "id_project": "63ad512e70d5ed0012ad6286",
        "source": "https://mysite.com/content_1",
        "type": "url",
        "content": "",
        "createdAt": "2024-06-24T11:12:04.080Z",
        "name": "https://mysite.com/content_1",
        "namespace": "63ad512e70d5ed0012ad6286",
        "status": -1,
        "updatedAt": "2024-06-24T11:12:04.080Z"
    },
    {
        "_id": "667954840d6bac990e1dc399",
        "id_project": "63ad512e70d5ed0012ad6286",
        "source": "https://mysite.com/content_2",
        "type": "url",
        "content": "",
        "createdAt": "2024-06-24T11:12:04.080Z",
        "name": "https://mysite.com/content_2",
        "namespace": "63ad512e70d5ed0012ad6286",
        "status": -1,
        "updatedAt": "2024-06-24T11:12:04.080Z"
    },
    {
        "_id": "667954840d6bac990e1dc3be",
        "id_project": "63ad512e70d5ed0012ad6286",
        "source": "https://mysite.com/content_3",
        "type": "url",
        "content": "",
        "createdAt": "2024-06-24T11:12:04.080Z",
        "name": "https://mysite.com/content_3",
        "namespace": "63ad512e70d5ed0012ad6286",
        "status": -1,
        "updatedAt": "2024-06-24T11:12:04.080Z"
    }
]
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X POST -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/multi?namespace=63ad512e70d5ed0012ad6286 -d '{"list": [ 'https://mysite.com/content_1', 'https://mysite.com/content_2', 'https://mysite.com/content_3']}'
`$([Environment]::NewLine)
***

# # Converter um mapa do site em uma lista de URLs

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/kb/sitemap`Permite converter um mapa do site em uma lista de urls para ser carregado mais tarde em uma única operação.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

Pedir corpo

Nome , Tipo , Descrição
---- ---- ---- ---- ------------------------------------------------------------------------------------
Lista O array de URLs a ser adicionado à base do knwoledge. □

{% tabs %}
{% tab title="200 " %}

```
{
    "url": "https://gethelp.chatcase.com/sitemap.xml",
    "sites": [
        "https://gethelp.chatcase.com/articles/activities-log/",
        "https://gethelp.chatcase.com/articles/define-the-operating-hours/",
        "https://gethelp.chatcase.com/articles/how-do-invite-a-teammate/",
        "https://gethelp.chatcase.com/articles/understanding-default-roles/",
        ...
    ],
    "errors": []
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X POST -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/sitemap -d '{"sitemap": "https://gethelp.chatcase.com/sitemap.xml" }'
`$([Environment]::NewLine)
***

# # Apagar um conteúdo da base de conhecimentos

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/kb/:content_id`Permite excluir um único conteúdo da base de conhecimento.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
O ID de Conteúdo é um código exclusivo atribuído ao seu contnet quando você o cria. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "_id": "66794d950d6bac990ef90e3d",
    "id_project": "63ad512e70d5ed0012ad6286",
    "source": "Use a Voucher",
    "type": "text",
    "__v": 0,
    "content": "Use a Voucher content sample",
    "createdAt": "2024-06-24T10:42:29.798Z",
    "name": "Use a Voucher",
    "namespace": "63ad512e70d5ed0012ad6286",
    "status": 300,
    "updatedAt": "2024-06-24T10:42:31.202Z"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X POST -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/66794d950d6bac990ef90e3d
```

***
