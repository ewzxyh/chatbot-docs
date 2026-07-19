---
title: "Javascript API: Atributos"
description: "Você pode personalizar o widget passando os seguintes parâmetros para window\\.chatcaseSettings object."
---

# # Configuração com ajustes de azulejos

Você pode personalizar o widget passando os seguintes parâmetros para **window\.chatcaseSettings** object.

**Javascript API:**

Atributos visuais

Este conjunto de atributos modifica o comportamento geral do elemento

Atributos Tipo Descrição
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
O projeto do ChatCase id. Encontre o seu ProjectID ChatCase no Painel ChatCase no menu Widget□
Para ignorar a seleção de departamentos, você pode definir o ID do departamento sobre o qual o widget deve iniciar a nova conversa (Veja o currículo [aqui](https://developer.chatcase.com/widget/advanced/preset-department))
"Título de boas-vindas" O título de boas-vindas para mostrar na página inicial do widget
* Bem-vindoMsg** * Definir a mensagem de boas-vindas do widget
□ **widgetTitle** □ string □ Definir o título do widgetmostrado no cabeçalho do widget. . O valor por omissão é '*ChatCase*'
ChamadaTítulo** corda O título da janela de chamada
ChamadaMsg** A mensagem da janela de chamada□
* CalloutTimer** * Inteiro * Abra proactivamente as janelas de chat para aumentar o engajamento do cliente. Valores permitidos: -1 (desactivado), 0 (imediatamente) ou um valor inteiro positivo (p. ex. 5 (após 5 segundos), 10 (após 10 segundos))
*logoChat** A url do logotipo para mostrar na página inicial do widget
Um código ISO 639-duas letras. Com esta configuração é possível forçar o widget lang. O widget tentará obter o lang do navegador, se não for possível usar o lang padrão "en"□
□ **recipientId** □ string □ Active o widget para abrir uma conversa específica
. **userFullname** ! string . Defina este parâmetro para especificar o nome completo do visitante
UserEmail** UserEmail** Define este parâmetro para indicar o endereço de e- mail do visitante□
Você pode especificar como o estado de autenticação persiste ao usar o ChatCase JS SDK. Isso inclui a capacidade de especificar se um usuário assinado deve ser persistido indefinidamente até que o sinal explícito saia ou seja limpo quando a janela está fechada. Valores permitidos: local, sessão. Valor padrão : local. O valor local indica que o estado será persistido mesmo quando a janela do navegador estiver fechada. É necessário um sinal explícito para limpar esse estado. O valor da sessão indica que o estado só irá persistir na sessão atual ou na aba, e será limpo quando a aba ou janela na qual o usuário autenticado estiver fechado
Conversa Única** Conversa Única Esta propriedade, se verdadeira, permite que você transforme widget de canal de conversação multi para um único canal de conversação (Veja mais [aqui](https://developer.chatcase.com/widget/advanced/singleConversation-mode))
□ **tipagemLocalização** □ string □ Definir a localização do indicador de digitação entre as localizações 'header' ou 'content'. Por omissão: 'content'. Valores permitidos: 'content', 'header'

<br>Atributos de estilo

Estes atributos modificam o estilo do Widget (cor do tema, posição da página, etc.)

Atributos Tipo Descrição
-------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* Alinhamento** * string * Tornar o chat disponível à direita ou à esquerda da tela. Valores autorizados: 'direita', 'esquerda'. O valor padrão está certo.
*MarginX**S string *Defina a margem lateral, esquerda ou direita, dependendo da propriedade alinhar. Valor padrão : "20px"
*MarginY**S string *Defina a distância da margem inferior da página. Valor padrão : "20px"
**mobileMarginX**□ Defina a margem lateral, esquerda ou direita, dependendo da propriedade alinhar no móvel. Valor padrão : "0px". (Veja o exemplo [aqui] (https://developer.chatcase.com/widget/tutorials/widget-mobile))
. **mobileMarginY** , string . . Definir a distância da margem inferior da página no móvel. Valor padrão : "0px". (Veja o exemplo [aqui] (https://developer.chatcase.com/widget/tutorials/widget-mobile))
O tamanho** O tamanho do widget é 'min, 'max', 'top'. Valor padrão : "min".
* TemaColor** Cor do lançador: Permite alterar a cor do widget principal (cor do cabeçalho, cor do botão lançador, outros elementos menores). Valores permitidos: códigos de cores Hex (por exemplo, #87BC65) e códigos de cores RGB (por exemplo, rgb(135, 188, 101))
Opacidade** Número \[0...100] Permite alterar a opacidade da cor do tema nos fundos do widget (cor do cabeçalho, cor da casa). Valores autorizados: números de 0 a 100. Valor por omissão: 50
* ThemeForegroundColor** ThemeForegroundColor** Theme foregroundColor** Theme foregroundColor** Valores permitidos: códigos de cores Hex (por exemplo, #425635) e códigos de cores RGB (por exemplo, rgb(66, 86, 53))
Largura de launcher** Corda de launcher. Valor padrão: "60px"□
O launcherHeight** O launcherheight permite alterar a dimensão da altura do lançador. Valor padrão: "60px"
Baloon Imagem** □ string □ Permite alterar a imagem de balão com URL de imagem personalizada. Tamanho mínimo: 60x60px. Formato de imagem permitido: \ *. jpg, \ *. jpeg, \ *. jfif, \ *. JPG, \ *. JPE. .
. . ** BaloonShape** , string . . Permite que você mude a forma do baloon com a dimensão personalizada. Valores permitidos: string com ** quatro valores** (por exemplo, '10px 10px 10px 10px 10px'), ** três valores** (por exemplo, '15px 50px 30px'), ** dois valores** (por exemplo, '15px 50px'), ** um valor** (por exemplo, '15px'), ** dimensão percentual** (por exemplo, '10%'). Valor por omissão: "50%".
□ ** fullscreenMode** Se for verdade, a janela de chat está aberta no modo de ecrã completo. Valor por omissão: false

<br>## # Atributos gerais de configurações

Configuração geral do elemento

Atributos Tipo Descrição
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
* AllowTranscriptDownload** AllowTranscriptDownload** Allows the user to download the chat transcript. O botão de download aparece quando o chat é fechado pelo operador. Valor por omissão: false
AllowReopen** AllowReopen** Permite que você continue escrevendo em uma conversa mesmo que ela tenha sido arquivada por um agente ou pelo próprio usuário. Valor padrão: false□
OcultarHeaderFecharButton** Ocultar o botão de fechar no cabeçalho do widget. O valor padrão é falso.
**HideHeaderConversationOptionsMenu** ..boolean . Valor padrão: false□
OcultarFecharConversaçãoOpçãoMenu** OptionMenu** OptionBoolean Option Active-o a mostrar/esconder a opção de menu 'Fechar chat' no menu superior-direita do cabeçalho da converção. Valor por omissão: false
OcultarRestartConversationOptionsMenu** Ocultar o menu 'Restart chat' no menu superior-direita do cabeçalho da conversão. Valor padrão: false□
OcultarDefinições** OcultarBoolean Ocultar menu de opções no componente inicial. Valor por omissão: false
Open ExternalLinkButton** Open ExternalLinkButton** OpenLinkButton** OpenLinkButton** OpenLinkButton** OpenLinkButton** OpenLinkButton** OpenOpenLinkButton** OpenLinkButton Valor padrão: true□
Mostrar o tempo de resposta esperado de seus agentes na janela do widget inicial. Valor padrão: true.
* DynamicWaitTimeReply** * boolean * Permite que você decida se deve ou não compartilhar o tempo médio de resposta de sua equipe. Valor padrão: true□
MostrarAgents disponíveis** Mostrar os agentes disponíveis com avatar na janela do widget inicial. Valor padrão: true.
Mostrar as opções de logout na janela do widget inicial. Valor padrão: false.□
MostrarAttachmentButton** Ativar para mostrar/esconder o botão de anexo no rodapé de uma conversa. Valor padrão: true
Mostrar todas as conversas** Mostrar / ocultar a lista de todas as conversas. Valor padrão: true□
□ **soundEnabled** □ boolean □ Active-o para permitir ou não som quando a mensagem nova chegou. Valor padrão: true
□ **open** □ boolean □ Defina o estado do widget: true(open) ou false (fechar). Se for \**true* o Widget de repente abre logo após o carregamento. Valor padrão: false□
Ativar o log do widget. O valor padrão é falso.
O logLevel** o string do log permite que você altere o nível do log. Tipo de valor: string. Valores autorizados: «ERR»< ‘WARN’ < ‘INFO’ < ‘DEBUG’. Default value: ‘ERROR’                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| **startFromHome**                      | boolean | If false when loaded the widget starts directly with a new conversation. If true the widget shows the home component. Default value: true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| **autoStart**                          |         | boolean                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **startHidden**                        | boolean | Set if the widget starts in hidden mode. Default value : false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **preChatForm**                        | boolean | You can require customers to enter information like name and email before sending a chat message by enabling the Pre-Chat form. Default value: false.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **preChatFormJson**                    | Array   | You can customize the information you request from customers in the pre-chat form before start a new conversation. ([See docs](https://developer.chatcase.com/widget/advanced/prechat-form-json))                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **customAttributes**                   | Object  | You can add customAttributes to widget as a key-value object. It is required to use *" "* for each key-value parameter. *'userFullname'* and *'userEmail'* special key allow you to set user info from external. See example above [here](https://developer.chatcase.com/widget/attributes#example-3.-widget-with-custom-attributes) for more detail                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **nativeRating**                       | boolean | Allow you to show or not widget rating page. Default value: true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **showInfoMessage**                    | string  | You can show/hide an info message in a conversion by specifying a comma separated list of keys. The keys in question are: **'MEMBER\_JOINED\_GROUP'** to manage the information of when an agent is added to your conversion; **'MEMBER\_LEFT\_GROUP'** to manage the information of when an agent left the conversation; **'CHAT\_CLOSED'** to manage the information of when a chat is closed; **'CHAT\_REOPENED'** to manage the information of when a chat already archived is subsequently reopened; **'TOUCHING\_OPERATOR'** to manage the information of when a conversation is assigned to an agent; **'LEAD\_UPDATED'** to manage an update of the widget user's name and email . Ex: *'MEMBER\_JOINED\_GROUP,CHAT\_CLOSED'*: allows you to see information about the joining of an agent within a conversation and when the current chat is archived. Default value: *'MEMBER\_JOINED\_GROUP'* |
| **restartConversation**                | boolean | This property if true, only when singleConversation is enabled, allow you to start always a new conversation at each page refresh or widget restart.Default value: false                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **participants**                       | boolean | This property if true allow you to talk only with specif user passed as a comma separated list of ids. Ex: 'ID\_user1,ID\_user2'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **fileUploadAccept**                   | string  | This define which file types is allowed to be upload by the user as an attachment. It takes as its value a comma-separated list of one or more file types. See more [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept#unique_file_type_specifiers). Default value: 'image/\*,.pdf,.txt'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

<br>Atributos do estilo da mensagem

Estes atributos modificam o estilo de Widget para mensagens (ou seja, cor de fundo da mensagem, cor do texto, cor dos botões, etc.)

Atributos Tipo Descrição
□----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□ **bubbleSentBackground**\* □ string □ Permite alterar a cor de fundo da mensagem enviada pela bolha. Valores permitidos: códigos de cores Hex (por exemplo, #2a6ac1) e códigos de cores RGB (por exemplo, rgb(42, 106, 193))
□ **bubbleSentTextColor**\* □ string □ Permite alterar a cor de texto da mensagem enviada pela bolha. Valores permitidos: códigos de cores Hex (por exemplo, #ffffff) e códigos de cores RGB (por exemplo, rgb(255, 255))
□ **bobbleRecebidoBackground** corda □ Permitir que você mude a cor de fundo da mensagem recebida bolha. Valores permitidos: códigos de cores Hex (por exemplo #f7f7f7) e códigos de cores RGB (por exemplo, rgb(247, 247))
□ **bubbleReceivedTextColor** □ string □ Permita que você altere a cor de texto da mensagem recebida da bolha. Valores permitidos: códigos de cores Hex (por exemplo, #1a1a1a) e códigos de cores RGB (por exemplo, rgb(26, 26))
*fontSize**g □ permite- lhe alterar o tamanho da fonte das mensagens de bolha. Valores permitidos: meio \ ,xx- pequeno \ , x- pequeno \ , pequeno \ , grande \ , x- grande \ , menor \ , maior \ , * comprimento * \ ,%. Valor padrão : " 1. 4em"
□ ** buttonFontSize** □ string □ Permite alterar o tamanho da fonte de todos os botões de anexo de uma mensagem. Valores permitidos: meio \ ,xx- pequeno \ , x- pequeno \ , pequeno \ , grande \ , x- grande \ , menor \ , maior \ , * comprimento * \ ,%. Tipo de valor: string. Valor padrão: "15px"
. **bottonBackgroundColor** string . . Permite que você altere a cor de fundo de todos os botões de anexo de uma mensagem. Valores permitidos: códigos de cores Hex (por exemplo, #1a1a1a) e códigos de cores RGB (por exemplo, rgb(26, 26))
□ **bottonTextColor**\* □ string □ Permite alterar a cor de texto de todos os botões de anexo de uma mensagem. Valores permitidos: códigos de cores Hex (por exemplo, #1a1a1a) e códigos de cores RGB (por exemplo, rgb(26, 26))
□ **botãoHoverBackgroundColor**\* □ string □ Permite que você altere a cor de fundo de todos os botões de anexo de uma mensagem quando você mouse sobre eles. Valores permitidos: códigos de cores Hex (por exemplo, #1a1a1a) e códigos de cores RGB (por exemplo, rgb(26, 26))
□ **botãoHoverTextColor** □ string □ Permite que você altere a cor de texto de todos os botões de anexo de uma mensagem quando você mouse sobre eles. Valores permitidos: códigos de cores Hex (por exemplo, #1a1a1a) e códigos de cores RGB (por exemplo, rgb(26, 26))

\ * Estas propriedades se não forem fornecidas serão automaticamente calculadas a partir do valor ** themeColor**

<br># # # Visibilidade do elemento

Este conjunto de atributos pode gerenciar a visibilidade do widget em plataformas móveis e desktop

Atributos Tipo Descrição
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Como **displayOnDesktop**\* ? boolean ? Permitir que você exibir / ocultar widget na área de trabalho. Valor padrão: true
EmPageChangeVisibilityDesktop**\* EmPageChangeVisibilityDesktop**\* EmPageChangeVisibilityDesktop**\* EmPageChangeVisibilityS string emPage é possível decidir o status do widget (aberto ou fechado) quando a página é carregada ou alterada no navegador web. Você sempre pode abrir o widget, sempre fechar o widget ou restaurar o último status dele (se fechado, fique perto; se aberto, abra-o). Valores permitidos: 'aberto' , 'fechar', 'último'. Valor por omissão: 'fechar'
. **displayOnMobile** . . boolean . Permitir que você exibir / ocultar widget no celular. Valor padrão: true
EmPageChangeVisibilityMobile** □ string □ Permitir decidir o estado do widget (aberto ou fechado) quando a página é carregada ou alterada no navegador web. Você sempre pode abrir o widget, sempre fechar o widget ou restaurar o último status dele (se fechado, fique perto; se aberto, abra-o). Valores permitidos: 'aberto' , 'fechar', 'último'. Valor por omissão: 'fechar'

<br>![Esquema do assistente de atributos de estilo de mensagem] (https://user-images.githubusercontent.com/47848430/151520122-bc7cec71-6724-4ad3-8282-9425198be816.png)

## # Canais sociais Atributos

####(disponível apenas em **janela\.iledeskSettings** object

Estes atributos permitem ao proprietário ser acessível em seus próprios canais de mídia social (whatsapp businness, facebook messanger page, telegrama). Os botões, quando disponíveis, serão mostrados na parte inferior da página inicial, conforme mostrado abaixo.

[Posição dos canais sociais](https://user-images.githubusercontent.com/47848430/208400033-6b3bf329-0864-4cbc-b217-116e8adeb208.png)

Atributos Tipo Descrição
---------------- -------------------------------------------------
* WhatsappNumber** * boolean Esta propriedade permite que o usuário do widget para iniciar uma conversa em sua conta de negócios whatsapp oficial
*MessangerPageTitle**Boolean Esta propriedade permite que o usuário do widget para iniciar uma conversa em sua página oficial do Facebook com Messanger
*TelegramUsername** Esta propriedade permite que o usuário do widget para iniciar uma conversa em sua conta oficial do Telegram

Propriedades prontas

Atributos Tipo Descrição
-------------- -------- ------ --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*isShown** * Esta propriedade devolve a visibilidade de todo o elemento, incluindo o balão do elemento. Se verdadeiro o widget é visível caso contrário (falso) o widget é escondido. Use *window\.chatcase.show()* e *window\.chatcase.hide()* métodos para alterar a visibilidade do widget

<br># # Configuração usando parâmetros URL

Você também pode passar as configurações acima como um parâmetro Url com o prefixo **chatcase\ **. Por exemplo:

```
https://widget.chatcase.com/v6/assets/twp/index.html?chatcase_projectid=<YOUR_PROJECT_ID>&chatcase_isOpen=true&chatcase_align=right&project_name=Assistente%20Virtuale
`$([Environment]::NewLine)
# # Exemplos

### Exemplo 1. Widget com nome completo de usuário e e-mail

```html
<script type="application/javascript">
  window.chatcaseSettings =
    {
      projectid: "6480a7f683b1e1001370a6b1",
      userFullname: "Andrea Leo",
      userEmail: "redacted@example.invalid"
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
### Exemplo 2. Widget com preChatForm e alinhamento esquerdo:

```html
<script type="application/javascript">
  window.chatcaseSettings =
    {
      projectid: "6480a7f683b1e1001370a6b1",
      preChatForm: true,
      align: 'left'
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
### Exemplo 3. Widget com atributos personalizados:

Widget permite que você passe alguns atributos personalizados como objeto de valor chave na janela\. tiledeksSettings objeto ou como um parâmetro Url com o prefixo **chatcase\ customAttributes**.

```html
<script type="application/javascript">
  window.chatcaseSettings =
    {
      projectid: "6480a7f683b1e1001370a6b1",
      align: 'left',
      customAttributes: {
        "user_country": "Italy",
        "user_code": "E001"
      }
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
** CustomAttributes** é mostrado em detalhes de conversação como chave de carga útil sob atributos acordeon como mostrado acima

![local de atributos personalizados](https://user-images.githubusercontent.com/47848430/166652826-a37e1d97-1e92-43bf-8f9a-6d7cd06b5e30.png)

Definir *'userFullname'* ou *'userEmail'* chave especial para gerenciar informações do usuário a partir de externo (por exemplo, de seu aplicativo móvel após um login interno). Acima do exemplo de como defini-lo:

```html
<script type="application/javascript">
  window.chatcaseSettings =
    {
        projectid: "6480a7f683b1e1001370a6b1",
        align: 'left',
        customAttributes: {
          "userFullname": "Andrea Leo",
          "userEmail": "redacted@example.invalid"
        }
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
```
