---
title: "Como enviar modelos WhatsApp via ChatCase Webhook e HubSpot Workflow"
description: "Introduçãoa href=\"intro\" id=\"intro\"/aVocê precisa definir mensagens WhatsApp automáticas sendo enviadas para seu público selecionado com base no estado do acordo em que seu contato"
---

Introdução<a href="#intro" id="intro"></a>Você precisa definir mensagens WhatsApp automáticas sendo enviadas para seu público selecionado com base no estado do acordo em que seu contato está? Siga estes 5 passos simples para alcançar um fluxo completo que envolva uma integração de fluxo de trabalho HubSpot com uma ferramenta de automação de conversação, como o ChatCase.

# # # 1. Conecte o WhatsApp API de negócios ao seu projeto ChatCase<a href="#id-1-connect-whatsapp-business-api-to-your-chatcase-project" id="id-1-connect-whatsapp-business-api-to-your-chatcase-project"></a>Siga o guia oficial do ChatCase para conectar sua API WhatsApp Business:\
[Guia de integração do WhatsApp do ChatCase](/docs/guia/apps-and-integrations/whatsapp-business)

Uma vez conectado, você será capaz de enviar e gerenciar mensagens do WhatsApp do ChatCase.

<figure><img src="/files/ZQpBRPXZyHTUz5CwmrxJ" alt=""><figcaption></figcaption></figure>## # 2. Crie um Webhook em ChatCase Design Studio<a href="#id-2-create-a-webhook-in-chatcase-design-studio" id="id-2-create-a-webhook-in-chatcase-design-studio"></a>Vá para a seção **Bots** em seu console ChatCase.

Clique em **Criar do zero**.

No tipo dropdown, escolha **Webhook**.

Uma vez dentro do Design Studio, encontre o botão **Webhook** no painel.

Clique nos três pontos ao lado do botão webhook e selecione ** Gerar URL**.

Copie o URL gerado: você o usará mais tarde no HubSpot.

<figure><img src="/files/yuBVxjADWmbBwHXp1cgJ" alt=""><figcaption></figcaption></figure>### 3. Configure a Ação Webhook em seu Bot[#] (https://gethelp.chatcase.com/articles/how-to-send-whatsapp-templates-via-chatcase-webhook-and-hubspot-workflow/#3-configure-the-webhook-action-in-your-bot) <a href="#id-3-configure-the-webhook-action-in-your-bot" id="id-3-configure-the-webhook-action-in-your-bot"></a>Conecte uma ação **Web Response** ao seu botão Webhook.

Configurar o bloco Web Response com:

Estado de resposta: **200**

Corpo de resposta (JSON):

```
{
  "phone":
}
`$([Environment]::NewLine)
Isto funciona como um porteiro para garantir que apenas os números de telefone válidos prossigam.

<figure><img src="/files/9lQHgLrIqhl1p6IQYQZz" alt=""><figcaption></figcaption></figure># # # 4. Configure a ação de envio do modelo do WhatsApp[#] (https://gethelp.chatcase.com/articles/how-to-send-whatsapp-templates-via-chatcase-webhook-and-hubspot-workflow/#4-configure-the-whatsapp-template-sending-action) <a href="#id-4-configure-the-whatsapp-template-sending-action" id="id-4-configure-the-whatsapp-template-sending-action"></a>No menu **Ações** à esquerda, sob a guia **Integrações**, selecione **Enviar WhatsApp**.

Arraste e solte esta ação logo após o bloco Web Response.

Editar a ação Enviar o WhatsApp:

** ID do telefone**: Insira o ID do número de telefone disponível na sua conta Meta for Developers.

**Template**: Selecione o modelo WhatsApp já aprovado em sua conta Meta.

** Número de telefone do destinatário**: Inserir a variável .

<figure><img src="/files/IGf4xH2EZeOFgAxVWK0W" alt=""><figcaption></figcaption></figure>### # Adicionar Blocos de Resposta Web para Sucesso e Caminhos de Erro[#](https://gethelp.chatcase.com/articles/how-to-send-whatsapp-templates-via-chatcase-webhook-and-hubspot-workflow/#add-web-response-blocks-for-success-and-error-paths) <a href="#add-web-response-blocks-for-success-and-error-paths" id="add-web-response-blocks-for-success-and-error-paths"></a>Conecte dois blocos **Web Response** às saídas "Sucesso" e "Outro" da ação Enviar WhatsApp.

Para o porto ** Sucesso**:

Estado de resposta: **200**

Corpo de resposta (JSON):

```
{
  "success": true,
  "message": "WhatsApp message sent"
}
```

<figure><img src="/files/T8iRJm3zlZeByxGX3GiH" alt=""><figcaption></figcaption></figure>Para o porto **Outro**:

Estado de resposta: **400**

Corpo de resposta (JSON):

```
{
  "success": false
}
```

<figure><img src="/files/t2cHL045jofAVDaZc6qB" alt=""><figcaption></figcaption></figure>## # 5. Configure o HubSpot para ativar o WhatsApp Webhook[#] (https://gethelp.chatcase.com/articles/how-to-send-whatsapp-templates-via-chatcase-webhook-and-hubspot-workflow/#5-configure-hubspot-to-trigger-the-whatsapp-webhook) <a href="#id-5-configure-hubspot-to-trigger-the-whatsapp-webhook" id="id-5-configure-hubspot-to-trigger-the-whatsapp-webhook"></a>Entre na sua conta HubSpot.

Ir para **Automation** > ** Fluxos de trabalho** (nota: este recurso não está disponível em planos livres).

Clique no botão laranja **Criar fluxo de trabalho** no canto superior direito.

Escolha um fluxo de trabalho **Deal-based**.

Prepara o gatilho<a href="#set-up-the-trigger" id="set-up-the-trigger"></a>Para o gatilho de inscrição, selecione:

**Terminou: Valor da propriedade alterado**

** Nome da propriedade**: Deal Stage

**Novo Valor**: Contrato Enviado (ou qualquer estágio em que você queira a mensagem ativada).

<figure><img src="/files/tS3Z2iMUzZMIk9x2jIEj" alt=""><figcaption></figcaption></figure># # # Adicione uma ação Webhook # #https://gethelp.chatcase.com/articles/how-to-send-whatsapp-templates-via-chatcase-webhook-and-hubspot-workflow/#add-a-webhook-action) <a href="#add-a-webhook-action" id="add-a-webhook-action"></a>Clique no ícone plus abaixo do gatilho de inscrição.

Selecione **Enviar um Webhook**.

Configuração:

Método: **POST**

URL: Colar o URL webhook que você copiou do ChatCase Design Studio.

Autenticação: **Nenhuma**

Request body: Selecione **Escolha propriedades para incluir **, e adicione:

**Deal name = Deal name**

**userPhone = número WhatsApp** (termine com sua propriedade de contato HubSpot para números WhatsApp).

<figure><img src="/files/hNxJiItUHbtxidXel4NN" alt=""><figcaption></figcaption></figure>Teste o fluxo de trabalhohttps://gethelp.chatcase.com/articles/how-to-send-whatsapp-templates-via-chatcase-webhook-and-hubspot-workflow/#test-the-workflow) <a href="#test-the-workflow" id="test-the-workflow"></a>Mova um acordo de teste para o estágio "Contrato Enviado" no seu gasoduto.

O webhook deve disparar, enviando o modelo WhatsApp através do ChatCase.

Uma vez que a mensagem é enviada, o chatbot configurado no ChatCase irá automaticamente assumir a conversa com base na base de conhecimento que você configurou.

Confira nosso vídeo sobre esta integração (não se esqueça de ativar as legendas em inglês) [aqui](https://youtu.be/1frIJQROZSw).

[Acessar recurso externo](<https://www.youtube.com/watch?v=1frIJQROZSw>)
