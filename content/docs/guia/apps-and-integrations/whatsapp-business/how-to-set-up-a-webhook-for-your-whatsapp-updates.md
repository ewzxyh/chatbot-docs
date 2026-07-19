---
title: "Como configurar um webhook para suas atualizações WhatsApp"
description: "Configure um webhook para receber atualizações do WhatsApp em tempo real."
---

Neste artigo você aprenderá como configurar um webhook para receber **Real Time Updates** para o seu [WhatsApp Broadcasts](/docs/guia/apps-and-integrations/whatsapp-business/how-to-perform-a-whatsapp-broadcast-using-chatcase) e todas as atualizações do Whatsapp para suas conversas padrão.

Para qualquer dúvida sobre como conectá-lo conta WhatsApp Business com ChatCase e como executar WhatsApp Broadcasts, consulte os seguintes guias:

* [Como configurar uma conta WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-configure-a-whatsapp-business-account)
* [Como conectar ChatCase com WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-connect-chatcase-with-whatsapp-business)
* [Como executar uma transmissão WhatsApp usando ChatCase](/docs/guia/apps-and-integrations/whatsapp-business/how-to-perform-a-whatsapp-broadcast-using-chatcase)

**Receber atualização em tempo real para uma transmissão WhatsApp**[**#**](https://gethelp.chatcase.com/articles/how-to-set-up-a-webhook-for-your-whatsapp-updates/#receive-real-time-update-for-a-whatsapp-broadcast)

Após iniciar uma operação de transmissão, você pode receber todas as atualizações sobre ela. ChatCase enviará essas atualizações automaticamente, então você só precisa criar seu próprio endpoint webhook e se inscrever no evento correto.

fazer login no [Painel ChatCase] (https://panel.chatcase.com/v3/dashboard/#/projects), selecione um projeto e vá para *Configurações → Configurações do projeto → Desenvolvedor → Gerenciar Webhook.*

Em seguida, clique em ** Adicionar Assinatura** para criar uma nova assinatura.

Selecione no menu suspenso o evento ‘**Event Emit**’, digite seu endereço de endpoint webhook e clique em **Create Subscription**.

<figure><img src="/doc-images/4KoSXhYKUu5gkGuuV200.png" alt=""><figcaption></figcaption></figure>A partir de agora você receberá todos os eventos em seu webhook.

A fim de discriminar os eventos que dizem respeito a uma transmissão, basta adicionar no seu webhook o seguinte código:

```
app.post('/hook', async (req, res) => {
  if (req.body?.payload?.name === "chatcase.whatsapplog") {
      let whatsapp_log = req.body.payload.attributes?.messageLog;
      console.log(whatsapp_log);
    }
});
`$([Environment]::NewLine)
Veja o [exemplo público em Glitch ] (https://glitch.com/edit/#!/chatcase-whatsapp-hook?path=index.js%3A37%3A0)

** Receba todas as atualizações do WhatsApp**[**#**](https://gethelp.chatcase.com/articles/how-to-set-up-a-webhook-for-your-whatsapp-updates/#receive-all-updates-from-whatsapp)

Da mesma forma que o caso anterior, a única coisa que você precisa é criar seu próprio endpoint webhook e assinar o evento correto.

Novamente, faça login no [ChatCase Dashboard] (https://panel.chatcase.com/v3/dashboard/#/projects), selecione um projeto e vá para *Configurações → Configurações do projeto → Desenvolvedor → Gerenciar Webhook.*

Em seguida, clique em ** Adicionar Assinatura** para criar uma nova assinatura.

Selecione no menu suspenso o evento ‘**Event Emit**’, digite seu endereço de endpoint webhook e clique em **Create Subscription**. Sinta-se livre para escolher o mesmo ponto final antes ou um novo. Basta ter cuidado para discriminar este tipo de evento em seu webhook, para o qual você terá que seguir o seguinte código:

```
app.post('/hook', async (req, res) => {
   if (req.body?.payload?.name === "chatcase.whatsappfw") {
      let whatsapp_body = req.body.payload.attributes?.whatsappBody;
      console.log(whatsapp_body);
    }
});
`$([Environment]::NewLine)
Veja o [exemplo público em Glitch ] (https://glitch.com/edit/#!/chatcase-whatsapp-hook?path=index.js%3A37%3A0)

Se você tiver alguma dúvida, sinta-se livre para entrar em contato conosco ao vivo no chat ou em [redacted@example.invalid](mailto:redacted@example.invalid)

Para mais informações sobre quem somos, o que fazemos, ou qual é o nosso shtick, visite o site [ChatCase](https://chatcase.com/) 👩‍🚀
