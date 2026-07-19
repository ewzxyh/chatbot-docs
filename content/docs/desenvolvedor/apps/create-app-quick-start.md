---
title: "Construir aplicativo personalizado - Início rápido"
description: "Você pode construir aplicativos relevantes para o contexto e orientados para ações (também conhecidos como plugins) diretamente no topo do ChatCase com facilidade. Queremos que os "
---

# # Introdução

Você pode construir aplicativos relevantes para o contexto e orientados para ações (também conhecidos como plugins) diretamente no topo do ChatCase com facilidade. Queremos que os clientes estejam confiantes de que qualquer aplicativo que eles conectem à sua conta do ChatCase será útil, trabalhará bem e usará seus dados de forma responsável.

Um aplicativo ChatCase é simplesmente uma pequena aplicação web instalada na interface do agente usando um [iFrame](https://www.w3schools.com/tags/tag_iframe.asp) que amplia de alguma forma a funcionalidade do produto. Você pode usar qualquer tecnologia web para criar um aplicativo ChatCase, por exemplo: HTML, Javascript, NodeJs, Java, Python, etc.

Um começo rápido

Para manter as coisas simples neste início rápido, você irá instalar e usar um aplicativo chamado **Example Echo App** em ChatCase. Exemplo Echo App é um aplicativo de exemplo criado para mostrar-lhe como criar um novo aplicativo ChatCase para o ChatCase App Store. Com Exemplo Echo App você pode encontrar também como ler e usar os parâmetros de contexto ChatCase passados pelos clientes ChatCase (dashboard, webchat e widget) para o seu aplicativo.

Aqui está o App Exemplo Echo na barra lateral do painel de conversas:

![imagem] (https://user-images.githubusercontent.com/9378770/171464951-c775416f-f94b-43af-b70f-b8df4ba29412.png)

Preparação

* Se você já não tem uma conta ChatCase, registre-se em<https://panel.chatcase.com/v3/dashboard/#/signup>* Navegue para o **Example Echo App** na **ChatCase App Store**

![imagem] (https://user-images.githubusercontent.com/9378770/171465518-2201e929-a906-4958-8890-dc56adb08797.png)

* Clique em **Instalar** para instalar Exemplo Echo App em seu projeto ChatCase

![imagem] (https://user-images.githubusercontent.com/9378770/171465698-0656ca63-3e7b-4dc6-a8b3-89bcd0335222.png)

Experimenta

Vá ao menu Monitor e obtenha dados de uma conversa aberta na interface do painel.

* Abra qualquer conversa na interface **Monitor**.
* Para abrir a App Exemplo Echo na barra lateral **, clique no ícone **Apps** no lado inferior direito do painel de conversa.

![imagem] (https://user-images.githubusercontent.com/9378770/171465893-6ecee6e8-62fd-43ec-b9e1-f19b29b30ff5.png)

A aplicação Exemplo Echo é carregada por ChatCase usando um iframe. Na área de texto do aplicativo você pode encontrar a carga útil de contexto ** JSON** passada pelo cliente ChatCase (Detalhe de conversa neste exemplo) para o aplicativo.

![imagem] (https://user-images.githubusercontent.com/9378770/171464951-c775416f-f94b-43af-b70f-b8df4ba29412.png)

Este aplicativo está configurado para estar disponível tanto no painel como no webchat, bem como no appstore. Se você também quiser ver este aplicativo no webchat **selecione uma conversa** da lista de conversas e na barra lateral ** direita** dos detalhes da conversa, clique no botão **Apps**.

![imagem] (https://user-images.githubusercontent.com/9378770/171917421-787eef49-daaf-4b91-8f63-b5b1a9e1cadd.png)

A aplicação Exemplo Echo é carregada por ChatCase:

![imagem] (https://user-images.githubusercontent.com/9378770/171917304-af3ef9a5-f88e-4662-b147-2c90624c8eb3.png)

# # # # Leia os parâmetros de contexto do ChatCase usando iframe postMessage

A carga útil do contexto JSON mostrada na área de texto é passada usando o método [iframe postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). Usando o Javascript você pode se inscrever no método postMessage iframe usando o código abaixo:

```
<script>
  window.addEventListener("message", (event) => {
    console.log('ChatCase context payload ', event.data );
    ...
  }, false);
</script>
`$([Environment]::NewLine)
Abaixo você pode encontrar a estrutura da carga útil de contexto JSON:

* appname: o nome do aplicativo
* request: o objeto request
* token: o token jwt do usuário logado na UI

Tenha cuidado com o código abaixo você está continuamente subscrito aos parâmetros contextuais de ChatCase. Então, se os parâmetros de contexto mudarem, por exemplo, porque os dados da conversa mudam (por exemplo, uma nova tag é adicionada à conversa), a assinatura será realizada em tempo real.

### # Leia os parâmetros de contexto do ChatCase usando parâmetros url de consulta iframe

Você também pode ler alguns parâmetros de contexto ChatCase recebendo os parâmetros url da consulta passados em GET para o iframe. ChatCase passa os seguintes parâmetros de consulta usando o método HTTP GET:

* request\ id: Um identificador único para o pedido que é dado ao ChatCase. Siga este padrão 'support-group-UUID'. Você pode encontrar mais informações [aqui] (https://github.com/ChatCase/chatcase-docs/blob/master/apis/rest-api/requests/README#the-request-model)
* projeto\ id: O identificador único do projeto ChatCase
* app\ name: O nome do aplicativo ChatCase

Você pode usar a API REST do ChatCase, por exemplo a API [Pedir detalhe REST](https://developer.chatcase.com/apis/rest-api/requests#get-a-request-by-request_id), para obter mais informações sobre a conversa passando os parâmetros request\ id e project\ id.

Vá para a página [index.js da App Exemplo Eco](https://replit.com/@nicolan74/chatcase-helloworld-webchat-example-app#index.js) se você quiser ver como recuperar os parâmetros enviados pelo chatcase usando o método de parâmetros url.

Nota

O aplicativo está instalado em vários locais:

* Detalhes de conversação no painel de monitor do painel
* Detalhes da conversa no Web Chat do Agente
* Na loja de aplicativos ChatCase.

No entanto, os dados disponíveis em alguns locais podem não estar disponíveis em outros. Por exemplo, suas solicitações anteriores acessaram dados de conversação. Os dados de conversação estão disponíveis em aplicativos rodando na barra lateral de conversa, mas não em aplicativos rodando na Loja de aplicativos do ChatCase.

# # Criar uma aplicação ChatCase

Agora que você tem seu projeto, é hora de criar seu primeiro aplicativo no menu Apps:

* Em seus aplicativos, clique em **Criar um novo aplicativo** botão.

![imagem] (https://user-images.githubusercontent.com/9378770/171993888-6979f011-fbe2-44f2-bd95-04b95b52a7ba.png)

* No painel de formulário inserir :
* O ícone ** app** do seu aplicativo (obrigatório)
* O nome ** do seu aplicativo (obrigatório)
* A URL de configuração (opcional). Usado para criar uma página de configuração personalizada para o seu aplicativo. Seu aplicativo pode de fato incluir uma página para executar configurações avançadas por exemplo: https//myapp-for-chatcase/ configuration. Para acessar a página de configuração personalizada, clique no botão "gerir" após instalar o aplicativo
* O URL **Render** (obrigatório): Este atributo especifica o endereço URL do seu webapp para incorporar através de um iframe
* O aplicativo curto **description** (obrigatório)
* O ** aprender mais URL** (obrigatório)
* Onde você quer que seu aplicativo esteja disponível. Valores autorizados:
* Painel: o aplicativo estará disponível no painel de detalhes da conversação do painel
* Webchat: o aplicativo estará disponível no painel de detalhes da conversação do agente web chat
* Widget: o aplicativo estará disponível no painel home page do widget (COMANDO SOON)
* App Store: o aplicativo estará disponível no menu Apps do painel

![imagem] (https://user-images.githubusercontent.com/9378770/171993907-008e785e-b924-4b75-8f7b-a5d3cefeb5cc.png)
