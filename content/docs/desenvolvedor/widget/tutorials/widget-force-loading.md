---
title: "Forçar o carregamento do widget sem interação do usuário"
description: "Neste tutorial mostraremos a você como forçar o carregamento do Widget ChatCase em seu site.\\ Por padrão, o widget não está carregado. Ele sempre aparecerá após 5 segundos, a menos"
---

Neste tutorial mostraremos a você como forçar o carregamento do Widget ChatCase em seu site.\
Por padrão, o widget não está carregado. Ele sempre aparecerá após 5 segundos, a menos que um dos eventos abaixo listados desencadeie um início anterior. Isso impede que seu site carregue recursos de telha e melhore todo o carregamento de desempenho. Só uma vez que seu site é carregado e o usuário mover/rolar mouse, chatcase começa a carregar fonte widget.

Passos para fazê-los é muito fácil:

1. Copie e cole o código básico do script widget
2. Use o ouvinte evento janela para gancho 'carregar' evento
3. Dispare manualmente um dos seguintes eventos listados:
Rolagem
* mousedown
* mousemove
* touchstart
Teclado para baixo

Aqui está o exemplo de código completo

```html
<html>
    <head>
        <script type="application/javascript">
            var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"
            window.chatcaseSettings=
            {
                projectid: PROJECT_ID,
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

            /** listen to 'load' window event **/
            window.addEventListener('load', (event)=> {
                document.dispatchEvent(new Event('mousemove'))
            })

        </script>
    </head>
    <body>
        This ChatCase example will force the loading of the widget
    </body>
</html>
`$([Environment]::NewLine)
# # Forçar o carregamento apenas na plataforma móvel

Se você só quiser forçar o carregamento do widget no celular, você pode adicionar uma função para detectar a plataforma onde o widget está atualmente em execução.

```html
<html>
    <head>
        <script type="application/javascript">
            var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"
            window.chatcaseSettings=
            {
                projectid: PROJECT_ID,
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

            let isMobile = detectIfIsMobile(window)
            if(isMobile){
                window.addEventListener('load', (event)=> {
                    document.dispatchEvent(new Event('mousemove'))
                })
            }

            /** check current platform **/
            function detectIfIsMobile(windowContext) {
                let isMobile = false;
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(windowContext.navigator.userAgent))
                    isMobile = true
                else
                    isMobile = false
                return isMobile;
            }

        </script>
    </head>
    <body>
        This ChatCase example will force the loading of the widget <b>only on MOBILE PLATFORM</b>
    </body>
</html>
```
