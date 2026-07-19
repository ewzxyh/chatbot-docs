---
title: "Mensagens de conversação APIs tips"
description: "Descubra como obter mensagens de conversa usando APIs. Sincronização em tempo real é suportada através de webhooks"
---

Descubra como obter mensagens de conversa usando APIs. Sincronização em tempo real é suportada através de webhooks

# # Mensagens APIs REST

Você pode usar as seguintes APIs para obter todas as mensagens relativas a uma conversa:

<https://developer.chatcase.com/apis/rest-api/messages#get-the-messages-of-a-request-by-id>Você receberá todas as mensagens de conversa.

> NOTA: Você deve remover todas as mensagens onde o remetente: “system” (highlighted abaixo) se você só precisa de mensagens de usuários finais/humanos/chatbot

![](https://github-production-user-asset-6210df.s3.amazonaws.com/32564846/303445718-0d941d21-38f2-4b36-adb6-f67e5d38c5b7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\&X-Amz-Credential=[REDACTED_CLOUD_ACCESS_KEY]%2F20240208%2Fus-east-1%2Fs3%2Faws4_request\&X-Amz-Date=20240208T183915Z\&X-Amz-Expires=300\&X-Amz-Signature=e3c8ad2b2e8e76a3d7bab4474ccab01fadbe515afea5ecf2770513440224f3b3\&X-Amz-SignedHeaders=host\&actor_id=32564846\&key_id=0\&repo_id=142124434)

Se você precisar apenas dos atributos configurados durante a conversa você pode usar o seguinte endpoint:

<https://api.chatcase.com/v3/modules/tilebot/ext/parameters/requests/**REQUEST-ID>\*\*

Defina no campo do cabeçalho “Autenticação” o símbolo JWT de um companheiro de equipe Admin do projeto como no exemplo seguinte do Postman:

![](https://github-production-user-asset-6210df.s3.amazonaws.com/32564846/303435147-04791c6a-ae0d-45db-989d-b9373642e7b7.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\&X-Amz-Credential=[REDACTED_CLOUD_ACCESS_KEY]%2F20240208%2Fus-east-1%2Fs3%2Faws4_request\&X-Amz-Date=20240208T184001Z\&X-Amz-Expires=300\&X-Amz-Signature=6c68e28d7da6f23e5384a3e0175908d9ebfb36d501b7222f771946a4a62939e2\&X-Amz-SignedHeaders=host\&actor_id=32564846\&key_id=0\&repo_id=142124434)

# # Mensagens em tempo real

Você também pode receber mensagens em tempo real (para fins de sincronização) configurando o evento Webhook fornecido “Message.create” em *Projeto-> Zona de desenvolvimento*

![](https://github-production-user-asset-6210df.s3.amazonaws.com/32564846/303435371-41c4bc70-950a-4c3c-a657-b0ae20bce4bf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256\&X-Amz-Credential=[REDACTED_CLOUD_ACCESS_KEY]%2F20240208%2Fus-east-1%2Fs3%2Faws4_request\&X-Amz-Date=20240208T184024Z\&X-Amz-Expires=300\&X-Amz-Signature=1d99be02d4777afc1b21f2231d4cd9fbb965634c06da3f948d0becf44c0a5bc0\&X-Amz-SignedHeaders=host\&actor_id=32564846\&key_id=0\&repo_id=142124434)
