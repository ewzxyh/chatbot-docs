---
title: "# O Modelo do Segmento"
description: "Segmentos"
---

Segmentos

Você pode usar a API para obter ou definir informações de segmento. Um segmento é uma coleção de contatos, definida por um conjunto específico de atributos, usados para filtrar em uma campanha de marketing. Segmentação do usuário é o processo de separação de leads em grupos distintos, ou segmentos, com base em características compartilhadas. Uma empresa pode segmentar leads com base em preferências linguísticas, versão de produto, região geográfica.

# # O Modelo do Segmento

Descrição
------------- --------- ---------------------------------
O identificador único para o segmento que é dado pelo ChatCase.
Name O nome do segmento
Match
O tempo (ISO-8601 data string) quando o segmento foi criado. □
Filtros de array
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Obter todos os segmentos

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/segments`Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/segments
`$([Environment]::NewLine)
# # Obter um segmento por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/segments/:id`Fetches um segmento por seu segmento ID

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O identificador do segmento
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Exemplo

```
curl -v -X GET -H 'Content-Type: application/json' -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/segments/5c81593adf767b0017d1aa66
`$([Environment]::NewLine)
# # Criar um novo segmento

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/segments`Permite adicionar mais segmentos.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
-------- ------------------------------
Name O nome do segmento
& corresponder; string; O tipo de segmento corresponde. Tudo ou qualquer
Filtros de filtro Os filtros de segmento

Exemplo:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{ "name":"segment1", "filters": [{"field":"field1","operator":"=","value":"value1"}]}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/segments
`$([Environment]::NewLine)
# # Atualizar um segmento por ID

<mark style="color:orange;">`PUT`</mark> `https://api.chatcase.com/v3/:project_id/segments/:id`Permite atualizar um segmento.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de segmento. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
-------- ------------------------------
Name O nome do segmento
& corresponder; string; O tipo de segmento corresponde. Tudo ou qualquer
Filtros de filtro Os filtros de segmento

# # Apagar um segmento por ID

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/:project_id/segments/:id`Permite apagar um segmento.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
□ id O ID é o identificador de segmento. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Função do Minumun: agente
