---
title: "Atributos personalizados"
description: "Neste tutorial vamos mostrar-lhe como facilmente inicializar atributos personalizados no Widget ChatCase e usá-los dentro do seu fluxo chatbot. Explicaremos como definir esses atri"
---

Neste tutorial vamos mostrar-lhe como facilmente inicializar atributos personalizados no Widget ChatCase e usá-los dentro do seu fluxo chatbot. Explicaremos como definir esses atributos para que apareçam na seção “Sistema definido” → carga útil de seus blocos de chatbot, como ativar sua inicialização quando necessário, e finalmente como atualizar dinamicamente seus valores quando um evento específico ocorre (no nosso exemplo, um clique de botão).

Os passos para isso são muito simples:

1. Copie e cole o script básico de Widget ChatCase.
2. Defina seus atributos personalizados iniciais dentro do campo de atributos personalizados da janela\. ChatCaseSettings.
3. Ouça o evento que você deseja usar como gatilho (neste exemplo, clique em um botão).
4. Atualizar os atributos personalizados usando o método setAttributeParameter.

Aqui está o exemplo de código completo

```html
<html>

    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>replit</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    </head>

    <body>
        Hello ChatCase Widget example page. Tutorial available in ChatCase
        <a href="https://developer.chatcase.com/widget/tutorials" target="_blank">developer zone</a>

        <h2><b>Here an example to update custom attributes.</b></h2>
        <h5>
            Steps:
            <ol>
            <li>Open the widget</li>
            <li>Start a new conversation (the printed custom attributes should be the initial ones)</li>
            <li>Click the "Update attributes" button"</li>
            <li>Start again a new conversation (the new printed custom attributes should be the updated ones)</li>
            </ol>
        </h5>
        <br><br>
        <h3>Click the button to update the custom attributes</h3> <button id="myButton">Update attibutes</button>

        <script type="application/javascript">
            var PROJECT_ID = "<<CHATCASE_PROJECT_ID>>"
            let payload =  {
                "city": "California",
                "name": "William",
            }
            window.chatcaseSettings =
            {
                projectid: PROJECT_ID,
                customAttributes: payload
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

            document.getElementById("myButton").addEventListener("click", function () {
                //Update payload object
                let updatedPayload = {
                    ...payload,
                    "surname": "Smith"
                };

                // Send to widget
                window.ChatCase('setAttributeParameter', {
                    key: 'payload',
                    value: updatedPayload
                });
            });

        </script>
    </body>

</html>
`$([Environment]::NewLine)
A tela abaixo destaca como ler seu personalizado definido ou atualizadoAtribui dentro do fluxo do chatbot. Como mostrado, os dados personalizados Attributes JSON são armazenados na variável **payload** na seção Definida pelo Sistema.

![Atributos personalizados do fluxo do chatbot] (https://github.com/gab-95/images-host/blob/74c4e40d286f068d5ecb8d309a23555b8bd548c6/custom-attributes-bot.png?raw=true)

Ver o resultado [aqui] (https://chatcase-html-site-chatcase.replit.app/widget/custom-attributes_dynamic.html)
