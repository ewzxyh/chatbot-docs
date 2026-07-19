---
title: "Como conectar seu Bot ao Slack"
description: "Como ligar o seu Bot ao Slack"
---

Como ligar o seu Bot ao Slack

Introdução<a href="#introduction" id="introduction"></a>Integrar atualizações em tempo real do seu Bot no Slack é simples com webhooks. Este método simplifica o processo de entrega de notificações instantâneas diretamente para o Slack.

O processo de configuração é descomplicado: comece criando um aplicativo Slack, em seguida, use-o para gerar um URL webhook exclusivo. Siga estas instruções para obter sua URL Webhook para enviar notificações Slack.

Pronto para começar?

Passo 1: Criar um aplicativo Slack<a href="#step-1-create-a-slack-app" id="step-1-create-a-slack-app"></a>1. Vá para o site da API Slack.
2. Clique em "Criar Novo App" e escolha "Do zero".
3. Nomeie seu aplicativo, selecione um espaço de trabalho e clique em "Criar aplicativo".
4. Considere usar um ambiente sandbox para manter as mensagens de teste separadas do seu espaço de trabalho principal.

<figure><img src="/files/SbgMEdpApnUGWakAvOCS" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/Tw1VUrIiUtMvkClaa7Rf" alt=""><figcaption></figcaption></figure>Passo 2: Activar os Webhooks<a href="#step-2-enable-incoming-webhooks" id="step-2-enable-incoming-webhooks"></a>1. Nas configurações do seu aplicativo, localize a seção "Anzóis Web" chegando.
2. Ligue este recurso para ativá-lo.

<figure><img src="/files/gq3UAWCfzOfoDS5p2Qw1" alt=""><figcaption></figcaption></figure>Passo 3: Criar um Webhook<a href="#step-3-create-an-incoming-webhook" id="step-3-create-an-incoming-webhook"></a>1. Clique em "Adicionar novo Webhook para o espaço de trabalho."
2. Escolha um canal para o webhook para enviar mensagens e autorizar o aplicativo.
3. Você será redirecionado de volta para as configurações do seu aplicativo.
4. O URL do webhook aparecerá em " URLs do Webhook para seu espaço de trabalho."

<figure><img src="/files/AouyRVPUVtMdQkZi9w7I" alt=""><figcaption></figcaption></figure>#### Passo 4: Adicione a ação de solicitação da Web dentro do seu fluxo de Chatbot[#](https://gethelp.chatcase.com/articles/how-to-connect-your-bot-to-slack/#step-4-add-the-web-request-action-within-your-chatbot-flow) <a href="#step-4-add-the-web-request-action-within-your-chatbot-flow" id="step-4-add-the-web-request-action-within-your-chatbot-flow"></a>Agora, você copiou seu webhook e tudo que você precisa fazer é colá-lo no bloco Chatbot dedicado contendo o Web Request, como abaixo.

<figure><img src="/files/A3pht32L5sbnfcYXtGt0" alt=""><figcaption></figcaption></figure>Na seção “Corpo” do Pedido da Web, escolha a opção Json e redigir o seu alerta conforme considerar apropriado.

<figure><img src="/files/3OpntDVooe1wdyQHgE82" alt=""><figcaption></figcaption></figure>E é isso! Seu Webhook Incoming está agora configurado e ligado ao canal Slack selecionado.

Pensamentos sobre isto? Envie-nos o seu feedback para[redacted@example.invalid](mailto:redacted@example.invalid)&#x20;
