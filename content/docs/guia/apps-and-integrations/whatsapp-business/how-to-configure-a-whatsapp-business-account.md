---
title: "Como configurar uma conta WhatsApp Business"
description: "ChatCase WhatsApp Integração permite que seus clientes entrem em contato com você através de seu aplicativo de mensagens favorito: WhatsApp. Por outro lado, seus agentes serão capa"
---

ChatCase WhatsApp Integração permite que seus clientes entrem em contato com você através de seu aplicativo de mensagens favorito: WhatsApp. Por outro lado, seus agentes serão capazes de responder imediatamente a partir do nosso Web Chat. Respostas rápidas, botões de ação e mídia como imagens, vídeos e documentos são suportados em ambos os lados.

Mas primeiro, você precisa criar e configurar uma conta WhatsApp Business. Continue lendo para descobrir tudo o que precisa.

#### Criar aplicativo no console Facebook Developer[#](https://gethelp.chatcase.com/articles/configure-a-whatsapp-business-account/#create-app-on-facebook-developer-console) <a href="#create-app-on-facebook-developer-console" id="create-app-on-facebook-developer-console"></a>Se você já criou um aplicativo, você pode pular esta etapa. Caso contrário, vá para[ Meta for Developers](https://developers.facebook.com/) e entre com você credenciais do Facebook, onde você pode ver seus aplicativos do Facebook. Em seguida, clique em "Meus Apps", e em "Criar App", como abaixo.

<figure><img src="/doc-images/CaMGEGEfsY999ND66A8i.png" alt=""><figcaption></figcaption></figure>Selecione um tipo de aplicativo e clique em "Next". Agora escolha o nome do visor e digite o e-mail de contato.

> Nota: um negócio A conta é necessária para ter acesso a todos os recursos e para permitir determinadas permissões. Você pode criar uma conta para sua empresa a partir da [ferramenta dedicada] (https://business.facebook.com/overview) ou continuando a ler este guia.

Se você já tiver uma Conta de Negócios, selecione-a e clique em "Criar aplicativo". Caso contrário, para não se preocupar, você pode criar uma Conta de Negócios mais tarde.

<figure><img src="/doc-images/HnbdToGiX8PCNVReIzgq.png" alt=""><figcaption></figcaption></figure>Muito bem! Seu aplicativo agora está pronto.

Integre o WhatsApp com a sua aplicação<a href="#integrate-whatsapp-with-your-app" id="integrate-whatsapp-with-your-app"></a>Quando estiver no mesmo console do Facebook Developer, certifique-se de que você selecionou o aplicativo onde deseja instalar o WhatsApp e pesquise "WhatsApp" na lista de produtos e clique em "Configurar".

<figure><img src="/doc-images/pJ0j6sQj9TAIr23ylkVP.png" alt=""><figcaption></figcaption></figure>Você deve ser capaz de ver isso no lado esquerdo do bar. Clique em "Começar". Se você selecionou uma Conta de Negócios na etapa anterior, você pode pular os passos abaixo, caso contrário, continue lendo!

Cria uma Conta de Negócios

Depois de clicar em "Começar" você verá a ferramenta para selecionar ou criar uma conta de negócios. Selecione "Criar uma conta de negócios" no menu suspenso e clique em "Continuar".

<figure><img src="/doc-images/Fr15MPMsxy6ZAF4ZQoku.png" alt=""><figcaption></figcaption></figure>Foi criada uma conta comercial padrão. Você pode personalizar esta conta acessando o [Meta Dashboard](https://business.facebook.com/settings/people/) ou clicando em Test Business na página MyApp, como abaixo.

<figure><img src="/doc-images/CUsoMP5LkLbw4GcUHarT.png" alt=""><figcaption></figcaption></figure>Teste a integração<a href="#test-the-integration" id="test-the-integration"></a>Um *Número de Teste* está agora associado ao seu aplicativo. Mais abaixo este artigo veremos como configurar o número real da empresa.

Na aba Introdução você pode testar a integração do WhatsApp, mas primeiro você precisa configurar um número de receptor.

> Nesta fase de teste, você pode enviar uma mensagem do número de teste para até 5 números de telefone para receber mensagens de teste gratuitas.

Para configurar um número de telefone de teste, clique no botão "Para" e, em seguida, no botão "Gerenciar lista de números de telefone".

<figure><img src="/doc-images/LSt0Bf05kXVeEscKQC7E.png" alt=""><figcaption></figcaption></figure>Selecione o prefixo e insira o número de telefone e, em seguida, inicie o procedimento de verificação clicando em "Next" (um código numérico é enviado por SMS).

<figure><img src="/doc-images/x64Fl8EdCmGqA31UTvkW.png" alt=""><figcaption></figcaption></figure>Uma vez concluído, o número de telefone pode receber mensagens de teste. Clique no botão "Enviar mensagem" para experimentar. Você deve receber uma mensagem no WhatsApp do número de teste.

# # # # Adicione um número de telefone de produção # #https://gethelp.chatcase.com/articles/configure-a-whatsapp-business-account/#add-a-production-phone-number) <a href="#add-a-production-phone-number" id="add-a-production-phone-number"></a>Você pode precisar registrar um número de telefone de produção da empresa.

> O uso de um número privado é ** altamente desencorajado**. Você não poderá mais usar o aplicativo móvel WhatsApp.

Na página Introdução, clique em "Adicionar número de telefone", como abaixo.

<figure><img src="/doc-images/QL20HDznNfgqD6qeq2Nr.png" alt=""><figcaption></figcaption></figure>Preencha suas informações de negócios e clique em "Next".

<figure><img src="/doc-images/cP5OEHwtA3zae15E9cSR.png" alt=""><figcaption></figcaption></figure>Preencha as informações necessárias para criar um perfil WhatsApp Business e clique em "Next".

<figure><img src="/doc-images/j8T4raiuoY2DuJxkDI9B.png" alt=""><figcaption></figcaption></figure>Finalmente, adicione o número de telefone e verifique-o através de uma mensagem de texto ou chamada de telefone.

> Nota: Se você estiver usando um número fixo, você pode verificar o número apenas com uma chamada telefônica.

<figure><img src="/doc-images/cPZ7dMlVvLHQ2q4qJTPp.png" alt=""><figcaption></figcaption></figure>Uma vez que o número tenha sido aprovado, você pode testá-lo, como mostrado anteriormente neste guia, selecionando o número de produção da lista “De”.

Configurar um Token de Acesso Permanente<a href="#configure-a-permanent-access-token" id="configure-a-permanent-access-token"></a>Para usar a integração do WhatsApp com o ChatCase você precisa de um token de acesso válido. Um token de acesso temporário** é fornecido, mas você precisa atualizar as informações a cada 24 horas. Esta é uma boa solução para uma fase de teste, mas você precisa de um token de acesso permanente** em produção.

Vejamos como criar um Token de Acesso Permanente!

Clique no nome da conta comercial em meus aplicativos ou vá diretamente em [Facebook Settings Dashboard](https://business.facebook.com/settings/) do painel Facebook Developer.

<figure><img src="/doc-images/SgyWPzPYQ1x6ahFj8A4d.png" alt=""><figcaption></figcaption></figure>No painel esquerdo, certifique-se de que a Conta de Negócios para a qual você deseja ativar o token permanente está selecionada, clique em "usuários do sistema" e, em seguida, clique no botão "Adicionar".

<figure><img src="/doc-images/KWTf87YhJGXCLShlV0wa.png" alt=""><figcaption></figcaption></figure>Digite um nome de usuário do Sistema e escolha o papel de administrador. Agora você pode clicar no botão "Criar usuário do sistema".

<figure><img src="/doc-images/NIxPjjsHCs7dy0msTpYc.png" alt=""><figcaption></figcaption></figure>Um sistema de usuário foi agora criado. Note que o token permanente será associado a esse usuário.

Vamos adicionar ativos ao recém-criado usuário do sistema clicando em "Adicionar ativos" e dando o controle completo para o aplicativo Facebook, como ilustrado abaixo.

<figure><img src="/doc-images/4eoidyeCtiOfccw2yF3o.png" alt=""><figcaption></figcaption></figure>Clique em "Salvar alterações" e o aplicativo será adicionado ao usuário do sistema.

Finalmente, estamos prontos para gerar o nosso **Permanent Access Token** clicando em "Generate new token". Selecione a aplicação...

<figure><img src="/doc-images/m3g0zB00kjfe45MHqTNW.png" alt=""><figcaption></figcaption></figure>... e verifique as seguintes permissões:

* ** whatsapp\ business\ mensagem**
* ** whatsapp\ business\ management**

<figure><img src="/doc-images/mYV1UbOX38LL742SV3aG.png" alt=""><figcaption></figcaption></figure>Clique em "Gerar token" e é isso! Seu símbolo permanente está agora disponível.

<figure><img src="/doc-images/PKRU1PR9TUPWfLi7lKaD.png" alt=""><figcaption></figcaption></figure>Não sabe usar o símbolo permanente no ChatCase?

Talvez o guia sobre [Como conectar WhatsApp Business ao ChatCase](https://gethelp.chatcase.com/articles/connect-chatcase-with-whatsapp-business/) pode ser útil.

Se tiver alguma dúvida, não hesite em entrar em contato-nos ao vivo no chat ou no[redacted@example.invalid](mailto:redacted@example.invalid)Ou você pode aparecer no nosso [Canal de Discórdia] (https://discord.com/invite/nERZEZ7SmG) "!

Para mais informações sobre quem somos, o que fazemos, ou qual é o nosso shtick, visite o site [ChatCase](https://chatcase.com/) 👩‍🚀.
