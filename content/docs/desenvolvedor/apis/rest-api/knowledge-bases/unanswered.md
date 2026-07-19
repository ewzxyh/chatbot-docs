---
title: "# Não respondido objeto pergunta"
description: "Perguntas sem resposta"
---

Perguntas sem resposta

Armazena perguntas que não receberam uma resposta satisfatória da base de conhecimento, escopo por projeto e base de conhecimento (`namespace`). Todas as rotas requerem autenticação; o espaço de nomes deve pertencer ao projeto atual.

# # Não respondido objeto pergunta

Definido pelo esquema Mangusto:`id_project`, `namespace`, e`question`São necessários;`timestamps: true`adiciona`createdAt`e`updatedAt`.

Descrição
-------------- -----------------------------------------------------------------------------------------
□`_id`- String - Identificador único do documento de perguntas sem resposta.
□`id_project`O identificador do projeto (definido a partir do pedido autenticado).
□`namespace`□ String □ Identificador de base de conhecimento (mesmo que KB`id`).             |
| `question`O texto da pergunta do usuário.
□`createdAt`& String; Hora da criação (data ISO).
□`updatedAt`& String; Última hora de atualização (data ISO)

# # Adicione uma pergunta sem resposta

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/kb/unanswered`Cria uma nova pergunta sem resposta para o namespace da base de conhecimento.

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
---------- -----------------------------------------------------------------------------------------
O namespace é uma cadeia de caracteres (Required) Knowledge base id a que a pergunta se refere. Deve pertencer ao projeto.
□ questÃ£o O texto da pergunta para armazenar.

{% tabs %}
{% tab title="200 Created document" %}

```
{
    "_id": "671a1b2c3d4e5f6789012345",
    "id_project": "63ad512e70d5ed0012ad6286",
    "namespace": "66a897133eaa7f0013632c5b",
    "question": "How do I reset my password?",
    "createdAt": "2025-10-24T12:00:00.000Z",
    "updatedAt": "2025-10-24T12:00:00.000Z"
}
```

{% endtab %}

{% tab title="400 Missing `namespace` or `question`" %}

```
{
    "success": false,
    "error": "Missing required parameters: namespace and question"
}
```

{% endtab %}

{% tab title="403 Namespace does not belong to the project" %}

```
{
    "success": false,
    "error": "Not allowed. The namespace does not belong to the current project."
}
```

{% endtab %}

{% tab title="500 Server error" %}

```
{
    "success": false,
    "error": "Error adding unanswered question"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X POST -u redacted@example.invalid:password \
  -H "Content-Type: application/json" \
  -d '{"namespace":"66a897133eaa7f0013632c5b","question":"How do I reset my password?"}' \
  https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/unanswered
`$([Environment]::NewLine)
***

# # Contar perguntas sem resposta

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/kb/unanswered/count/:namespace`Retorna o número total de perguntas sem resposta para um espaço de nomes. Na implementação da API, esta rota deve ser registrada antes da rota de lista genérica para que o segmento de caminho`count`não é interpretado como um espaço de nomes.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
* Namespace * string * Base de conhecimentos id *

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "count": 42
}
```

{% endtab %}

{% tab title="400 Missing namespace" %}

```
{
    "success": false,
    "error": "Missing required parameter: namespace"
}
```

{% endtab %}

{% tab title="403 Namespace does not belong to the project" %}

```
{
    "success": false,
    "error": "Not allowed. The namespace does not belong to the current project."
}
```

{% endtab %}

{% tab title="500 Server error" %}

```
{
    "success": false,
    "error": "Error counting unanswered questions"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/unanswered/count/66a897133eaa7f0013632c5b
`$([Environment]::NewLine)
***

# # Listar perguntas sem resposta

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/kb/unanswered/:namespace`Devolve uma lista paginada de perguntas sem resposta para um espaço de nomes. Paginação por omissão:`page` 0, `limit`20. Ordenação padrão: campo`createdAt`, direcção`-1`(descendente).`direction`é numérico:`-1`para descida,`1`para ascender.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
* Namespace * string * Base de conhecimentos id *

Parâmetros de Consulta

Nome , Tipo , Descrição
----------- --------- ------- ----------------------------------------------------------------------------------------------------
Página inteira. Índice de página (0-baseado). Predefinição:`0`.
Limitar o número inteiro. Predefinição:`20`.
O campo para ordenar por (qualquer campo no documento, por exemplo.`createdAt`). Predefinição:`createdAt`.
Direcção , direcção , inteiro , direcção de ordenação (`-1` or `1`). Predefinição:`-1`.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "count": 2,
    "questions": [
        {
            "_id": "671a1b2c3d4e5f6789012345",
            "id_project": "63ad512e70d5ed0012ad6286",
            "namespace": "66a897133eaa7f0013632c5b",
            "question": "How do I reset my password?",
            "createdAt": "2025-10-24T12:00:00.000Z",
            "updatedAt": "2025-10-24T12:00:00.000Z"
        }
    ],
    "query": {
        "page": 0,
        "limit": 20,
        "sortField": "createdAt",
        "direction": -1
    }
}
```

{% endtab %}

{% tab title="400 Missing namespace" %}

```
{
    "success": false,
    "error": "Missing required parameter: namespace"
}
```

{% endtab %}

{% tab title="403 Namespace does not belong to the project" %}

```
{
    "success": false,
    "error": "Not allowed. The namespace does not belong to the current project."
}
```

{% endtab %}

{% tab title="500 Server error" %}

```
{
    "success": false,
    "error": "Error getting unanswered questions"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X GET -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/unanswered/66a897133eaa7f0013632c5b?page=0&limit=20&sortField=createdAt&direction=-1"
`$([Environment]::NewLine)
***

# # Excluir uma pergunta sem resposta

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/kb/unanswered/:id`Apaga uma única pergunta sem resposta pelo seu ID do documento. A questão deve pertencer ao projeto atual.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
□ id O documento de perguntas sem resposta id (`_id`).

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "success": true,
    "message": "Question deleted successfully"
}
```

{% endtab %}

{% tab title="404 No document for this id and project" %}

```
{
    "success": false,
    "error": "Question not found"
}
```

{% endtab %}

{% tab title="500 Server error" %}

```
{
    "success": false,
    "error": "Error deleting unanswered question"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X DELETE -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/unanswered/671a1b2c3d4e5f6789012345
`$([Environment]::NewLine)
***

# # Apagar todas as perguntas sem resposta para um espaço de nomes

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/kb/unanswered/namespace/:namespace`Remove todas as perguntas não respondidas armazenadas para o espaço de nomes da base de conhecimento fornecido dentro do projeto.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □
* Namespace * string * Base de conhecimentos id *

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
{
    "success": true,
    "count": 15,
    "message": "All questions deleted successfully"
}
```

{% endtab %}

{% tab title="403 Namespace does not belong to the project" %}

```
{
    "success": false,
    "error": "Not allowed. The namespace does not belong to the current project."
}
```

{% endtab %}

{% tab title="500 Server error" %}

```
{
    "success": false,
    "error": "Error deleting unanswered questions"
}
```

{% endtab %}
{% endtabs %}Exemplo

```
curl -v -X DELETE -u redacted@example.invalid:password \
  https://api.chatcase.com/v3/63ad512e70d5ed0012ad6286/kb/unanswered/namespace/66a897133eaa7f0013632c5b
```

***
