---
title: "Como integrar o ActiveCampaign com o ChatCase"
description: "Introduçãohttps://gethelp.chatcase.com/articles/how-to-integrate-activecampaign-with-chatcase/intro) a href=\"intro\" id=\"intro\"/aEste tutorial irá guiá-lo através da integração do A"
---

Introduçãohttps://gethelp.chatcase.com/articles/how-to-integrate-activecampaign-with-chatcase/#intro) <a href="#intro" id="intro"></a>Este tutorial irá guiá-lo através da integração do ActiveCampaign com o ChatCase para enviar mensagens WhatsApp desencadeadas por um fluxo de trabalho de automação. Siga estes passos:

***

**Passo 1: Criar um Novo Bot em ChatCase**[**#**](https://gethelp.chatcase.com/articles/how-to-integrate-activecampaign-with-chatcase/#step-1-create-a-new-bot-in-chatcase)

1. Entre no seu painel **ChatCase**.
2. Criar um novo bot:
* Você pode construir um bot do zero ou importar um usando o modelo fornecido. [Importar este bot] (https://chatcase.com/community/getchatbotinfo/chatbotId/673df602e43c060013805c05-WhatsApp-Broadcast-w--Active-Campaign).
3. Uma vez que o bot é configurado, prossiga para configurar ações.

***

**Passo 2: Configurar a Ação do WhatsApp em ChatCase**[**#**](https://gethelp.chatcase.com/articles/how-to-integrate-activecampaign-with-chatcase/#step-2-configure-the-whatsapp-action-in-chatcase)

1. Navegue para o menu **Ações** dentro de suas configurações de bot.
2. Selecione a ação **Enviar WhatsApp** da lista.
3. Preencha as seguintes informações necessárias:
* ** ID do número de telefone**:\
Obtenha este ID da plataforma **Meta for Developers** onde você instalou seu aplicativo WhatsApp. Você pode encontrá-lo na seção ** Configuração API**, como mostrado abaixo:\
\&#xNAN;*(Inserir aqui imagem relevante)*
* ** WhatsApp Template**:\
Escolha qualquer modelo WhatsApp pré-aprovado que tenha criado no Meta. Se você precisar de ajuda para criar modelos, [veja mais sobre modelos aqui](/docs/guia/apps-and-integrations/whatsapp-business/how-to-use-whatsapp-templates-with-chatcase).
* ** Variáveis**: Insira os placeholders relevantes, como o número de telefone do destinatário e o primeiro nome, para mensagens dinâmicas.

<figure><img src="/doc-images/lVaOqBlrTYXtYN81mpSO.png" alt=""><figcaption></figcaption></figure>***

**Passo 3: Criar uma Automação no ActiveCampaign**[**#**](https://gethelp.chatcase.com/articles/how-to-integrate-activecampaign-with-chatcase/#step-3-create-an-automation-in-activecampaign)

1. Entre na sua conta **ActiveCampaign**.
2. Vá para a seção **Automation** e crie um novo fluxo de trabalho.
3. Selecione seu desejado **Trigger** e escolha a opção **Webhook** na lista de fluxo de trabalho. Isto permitirá ao ActiveCampaign chamar o ChatCase quando as condições de disparo forem satisfeitas.

<figure><img src="/doc-images/NJ83sQgfRanUfzDZfHSe.png" alt=""><figcaption></figcaption></figure>***

**Passo 4: Configure o URL do Webhook no ActiveCampaign**[**#**](https://gethelp.chatcase.com/articles/how-to-integrate-activecampaign-with-chatcase/#step-4-set-up-the-webhook-url-in-activecampaign)

Para integrar o ActiveCampaign com o ChatCase, você precisa gerar um URL Webhook para o seu bot:

Usar o URL base:

Anexar os seguintes detalhes para completar o URL do Webhook:

* ** ID do projeto**: ID do projeto ChatCase.
* **Chatbot ID**: A identificação do chatbot que quer activar.
* **Block Name**: O nome do bloco para ativar (normalmente "start").

Insira esta URL Webhook no campo webhook do ActiveCampaign no seu fluxo de trabalho de automação.

***

**Exemplo: URL completo do Webhook**[**#**](https://gethelp.chatcase.com/articles/how-to-integrate-activecampaign-with-chatcase/#example-complete-webhook-url)

Suponha o seu:

* ID do projeto: 12345
* Chatbot ID: 67890

Seu URL do Webhook será assim:

```
https://api.chatcase.com/v3/modules/tilebot/block/12345/67890/start
`$([Environment]::NewLine)
***

Com esta integração, você conectou com sucesso o ActiveCampaign e o ChatCase. Agora, sempre que a automação disparar fogos no ActiveCampaign, seu bot ChatCase enviará uma mensagem WhatsApp usando o modelo configurado.

***

Se tiver alguma questão ou tiver problemas, sinta-se à vontade para [chegar à Comunidade ChatCase](https://chatcase.com/community/) para apoio!

```
https://api.chatcase.com/v3/modules/tilebot/
```
