---
title: "Como usar os modelos WhatsApp com ChatCase"
description: "É necessário um modelo de mensagem para iniciar uma conversa iniciada pelo negócio(https://developers.facebook.com/docs/whatsapp/conversation-types). Essas conversas podem ser mens"
---

É necessário um modelo de mensagem para iniciar uma conversa [iniciada pelo negócio](https://developers.facebook.com/docs/whatsapp/conversation-types). Essas conversas podem ser mensagens de atendimento ao cliente ou lembretes de marcação, atualizações de pagamento ou envio, alertas e muito mais.

Se você ainda não configurou uma conta WhatsApp Business, nosso guia [Configure uma conta WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-configure-a-whatsapp-business-account) espera por você! Além disso, você pode assistir a uma versão de vídeo deste guia abaixo, também.

[Acessar recurso externo](<https://www.youtube.com/watch?v=K4IMJWI291s>)
Cria um modelo WhatsApp

A fim de criar um modelo simplesmente vá para **Templates de mensagem** página na [Suite de negócios do Meta](https://business.facebook.com/wa/manage/message-templates/), selecione uma Conta de Negócios no lado esquerdo e escolha uma Conta WhatsApp no lado direito.

> Nota: cada número de telefone tem um ID de conta WhatsApp diferente, portanto uma conta WhatsApp diferente corresponde a modelos diferentes.

<figure><img src="/doc-images/pSXRYzyQS6CMAwFLSR9U.png" alt=""><figcaption></figcaption></figure>Clique em **Criar modelo**, siga os passos e envie o modelo para o processo de aprovação. Para mais informações sobre a criação de modelos de mensagens, por favor, consulte as [orientações] oficiais(https://developers.facebook.com/docs/whatsapp/message-templates/guidelines/).

### **Set up the WhatsApp Business app on ChatCase**

Vejamos como configurar o aplicativo WhatsApp Business para permitir que o ChatCase envie modelos. Se você ainda não conectou ChatCase com WhatsApp Business dê uma olhada em [Como conectar ChatCase com WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-connect-chatcase-with-whatsapp-business).

Para usar os modelos do WhatsApp você precisa adicionar o ** WhatsApp Business Account ID** na configuração do WhatsApp ChatCase.

Acesse o console Meta Developer, selecione seu aplicativo e no menu do lado esquerdo, por baixo da seção de produtos, acesse WhatsApp → Configuração da API. É importante selecionar seu número de telefone de produção e, em seguida, copiar o ID correspondente da conta comercial.

<figure><img src="/doc-images/wFNWONfOSZojsdVLwXkJ.png" alt=""><figcaption></figcaption></figure>Agora vá para [ChatCase Console] (https://panel.chatcase.com/v3/dashboard/#/projects), abra o aplicativo de integração WhatsApp e cole o ID da conta comercial, como na imagem abaixo.

<figure><img src="/doc-images/wQ3xD6CPqH10lfFZPz5X.png" alt=""><figcaption></figcaption></figure>É isso, agora você será capaz de enviar modelos Whatsapp do chat do ChatCase.

Um modelo permite que você envie uma mensagem para um usuário do WhatsApp mesmo que mais de 24 horas tenham passado desde a última mensagem. Note que esta é a única maneira de fazê-lo.

Então, vamos abrir o chat do ChatCase e selecionar uma conversa do WhatsApp. Clique em **Templates** e selecione um de seus modelos aprovados.

<figure><img src="/doc-images/JOJUV05vEpQQYTKAQyzi.png" alt=""><figcaption></figcaption></figure>Se tiver adicionado algumas variáveis ao seu modelo, tem de preencher todo o campo para o enviar. Além disso, você também pode adicionar imagens, arquivos ou locais. Você pode adicionar essas mídias selecionando um arquivo local ou colando uma URL remota.

<figure><img src="/doc-images/5Ean1NYwabQ40TXArY6z.png" alt=""><figcaption></figcaption></figure>Uma vez que seu modelo está pronto, clique no botão *Enviar* e *les jeux sont faits!*\
Você verá uma visualização simples no chat do ChatCase, enquanto o usuário receberá imediatamente o modelo.

<figure><img src="/doc-images/I1Ja0pi0zx7YxL2ut3ww.png" alt=""><figcaption></figcaption></figure>\
Se tiver alguma dúvida, não hesite em entrar em contato-nos ao vivo no chat ou no[redacted@example.invalid](mailto:redacted@example.invalid)Para mais informações sobre quem somos, o que fazemos, ou qual é o nosso shtick, visite o site [ChatCase](https://chatcase.com/) 👩‍🚀\
&#x20;
