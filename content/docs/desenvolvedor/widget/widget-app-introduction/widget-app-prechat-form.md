---
title: "Prechat form App Tutorial"
description: "! Forma Prechat na conversa (https://user-images.githubusercontent.com/32564846/165312900-4a7588c8-a408-44d8-a3a8-77ecd99af280.png)"
---

# # Introdução

! [Forma Prechat na conversa] (https://user-images.githubusercontent.com/32564846/165312900-4a7588c8-a408-44d8-a3a8-77ecd99af280.png)

O widget [forma prechat nativo] (https://developer.chatcase.com/widget/advanced/prechat-form-json) é muito útil para perguntar alguns dados antes de iniciar uma conversa. Mas às vezes você quer deixar o usuário final brincar com seu chatbot livremente, evitando perguntar a ele dados sensíveis inúteis. Basta pedir dados apenas quando necessário, ou seja, pouco antes de falar com um agente humano!

Vamos discutir aqui exactamente este caso de uso. Vamos construir um chatbot, colocando-o em frente a um departamento. Quando o usuário pede um agente, aparece um formulário no fluxo de conversação que irá pedir ao usuário algumas informações pessoais (ou seja, e-mail, nome completo, telefone). Assim que o usuário preencher o formulário, o chatbot entregará a conversa para um agente humano que possa ler os dados do usuário no painel de conversação.

Além disso, com este caso de uso você será livre para criar seu próprio formulário, sem todas as limitações do formulário nativo do widget. Na verdade, seu formulário será um aplicativo web completo mostrado como um iframe no widget. Você pode implementar qualquer computação ou sua interação favorita do usuário. A partir do seu aplicativo você será capaz de falar com o ChatCase usando APIs ou enviar mensagens de volta para a mesma conversa em que o aplicativo está hospedado.

Neste tutorial vamos cobrir três características básicas:

1. Render o formulário prechat exatamente quando a entrega do chatbot-humano ocorre
2. Marque o formulário prechat como "Terminado" mudando sua IU assim que a tarefa terminar, evitando uma interação adicional do usuário
3. Pergunte o formulário prechat apenas uma vez para o mesmo usuário, evitando pedir os mesmos dados em cada handoff chatbot-humano
4. Interaja com a conversa atual enviando uma mensagem de volta para o usuário indicando uma operação bem sucedida

Vamos começar.

# # Criar e renderizar um aplicativo

Criar um novo projeto

Usar APIs do ChatCase ou integrar seus próprios chatbots é obrigatório para se inscrever em um novo usuário em [ChatCase](https://chatcase.com/). Em seguida, vá para o console, disponível no seguinte link<https://panel.chatcase.com/v3/dashboard>Após a inscrição, siga o assistente proposto para criar seu primeiro projeto ChatCase.

Nós escolhemos "Widget Prechat App" como nome do projeto:

! [Criar seu projeto] (https://user-images.githubusercontent.com/32564846/164986208-86d3223c-ace2-4332-acb5-62b6ed11328b.png)

Assim que você criar o projeto você será redirecionado para a casa do projeto (para este tutorial você pode saltar o último passo, em relação à instalação do widget).

## # Criar um chatbot simples

Como primeiro passo vamos criar um chatbot simples. Vamos colocar o chatbot na frente de um Departamento para que ele absorva todos os pedidos de suporte iniciais. Quando insatisfeito com as respostas do chatbot, o usuário pedirá por humano. O chatbot, em vez de desviar de repente a conversa para o humano irá em vez disso abrir um aplicativo incorporado em conversa pedindo ao usuário para preenchê-lo com alguns dados (ou seja, seu e-mail, nome completo). Assim que o formulário for preenchido, a conversa será mudada para um agente humano.

A aplicação de formulário Prechat irá interagir com o contexto de solicitação-contexto de ChatCase através do APis, preenchendo o contexto com as informações obtidas do painel de formulário prechat.

Selecione o ícone do chatbot no menu esquerdo e, em seguida, pressione o botão "ADD BOT":

![Criação do Chatbot] (https://user-images.githubusercontent.com/32564846/162210700-42c5b927-a7c1-4a34-914e-ef2faf7591b2.png)

Escolha "bot de resolução" como tipo de chatbot:

![Criação do Chatbot] (https://user-images.githubusercontent.com/32564846/160479723-f95ef4e5-47a0-4e70-af02-3f36403847bb.png)

Defina "Helpbot" (ou o que preferir) como o nome do chatbot e deixe as outras configurações com seu valor padrão. Pressione "CREAR BOT":

![Criação do Chatbot] (https://user-images.githubusercontent.com/32564846/164986414-e37ede39-8ce6-4bb3-9482-4bc15dd79626.png)

Quando perguntado, escolha "Ativar bot". Desta forma, o novo chatbot está imediatamente disponível assim que alguém começa uma nova conversa.

![Ativar chatbot] (https://user-images.githubusercontent.com/32564846/162211365-7b705564-9fcc-4616-b0ea-a9404b37f947.png)

Agora, na lista de intenções *Helpbot* do chatbot, selecione a intenção "iniciar":

![Selecione a intenção inicial](https://user-images.githubusercontent.com/32564846/162285884-80b5d7f3-a64e-470f-b3d0-5ab3d2fb0acb.png)

Em seguida, modifique a intenção inicial, adicionando uma [Resposta rápida] (https://developer.chatcase.com/widget/advanced/widget-json-protocol#quick-replies) botão usando o chatbot [microlinguagem] (https://developer.chatcase.com/resolution-bot/rich-messages#microlanguage) (simplesmente use um *asterisco* seguido de um *espaço* e o texto de resposta rápida), como este:

![Adicione uma resposta rápida à intenção inicial](https://user-images.githubusercontent.com/32564846/165066393-4ad37f90-3766-4bc3-94c1-e2d60a088697.png)

Agora guarda a resposta e volta para a lista de intenções. Adicione uma nova resposta (+ * Botão de nova resposta*).

Configure a nova resposta como o seguinte:

* Intenção: "agent\ handoff"
* Perguntas: "Quero um agente"
* Resposta: "Prechat form (placeholder)..."

Não se esqueça de ativar o interruptor webhook na parte inferior "Ativar chamada webhook para esta intenção". Isso irá encaminhar a resposta à lógica de backend programática que adicionaremos mais tarde no tutorial.

[Intenção de transferência do agente] (https://user-images.githubusercontent.com/32564846/165396321-f81834b8-476c-4f78-952a-be2853c07aeb.png)

## # Criar a infra- estrutura na Replit

Para desenvolver nossa lógica de aplicativos, precisaremos de um endpoint de aplicativos web onde todas as solicitações do chatbot serão encaminhadas. Vamos usar o [Repl.it] (https://repl.it) serviço para criar rapidamente o nosso próprio NodeJS web application endpoint.

Desenvolva sua lógica de aplicação. Vamos garfo!

Precisamos de tp simplesmente fork o aplicativo tutorial, disponível neste url:

<https://replit.com/@chatcase/chatcase-prechatform-widget-app#index.js>Garde a aplicação.

Uma vez bifurcada, pressione o botão *Run* na barra superior. O aplicativo começa, como você pode ver no painel de registro.

Conecte seu aplicativo ao nosso chatbot. Vá em * Helpbot* no console ChatCase, habilite [Fullfilment](https://developer.chatcase.com/resolution-bot/home#fulfillment) e colocar lá o url /bot API\ ENDPOINT que você irá construir juntando o endpoint *replit app* (veja a próxima figura) com o método */bot*.

![replit app endpoint](https://user-images.githubusercontent.com/32564846/165266643-7d3b5b09-c137-4f59-93da-50f998435cec.png)

No nosso caso, o url é o seguinte:

*<https://chatcase-prechatform-widget-app.chatcase.repl.co/bot>*

![imagem] (https://user-images.githubusercontent.com/32564846/165267374-dc64e254-6299-4d49-b196-38c3b58898c6.png)

E carrega no botão ATUALIZAR BOT. Agora estamos prontos para ver o aplicativo prechatform em ação com nosso chatbot.

Vamos correr

Para executar o exemplo simplesmente escolha o botão "Simular visitante" no topo da consola do seu projeto.

A "página de teste" do widget será aberta. Estas são as principais etapas envolvidas na interação:

1. Comece uma conversa.
2. O chatbot vai recebê-lo.
3. Pressione o botão "Eu preciso de agente" Resposta rápida. Ele irá decodificar a intenção de "agente\ handoff" que você já construiu.
4. A intenção está conectada ao endpoint * de preenchimento* que você configurar previamente e a resposta é gerada dinamicamente pelo método * / bot*
5. A resposta envia de volta ao widget uma mensagem contendo um "frame" com o aplicativo *prechat form*
6. O usuário preenche o formulário, definindo seu nome, e-mail, número de telefone e aceitando a política de privacidade
7. O aplicativo obtém os dados do usuário e desativa a interação adicional do usuário
8. O aplicativo envia uma mensagem de volta para o usuário contendo o seu nome (obtido do formulário)
9. A interação termina.

! [De chatbot para agente humano através de um formulário Prechat] (https://user-images.githubusercontent.com/32564846/165395959-34de2716-0103-48e4-b856-1003546c9bd6.png)

Você pode tentar um tutorial ao vivo [aqui](https://chatcase-html-site.chatcase.repl.co/conversation-embedded-prechat-form-app.html). Você pode obter o código-fonte diretamente do aplicativo replit.

Se tiver algum problema, não se esforce para nos escrever no nosso [fórum comunitário](https://chatcase.discourse.group/)!

Vejo você no nosso próximo tutorial!

Tem sugestões sobre este artigo? Por favor, envie-nos o seu feedback escrevendo um email para[redacted@example.invalid](mailto:redacted@example.invalid)
