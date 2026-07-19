---
title: "Posicionamento móvel"
description: "Neste tutorial mostraremos a você como melhorar e simplesmente posicionar ChatCase Widget em seu site quando servido no navegador móvel Passos para fazê-los é muito fácil:"
---

Neste tutorial mostraremos a você como melhorar e simplesmente posicionar ChatCase Widget em seu site quando servido no navegador móvel Passos para fazê-los é muito fácil:

1. Copie e cole o código básico do script widget
2. Definir **mobileMarginX** e **mobileMarginY** propriedade dentro da janela\.chatcaseSettings
3. Use a janela de função\. ChatCase (‘show’) para mostrar o widget APENAS se algum agente estiver disponível.

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
                mobileMarginX: "20px",
                mobileMarginY: "10px"
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
    </head>
    <body>
        This ChatCase example will hide the widget if no agent is available
        <div>
            <b>Agents available:</b> <span id='available'>loading availability...</span>
        </div>
    </body>
</html>
`$([Environment]::NewLine)
Aqui está em detalhe o que exatamente **mobileMarginX** e **mobileMarginY** fazem

! [Posicionamento móvel] (https://user-images.githubusercontent.com/47848430/226629891-bf97c1f5-dd3b-48be-ba70-07a2e5bcdbbf.png)
