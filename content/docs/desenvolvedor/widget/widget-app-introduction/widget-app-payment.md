---
title: "Pagamento App Tutorial"
description: "Durante uma conversa às vezes é útil fornecer ao usuário um método para completar uma tarefa através de um pagamento."
---

# # Introdução

Durante uma conversa às vezes é útil fornecer ao usuário um método para completar uma tarefa através de um pagamento.

![imagem] (https://user-images.githubusercontent.com/32564846/161642865-d7c9f00a-49fb-4a0c-b6a5-54014694e45b.png)

Usar um aplicativo é uma maneira segura de realizar esta tarefa. Usando o aplicativo, o usuário final não envia nenhuma informação de pagamento "sensível" como uma mensagem na conversa. Ele interage diretamente com o sistema de pagamento no protocolo HTTPS, deixando de fora informações do ChatCase que o ChatCase absolutamente não quer :)

Neste tutorial, vamos construir apenas uma aplicação esqueleto, útil o suficiente para mostrar os princípios básicos de construção de um aplicativo widget com ChatCase.

Vamos cobrir três necessidades básicas.

1. Criar e renderizar um aplicativo para ser mostrado e usado na conversa
2. Marque o aplicativo como "Terminado" mudando seu comportamento de IU no final da tarefa, evitando uma interação adicional do usuário
3. Interaja com a conversa atual, ou seja, enviando uma mensagem, diretamente do código do aplicativo

Vamos começar.

# # Criar e renderizar um aplicativo

Criar um novo projeto

Usar APIs do ChatCase ou integrar seus próprios chatbots é obrigatório para se inscrever em um novo usuário em [ChatCase](https://chatcase.com/). Em seguida, vá para o console, disponível no seguinte link<https://panel.chatcase.com/v3/dashboard>Após a inscrição, siga o assistente proposto para criar o seu primeiro projeto ChatCase

Nós escolhemos "Widget Embedded App" como nome do projeto:

![imagem] (https://user-images.githubusercontent.com/32564846/162209056-dd4217ba-293c-47f6-99c2-bbccc1c3126b.png)

Assim que você criar o projeto você será redirecionado para a casa do projeto (para este tutorial você pode saltar o último passo, em relação à instalação do widget).

## # Criar um chatbot simples

Como primeiro passo vamos criar um chatbot simples. Vamos usar o chatbot para que ele possa enviar de volta um aplicativo incorporado em conversa para o usuário final que começou o chat, pedindo-lhe para pagar por seu pedido usando suas informações de cartão de crédito. O aplicativo implementará o (fake) payment-logic e responderá ao usuário com uma mensagem mostrando a operação de pagamento informações relevantes.

Selecione o ícone do chatbot no menu esquerdo e, em seguida, pressione o botão "ADD BOT":

![imagem] (https://user-images.githubusercontent.com/32564846/162210700-42c5b927-a7c1-4a34-914e-ef2faf7591b2.png)

Escolha "bot de resolução" como tipo:

![imagem] (https://user-images.githubusercontent.com/32564846/160479723-f95ef4e5-47a0-4e70-af02-3f36403847bb.png)

Defina "Shopper" (ou o que preferir) como o nome do chatbot e deixe as outras configurações com seu valor padrão. Pressione "CREAR BOT":

![imagem] (https://user-images.githubusercontent.com/32564846/162211018-cc29be2a-8770-4bde-841c-048b73b278fd.png)

Quando perguntado, escolha "Ativar bot". Desta forma, o novo chatbot está imediatamente disponível assim que alguém começa uma nova conversa.

![imagem] (https://user-images.githubusercontent.com/32564846/162211365-7b705564-9fcc-4616-b0ea-a9404b37f947.png)

Agora, na lista de intenções do chatbot do Shopper, selecione a intenção "start":

![imagem] (https://user-images.githubusercontent.com/32564846/162285884-80b5d7f3-a64e-470f-b3d0-5ab3d2fb0acb.png)

Em seguida, modifique a intenção inicial, adicionando um botão *Resposta rápida* usando a microlíngua do chatbot (simplesmente use um asterisco seguido por um espaço e o texto de resposta rápida), como este:

![imagem] (https://user-images.githubusercontent.com/32564846/162286307-7a3872d0-d1ec-4305-9f01-f43eee1caac5.png)

Agora guarda a resposta e volta para a lista de intenções. Adicione uma nova resposta (+ * Botão de nova resposta*).

Configure a nova resposta como o seguinte:

**Intenção**: "pagamento" **Perguntas**: "Eu quero pagar" **Resposta**: "Mostrando aplicativo de pagamento (placeholder)..."

Não se esqueça de ativar o interruptor webhook na parte inferior "Ativar chamada webhook para esta intenção". Isto irá encaminhar a resposta webhook para a lógica da infra-estrutura que adicionaremos mais tarde no tutorial.

![imagem] (https://user-images.githubusercontent.com/32564846/162287813-5739c1ec-036f-4735-add0-e3566e7bc306.png)

## # Criar a infra- estrutura na Replit

Para desenvolver nossa lógica de aplicativos, precisaremos de um endpoint de aplicativos web onde todas as solicitações do chatbot serão encaminhadas. Vamos usar o [Repl.it] (https://repl.it) serviço para criar rapidamente o nosso próprio NodeJS web application endpoint.

Desenvolva sua lógica de aplicação. Vamos garfo!

Nós simplesmente bifurcamos o aplicativo tutorial, disponível nesta URL:

<https://replit.com/@chatcase/chatcase-conversational-app#index.js>Use o botão garfo e escolha um nome para o seu aplicativo:

![imagem] (https://user-images.githubusercontent.com/32564846/162422896-78a544ad-0da9-4f0b-b390-4abb0d2d7dea.png)

Uma vez bifurcado vá em seu aplicativo replit e faça um pouco de personalização. Você deve definir o ambiente APP\ ENDPOINT var usando a opção no menù esquerdo, como mostrado na figura. Você deve adicionar ao **replit App endpoint** - no nosso caso *<https://chatcase-conversational-app.chatcase.repl.co>* - o sufixo */apps/creditcard* para construir o funcional completo APP\ ENDPOINT para nossa integração, exatamente como mostrado na imagem.

![Definir o APP\ ENDPOINT](https://user-images.githubusercontent.com/32564846/199575979-e20ed2ad-d1b8-4e9e-9c7f-a08a98bad9fe.png)

Agora pressione o botão *Run* na barra superior. O aplicativo começa, como você pode ver no painel de registro.

Agora você deve conectar esta aplicação ao seu chatbot *Shopper*. Vá no bot Shopper no console ChatCase, habilite [Fullfilment](https://developer.chatcase.com/resolution-bot/home#fulfillment) e colocar lá a API\ ENDPOINT url do seu chatbot usando o pré-vious *Replit App endpoint* seguido pelo sufixo */bot*:

*<https://chatcase-conversational-app.chatcase.repl.co/bot>*

![](https://user-images.githubusercontent.com/32564846/162305135-9a063e33-eaf0-49d4-8ae1-3b9dc3e4075a.png)

E carrega no botão ATUALIZAR BOT. Agora estamos prontos para ver o aplicativo incorporado em ação com o nosso chatbot.

Vamos correr

Para executar o exemplo simplesmente escolha o botão "Simular visitante" no topo da consola do seu projeto.

A "página de teste" do widget será aberta. Estas são as principais etapas envolvidas na interação:

1. Comece uma conversa.
2. O chatbot vai recebê-lo.
3. Pressione o botão "Eu quero pagar" Resposta rápida. Vai descodificar a intenção de "pagamento" que já construiu.
4. A intenção está conectada à API\ ENDPOINT que você configurar previamente e a resposta é gerada dinamicamente pelo método /bot
5. A resposta envia de volta para o widget uma mensagem contendo um "frame" com a API url do aplicativo
6. O usuário interage com a aplicação, definindo seu nome
7. O aplicativo obtém os dados do usuário e desativa a interação adicional do usuário
8. O aplicativo envia uma mensagem de volta para o usuário contendo o seu nome (obtido do formulário do aplicativo)
9. A interação termina.

Você pode tentar um tutorial ao vivo [aqui](https://chatcase-html-site.chatcase.repl.co/conversation-embedded-app.html). Você pode obter o código-fonte diretamente do aplicativo replit.

Se tiver algum problema, não se esforce para nos escrever no nosso [fórum comunitário](https://chatcase.discourse.group/)!

Vejo você no nosso próximo tutorial!

Tem sugestões sobre este artigo? Por favor, envie-nos o seu feedback escrevendo um email para[redacted@example.invalid](mailto:redacted@example.invalid)
