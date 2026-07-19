---
title: "Estilo de widget personalizado"
description: "Estilo de widget personalizado"
---

Estilo de widget personalizado

Neste tutorial mostraremos a você um tutorial simples de como substituir o estilo padrão do ícone widget, e como adicionar uma animação simples no evento hover no mesmo elemento

Você pode usar este exemplo para substituir e alterar cada elemento do widget e personalizá-lo como quiser. Basta lembrar de subsribear para 'onInit' navite evento ChatCase e adicionar estilo ao e dos arquivos já carregados

Aqui está uma antevisão do cancelamento do ícone do lançador personalizado

! [Icone do lançador personalizado] (https://raw.githubusercontent.com/gab-95/images-host/refs/heads/main/453939446-a14920a4-1c51-4b40-ba5e-a456aa740abd.png)

Aqui está o exemplo de código completo

```html
<html>
    <head>
        <script type="application/javascript">
            var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"
            window.chatcaseSettings =
            {
                projectid: PROJECT_ID,
            };
            (function (d, s, id) {
                var w = window; var d = document; var i = function () {i.c(arguments);};
                i.q = []; i.c = function (args) {i.q.push(args);}; w.ChatCase = i;
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id; js.async = true; js.src = "https://widget.chatcase.com/v6/launch.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'chatcase-jssdk'));

            window.ChatCase('onInit', function (event_data) {
                var iframeChatCase = document.getElementById("chatcaseiframe");

                var style = iframeChatCase.contentWindow.document.createElement('style');
                style.type = 'text/css';
                style.innerHTML = '.message_innerhtml.marked { font-size: 17!important;}\n';

                //add custom stype to launcher-button (image + border + background-image)
                style.innerHTML += '#c21-launcher-button > div > svg { display: none !important; }\n';
                style.innerHTML += '#c21-launcher-button .launcher-button { background-image: url("https://panel.chatcase.com/v3/dashboard/assets/img/avatar_bot_chatcase.svg"); background-repeat: no-repeat;}\n';
                style.innerHTML += '#c21-launcher-button { padding: 6px;background-color:unset !important;     border: 1px solid rgb(182, 20, 22);}\n';

                //add custom animation to launcher button on hover
                style.innerHTML += '#c21-launcher-button .launcher-button:hover { animation: fade-in 1.2s ease-in both;}'
                style.innerHTML += '@-webkit-keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } } @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }'

                iframeChatCase.contentWindow.document.getElementsByTagName('head')[0].appendChild(style);

            })

        </script>
    </head>

    <body>
        This ChatCase example will change the default style of widget launcher icon and add a simple animation hovering it
    </body>

</html>
```
