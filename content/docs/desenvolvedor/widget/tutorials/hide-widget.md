---
title: "Ocultar widget"
description: "Esconder o elemento"
---

Esconder o elemento

Neste tutorial mostraremos a você um tutorial simples de como esconder widget se nenhum agente ainda estiver disponível. Passos para fazê-los é muito fácil:

1. Iniciar widget na configuração do modo oculto startHidden boolean property to true
2. Obter configurações de widget usando APIs ChatCase
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
                startHidden: true
            };
            (function(d, s, id) {
                var w=window; var d=document; var i=function(){i.c(arguments);};
                i.q=[]; i.c=function(args){i.q.push(args);}; w.ChatCase=i;
                var js, fjs=d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js=d.createElement(s);
                js.id=id; js.async=true; js.src="https://widget.chatcase.com/6/launch.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document,'script','chatcase-jssdk'));

            getWidgetSettings((err, result) => {
                    const users_available = result['user_available']
                    let availability = true;
                    if (!users_available || users_available.length == 0) {
                        document.getElementById('available').innerHTML = "No one is available, widget will stay hidden!";
                    }
                    else {
                        document.getElementById('available').innerHTML = "Someone is available, showing widget...";
                        window.ChatCase('show');
                    }
                });

                function getWidgetSettings(callback) {
                    const options = {
                        url: `https://api.chatcase.com/v3/${projectId}/widgets`, // PROJECT ID IS ALSO USED HERE TO GET PROJECT SETTINGS
                        method: 'GET'
                    };
                    let xmlhttp = new XMLHttpRequest();
                    xmlhttp.open(options.method, options.url, true);
                    xmlhttp.onreadystatechange = function() {
                        if (callback && xmlhttp.readyState == 4 && xmlhttp.status == 200 && xmlhttp.responseText) {
                            try {
                                const json = JSON.parse(xmlhttp.responseText);
                                callback(null, json);
                            }
                            catch (err) {
                                callback(err, null);
                            }
                        }
                    };
                    xmlhttp.send(null);
                }
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
Ver o resultado [aqui] (https://andreasponziello.w3spaces.com/chatcase-widget-hidden-on-unavailability-example.html)
