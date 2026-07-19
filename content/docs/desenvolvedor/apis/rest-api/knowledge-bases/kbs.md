---
title: "# Obter todas as bases de conhecimento"
description: "Base de Conhecimento"
---

Base de Conhecimento

Gerencie conteúdo para suas respostas instantâneas do chatbot usando nosso motor RAG. Popule seus KBs usando seu próprio conteúdo (URLs, sitesmaps, pdfs, docx, texto ou FAQs). Nosso motor semântico irá ajudá-lo a fornecer as melhores respostas com base em perguntas de usuários usando indexação semântica avançada e a IA generativa OpenAI. [Mais informações] (https://gethelp.chatcase.com/categories/knowledge-base/)

O modelo da Base de Conhecimento

Descrição
----------------- --------------------------------------------------------------------------------------------------------------------------------------------------------
O identificador único para a base de conhecimento que é dada pela ChatCase.
O nome da base do conhecimento.
projeto O identificador único do projeto
Preview\ settings As configurações para a pré-visualização da base de conhecimento
Default □ Boolean □ Especifica se a base de conhecimento é a base padrão
Hybrid . Boolean . Especifica se a base de conhecimento é híbrida. O padrão é falso (tipo padrão)
O motor do vetor é usado pela base de conhecimento. Um motor padrão é fornecido. □
Embutindo .Object . Indica quais embutimentos são usados para a pesquisa baseada em vectores. Está presente uma incorporação por omissão.

# # Obter todas as bases de conhecimento

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/kb/namespace/all`Permite listar todas as bases de conhecimento de um projeto. Retorna pelo menos a base de conhecimento padrão.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
[
    {
        "default": true,
        "id_project": "63ad512e70d5ed0012ad6286",
        "id": "63ad512e70d5ed0012ad6286",
        "name": "Customer Support",
        "preview_settings": {
            "model": "gpt-3.5-turbo",
            "max_tokens": 128,
            "temperature": 0.7,
            "top_k": 4,
            "context": "You are an awesome AI Assistant."
        },
        "createdAt": "2024-06-20T13:49:04.006Z",
        "updatedAt": "2024-06-21T10:52:55.235Z"
    },
    {
        "default": false,
        "id_project": "63ad512e70d5ed0012ad6286",
        "id": "66755b6b9fee7f001357bc7f",
        "name": "Sales",
        "preview_settings": {
            "model": "gpt-3.5-turbo",
            "max_tokens": 128,
            "temperature": 0.7,
            "top_k": 4,
            "context": "You are an awesome AI Assistant."
        },
        "createdAt": "2024-06-21T10:52:27.111Z",
        "updatedAt": "2024-06-21T10:52:27.111Z"
    }
]
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/namespace/all
`$([Environment]::NewLine)
***

# # Criar nova base de conhecimento

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/kb/namespace`Permite criar uma nova base de conhecimento para um projeto.

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
---- ---- -------- -----------------------------------
O nome da base de conhecimento.

{% tabs %}
{% tab title="200 " %}

```
{
    "default": false,
    "id_project": "63ad512e70d5ed0012ad6286",
    "id": "6675a1b3c08d0b00141c415b",
    "name": "Products",
    "preview_settings": {
        "model": "gpt-3.5-turbo",
        "max_tokens": 128,
        "temperature": 0.7,
        "top_k": 4,
        "context": "You are an awesome AI Assistant."
    },
    "createdAt": "2024-06-21T15:52:19.036Z",
    "updatedAt": "2024-06-21T15:52:19.036Z"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password -d '{"name": "Products"}' https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/namespace
`$([Environment]::NewLine)
***

# # Atualizar uma base de conhecimento

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/kb/namespace/:id`Permite atualizar uma base de conhecimento informações e configurações de visualização.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
□ id O identificador único para a base de conhecimentos

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

Pedir corpo

Nome , Tipo , Descrição
----------------- ----------------------------------------------------------------------
O nome da base de conhecimento.
A configuração da IA para as configurações da base de conhecimento.

{% tabs %}
{% tab title="200 " %}

```
{
    "default": false,
    "id_project": "63ad512e70d5ed0012ad6286",
    "id": "6675a1b3c08d0b00141c415b",
    "name": "New Products",
    "preview_settings": {
        "model": "gpt-4o",
        "max_tokens": 256,
        "temperature": 0.5,
        "top_k": 5,
        "context": "Custom context."
    },
    "createdAt": "2024-06-21T15:52:19.036Z",
    "updatedAt": "2024-06-24T08:37:32.313Z"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X PUT -u redacted@example.invalid:password -d '{"name": "New Products", "preview_settings": { "model": "gpt-4o", "max_tokens": 256, "temperature": 0.5, "top_k": 5,"context": "Custom context." }}'
https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/namespace/6675a1b3c08d0b00141c415b
`$([Environment]::NewLine)
***

# # Apagar uma base de conhecimentos

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/kb/namespace/:id`Permite apagar toda a base de conhecimento ou é apenas conteúdo.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
□ id O identificador único para a base de conhecimentos

Parâmetros de Consulta

Nome , Tipo , Descrição
---------------- ------ -------- -----------------------------------------------------
* conteúdo\ only * booleano * (Opcional) se TRUE será excluído apenas o conteúdo *

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "success": true,
    "message": "Namespace deleted succesfully"
}
```

{% endtab %}
{% endtabs %}Exemplo

```

curl -v -X DELETE -u redacted@example.invalid:password -d https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/namespace/6675a1b3c08d0b00141c415b
```
