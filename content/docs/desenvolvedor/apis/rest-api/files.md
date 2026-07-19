---
title: "# Tipos de envio de arquivos"
description: "Arquivos"
---

Arquivos

Você pode usar a API para baixar e carregar arquivos binários. A API suporta três tipos de uploads de arquivos: arquivos de chat (com expiração automática), ativos do projeto e avatares de usuário/bot.

# # Tipos de envio de arquivos

* ** Arquivos de chat**: Arquivos carregados durante conversas. Estes têm expiração automática (padrão: 30 dias).
* ** ativo**: Ativos do projeto que podem ser usados em toda a plataforma. Estes não têm expiração por padrão, mas podem ser definidos via parâmetro query. As imagens geram automaticamente miniaturas.
* **Avatars**: Fotos do perfil do usuário ou avatars bot. Estes não têm expiração e são armazenados em uma estrutura de caminho fixo.

# # Enviar um ativo do projeto

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/files/assets`Envia um arquivo como um ativo do projeto. Os ativos não têm expiração por padrão, mas podem ser definidos via parâmetro de consulta.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Opcional. Tempo de expiração em segundos. Se for fornecido e superior a 0, o arquivo expirará após este tempo.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel mínimo: admin .
Use o valor "multipart/form-data"

Pedir corpo

Nome , Tipo , Descrição
---- ---- ------ ----- ----------------------------------------------------------------------------------------------------------------------------------------------------
Arquivo □ binário □ O arquivo binário a ser carregado. Deve coincidir com extensões permitidas para ativos. As imagens irão gerar automaticamente miniaturas.

{% tabs %}
{% tab title="201 File uploaded successfully" %}

```
{
  "message": "File uploaded successfully",
  "filename": "uploads/projects/5ebd890292befe0019054973/files/uuid/logo.png",
  "thumbnail": "uploads/projects/5ebd890292befe0019054973/files/uuid/thumbnails_200_200-logo.png"
}
```

{% endtab %}

{% tab title="400 Bad request - Invalid file or upload error" %}

```
{
  "success": false,
  "error": "Error message"
  "code": "Error code" // code is not always returned
}
```

{% endtab %}

{% tab title="403 Forbidden - File extension not allowed or content verification failed" %}

```
{
  "success": false,
  "error": "File extension .exe is not allowed"
}
```

{% endtab %}

{% tab title="413 File too large" %}

```
{
  "success": false,
  "error": "File too large",
  "code": "LIMIT_FILE_SIZE"
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST \
  -H 'Content-Type: multipart/form-data' \
  -u redacted@example.invalid:password \
  -F file=@logo.png \
  https://api.chatcase.com/v3/files/assets?expiration=86400
`$([Environment]::NewLine)
# # Enviar um arquivo de chat

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/files/chat`Envia um arquivo para uso em conversas de chat. O arquivo expirará automaticamente após um tempo configurado (padrão: 30 dias).

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- ----------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT.
Use o valor "multipart/form-data"

Pedir corpo

Nome , Tipo , Descrição
---- -----------------------------------
O arquivo binário a carregar.

{% tabs %}
{% tab title="201 File uploaded successfully" %}

```
{
  "message": "File uploaded successfully",
  "filename": "uploads/projects/5ebd890292befe0019054973/files/uuid/document.pdf"
}
```

{% endtab %}

{% tab title="400 Bad request - Invalid file or upload error" %}

```
{
  "success": false,
  "error": "Error message",
  "code": "Error code"
}
```

{% endtab %}

{% tab title="403 Forbidden - File extension not allowed or content verification failed" %}

```
{
  "success": false,
  "error": "File extension .exe is not allowed"
}
```

{% endtab %}

{% tab title="413 File too large" %}

```
{
  "success": false,
  "error": "File too large",
  "code": "LIMIT_FILE_SIZE"
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X POST \
  -H 'Content-Type: multipart/form-data' \
  -u redacted@example.invalid:password \
  -F file=@document.pdf \
  https://api.chatcase.com/v3/files/chat
`$([Environment]::NewLine)
# # Carregar foto do perfil do usuário ou avatar bot

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/files/users/photo`Envia uma foto de perfil para um usuário ou avatar para um bot. Só são permitidos arquivos de imagem (`.png`, `.jpg`, `.jpeg`, `.gif`). O arquivo é armazenado em uma estrutura de caminho fixa:`uploads/users/{user_id|bot_id}/images/photo.jpg`. Gera automaticamente uma miniatura de 200x200. Requer função do agente ou autenticação bot/assinatura.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
O ID do Projeto é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Parâmetros de Consulta

Nome , Tipo , Descrição
-------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Opcional. Se fornecido, envia o avatar para o bot especificado. O usuário autenticado deve ser um administrador ou proprietário do projeto do bot.

Cabeçalhos

Nome , Tipo , Descrição
----------------- -----------------------------------------------------------------------------------------------------------------------------------
□ Autorização; string; token de autorização. Auth básico ou JWT. Papel mínimo: agente
Use o valor "multipart/form-data"

Pedir corpo

Nome , Tipo , Descrição
---- -----------------------------------------------------------------------------------------------------
O arquivo de imagem a carregar. Deve ser um de:`.png`, `.jpg`, `.jpeg`, `.gif` |

{% tabs %}
{% tab title="201 Image uploaded successfully" %}

```
{
  "message": "Image uploaded successfully",
  "filename": "uploads/users/5ebd890292befe0019054973/images/photo.jpg",
  "thumbnail": "uploads/users/5ebd890292befe0019054973/images/thumbnails_200_200-photo.jpg"
}
```

{% endtab %}

{% tab title="400 Bad request - No file uploaded or invalid file" %}

```
{
  "success": false,
  "error": "No file uploaded"
}
```

{% endtab %}

{% tab title="401 Unauthorized - User doesn" %}

```
{
  "success": false,
  "error": "You don't belong to the chatbot's project"
}
```

{% endtab %}

{% tab title="403 Forbidden - Insufficient permissions or file extension not allowed" %}

```
{
  "success": false,
  "error": "You don't have the role required to modify the chatbot"
}
```

{% endtab %}

{% tab title="404 Chatbot not found" %}

```
{
  "success": false,
  "error": "Chatbot not found"
}
```

{% endtab %}

{% tab title="413 File too large" %}

```
{
  "success": false,
  "error": "File too large",
  "code": "LIMIT_FILE_SIZE"
}
```

{% endtab %}
{% endtabs %}Exemplo (foto do usuário):

```
curl -v -X POST \
  -H 'Content-Type: multipart/form-data' \
  -u redacted@example.invalid:password \
  -F file=@photo.jpg \
  https://api.chatcase.com/v3/files/users/photo
`$([Environment]::NewLine)
Exemplo (avatar bot):

```
curl -v -X POST \
  -H 'Content-Type: multipart/form-data' \
  -u redacted@example.invalid:password \
  -F file=@bot_avatar.png \
  https://api.chatcase.com/v3/files/users/photo?bot_id=65c5f3599faf2d04cd7da528
`$([Environment]::NewLine)
# # Obter o arquivo binário como fluxo pelo caminho do nome do arquivo

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/files`Recupera um arquivo como um stream pelo seu caminho. O arquivo é retornado com cabeçalhos de Tipo de Conteúdo apropriados. Se o arquivo não for encontrado no armazenamento primário, o sistema automaticamente cai para um serviço de armazenamento secundário.

Parâmetros de Consulta

Nome , Tipo , Descrição
------------------------------------------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O caminho do arquivo (URL codificado). Exemplo:`uploads/projects/5ebd890292befe0019054973/files/uuid/document.pdf`□
Opcional. Se definido, o arquivo será devolvido com o cabeçalho Content-Disposition definido como anexo, forçando o download. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 File stream" %}

```
<binary content>
```

{% endtab %}

{% tab title="404 File not found" %}

```
{
  "success": false,
  "error": "File not found."
}
```

{% endtab %}

{% tab title="500 Error getting file" %}

```
{
  "success": false,
  "error": "Error getting file."
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/files?path=uploads%2Fprojects%2F5ebd890292befe0019054973%2Ffiles%2Fuuid%2Fdocument.pdf"
`$([Environment]::NewLine)
Exemplo (como anexo):

```
curl -v -X GET \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/files?path=uploads%2Fprojects%2F5ebd890292befe0019054973%2Ffiles%2Fuuid%2Fdocument.pdf&as_attachment=true"
`$([Environment]::NewLine)
# # Baixe o arquivo binário pelo caminho do nome do arquivo

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/files/download`Transfere um arquivo pelo seu caminho. O arquivo é devolvido com o cabeçalho Content-Disposition definido para anexo, forçando o download com o nome do arquivo original.

Parâmetros de Consulta

Nome , Tipo , Descrição
---- -------------------------------------------------------------------------------------------------------------------------------------
O caminho do arquivo (URL codificado). Exemplo:`uploads/projects/5ebd890292befe0019054973/files/uuid/document.pdf`□

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 File download" %}

```
<binary content>
```

{% endtab %}

{% tab title="404 File not found" %}

```
{
  "success": false,
  "error": "File not found."
}
```

{% endtab %}

{% tab title="500 Error getting file" %}

```
{
  "success": false,
  "error": "Error getting file."
}
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/files/download?path=uploads%2Fprojects%2F5ebd890292befe0019054973%2Ffiles%2Fuuid%2Fdocument.pdf"
`$([Environment]::NewLine)
# # Excluir um arquivo

<mark style="color:red;">`DELETE`</mark> `https://api.chatcase.com/v3/files`Apaga um arquivo pela sua localização. Se o arquivo for uma imagem, a miniatura associada (se existir) também será excluída automaticamente. O sistema verifica tanto os serviços de armazenamento primário quanto os de reserva.

Parâmetros de Consulta

Nome , Tipo , Descrição
---- -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O caminho do arquivo (URL codificado). Exemplo:`uploads/users/65c5f3599faf2d04cd7da528/images/photo.jpg` or `uploads/projects/65c5f3599faf2d04cd7da528/files/uuid/logo.png`□

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 File deleted successfully" %}

```
{
  "message": "File deleted successfully",
  "filename": "uploads/users/65c5f3599faf2d04cd7da528/images/photo.jpg"
}
```

{% endtab %}

{% tab title="400 Bad request - Path parameter missing or invalid" %}

```
{
  "success": false,
  "error": "Path parameter is required"
}
```

{% endtab %}

{% tab title="404 File not found" %}

```
{
  "success": false,
  "error": "File not found."
}
```

{% endtab %}

{% tab title="500 Error deleting file" %}

```
{
  "success": false,
  "error": "Error deleting file."
}
```

{% endtab %}
{% endtabs %}Exemplo (apagar a foto do usuário):

```
curl -v -X DELETE \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/files?path=uploads%2Fusers%2F65c5f3599faf2d04cd7da528%2Fimages%2Fphoto.jpg"
`$([Environment]::NewLine)
Exemplo (excluir o ativo do projeto):

```
curl -v -X DELETE \
  -u redacted@example.invalid:password \
  "https://api.chatcase.com/v3/files?path=uploads%2Fprojects%2F65c5f3599faf2d04cd7da528%2Ffiles%2Fuuid%2Flogo.png"
`$([Environment]::NewLine)
# # Códigos de Erro

* **400**: Pedido incorreto - Arquivo inválido, parâmetros ausentes ou erro de upload
* **403**: Proibido - Extensão de arquivo não permitida, verificação de conteúdo falhou, ou permissões insuficientes
* **404**: Não encontrado - Arquivo ou recurso não encontrado
* **413**: Carga útil muito grande - Arquivo excede o tamanho máximo de upload (configurado via`MAX_UPLOAD_FILE_SIZE`variável de ambiente)
* **500**: Erro interno do servidor - Erro do servidor durante as operações do arquivo

# # Verificação de Conteúdo do Arquivo

Todos os arquivos carregados são verificados para garantir que o conteúdo do arquivo corresponde ao tipo MIME declarado. Isso previne problemas de segurança detectando tipos de arquivo inigualáveis.

# # Geração de miniaturas

Imagens carregadas como ativos ou avatares de usuário/bot geram automaticamente miniaturas de 200x200 pixels. As miniaturas são armazenadas com o padrão`thumbnails_200_200-{original_filename}`e são automaticamente excluídos quando o arquivo principal é excluído.
