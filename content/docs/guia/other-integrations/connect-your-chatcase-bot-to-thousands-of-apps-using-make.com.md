---
title: "Conectar o Bot ChatCase a milhares de aplicativos usando Make.com"
description: "Make.com permite que você conecte seus aplicativos a milhares de outros aplicativos. Você pode aproveitar esta integração para conectar seu bot ChatCase a muitos aplicativos como P"
---

Make.com permite que você conecte seus aplicativos a milhares de outros aplicativos. Você pode aproveitar esta integração para conectar seu bot ChatCase a muitos aplicativos como Planilhas, Calendário, Trello, Discórdia e muitos mais.

Neste exemplo, vou mostrar-lhe como ligar um widget de chat para o Google Sheets usando Make.com. Isso permitirá que você veja como os detalhes do cliente de conversas de chat podem ser automaticamente adicionados a um documento do Google Sheets.

Você pode assistir ao vídeo tutorial para um guia visual ou seguir o tutorial escrito passo a passo abaixo.

[Acessar recurso externo](<https://www.youtube.com/watch?v=uJpHRVhmFiw>)
Passo 1: Configurar sua conta Make.com<a href="#step-1-set-up-your-makecom-account" id="step-1-set-up-your-makecom-account"></a>Primeiro, [assinar para um Make.com] (https://www.make.com/en/register) conta. Depois de se inscrever e fazer login, navegue até a seção ‘Scenarios’. É aqui que você pode projetar seus fluxos de trabalho de automação.

Passo 2: Configurar o Módulo Webhooks<a href="#step-2-configure-webhooks-module" id="step-2-configure-webhooks-module"></a>Em seguida, selecione o módulo Webhooks. Dê-lhe um nome e copie o URL do Webhook (como mostrado na imagem abaixo).

<figure><img src="/doc-images/wBw8tBKtKxzUHconEOfN.png" alt=""><figcaption></figcaption></figure>Passo 3: Conectar o Bot ChatCase para Make.com<a href="#step-3-connect-chatcase-bot-to-makecom" id="step-3-connect-chatcase-bot-to-makecom"></a>Agora, vai para o seu [painel ChatCase] (https://panel.chatcase.com/v3/dashboard/#/signup). Selecione o bot que deseja integrar com o Google Sheets. Na seção integrações, escolha a ação ‘Make’ e cole o URL Webhook que você copiou anteriormente.

<figure><img src="/doc-images/w9FRKSWGbSXrUfwFcNmL.png" alt=""><figcaption></figcaption></figure>Para este exemplo, estaremos pedindo o nome do usuário, e-mail e nome da empresa. Estes serão enviados para Make.com como parâmetros do corpo.

Passo 4: Criar um Formulário<a href="#step-4-create-a-form" id="step-4-create-a-form"></a>Neste ponto, você precisa criar um formulário para coletar informações dos usuários.

<figure><img src="/doc-images/lxJjQRwvnnVxkAowv3tv.png" alt=""><figcaption></figcaption></figure>Passo 5: Configurar Planilhas do Google<a href="#step-5-set-up-google-sheets" id="step-5-set-up-google-sheets"></a>Agora, crie um novo documento do Google Sheets e nomeie as colunas de acordo.

<figure><img src="/doc-images/gymycxO2vcim16AxJgFd.png" alt=""><figcaption></figcaption></figure>Passo 6: Conectar Make.com ao Google Sheets<a href="#step-6-connect-makecom-to-google-sheets" id="step-6-connect-makecom-to-google-sheets"></a>Volte ao seu painel Make.com e adicione o módulo do Google Sheets. Você precisará conectar sua conta Google à sua conta Make.com. Uma vez conectado, você pode acessar seu arquivo do Google Sheets a partir das configurações do Sheets em Make.com.

<figure><img src="/doc-images/jW5kJzm2SrDa2dXjRFFi.png" alt=""><figcaption></figcaption></figure>Passo 7: Teste a sua configuração<a href="#step-7-test-your-setup" id="step-7-test-your-setup"></a>Salve todas as alterações e clique em ‘Execute uma vez’. Volte para o painel do ChatCase e teste o bot.

<figure><img src="/doc-images/ZOG0ZexwixkGs7nxSdjA.png" alt=""><figcaption></figcaption></figure>Após responder às perguntas do formulário, retorne ao seu painel Make.com. Clique no módulo Planilhas para definir os atributos da coluna. &#x20;

<figure><img src="/doc-images/ULON5MtFOmMvXJxRTkJf.png" alt=""><figcaption></figcaption></figure>Execute o cenário novamente e retorne ao seu painel ChatCase.

#### Passo 8: Transferência de dados do widget de chat para Planilhas do Google<a href="#step-8-transfer-data-from-chat-widget-to-google-sheets" id="step-8-transfer-data-from-chat-widget-to-google-sheets"></a>Agora, quando você preencher o formulário no widget de chat novamente, os dados serão transferidos diretamente para suas Planilhas do Google.

<figure><img src="/doc-images/VpJTWXXhj4Lw8gXbNGNB.png" alt=""><figcaption></figcaption></figure>E é isso! Você automatizou com sucesso a transferência de dados de seu widget de chat para o Google Sheets usando bots ChatCase e Make.com. Esta integração é uma maneira poderosa de simplificar seus processos de coleta e gerenciamento de dados.

**Keen no início da automação hoje?** [**Seu gateway está bem aqui!**](https://panel.chatcase.com/v3/dashboard/#/signup)

Esperamos que tenha achado este tutorial útil.

Se você precisar de algum suporte adicional com automação ou tiver quaisquer dúvidas, por favor, não hesite em entrar em contato-nos[redacted@example.invalid](mailto:redacted@example.invalid)Estamos aqui para ajudar!
