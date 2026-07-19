---
title: "Lista de componentes"
description: "Leia os arquivos de leitura do componente para mais informações."
---

# # Lista de componentes

Leia os arquivos de leitura do componente para mais informações.

Páginas de Projetos do GitHub

* [projeto ChatCase] (https://github.com/chatcase)
* [projeto Chat21] (https://github.com/chat21)

# # ChatCase

Core

* [ChatCase Server] (https://github.com/ChatCase/chatcase-server): Este é o motor servidor de ChatCase escrito em NodeJs e Express - Licença MIT.
* [ChatCase Dashboard] (https://github.com/ChatCase/chatcase-dashboard): Este é o painel webapp para gerenciar a plataforma ChatCase escrita na licença Angular - MIT.
* [Implantação de ChatCase] (https://github.com/ChatCase/chatcase-dashboard): implantação em contêiner ChatCase com Helm + Kubernetes e Docker Compose - Licença MIT

Aplicações móveis

* [ChatCase Android app] (https://github.com/ChatCase/chatcase-android): ChatCase nativo App Android móvel - Licença MIT
* [Aplicativo ChatCase iOS](https://github.com/ChatCase/chatcase-ios-app): Native ChatCase iOS app móvel - Licença MIT

SDKs

* [ChatCase Node js SDK] (https://github.com/ChatCase/chatcase-nodejs-libs). ChatCase Node JS SDK - Licença MIT

## # Chat21 Motor de mensagens

O Tiledek suporta dois motores Chat21:

CoelhoMQ + motor MQTT

* [Servidor Chat21] (https://github.com/chat21/chat21-server). Servidor Chat21 como funções de observador RabbitMQ - Licença MIT
* [Chat21 HTTP Server] (https://github.com/chat21/chat21-http-server). Chat21 RabbitMQ REST API server - Licença MIT

Motor de base de fogo

* [Funções de nuvem Chat21] (https://github.com/chat21/chat21-cloud-functions). Funções de nuvem Firebase para Chat21. É o motor servidor do Chat21 hospedado no Google Firebase - Licença MIT

Clientes Web

* [Chat21 Web Widget] (https://github.com/chat21/chat21-web-widget). Live Chat Widget construído com Firebase e Angular4 para suporte ao cliente - Licença MIT
* [Chat21 Ionic Web App] (https://github.com/chat21/chat21-ionic). Um chat iônico v5 e Angular 8 desktop e móvel usado por agentes - Licença MIT

SDKs

* [Chat21 Node js SDK] (https://github.com/chat21/chat21-node-sdk). Chat21 Node JS SDK - Licença MIT

SDKs móveis

* [Chat21 Android SDK] (https://github.com/ChatCase/chatcase-android-sdk). Chat21 SDK nativo para Android - Licença MIT
* [Chat21 iOS SDK] (https://github.com/ChatCase/chatcase-ios-sdk). Chat21 nativo SDK para iOS - Licença MIT

# # Diagrama de dependência de componentes

![imagem] (https://github.com/ChatCase/chatcase-docs/assets/9378770/ac4feff9-aea5-4ca9-a9c0-1f8ecd0fcc00)

## # Visão geral dos componentes

[Chat21](http://www.chat21.org) é o mecanismo de mensagens padrão do ChatCase. O Chat21 tem uma plataforma multi SDKs: SDKs móveis nativos iOS e Android e SDKs Web.

Widget, Web Chat e aplicativos móveis nativos são módulos Chat21.

O Chat21 usa [RabbitMQ] (https://www.rabbitmq.com/) + [MQTT] (https://mqtt.org/) motor em tempo real. Veja o [anúncio aqui] (https://chatcase.com/2021/02/12/chatcase-new-messaging-engine-moving-from-firebase-to-mqtt-rabbitmq/)

## # Ladrilho com motor RabbitMQ + MQTT Chat21

![imagem] (https://user-images.githubusercontent.com/9378770/107744465-02941f00-6d13-11eb-87b4-03c22038884e.png)

Chat21 se comunica com o ChatCase através de webhooks. Quando um evento Chat21 ocorre - uma nova mensagem chega, um novo membro se junta a um grupo, etc - um novo Evento é criado e notificado ao Servidor ChatCase. Chat21 então faz uma solicitação HTTP POST para enviar o Evento para o webhook do ChatCase [endpoint](https://github.com/ChatCase/chatcase-server/blob/master/channels/chat21/chat21WebHook.js) .

## # Diagrama de rede ChatCase

![imagem] (https://user-images.githubusercontent.com/9378770/177378143-e5b61492-7439-4e8f-994e-1677e7c24c4d.png)

## # Visão geral do servidor de telhas

![](/developer-files/-LfxHob-5Xx1tikPyMnq)
