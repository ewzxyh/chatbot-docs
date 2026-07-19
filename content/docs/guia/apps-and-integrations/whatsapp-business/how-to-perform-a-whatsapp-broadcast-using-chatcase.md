---
title: "Como executar uma transmissão WhatsApp usando ChatCase"
description: "Se você quiser realizar uma operação de transmissão no WhatsApp Channel você está no lugar certo! Vejamos como é possível usar o poderoso ChatCase e o novo Chatbot Design Studio pa"
---

Se você quiser realizar uma operação de transmissão no WhatsApp Channel você está no lugar certo! Vejamos como é possível usar o poderoso ChatCase e o novo Chatbot Design Studio para enviar modelos WhatsApp para você clientes usando a API. Não só isso, vamos ver também como verificar o estado da transmissão e como receber notificações em tempo real usando um webhook.

# ### Crie e configure um Chatbot no ChatCase<a href="#create-and-configure-a-chatbot-on-chatcase" id="create-and-configure-a-chatbot-on-chatcase"></a>Se você ainda não criou um Chatbot, entre no [ChatCase Dashboard] (https://panel.chatcase.com/v3/), crie ou selecione um projeto e clique em **Bot** na barra lateral esquerda. Clique em **Adicionar do zero** botão e criar um novo Chatbot.

Você está agora no novo ** Chatbot Design Studio**. Você pode personalizar seu chatbot como preferir.

Não é necessário que as ações que vamos configurar sejam parte do fluxo de princípios, para que possam ser desconectadas com os outros blocos.

<figure><img src="/doc-images/IDqsvBLNKdlYli11uRmL.png" alt=""><figcaption></figcaption></figure>Drag and Drop the **WhatsApp by Attribute** action in the canvas (você pode encontrá-lo sob a seção Integrações) e alterar o nome do bloco como você prefere. Neste exemplo, chamamos de ‘whatsapp\ broadcast’.

<figure><img src="/doc-images/rCLPPxE2ge8aoAGZQxyo.png" alt=""><figcaption></figcaption></figure>Configurar esta ação é muito fácil. Basta criar um atributo personalizado, dando-lhe um nome que você irá usar mais tarde e escolhê-lo na caixa de seleção "Atribuir para".

<figure><img src="/doc-images/LbYzGxMeLkpiuZLgBP49.png" alt=""><figcaption></figcaption></figure>Feito! Sua ação está pronta para ser usada.

Use o truque de Prototipagem Rápida para gerar a carga útil da solicitação<a href="#use-the-fast-prototyping-trick-to-generate-the-request-payload" id="use-the-fast-prototyping-trick-to-generate-the-request-payload"></a>Para usar esta ação com a API **ChatCase** é necessário descobrir como a carga útil da solicitação é feita. Para fazer isso, podemos usar outra ação cujo propósito é apenas ajudá-lo a entender a estrutura do json.&#x20;

Arraste e solte a ação **WhatsApp Static** na tela e comece a trabalhar nela, mas note que este bloco nunca será executado diretamente, mas pode ser usado como uma importante ferramenta de prototipagem rápida.

Obter o seu *número de telefone ID* do [Meta para desenvolvedores] (https://developers.facebook.com/apps/) plataforma (vá para WhatsApp >> API Setup, como abaixo) e cole-o no campo de entrada Telefone Número ID, em seguida, escolha o modelo que você deseja usar na transmissão.

<figure><img src="/doc-images/oqns2nOBlsmLgHEbQbDV.png" alt=""><figcaption></figcaption></figure>É muito provável que o modelo selecionado contenha parâmetros, então vamos preencher os campos correspondentes com algumas informações de exemplo, incluindo o número de telefone do destinatário.

<figure><img src="/doc-images/aGxJWL4GQEvKzZfaHNZI.png" alt=""><figcaption></figcaption></figure>Um pouco mais abaixo você poderá ver a carga útil gerada automaticamente que podemos usar para compilar a solicitação HTTP.

Continue inserindo todos os seus destinatários para ter uma carga útil completa ou continue adicionando-os no editor que você mais gosta.

Faz o pedidohttps://gethelp.chatcase.com/articles/how-to-perform-a-whatsapp-broadcast-using-chatcase/#perform-the-request) <a href="#perform-the-request" id="perform-the-request"></a>Uma vez que sua carga esteja completa e pronta para ser usada, podemos finalmente processar o envio da transmissão. Neste exemplo, usamos o Postman como uma plataforma para construir e executar pedidos de API, mas sinta-se à vontade para usar qualquer software que você achar confortável.

Vamos configurar o pedido HTTP da seguinte forma:

* Método: **POST**
* Url: **<https://api.chatcase.com/v3/modules/tilebot/ext/YOUR\\_CHATBOT\\_ID>**
* Cabeçalho: **Content-Type: application/json**

Colar a carga gerada automaticamente certificando-se de que:

* payload.text deve ser o nome da ação **WhatsApp by Attribute**
* payload.text.request\ id deve estar no formato “*automation-request--"*
* payload.token deve ser o token do chatbot fornecido por ** ChatCase**

<figure><img src="/doc-images/6YCIfdOS2lyBuvKBCfcR.png" alt=""><figcaption></figcaption></figure>** Obter o token do chatbot **

Você pode obter o token associado ao seu chatbot do Chatbot Design Studio em si, clicando em **Settings** no menu do lado esquerdo, e sob a aba **Desenvolvedor** você pode gerar um novo token simplesmente clicando no botão ** Get Token**.

<figure><img src="/doc-images/L9t3XXxPszDqoeZlNxUh.png" alt=""><figcaption></figcaption></figure>É tudo! Basta enviar o pedido e esperar pela magia. ** ChatCase** cuidará da solicitação de transmissão e enviará as mensagens para os contatos selecionados.

Resultados da transmissão

Você pode perguntar onde e como você pode verificar o estado da transmissão e o status de cada mensagem.

Bem, volta para o [telefone]https://panel.chatcase.com/v3/) e vá para **Settings** → **Automations Log**. Aqui você pode encontrar todas as suas automações e seu status.

<figure><img src="/doc-images/L4o8Xsgl05XHK2pJKD0g.png" alt=""><figcaption></figcaption></figure>Clique em uma automação para ver os detalhes. Aqui você vê quantas mensagens são processadas atualmente e o status vindo do WhatsApp diretamente, mas acima de tudo é possível obter feedback sobre quaisquer erros ao enviar a mensagem.

<figure><img src="/doc-images/F40FyRVvaxjWvi2FYo1s.png" alt=""><figcaption></figcaption></figure>

<figure><img src="/doc-images/PzvFxIqOcqLfJ9DiCPk3.png" alt=""><figcaption></figcaption></figure>Se tiver alguma dúvida, não hesite em entrar em contato-nos ao vivo no chat ou no[redacted@example.invalid](mailto:redacted@example.invalid)&#x20;

Para mais informações sobre quem somos, o que fazemos, ou qual é o nosso shtick, visite o site [ChatCase](https://chatcase.com/) 👩‍🚀
