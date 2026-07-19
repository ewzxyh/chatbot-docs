---
title: "Como conectar ChatCase com WhatsApp Business"
description: "ChatCase WhatsApp Integração permite que seus clientes entrem em contato com você através de seu aplicativo de mensagens favorito: WhatsApp. Por outro lado, seus agentes serão capa"
---

ChatCase WhatsApp Integração permite que seus clientes entrem em contato com você através de seu aplicativo de mensagens favorito: WhatsApp. Por outro lado, seus agentes serão capazes de responder imediatamente a partir do nosso Web Chat. Respostas rápidas, botões de ação e mídia como imagens, vídeos e documentos são suportados em ambos os lados.

Se você ainda não configurou uma conta WhatsApp Business, nosso guia [Configure uma conta WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-configure-a-whatsapp-business-account) espera por você!

## # Instale o aplicativo WhatsApp Business no ChatCase<a href="#install-the-whatsapp-business-app-on-chatcase" id="install-the-whatsapp-business-app-on-chatcase"></a>Login na [Console ChatCase] (https://panel.chatcase.com/v3/dashboard/#/projects) e criar um projeto se você ainda não tiver. Basta clicar em "Adicionar projeto", escolher um nome para o seu projeto e, em seguida, clique em "Adicionar projeto" botão (deixar todas as opções em valores padrão).

<figure><img src="/doc-images/zu7OQoAByNf069x29UZ8.png" alt=""><figcaption></figcaption></figure>Assim que seu projeto estiver pronto, use o menu da barra esquerda para ir para **Configurações → Integrações**, e procure o aplicativo **WhatsApp Business**.

<figure><img src="/doc-images/ruzoz05BWZnt6xkHejiP.png" alt=""><figcaption></figcaption></figure>Como mostrado na imagem, você tem duas opções para autorizar o WhatsApp: **Configure usando OAuth** ou ** Configuração manual**.

#### **Configure usando OAuth** (recomendado)

"Configure usando OAuth" significa que você pode conectar ChatCase ao WhatsApp Business através do fluxo de autorização padrão OAuth da Meta, em vez de colar IDs de aplicativo, segredos e tokens à mão.\
O processo é projetado para ser intuitivo e simples. Depois de clicar em "Configure using OAuth", um pop-up aparecerá pedindo que você confirme sua conta e depois forneça ** seu nome de negócio**, ** e-mail de negócios**, ** website**, e outros detalhes, como mostrado na imagem.

<figure><img src="/doc-images/P6MlS1HsfpHlnQxJxeAt.png" alt=""><figcaption></figcaption></figure>O processo é bastante simples. Depois disso, você será solicitado para conectar seu aplicativo WhatsApp Business existente ou começar com um novo número de telefone WhatsApp.

Siga os passos um por um e, uma vez verificado o seu número de telefone, clique no botão **Terminar**.

É isso aí! Depois de alguns segundos, você deve ver a página de confirmação. No canto superior direito, você verá o status: **Conectado**.

<figure><img src="/doc-images/orTu1VznuEoeJR5N6Ckm.png" alt=""><figcaption></figcaption></figure>**Aqui também está um vídeo tutorial sobre como conectar ChatCase ao WhatsApp Business usando a configuração OAuth:**

[Acessar recurso externo](<https://youtu.be/vGeZYu0fL4w>)
Configuração manual

Vamos também dar uma olhada em ** Configuração manual**. Depois de selecionar esta opção, você verá os campos abaixo, que você precisará preencher e configurar:

1. WhatsApp token que é o seu símbolo permanente;
2. Verifique Token que é uma senha simples de sua escolha
3. WhatsApp ID de conta de negócios que você pode encontrar na seção de configuração API de seu aplicativo no [Meta para console de desenvolvedores] (https://developers.facebook.com/apps/)
4. ChatCase Webhook Endpoint, que deve ser colado na seção de configuração API de seu aplicativo no [Meta para console de desenvolvedores](https://developers.facebook.com/apps/)

Mais detalhes sobre cada campo abaixo.

<figure><img src="/doc-images/2BMMO5KM3XOxgOVHkolf.png" alt=""><figcaption></figcaption></figure>1\. Se você tiver dúvidas sobre o token permanente, consulte nosso guia [Configurar uma conta WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-configure-a-whatsapp-business-account).

> Nota: você pode usar um token de acesso temporário** em vez de um permanente. Você pode encontrá-lo em [Meta for Developers Console] (https://developers.facebook.com/apps/) → WhatsApp → Começando. Você pode usá-lo para fins de teste, no entanto, uma vez que expira após 24 horas, seu uso é ** altamente desencorajado**.

2\. Escolha um token verificado (ou seja, "meu-verify-token") e digite-o no campo "Verify Token", em seguida, clique no botão "Conectar". Seu aplicativo agora está conectado. Clique no botão "Copiar" para copiar o endpoint do webhook para a área de transferência, em seguida, mova para [Console do desenvolvedor do Facebook] (https://developers.facebook.com/apps/) e abra o aplicativo onde você instalou o plugin WhatsApp.

<figure><img src="/doc-images/ZhIzxwtDDmh7X1ZCHqCu.png" alt=""><figcaption></figcaption></figure>No menu do lado esquerdo, por baixo da seção de produtos, acesse WhatsApp → Configuração. Em seguida, clique em "Editar" e cole o URL que você copiou anteriormente em "Callback URL". Digite o seu check token também, em seguida, clique em "Verificar e salvar" botão.

<figure><img src="/doc-images/2j36FbzQbtPv9Pzc6kos.png" alt=""><figcaption></figcaption></figure>Se a verificação falhar, verifique seus parâmetros de configuração.

Agora clique em "Gestão" ...

<figure><img src="/doc-images/swpwAi6oodb4VjYPz1Tk.png" alt=""><figcaption></figcaption></figure>... clique em "Subscrever" para a opção mensagens, em seguida, clique em "Feito" botão.

<figure><img src="/doc-images/8fJUZfIfT0tGTS6sC2cN.png" alt=""><figcaption></figcaption></figure>Muito bem! A configuração está agora concluída e você deve ser capaz de receber a mensagem do WhatsApp para o seu chat do ChatCase. Se um chatbot foi configurado, será o primeiro a cumprimentar seus clientes!

<figure><img src="/doc-images/4mRRkIoQgkNaAQ60oGyZ.png" alt=""><figcaption></figcaption></figure>

<figure><img src="/doc-images/qim94jFZ8RxJ4gf3yYa4.png" alt=""><figcaption></figcaption></figure>Se tiver alguma dúvida, não hesite em entrar em contato-nos ao vivo no chat ou no[redacted@example.invalid](mailto:redacted@example.invalid)Para mais informações sobre quem somos, o que fazemos, ou qual é o nosso shtick, visite o site [ChatCase](https://chatcase.com/) 👩‍🚀.
