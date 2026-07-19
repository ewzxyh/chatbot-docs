---
title: "# Mensagens"
description: "Mensagens"
---

Mensagens

# # Mensagens

Você pode usar a API para obter as informações da mensagem.

O modelo de mensagem

Descrição
----------------- -------- --------------------
O identificador único para a mensagem que é dada pelo ChatCase.
Um identificador único do remetente. Ele pode ser: o identificador do usuário, um identificador de bot ou o usuário do sistema
O remetente nome completo. Pode ser: o nome completo do usuário, o nome do bot ou um alias
Receptor . String . Um identificador único do destinatário. Pode ser: o campo request\ id (id externo) do request
O estado da mensagem: Falhou: -100, ENVIO: 0, ENVIO: 100, ENVIO: 150, RECEBIDO: 200, RETORNADO: 250, SEGUNDO: 300
O texto da mensagem.
□ digite □ String □ O tipo de mensagem. Valores aceitos: texto (por omissão), imagem
Os metadados da mensagem.
Atribuições do objeto Os atributos personalizados que são definidos para a mensagem.
A hora (ISO-8601 data string) em que a mensagem foi criadaated.
O tempo (ISO-8601 data string) quando a mensagem foi atualizada. □
* Criada por * String * O identificador único do criador da linha .
projeto O identificador único do projeto

# # Enviar uma mensagem

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/messages`Permite enviar uma mensagem. Este método também cria uma nova conversa (pedido) se não existisse no momento da chamada.

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador do pedido. Deve seguir este padrão 'support-group-UUID'

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
----------------- --------- ------ ------------------------------------ -----------------------------------------
texto , texto , string , o texto da mensagem
O identificador de departamento selecionado. Aceito apenas na primeira mensagem.
FontePage string A página de origem do pedido. Aceito apenas na primeira mensagem.
língua , corda , a língua do pedido. Aceito apenas na primeira mensagem.□
O usuárioO usuárioO usuárioO usuárioO texto do pedido. Aceito apenas na primeira mensagem.
Os atributos de uma mensagem são os atributos personalizados. Exemplo: atributos = {"custom\ attribute1": "value1"}. Você também pode usar [atributos](#atributos) para ativar recursos avançados. □
. é o tipo de mensagem. valor "texto" para mensagem textual e "imagem" para o envio da mensagem de imagem (você deve definir o campo de metadados). Valores disponíveis: texto (padrão) e imagem.
Os metadados do objeto da imagem são as propriedades da imagem: src é o caminho de origem absoluto da imagem, largura é a largura da imagem, altura é a altura da imagem. Largura e altura são opcionais. Exemplo: metadados = { "src": "<https://www.chatcase.com/wp-content/uploads/2018/03/chatcase-logo.png>", "largura": 200, "altura": 200

{% tabs %}
{% tab title="200 " %}

```
 {
      "_id":"5c81593adf767b0017d1aa68",
      "updatedAt":"2019-03-07T17:47:38.411Z",
      "createdAt":"2019-03-07T17:47:38.411Z",
      "sender":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "senderFullname":"Guest",
      "recipient":"support-group-L_OG76RYhR0XFiMf2PK",
      "text":"hello from api",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "__v":0,
      "status":200
   }
```

{% endtab %}
{% endtabs %}Exemplo de envio de mensagem de texto:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"text":"hello from api"}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/support-group-1234/messages
`$([Environment]::NewLine)
Exemplo de envio da imagem:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '{"text":"Alternative text from api", "type":"image", "metadata": {"src": "https://chatcase.com/chatcase-logo-x1.png", "width": 200, "height": 200}}' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/support-group-1234/messages
`$([Environment]::NewLine)
# # Atributos

Quando você envia uma mensagem, você pode usar os seguintes atributos para ativar recursos avançados:

* atributes.clienttimestamp: use esta propriedade para forçar a hora da mensagem em milissegundos. Este parâmetro é usado pelos clientes (widgets e agentes de bate-papo) para realizar uma reordenação lateral de mensagens com base no valor do campo timestamp. Esta propriedade não garante a ordem de chegada, mas apenas a encomenda ou reordenação do lado do cliente.
* atributos. anexo: use esta propriedade para definir a resposta adicional componenst como respostas rápidas, botões, links, etc (ver:<https://developer.chatcase.com/widget/advanced/widget-json-protocol>)
* atributes.subtype.info: Se "verdadeiro" ele esconde a mensagem para os canais do usuário final (Widget, whatsapp, Telegram, Facebook etc.)
* atributos.microlinguagem: definir esta propriedade para true para habilitar o pré-processador microlinguagem. Você pode encontrar mais informações aqui: [Botões Chatbot, imagens, vídeo](https://docs.chatcase.com/knowledge-base/response-bot-images-buttons-videos-and-more/) e [exemplo microlíngue](https://developer.chatcase.com/external-chatbot/buttons-media-actions-more#microlanguage)
* atributes.disableInputMessage: se true desabilita a mensagem de entrada, até a próxima chegada da mensagem
* atributes.inputMessagePlaceholder: se definido, modifica o placeholder de texto de entrada padrão
* atributes.updateUserEmail and atributes.updateUserFullname: Se definir, o nome completo do usuário e e-mail para o widget. Útil se você definir o nome completo do usuário ou e-mail em um webhook ou serviço externo.

# # Recursos avançados

ChatCase usa o Chat21 como mecanismo de mensagens. Quando você enviar uma mensagem para ChatCase usando a API REST, ChatCase enviará a chamada para a API REST Chat21. Você pode ver como o Chat21 REST Api funciona aqui:<https://github.com/chat21/chat21-cloud-functions/blob/master/docs/api#send-a-message>Você pode ativar recursos de mensagem especiais seguindo este parágrafo:<https://github.com/chat21/chat21-cloud-functions/blob/master/docs/api#message-attributes># # Receba as mensagens de um pedido por ID

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/messages`Fetches as mensagens por seu pedido\ id

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador externo do pedido. □
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
[
   {
      "_id":"5c81593adf767b0017d1aa68",
      "updatedAt":"2019-03-07T17:47:38.411Z",
      "createdAt":"2019-03-07T17:47:38.411Z",
      "sender":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "senderFullname":"Guest",
      "recipient":"support-group-L_OG76RYhR0XFiMf2PK",
      "text":"test56",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "__v":0,
      "status":200
   },
   {
      "_id":"5c81593adf767b0017d1aa69",
      "updatedAt":"2019-03-07T17:47:38.625Z",
      "createdAt":"2019-03-07T17:47:38.625Z",
      "sender":"system",
      "senderFullname":"Bot",
      "recipient":"support-group-L_OG76RYhR0XFiMf2PK",
      "text":"La stiamo mettendo in contatto con un operatore. Attenda...",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"system",
      "__v":0,
      "status":200
   },
  ...
]
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/support-group-L_OG76RYhR0XFiMf2PK/messages
`$([Environment]::NewLine)
# # Obter a mensagem por id pedido e ID mensagem

<mark style="color:blue;">`GET`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/messages/:message_id`Fetche a mensagem por sua identidade

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
* request\ id * string * request\ id campo. É o identificador externo do pedido. □
* mensagem\ id * string * o identificador da mensagem *
O Project ID é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. □

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico

{% tabs %}
{% tab title="200 " %}

```
   {
      "_id":"5c81593adf767b0017d1aa68",
      "updatedAt":"2019-03-07T17:47:38.411Z",
      "createdAt":"2019-03-07T17:47:38.411Z",
      "sender":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "senderFullname":"Guest",
      "recipient":"support-group-L_OG76RYhR0XFiMf2PK",
      "text":"test56",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "__v":0,
      "status":200
   }
```

{% endtab %}
{% endtabs %}Exemplo:

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/support-group-L_OG76RYhR0XFiMf2PK/messages/5c81593adf767b0017d1aa68
`$([Environment]::NewLine)
# # Inserir várias mensagens

<mark style="color:green;">`POST`</mark> `https://api.chatcase.com/v3/:project_id/requests/:request_id/messages/multi`Este método deve ser utilizado para a importação em massa de mensagens. Para casos comuns, use Enviar mensagem REST API

Parâmetros do Caminho

Nome , Tipo , Descrição
------------ ---------------------------------------------------------------------------------------------
projeto\ id & string O projeto\ id é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase
O identificador do pedido. Deve seguir este padrão 'support-group-UUID'

Cabeçalhos

Nome , Tipo , Descrição
----------------- -------- -------------------------------------------
□ Autorização; string; token de autorização. Auth ou JWT básico
□ Tipo de conteúdo : string : use o valor de "aplicação/json"

Pedir corpo

Nome , Tipo , Descrição
-------------- ----------- ----- ------- -------------------------------------------------------------
texto , texto , string , o texto da mensagem
Os atributos de uma mensagem são os atributos personalizados. Exemplo: atributos = {"custom\ attribute1": "value1"}. Você também pode usar [atributos](#atributos) para ativar recursos avançados. □
. é o tipo de mensagem. valor "texto" para mensagem textual e "imagem" para o envio da mensagem de imagem (você deve definir o campo de metadados). Valores disponíveis: texto (padrão) e imagem.
Os metadados do objeto da imagem são as propriedades da imagem: src é o caminho de origem absoluto da imagem, largura é a largura da imagem, altura é a altura da imagem. Largura e altura são opcionais. Exemplo: metadados = { "src": "<https://www.chatcase.com/wp-content/uploads/2018/03/chatcase-logo.png>", "largura": 200, "altura": 200

{% tabs %}
{% tab title="200 " %}

```
 {
      "_id":"5c81593adf767b0017d1aa68",
      "updatedAt":"2019-03-07T17:47:38.411Z",
      "createdAt":"2019-03-07T17:47:38.411Z",
      "sender":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "senderFullname":"Guest",
      "recipient":"support-group-L_OG76RYhR0XFiMf2PK",
      "text":"hello from api",
      "id_project":"5b55e806c93dde00143163dd",
      "createdBy":"SRbb2PfbSFcgICv9VQBcURZeloh1",
      "__v":0,
      "status":200
   }
```

{% endtab %}
{% endtabs %}Exemplo de inserção de várias mensagens:

```
curl -v -X POST -H 'Content-Type: application/json' -u redacted@example.invalid:123456  -d '[{"sender":"bb0d809b-b093-419b-8b48-11a192cc3619","text":"1"},{"sender":"bb0d809b-b093-419b-8b48-11a192cc3619", "text":"2"}]' https://api.chatcase.com/v3/5b55e806c93dde00143163dd/requests/support-group-1234/messages/multi
```
