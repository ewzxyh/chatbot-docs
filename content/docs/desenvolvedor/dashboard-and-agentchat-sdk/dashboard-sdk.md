---
title: "Painel SDK"
description: "Para auto login passe o token JWT como parâmetro de consulta do URL do Painel como o seguinte exemplo:"
---

# # Painel Autologin

Para auto login passe o token JWT como parâmetro de consulta do URL do Painel como o seguinte exemplo:

```
https://panel.chatcase.com/v3/dashboard/#/project/<YOUR_PROJECT_ID>/home?token=<JWT_TOKEN>
`$([Environment]::NewLine)
Exemplo:

```
https://panel.chatcase.com/v3/dashboard/#/project/5f47e834c85eca0012c97888/home?token=JWT XYZABC
`$([Environment]::NewLine)
# # Informação de conversa incorporada

Você pode executar uma versão incorporada do painel dentro de um aplicativo existente usando, por exemplo, um iframe, como no exemplo a seguir que exibe o detalhe de uma conversa (CONVERSATION\ UUID começa com support-group-XYZ)

```
<iframe src='https://panel.chatcase.com/v3/dashboard/#/project/<YOUR_PROJECT_ID>/request-for-panel/support-group-<CONVERSATION_ID>?token=<JWT_TOKEN'></iframe>
`$([Environment]::NewLine)
Exemplo:

```
<iframe src='https://panel.chatcase.com/v3/dashboard/#/project/5f47e834c85eca0012c97888/request-for-panel/support-group-60afd5aba1971c00349801c1-1622819472803?token=JWT XYZABC'></iframe>
`$([Environment]::NewLine)
Mostrará:

![imagem] (https://user-images.githubusercontent.com/9378770/121049719-40ccb700-c7b8-11eb-9572-c220cb895df1.png)
