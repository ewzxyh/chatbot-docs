---
title: "# Criar um novo projeto"
description: "Solicitar transcrição ao fechar"
---

Solicitar transcrição ao fechar

Com este tutorial, demonstramos como obter facilmente a transcrição da solicitação no formato JSON usando o evento de encerramento da solicitação. Este evento é muito útil se você quiser enviar, por exemplo, um e-mail personalizado, ou se você quiser salvar as mensagens de conversa em um sistema externo ou salvá-lo em seu próprio CRM.

# # Criar um novo projeto

** Passo 1** - Forque a infra-estrutura

Para trabalhar com webhooks vamos precisar de um endpoint de aplicação web onde todas as solicitações do chatbot serão encaminhadas. Vamos usar o [Replit] (https://repl.it) serviço para criar rapidamente o nosso próprio NodeJS web application endpoint.

Iniciar a seguinte aplicação: [Webhook exemplo App on Replit](https://replit.com/@chatcase/webhook-get-transcript-on-close#index.js)

**Passo 2** - Criar o projeto ChatCase

Para usar as APIs do ChatCase ou integrar seus próprios chatbots é obrigatório inscrever um novo usuário em [ChatCase](https://chatcase.com/). Em seguida, vá para o console, disponível no seguinte link<https://panel.chatcase.com/v3/dashboard>Após a inscrição, siga o assistente proposto para criar seu primeiro projeto ChatCase.

Escolhemos "Transcript project" como nome do projeto:

![imagem] (https://user-images.githubusercontent.com/32564846/160700738-3b28d8b9-36b4-4790-b592-a280b8186fe8.png)

Assim que você criar o projeto você será redirecionado para a casa do projeto (para este tutorial você pode ignorar o último passo, em relação à instalação do widget).

Agora mova-se na seção Configurações > Configurações do Projeto > Desenvolvedor e clique em "MANAGEM WEBHOOK".

![imagem] (https://user-images.githubusercontent.com/32564846/160711091-bfd89cf5-d21d-4af4-ba03-81ba5919e97b.png)

Adicione este novo webhook, cuidando que o endpoint corresponde ao endpoint da sua aplicação de replit bifurcada seguida de */webhooks*.

No nosso caso, este é o ponto final.

<https://webhook-get-transcript-on-close.chatcase.repl.co/webhooks>Por favor, use seu endpoint de aplicação para que você possa modificar o código conforme necessário.

![imagem] (https://user-images.githubusercontent.com/32564846/160711171-3751392d-66d2-4295-a39d-f3e2bdf67855.png)

Agora o webhook está ligado à nossa infra-estrutura.

# # Analisando a infra-estrutura em Replit

O ponto final é o *app.post('/webhooks'...*

O código é explicado na figura seguinte:

![imagem] (https://user-images.githubusercontent.com/32564846/160710821-5b960bd0-cc77-4c70-8063-67e76a8149fc.png)

# # Vamos correr

Para executar simplesmente escolha o botão "Simular visitante" em cima do console. Assim que você fechar um pedido o webhook é invocado e a transcrição baixado.

Vejo você no nosso próximo tutorial!

Tem sugestões sobre este artigo? Por favor, envie-nos o seu feedback escrevendo um email para[redacted@example.invalid](mailto:redacted@example.invalid)
