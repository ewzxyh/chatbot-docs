---
title: "Tamanho personalizado (largura/altura)"
description: "Neste tutorial, mostraremos a você como melhorar e simplesmente alterar o tamanho do Widget ChatCase em seu site"
---

Neste tutorial, mostraremos a você como melhorar e simplesmente alterar o tamanho do Widget ChatCase em seu site

Passos para fazê-los é muito fácil:

1. Copie e cole o código básico do script widget
2. Inscreva-se em **onInit** Evento da telha
3. Adicionar folha de estilo personalizada para substituir os valores padrão

Aqui está o exemplo de código completo

```html
<html>
    <head>
        <script type="application/javascript">
            var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"
            window.chatcaseSettings=
            {
                projectid: PROJECT_ID,
                startHidden: true,
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

            window.ChatCase('onInit', function (event_data) {
                //var chatcaseDiv = document.getElementById("chatcasediv")

                var head = document.getElementsByTagName('head')[0];
                var style = document.createElement('style');
                style.id = 'customStyle';
                style.type = 'text/css';

                style.innerHTML += '#chatcasediv { height: 800px; width: 400px; }\n';

                head.appendChild(style);
            })

        </script>
    </head>
    <body>
        This ChatCase example will change the widget size in height and width as you want
        <div>
            <b>Agents available:</b> <span id='available'>loading availability...</span>
        </div>
    </body>
</html>
`$([Environment]::NewLine)
Ver o resultado [aqui] (https://chatcase-html-site-chatcase.replit.app/widget/customDimension.html)
