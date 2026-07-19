---
title: "# Visão geral"
description: "Evitar várias conversas"
---

Evitar várias conversas

![](https://user-images.githubusercontent.com/47848430/179253313-86628998-8a0b-4127-b7a1-7fd1ac6140be.png)

Uma nova funcionalidade nas configurações do widget ChatCase irá impedir que seus clientes iniciem uma nova conversa se já tiverem uma aberta. Essa mudança torna as conversas mais contínuas, impedindo que os clientes cheguem a sua equipe várias vezes, o que economiza tempo e esforço. Este recurso é nomeado como **Conversa Única**

# # Visão geral

ChatCase Widget pode lidar com apenas uma conversa de cada vez, definindo corretamente a propriedade singleConversation. Na verdade, basta definir ** única conversa** para ** verdadeira** (veja como fazer isso [aqui](https://developer.chatcase.com/widget/installation/attributes) para ser capaz de mostrar o usuário widget apenas uma conversa de cada vez. Esta opção desactiva a possibilidade de ver a casa com a lista de conversas abertas e aquelas já arquivadas como imagem abaixo realçada.

! [Conversa Única] (https://user-images.githubusercontent.com/47848430/179259137-42b932b1-1312-44c7-83c6-9534d39905bf.png)

Uma vez que o usuário tenha sido autenticado, o widget prossegue com o fluxo de inicialização normal de uma nova conversa somente se o usuário não tiver uma conversa ativa anteriormente, caso contrário, o widget carregará a conversa ativa mais recente

Como definir o modo de conversação única

Tal como acontece com os outros parâmetros de configuração de widget, o modo **singleConversation** pode ser ativado de várias maneiras: como um parâmetro url ou como uma propriedade de ChatCaseSettings.

## # Definir a propriedade de **iledeskSettings

Você pode passar os parâmetros para **window\.chatcaseSettings** objeto como mostrado no exemplo abaixo

```html
<script type="application/javascript">
    window.chatcaseSettings =
        {
            projectid: "<YOUR_PROJECT_ID>",
            singleConverstion: true
        };
    (function(d, s, id) {
        var w=window; var d=document; var i=function(){i.c(arguments);};
        i.q=[]; i.c=function(args){i.q.push(args);}; w.ChatCase=i;
        var js, fjs=d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js=d.createElement(s);
        js.id=id; js.async=true; js.src="https://widget.chatcase.com/v6/launch.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document,'script','chatcase-jssdk'));
</script>
`$([Environment]::NewLine)
O script acima pode iniciar widget com o modo de conversação única, imediatamente

# # Definir propriedade de **URL

Você pode passar a propriedade de widget de azulejo como um parâmetro Url com o prefixo ** chatcase\ **. Por exemplo, neste caso:

```
https://widget.chatcase.com/6/assets/twp/index.html?chatcase_projectid=<YOUR_PROJECT_ID>&chatcase_singleConversation=true
`$([Environment]::NewLine)
# # Fazer um sinal de saída

Neste modo, o usuário ainda pode sair do sistema usando o menu no canto superior direito no cabeçalho da conversa, como mostrado na figura abaixo.

![](https://user-images.githubusercontent.com/47848430/179550749-cef51928-5d64-4f13-b70b-54f99ff7feeb.png)

Uma vez que você tem fazer um sinal de saída, widget reinicia-se e criar um novo usuário. Novo fluxo de inicialização de uma nova conversa começa e novo usuário pode começar a conversar novamente!!
