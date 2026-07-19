---
title: "Especificações do protocolo de Widget"
description: "Este documento descreve as especificações brutas do protocolo JSON usadas pelos chatbots externos (e pelo próprio ChatCase) para enviar mensagens para o widget. Você pode usar este"
---

Este documento descreve as especificações brutas do protocolo JSON usadas pelos chatbots externos (e pelo próprio ChatCase) para enviar mensagens para o widget. Você pode usar este protocolo de um [chatbot externo](https://developer.chatcase.com/external-chatbot/integrate-your-chatbot) para personalizar mensagens para seus usuários finais. O protocolo JSON permite que você descubra que tipo de conteúdo o widget suporta, construindo respostas melhoradas do chatbot para aumentar a experiência do usuário que vão além de mensagens de texto simples, adicionando imagens, botões especiais e interação.

Novos recursos são adicionados costantly ao widget ChatCase por isso faça uma referência constante a esta seção para se manter atualizado com todas as mensagens de widget suportadas, controles e mídia que podem ser renderizados em mensagens de widget.

Recursos

Para uma demonstração ao vivo de todos os recursos suportados descritos neste documento você pode se referir a este projeto chatbot externo em *repl.it* que você pode usar como uma vitrine de todos os recursos wideget

[Demo de widget externo-bot no Repl.it] (https://repl.it/@andreasponziell/chatcase-widget-protocol-example#index.js)

Você também pode ver uma demonstração ao vivo deste chatbot nesta página ao vivo ChatCase:

[Demo ao vivo] (https://widget.chatcase.com/v4/assets/twp/index.html?project_name=Widget+showcase+demo\&chatcase_projectid=5f8474e99c9f0200125b01c0)

# # Mensagem de texto

Enviar um texto para o widget (de seu chatbot, ou seu cliente de chat genérico) realmente precisa de um mínimo de JSON. Por exemplo, se você quiser enviar a mensagem "Olá" use o seguinte:

JSON

```
{
    text: "Hello"
}
`$([Environment]::NewLine)
Você também pode especificar algumas opções:

** tipo** campo: opcional. o valor 'text' é o padrão. Use este campo para alterar o tipo de mensagem (por exemplo, '[image](#message- with-image)').

**senderFullname** field: opcional, porque ChatCase sabe com quem está falando. Mas este campo é útil para definir se você deseja alterar o nome do remetente por alguma razão.

# # Respostas rápidas

![Respostas rápidas](https://user-images.githubusercontent.com/32564846/95662490-abe5c100-0b37-11eb-8621-bfb7f324845c.png)

*Respostas rápidas* (geralmente enviadas por chatbots) permitem que os usuários respondam rapidamente com uma opção proposta e pré-construída. Pressionar o botão simplesmente envia o texto contido no rótulo do botão para o destinatário (na maioria das vezes o chatbot) do outro lado.

JSON

```
{
    type: "text",
    text: "Hello with buttons",
    attributes: {
        attachment: {
            type:"template",
            buttons: [
                {
                    type: "text",
                    value: "REPLY ONE"
                },
                {
                    type: "text",
                    value: "REPLY TWO"
                }
            ]
        }
    }
}
`$([Environment]::NewLine)
# # botões de URL

! [Botões URL] (https://user-images.githubusercontent.com/32564846/95662652-c9675a80-0b38-11eb-8bf7-a489dfb7e9ce.png)

O botão URL abre um link em uma nova guia do navegador, a mesma página que hospeda o widget ou dentro do próprio widget.

Uma opção *target* é usada para especificar onde abrir o conteúdo da URL. Pode ter os valores *blank*, *parent* ou *self*. Se um valor não for especificado, o padrão é "em branco".

Botões deste tipo têm um ícone **pequena seta** para ajudar o usuário a entender que tocar em um botão URL abrirá uma nova janela.

O botão *self* é especial porque abre o conteúdo URL diretamente dentro de uma moldura especial do widget em si. Ele como uma seta ligeiramente diferente, apontando para a direita ouizzontally.

! [Botões auto] (https://user-images.githubusercontent.com/32564846/140601014-e3967820-7dce-492a-b4f0-353dfbd57188.png)

Os botões "self" abrem o conteúdo da URL no modo "Widget frame". Neste modo, o conteúdo da URL aparece no quadro do mesmo widget com um cabeçalho especial, mostrando o título do botão, um botão para voltar à conversa e outro botão para abrir o conteúdo em uma janela do navegador completo.

! [Frame Widget] (https://user-images.githubusercontent.com/32564846/140600868-c3093864-d02d-4c72-ba09-acb2b767e7d8.png)

Você pode obter os melhores resultados com a opção "eu" se o conteúdo que você está exibindo joga bem com o modo "responsivo", por causa da pequena dimensão do widget faz com que ele aja com responsividade tipo dispositivo móvel.

## #Modo em branco JSON

```
{
    type: "text",
    text: "Hello with buttons (blank)",
    attributes: {
        attachment: {
            type:"template",
            buttons: [
                {
                    type: "url",
                    value: "SITE 1",
                    link: "http://www.chatcase.com",
                    target: "blank"
                }
            ]
        }
    }
}
`$([Environment]::NewLine)
# # Modo "pai" JSON

```
{
    type: "text",
    text: "Hello with buttons (parent)",
    attributes: {
        attachment: {
            type:"template",
            buttons: [
                {
                    type: "url",
                    value: "SITE 2",
                    link: "http://www.ietf.org",
                    target: "parent"
                }
            ]
        }
    }
}
`$([Environment]::NewLine)
### "eu próprio" (quadro Widget) modo JSON

```
{
    type: "text",
    text: "Hello with buttons (self)",
    attributes: {
        attachment: {
            type:"template",
            buttons: [
                {
                    type: "url",
                    value: "Dante",
                    link: "https://en.m.wikipedia.org/wiki/Dante_Alighieri",
                    target: "self"
                }
            ]
        }
    }
}
`$([Environment]::NewLine)
# # Botões de ação

Quando um usuário pressiona um botão de ação, uma mensagem de “ação” é enviada para o chatbot. Seu chatbot receberá o valor de campo "ação" que você pode usar para executar algumas ações específicas. Ao receber o valor da ação, o chatbot pode simplesmente responder com uma mensagem de resposta relacionada à ação. Se a opção **show\ echo** for definida como true o widget também mostrará no chat a mensagem no campo **value**, dando evidência ao usuário de que uma mensagem real foi enviada para o chatbot.

JSON

```
{
    type: "text",
    text: "Hello with buttons",
    attributes: {
        attachment: {
            type:"template",
            buttons: [
                {
                    type: "action",
                    value: "EXECUTE AN ACTION",
                    action: "my-action-name",
                    show_echo: true
                }
            ]
        }
    }
}
`$([Environment]::NewLine)
#### Mensagem de ação (replicada pelo Widget)

Este formato é usado por clientes de chat do ChatCase (por exemplo, Web Widget) para enviar uma mensagem que contém uma ação para a infra- estrutura. A mensagem pode ser escondida ou não no widget, não afeta o comportamento da mensagem. A infra-estrutura que recebe mensagens com o campo “ação” definido na seção atributos pode optar por tomar uma ação correspondente, então opcionalmente responder à mesma mensagem. Um botão com uma mensagem de ação tem o mesmo aspecto do botão de resposta padrão, mas com uma animação diferente, mais longa e evidente.

**JSON**

```
{
    type: "text",
    text: "This is an action for the backend",
    attributes: {
        action: "my-action-name"
    }
}
`$([Environment]::NewLine)
# # Anexo da imagem

Se quiser enviar uma imagem do seu chatbot externo, deve incorporar a imagem http source na resposta esquema JSON mostrado abaixo.

** tipo** campo deve ser definido como ** imagem**

** texto** campo é opcional

** campo metadata.src** é obrigatório e deve apontar para uma imagem válida

** Metadata.width** e ** Metadata.height** campos são opcionais. Se definirem, irão reduzir o tamanho da imagem de acordo com a mensagem de resposta.

JSON

```
{
    type: "image",
    text: "Hello with image",
    metadata: {
        src: "http://www.chatcase.com/logo.jpg",
        width: 200,
        height: 200
    }
}
`$([Environment]::NewLine)
# # Anexo do arquivo

Se você deseja enviar um documento genérico da sua infra- estrutura para o Widget do ChatCase você deve incorporar o arquivo de documento http source na resposta esquema JSON mostrado abaixo.

** tipo** campo deve ser definido como ** arquivo**

** texto** campo é opcional

** campo metadata.src** é obrigatório. Deve ser válido *http url* contendo o documento ** arquivo binário**

**metadata.name** campo é opcional. É o nome do arquivo.

** campo metadata.type** é obrigatório. Deve ser um valor válido http * tipo de conteúdo* que represente o tipo binário do documento

JSON

```
{
    type: "file",
    text: "My document is sent as attachment",
    metadata: {
    name: "sales-report.pdf",
        src: "http://www.mywebsite.com/sales-report.pdf",
    type: "application/pdf"
    }
}
`$([Environment]::NewLine)
## mensagens de conteúdo iframe

Você pode enviar conteúdo para o widget web que pode ser facilmente incorporado em um HTML *iframe*. Por exemplo, você pode enviar um vídeo do youtube, um mapa externo, e também um mini jogo de vídeo HTML5!

** tipo** deve ser definido como 'frame'

** texto** é opcional.

**metadata.src** é obrigatório e deve apontar para um conteúdo http válido embaddable em um iframe HTML5

** Metadata.width** e ** Metadata.height** são opcionais. Se definido, eles reduzirão o tamanho do iframe de acordo com a mensagem de resposta.

JSON

```
{
    type: "frame",
    text: "This is a video!",
    metadata: {
        src: "https://www.youtube.com/embed/H1WfFkp4puw"
    }
}
`$([Environment]::NewLine)
# # desativar a caixa de texto de resposta

Você pode desativar temporariamente a caixa de texto de entrada do usuário. Este recurso é útil, por exemplo, quando você fornece um conjunto de botões de resposta e você quer que o usuário pressione um desses botões para continuar a conversa.

** attributes.disableInputMessage** se true a caixa de texto de resposta está desabilitada

**attributes.inputMessagePlaceholder** se definir o placeholder da caixa de texto de resposta é substituído por este texto. Usado apenas quando *atributes.disableInputMessage* é *true*

JSON

Para desativar a caixa de texto de resposta, defina as propriedades acima na seção de atributos, como no exemplo a seguir:

```
{
    type: "text",
    text: "Do you agree? Please press one of the buttons to proceed",
    attributes: {
        disableInputMessage: true,
        inputMessagePlaceholder: 'Press a button to continue',
        attachment: {
            type:"template",
            buttons: [
                {
                    type: "text",
                    value: "Yes, I do"
                },
                {
                    type: "text",
                    value: "No, I do not"
                }
            ]
        }
    }
}
`$([Environment]::NewLine)
Na imagem seguinte, a caixa de texto de entrada está desativada, até que a próxima mensagem chegue.

![imagem] (https://user-images.githubusercontent.com/32564846/144202116-3035b6e0-ba89-4fbb-b15c-fa24ec7825bb.png)

# # Atualizar metadados do usuário

Às vezes, enquanto interage com o chatbot, você pode pedir ao usuário para atualizar suas informações como seu nome completo. Neste caso, o widget fornece atributos especiais para atualizar suas informações de usuário, para que ele possa enviar novas mensagens com o nome completo correto do usuário. Você pode atualizar o nome completo do usuário e e-mail usando as seguintes propriedades da mensagem:

**atributes.updateUserFullname**: Use este atributo para atualizar o novo usuário do Widget *nome completo*

**atributes.updateUserEmail**: Use este atributo para atualizar o novo usuário do Widget *email*

## # Exemplo de JSON

```
    {
        text: "Thanks Andrea, we got your data and will take care of it!",
        attributes: {
            "updateUserEmail": "redacted@example.invalid",
            "updateUserFullname": "Andrea"
        }
    }
`$([Environment]::NewLine)
Uma vez que o Widget receba uma mensagem com esses atributos, ele usará o nome completo atualizado e/ou e-mail em todas as mensagens de subsequest.

# # Mensagens ocultas

Às vezes é útil enviar mensagens escondidas para usuários finais. Por exemplo, se alguma mensagem deve ativar uma mensagem chatbot sem o usuário ver a "pergunta" real que desencadeou essa resposta.

Para ocultar mensagens para o widget você pode usar "info" mensagens. Todas as mensagens de informação estão escondidas para os usuários finais, mas tenha em mente que as mensagens de informação são sempre visíveis no chat do companheiro de equipe, como no exemplo a seguir.

![Info mensagens sempre visíveis no chat em equipe](https://user-images.githubusercontent.com/32564846/154105533-ab9dd3ca-4b55-4d3f-83d8-902eec6f71ce.png)

**attributes.subtype** definido como "info". Oculta a mensagem para os canais do usuário final (Widget, whatsapp, Telegram, Facebook etc.)

JSON

ativa um chatbot para iniciar uma conversa. Esta mensagem está escondida nos canais dos usuários finais:

```
{
    type: "text",
    text: "start",
    attributes: {
        subtype: "info"
    }
}
`$([Environment]::NewLine)
# # Mensagens divididas

É uma tendência comum para quebrar mensagens longas do chatbot em várias mensagens. Isso pode acontecer no lado do servidor, mas existem alguns problemas com esta abordagem, como às vezes mensagens não-wished desordenadas na conversação, cliente "live" reordenando (isso acontece porque ChatCase não pode assegurar que "muito timestamp perto" mensagens ordem de chegada é preservada na longa "cadeia de entrega de mensagens".

Nestes casos, a divisão "Lado Widget" é uma abordagem preferencial. Você pode enviar todas as mensagens em um único "pacote" para o Widget, especificando o "atraso" entre elas. Será o Widget ChatCase para renderizar as mensagens na ordem exata, preservando o timing exato entre as mensagens.

Vejamos um exemplo:

Suponha que você queira enviar estas mensagens como uma mensagem exclusiva do chatbot, mas dividida em várias mensagens:

![imagem] (https://user-images.githubusercontent.com/32564846/169641648-4271e7bf-0e20-4356-ab58-e61391ee25f7.png)

JSON

Você tem que enviar uma única mensagem como a seguinte:

```
{
  "text": "Hello 👋. I'm a bot 🤖 I'm beautiful Do you need help I can really help you with joy!",
  "attributes": {
    "commands": [{
      "type": "message",
      "message": {
        "text": "Hello 👋. I'm a bot 🤖",
        "type": "text"
      }
    }, {
      "type": "wait",
      "time": 500
    }, {
      "type": "message",
      "message": {
        "text": "I'm beautiful",
        "type": "text"
      }
    }, {
      "type": "wait",
      "time": 1000
    }, {
      "type": "message",
      "message": {
        "text": "Do you need help?",
        "type": "text"
      }
    }, {
      "type": "wait",
      "time": 2000
    }, {
      "type": "message",
      "message": {
        "text": "I can really help you with joy!",
        "type": "text",
        "attributes": {
          "attachment": {
            "type": "template",
            "buttons": [{
              "type": "url",
              "value": "Get Help",
              "link": "https://gethelp.chatcase.com/articles/install-widget-on-your-website/",
              "target": "self"
            }, {
              "type": "url",
              "value": "Wikipedia",
              "link": "https://it.m.wikipedia.org/wiki/E_Street_Band",
              "target": "self"
            }]
          }
        }
      }
    }]
  }
}
`$([Environment]::NewLine)
Como você pode ver a partir do exemplo acima, a mensagem eficaz é dividida nos *atributos. comando* seção da mensagem JSON carga útil.

Os comandos são alternados. Cada comando tem uma propriedade "tipo".

* tipo: 'mensagem' é uma mensagem eficaz. Ele carrega uma 'mensagem' completa eficaz - *message* propriedade, json payload, olhe para o exemplo acima - a mensagem real (uma parte dividida do original) que você deseja exibir.
* type: 'wait', especifica uma propriedade de atraso - * time*, um número, milissegundos, veja o exemplo acima - para que a próxima mensagem seja exibida

Espero que você goste de dividir mensagens como ChatCase faz! :)

# # Mensagens HTML

O widget é capaz de receber mensagens contendo tags html e as renderizar dentro da conversa. Para fazer isso, servidor-side o desenvolvedor deve valorizar o campo **type** do objeto de mensagem com '**html**' e inserir no campo **text** o código HTML que você deseja mostrar no widget.

Além disso, o widget é atualmente capaz de suportar botões de link também.

Abaixo está um exemplo prático de uma mensagem HTML e sua renderização dentro do widget.

! exemplo de antevisão de mensagens [Html] (https://user-images.githubusercontent.com/47848430/173019659-69e0e537-54ee-4d5b-8049-56ebd03abe7e.png)

JSON

Abaixo apresentamos um exemplo de mensagem objeto json com tipo de mensagem html

```html
{
    "attributes": {},
    "recipient_fullname: ...
    ...
    ...
    "type": "html",
    "text": `<html>
                <head>
                    <style>

                        .text-html {
                            font-size: 14px;
                        }

                        .button-html {
                            font-size: 10px !important;
                        }
                    </style>

                </head>
                <body>

                    <div>
                        <p class="text-html"><b>This is an HTML message type example</b> </p>
                        <p class="text-html"> Place any html tag to be loaded here...  </p>
                    </div>
                    <br><br>
                    <div><p class="text-html"> Button example below 👇🏻</p></div>
                    <button type="button" class="button-html url" onclick="window.open('https://www.chatcase.com', '_blank')">Button 1</button>
                    <button type="button" class="button-html url" onclick="window.open('https://developer.chatcase.com/widget/web-sdk', '_blank')">Button 2</button>
                    <button type="button" class="button-html url " onclick="window.open('https://developer.chatcase.com/widget/advanced', '_blank')">Button 3</button>
                    <br><br>
                    <div><p class="text-html"> Image example below 👇🏻</p></div>
                    <div class="img-container">
                        <img src="https://chatcase.com/wp-content/uploads/2020/08/chatcase-logo_x4_vpadding.png" width="200px">
                    </div>
                </body>
            </html>`,
    ...
    ...
}
```Como especificado no exemplo apresentado, também é possível, como uma página HTML normal, especificar o estilo dentro do **`<style></style>`** Tag.

O widget interno renderiza três tipos de estilos, atribuídos respectivamente às classes css *text-html*, *button-html* e *image-container*.

O exemplo mostra uma substituição dessas classes css para personalizar o estilo dos elementos como desejado.
