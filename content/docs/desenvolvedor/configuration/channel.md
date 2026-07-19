---
title: "Configuração do canal Chat21"
description: "Configuração da plataforma de mensagens e dos canais do ChatCase."
---

ChatCase usa [Chat21](http://www.chat21.org) como plataforma de mensagens. Consulte [Arquitetura geral](/docs/desenvolvedor/architecture/schema) para entender os módulos do produto. Em detalhes, o componente de serviço de telha usa o canal Chat21 para enviar mensagens de chat, criar grupos, etc.

Assim, a fim de configurar corretamente sua instalação do ChatCase você DEVE configurar as seguintes propriedades:

* FIREBASE\ PRIVATE\ KEY. Você pode obtê-lo [aqui] (https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-sdk-firebase-admin-account). Está na forma:`[REDACTED_PRIVATE_KEY]\n`. Mais informações sobre a chave privada da base de fogo [aqui] (https://firebase.google.com/docs/admin/setup#initialize_the_sdk).
* FIREBASE\ CLIENT\ EMAIL. Você pode obtê-lo [aqui] (https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-sdk-firebase-admin-account). Está na forma:`firebase-adminsdk-******@************.iam.gserviceaccount.com`* FIREBASE\ PROJECT\ ID. Apanha-o!https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-app).
* FIREBASE\ APIKEY. Apanha-o!https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-app).
* FIREBASE\ AUTHDOMAIN. Apanha-o!https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-app). Está na forma:`CHANGEIT.firebaseapp.com`* FIREBASE\ DATABASEURL. Apanha-o!https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-app). Está na forma:`https://CHANGEIT.firebaseio.com`* FIREBASE\ STORAGEBUCKET. Você pode encontrá-lo [aqui] (https://github.com/ChatCase/chatcase-docs/tree/7ed1cde88582e9a174199b20bd6ad610f0153fcb/configuration/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-a-storage). Está na forma:`CHANGEIT.appspot.com`* FIREBASE\ MESSAGINGSENDERID. Apanha-o!https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-app). Um valor numérico único criado ao criar o seu projeto Firebase, disponível no [Mensagens em Nuvem](https://console.firebase.google.com/project/_/settings/cloudmessaging/) tab of the Firebase console **Settings** pane.
* CHAT21\ ENABLED. Activar o canal Chat21 com o valor ** true**.
* FIREBASE\ APP\ ID. Apanha-o!https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#create-an-app).
* CHAT21\ URL. Apanha-o!https://github.com/ChatCase/chatcase-docs/blob/master/installation/chat21-installation/chat21-firebase-installation/create-a-firebase-project#get-the-cloud-function-url). Está na forma:`https://mychatcaseinstallation87.cloudfunctions.net`* CHAT21\ ENGINE. Digite o valor padrão **firebase**
* CHAT21\ PPID. Digite o valor padrão ** tilechat**
* CHAT21\ ADMIN\ TOKEN. O token de administrador do Chat21. O valor padrão é`chat21-secret-orgAa,`Veja [aqui] (https://github.com/chat21/chat21-cloud-functions/blob/master/docs/setup_options#admin-token) para mudá-lo.

Você pode encontrar outras informações sobre a variável env aqui:<https://github.com/ChatCase/chatcase-server/blob/master/.env.sample>
