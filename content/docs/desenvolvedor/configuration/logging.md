---
title: "Configurar o sistema de registro"
description: "ChatCase usa Winston (https://github.com/winstonjs/winston) como biblioteca de registro. O servidor ChatCase está configurado com os seguintes transportes :"
---

ChatCase usa [Winston] (https://github.com/winstonjs/winston) como biblioteca de registro. O servidor ChatCase está configurado com os seguintes transportes :

* o console
* registra arquivos em pasta /logs/app.log

# # Configurar o nível de log

O nível padrão de log é INFO. Se você quiser alterar o nível de log use o`LOG_LEVEL`propriedade ambiental como segue:

```
LOG_LEVEL="verbose"
`$([Environment]::NewLine)
# # Habilitar logs para MongoDB

Opcionalmente, você pode escrever os logs no banco de dados MongoDB (adicionando um transporte MongoDB a Winston) com a seguinte propriedade de ambiente:

```
WRITE_LOG_TO_MONGODB="true"
`$([Environment]::NewLine)
Você também pode alterar (o valor padrão é INFO) o nível para o transporte MongoDB com a seguinte propriedade:

```
LOG_MONGODB_LEVEL="error"
```
