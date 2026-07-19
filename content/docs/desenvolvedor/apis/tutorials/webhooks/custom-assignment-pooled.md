---
title: "Atribuição de Pedido Personalizado"
description: "Às vezes você não quer confiar na lógica de atribuição nativa do ChatCase, que é um robin alghoritm redondo através dos agentes disponíveis em um departamento específico."
---

# # Atribuir solicitação a um agente personalizado

Às vezes você não quer confiar na lógica de atribuição nativa do ChatCase, que é um robin alghoritm redondo através dos agentes disponíveis em um departamento específico.

Suponhamos que queremos atribuir uma solicitação (e a conversa do correspondenr) a um agente específico. Você pode implementar sua própria lógica usando webhooks.

# # Crie seu projeto webhook

Vá em replit e fork o seguinte aplicativo: [agent-handoff](https://replit.com/@chatcase/agent-handoff#index.js)

Em seguida, vá em ChatCase e crie um novo projeto. você pode chamar-lhe "roteamento personalizado".

![imagem] (https://user-images.githubusercontent.com/32564846/160625434-27347b9b-bf07-4999-ad0c-f75420675168.png)

Agora mova nas Configurações > Configurações do Projeto > Seção de desenvolvimento e clique em "MANAGEM WEBHOOK"

![imagem] (https://user-images.githubusercontent.com/32564846/160625699-9ae3a5d1-c132-45a5-ac25-329f5a788ca2.png)

Adicione este novo webhook, cuidando que o endpoint corresponde ao endpoint da sua aplicação de replit bifurcada seguida de */webhooks*:

No nosso caso, este é o [ponto final] (https://developer.chatcase.com/external-chatbot/external-chatbot-tutorials/dialogflow-as-external-chatbot-integration#chatbot-handoff-to-human-agents).

Por favor, use seu endpoint de aplicação para que você possa modificar o código conforme necessário.

![imagem] (https://user-images.githubusercontent.com/32564846/160626352-512f854a-198b-4978-bb7b-28ad7463dbd2.png)

Criar a subscrição.

Agora vá para a seção Bots e crie um novo bot. Escolha "Resolução" como o tipo de bot.

![imagem] (https://user-images.githubusercontent.com/32564846/160626693-b533601e-3e29-4b71-aa57-b0c40ac400f2.png)

Nomeie-o como preferir, crie-o e pressione "Activar" quando solicitado. Isso irá "anexar" o novo chatbot ao Departamento Padrão, tornando o bot imediatamente disponível para usuários finais.

![imagem] (https://user-images.githubusercontent.com/32564846/160627101-0524955e-42fb-41f5-a5c9-4afa59fb91cd.png)

Deixar todas as configurações no padrão.

Agora vá para a seção "Routing & Departments".

![imagem] (https://user-images.githubusercontent.com/32564846/160627360-7b586896-e53f-47c5-bed9-2f050eb9c1f7.png)

Selecione o "Departamento padrão" e altere as regras de roteamento do "Atribuído" para o modo "Pooled".

![imagem] (https://user-images.githubusercontent.com/32564846/160627675-5672708d-734e-43f5-bc1f-16ce103a74ce.png)

Bem, está feito. Agora vamos testar.

Assim que uma nova solicitação for atualizada, o código em seu aplicativo web receberá um evento "request.update".

O código irá verificar se não há participientes presentes na conversa. Se participantesAgents\[] estiver vazio isso significa que a solicitação está na fila não atribuída (também conhecido como "pool"). O código, em seguida, simplesmente consulta todos os companheiros de equipe e selecione o primeiro, a quem o pedido será atribuído. Sinta-se livre para escolher sua própria lógica para implementar a atribuição.

![imagem] (https://user-images.githubusercontent.com/32564846/160655119-e7292c94-4781-4245-8761-d0f82d69e5fa.png)

Instalação automática

O var *API\ ENDPOINT* no código fonte aponta para a nuvem ChatCase.

Se você instalou o ChatCase usando a distribuição [Docker computer](https://github.com/ChatCase/chatcase-deployment/blob/master/docker-compose/README) use este valor para sua API\ ENDPOINT var:

Em * localhost*:

API\  ENDPOINT = localhost/api/

No seu próprio servidor:

API\ ENDPOINT = ${YOUR\  SERVER\ HOST}/api/

Você pode encontrar mais sobre os terminais de instalação do Docker [aqui](https://github.com/ChatCase/chatcase-deployment/blob/master/docker-compose/README#service-endpoints).
