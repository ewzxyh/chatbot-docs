---
title: "Mostrar/Esconder programaticamente widget"
description: "Neste tutorial mostraremos a você como gerenciar a visualização de widget programática usando parâmetros hide/show e método open/close. Além disso, adicionamos uma assinatura para "
---

Neste tutorial mostraremos a você como gerenciar a visualização de widget programática usando parâmetros *hide/show* e método *open/close*. Além disso, adicionamos uma assinatura para **onFechar** evento ChatCase para gerenciar fechar botão e escondê-lo no clique.

Primeiro de tudo você tem que definir **startHidden** propriedade para true na window\. chatcaseConfigurações para não mostrar widget quando ele começa.

```java
window.chatcaseSettings= {
    projectid: "<<CHATCASE_PROJECT_ID>>",
    startHidden: true
};
`$([Environment]::NewLine)
Em seguida, você tem que lidar com o evento de clique dos botões openWidget e closeWidget, a fim de mostrar programaticamente e ocultar widget.

```java
// programmatically open the widget
function openWidget() {
    window.ChatCase('show');
    window.ChatCase('open');
}

// programmatically close the widget
function closeWidget() {
    window.ChatCase('close');
    window.ChatCase('hide');
}
`$([Environment]::NewLine)
Finalmente, para concluir, você pode se inscrever opcionalmente no evento 'onClose' ChatCase e usar o método de ocultar widget quando o usuário clicar em fechar o ícone do canto direito.

```java
//subscribe to onClose ChatCase event and then hide widget
window.ChatCase('onClose', function(event_data) {
    window.ChatCase('hide')
});
`$([Environment]::NewLine)
Apresenta-se a seguir todo o código da amostra.

```html
<script type="application/javascript">
        window.chatcaseSettings=
        {
            projectid: "6480a7f683b1e1001370a6b1",
            startHidden: true
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


        // programmatically open the widget
        function openWidget() {
          window.ChatCase('show');
          window.ChatCase('open');
        }

        // programmatically close the widget
        function closeWidget() {
          window.ChatCase('close');
          window.ChatCase('hide');
        }

        //subscribe to onClose ChatCase event and then hide widget
        window.ChatCase('onClose', function(event_data) {
           window.ChatCase('hide')
        });
</script>
`$([Environment]::NewLine)
Nesta página [aqui](https://replit.com/@chatcase/ChatCase-HTML-Site#index.html) você pode ver o código inteiro e executá-lo para entender melhor os resultados
