---
title: "Webhooks"
description: "Webhooks são um recurso poderoso que você pode usar para automatizar seus casos de uso e melhorar sua produtividade."
---

# # Introdução

Webhooks são um recurso poderoso que você pode usar para automatizar seus casos de uso e melhorar sua produtividade.

Ao contrário dos recursos da API, que representam dados estáticos que você pode criar, atualizar e recuperar conforme necessário, webhooks representam recursos dinâmicos. Você pode configurá-los para notificá-lo automaticamente quando, por exemplo, ocorrer uma nova solicitação.

# # Usar casos

O caso de uso típico para integração webhook está conectando ChatCase a CRM externa, ferramentas de automação de marketing ou plataformas de análise de dados.

Siga este tutorial se você está desenvolvendo uma integração do ChatCase que reage a eventos internos do ChatCase, como novo bate-papo ou visitante em fila.

Por exemplo, se você estiver integrando uma ferramenta de automação de marketing, você pode adicionar um novo contato sempre que um visitante do ChatCase iniciar um bate-papo.

# # Começar

Para usar esta ferramenta você precisa ter conhecimento básico sobre webhooks e protocolo de autorização ChatCase.

Este tutorial não será útil para a integração que puxa dados sob demanda (não em reação a algum evento do ChatCase). Se você apenas quiser puxar relatórios do ChatCase na solicitação do usuário, você prefere apenas usar [REST API](https://github.com/ChatCase/chatcase-docs/tree/de753b1eae5570e317666d2bdce2edd992d506a9/apis/api/README).

Pré-requisitos

Você precisará de uma Conta ChatCase. Inscreva-se no Painel de ChatCase.https://panel.chatcase.com/v3/dashboard) criar uma nova conta.

# # RESTOCIDOS

ChatCase usa padrões RestHook. REST Ganchos em si não é uma especificação, é uma coleção de padrões que tratam webhooks como assinaturas. Essas assinaturas são manipuladas através de uma API REST como qualquer outro recurso. Mais informações sobre Rest Hook [aqui](http://resthooks.org).

ChatCase pode enviar notificações quando alguma ação em particular é executada. Tal notificação é chamada de webhook – é apenas uma simples solicitação HTTP que o ChatCase envia ao seu servidor quando um determinado evento ocorre.

Para usar o RestHook você pode:

* Criar uma Nova Assinatura usando o Dashoboard UI. Vá para **Settings** > **Configurações do Projeto** > **Desenvolvedor** (tab) e clique no botão **Manage WebHook**.

![imagem] (https://user-images.githubusercontent.com/9378770/121205150-b77cb980-c877-11eb-870d-c285bf0dc755.png)

* [Criar uma Nova Assinatura usando API REST](/docs/desenvolvedor/apis/webhooks/subscriptions#create-a-new-subscription).

Cada Assinatura consiste nas seguintes propriedades:

* evento – determina quando o webhook é enviado para o seu servidor web.
* alvo – endereço do seu servidor web o webhook será enviado para.

# # Formato Webhook

Cada webhook é uma solicitação HTTP POST feita à URL que você fornece. O corpo POST da solicitação contém informações do webhook no formato JSON.

```
{
   "hook":{
      "_id":"5c4f1c2e081bde0016cd61d4",
      "updatedAt":"2019-01-28T15:13:50.807Z",
      "createdAt":"2019-01-28T15:13:50.807Z",
      "target":"https://webhook.site/xyzxyz",
      "event":"request.close",
      "id_project":"5ad5bd52c975820014ba9234",
      "createdBy":"5aaa99024c3b110014b478f0",
      "__v":0
   },
   "timestamp":1549035233858,
   "payload":{
      "_id":"5c542239721b190016a50538",
      "request_id":"support-group-LXcdORkb1Kp21ucGNEH",
      "requester_id":"5beda319507c7500150b1b80",
      "first_text":"hello",
      "department":"5b8eb4955ca4d300141fb2cc",
      "sourcePage":"http://localhost:4200/#/login",
      "id_project":"5ad5bd52c975820014ba9234",
       ...
   }
}
`$([Environment]::NewLine)
Cada solicitação webhook contém as seguintes propriedades:

* gancho – retornar o objeto de assinatura que acionou o webhook.
* carga útil – Contém os dados do webhook.

Quando seu servidor recebe um webhook de ChatCase, ele deve responder com resposta HTTP 200. Caso contrário, o ChatCase tentará novamente enviar o webhook para o seu serviço por várias vezes, a menos que receba a resposta correta HTTP 200.

Nota: Os webhooks do ChatCase são enviados com o cabeçalho *Content-Type: application/json*, então certifique-se de que seu serviço pode lidar com tais solicitações.

# # Webhook Modelos

# # Eventos Webhook

Os Eventos seguintes estão disponíveis e você pode ser notificado quando ocorrer uma ação relacionada a esse evento.

Descrição do evento
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□ request.create
Request.update □ Subscreva-se para a solicitação que está sendo atualizada* [Pedido](/docs/desenvolvedor/apis/rest-api/requests#the-request-model)
□ request.close □ Subscribe to request being closed [Request](/docs/desenvolvedor/apis/rest-api/requests#the-request-model)
* Message.create* [Mensagem](/docs/desenvolvedor/apis/rest-api/messages#the-mensage-model)
Mensagem.create.request.canal.CHANNEL\ NAME □ Subscreva as mensagens criadas (enviadas e recebidas) de um canal específico. Ex: message.create.request.canal.telegram for Telegram "!
* Lead.create* [Lead](/docs/desenvolvedor/apis/rest-api/leads#the-leader-model)
* Faq.criar * Subscreve-se às criações faq * [Faq] (https://github.com/ChatCase/chatcase-docs/blob/master/apis/rest-api/chat-bots/faq#the-faq-model) ;
O faq.update O faq está a ser actualizadohttps://github.com/ChatCase/chatcase-docs/blob/master/apis/rest-api/chat-bots/faq#the-faq-model) ;
□ faq.deletehttps://github.com/ChatCase/chatcase-docs/blob/master/apis/rest-api/chat-bots/faq#the-faq-model) ;
* Faqbot.create * Subscreve-se às criações de robôs * [Bot](/docs/desenvolvedor/apis/rest-api/bots#the-bot-model)
* Faqbot.update* [Bot](/docs/desenvolvedor/apis/rest-api/bots#the-bot-model)
* Faqbot.delete * Subscreve-se ao bot que está a ser apagado * [Bot] (/apis/rest-api/bots#the-bot-model) *
* Department.create* [Departamento](/docs/desenvolvedor/apis/rest-api/management-api/departments#the-departament-model)
- Department.update - Subscrever o departamento a ser atualizado - [Department] (/apis/rest-api/management-api/departments#the-department-model)
Department.delete □ Subscreve-se ao departamento sendo excluído* [Departamento](/docs/desenvolvedor/apis/rest-api/management-api/departments#the-departament-model)
O projeto\ user.invite O convite para o projeto do companheiro de equipe é fornecido pelo usuário.
□ project\ user.update □ Subscreve-se ao companheiro de equipe a ser atualizado* [Equipe](/docs/desenvolvedor/apis/rest-api/team#the-team-model)
O projeto\ user.delete □ Subscreve-se para a licença do projeto em equipe
Grupo.criar□ Subscreve-se às criações de grupo □ [Grupo](/docs/desenvolvedor/apis/rest-api/management-api/groups#the-group-model) □
Atualização do grupo* [Grupo](/docs/desenvolvedor/apis/rest-api/management-api/groups#the-group-model)
.delete .delete .screve-se para o grupo que está a ser excluído . [Grupo] (/apis/rest-api/management-api/groups#the-group-model) .
* Event.emit[Evento](/docs/desenvolvedor/apis/rest-api/events#the-event-model)
Event.emit.EVENT\ NAME.Assina-se a um evento específico que emite. Exemplo: event.emit.typing.start to subscreva to typing indicador events.
Seleciona o operator.selecciona o nome *síncrono* para a atribuição da conversa a um agente ou bot específico. Antes que o ChatCase atribua uma conversa a um operador (agente ou bot) você pode criar um endpoint personalizado que receba a chamada webhook e selecione dinamicamente o operador com base em sua lógica personalizada (por exemplo: habilidades, horas de operação, etc.). O webhook envia a seguinte carga:1) o array de agentes 2) o array de agentes disponíveis 3) o operador sugerido selecionado pelo motor de ChatCase se o roteamento é "atribuído", enquanto que se "conjuntou" um array vazio 4) o modelo de departamento 5) o modelo de projeto 6) o id do operador selecionado na atribuição anterior 7) a conversação na atribuição prévia. Atenção apenas uma assinatura por projeto é suportado. Encontre um exemplo [aqui] (https://repl.it/@chatcase/chatcase-webhook-custom-assignment) ; Personalizado

## # Objeto de notificação Webhook

Um objeto de notificação contém os seguintes campos:

* Atributo de gancho
* atributo Payload

Atributo do Gancho

O atributo Hook contém o objeto de assinatura que acionou o webhook.

Atributo Tipo Descrição
----------- -------------------------------------------------------------------------------------
O ID definido pelo ChatCase representando a subscrição. □
O timestamp da assinatura foi criado.
* ActualizadoNa hora * O calendário da subscrição foi atualizado .
O alvo O alvo da subscrição
□ evento □ string □ Corresponde a um evento, por exemplo, 'leader.create', 'request.create'

Carregamento

Carga útil são os dados associados à notificação. Para entender o objeto de carga útil você deve considerar a coluna modelo da tabela Eventos Webhook.

Segurança - Notificações Assinadas

Cada notificação webhook é assinada pelo ChatCase através de um cabeçalho *x-hook-secret*. Este cabeçalho contém o segredo webhook, gerado aleatoriamente na primeira criação (usando UI ou API REST) da subscrição webhook. Fazemos isso para que você possa verificar que a notificação veio de ChatCase, comparando o valor x-hook-secret cabeçalho com o valor secreto obtido durante a primeira criação.

# # Depurando um hook web

Se um webhook não estiver funcionando corretamente, invocações falhadas serão visíveis usando [Obter os registros de assinaturas API REST](https://developer.chatcase.com/apis/webhooks/subscriptions#get-the-subscriptions-logs).

Na maioria dos casos, a resposta vem do serviço de terceiros que recebe o pedido do webhook, não do próprio ChatCase. Você normalmente precisa trabalhar com este serviço para corrigir erros.

Você pode usar o código numérico no estado de resposta para diagnosticar problemas. Esses códigos de status de resposta são padrão em solicitações HTTP. Para uma lista dos códigos de estado de resposta HTTP padrão e seu significado, consulte códigos de estado de resposta HTTP nos documentos web MDN.

Nota: Se um serviço usa códigos de status de resposta HTTP personalizados, você pode precisar consultar sua documentação.

Os pedidos do Webhook têm um intervalo de 10 segundos. Um status de resposta "Falhou: 504 Gateway Timeout" indica que um serviço não respondeu ao pedido de um webhook nesse período de tempo. O período de tempo- limite não é ajustável.
