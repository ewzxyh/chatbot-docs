---
title: "Web SDK v4"
description: "Web SDK ver 4.0"
---

Web SDK ver 4.0

Este guia irá mostrar-lhe como começar o mais rápido possível com o Web SDK de ChatCase. O Web SDK dará às empresas e desenvolvedores a flexibilidade para construir e personalizar uma experiência de chat que atenda aos seus requisitos específicos de design/marca.

# # Instalar o Web HTML Widget

Para conversar com seus visitantes, incorpore o widget em seu site. Copie o seguinte script e insira-o na fonte HTML entre as tags HEAD:

```
    <script type="application/javascript">
        window.chatcaseSettings =
            {
                projectid: "YOUR_CHATCASE_PROJECT_ID"
            };
            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://widget.chatcase.com/v4/launch.js";
            fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'chatcase-jssdk'));
    </script>
`$([Environment]::NewLine)
Para obter o seu CHATCASE\ PROJECT\ ID vá para o painel ChatCase e clique no item Widget do menu:

![](https://raw.githubusercontent.com/chat21/chat21-web-widget/master/docs/chatcase-dashboard-widget-screenshots.png)

Configuração

Widget versão 4.0 suporta a configuração remota da maioria dos parâmetros diretamente do menu Widget do Painel.

Você pode personalizar o widget passando os seguintes parâmetros para window\. objeto chatcaseSettings.

* **projectid**. O ID do projeto ChatCase. Encontre o seu ChatCase ProjectID no painel ChatCase sob o menu Widget.
* **preChatForm**: Você pode exigir que os clientes digitem informações como nome e e-mail antes de enviar uma mensagem de chat, habilitando o formulário Pré-Chat. Valores permitidos: verdadeiro, falso. O valor padrão é falso.
* **align**: Faça o chat disponível na direita ou na esquerda da tela. Valores autorizados: 'direita', 'esquerda'. O valor padrão está certo.
* **calloutTimer**: Abra proactivamente as janelas de chat para aumentar o engajamento do cliente. Valores permitidos: -1 (Desativado), 0 (Imediatamente) ou um valor inteiro positivo. Por exemplo: 5 (após 5 segundos), 10 (após 10 segundos).
* ** Chamada Title** : O título da janela de chamada.
* **calloutMsg** : A mensagem da janela de chamada.
* **userFullname**: Nome completo do usuário atual. Defina este parâmetro para indicar o nome completo do visitante.
* **UserEmail**: Endereço de e-mail do usuário atual. Defina este parâmetro para indicar o endereço de e- mail do visitante.
* ** Bem-vindoTítulo**: O título de boas-vindas para mostrar na página inicial do widget.
* **wellcomeMsg**: Defina a mensagem de boas-vindas do widget. Tipo de valor : string
* **widgetTitle**: Defina o título do widget mostrado no cabeçalho do widget. Tipo de valor : string. O valor padrão é ChatCase.
* ** startFromHome**: Se false ao carregar o widget começa diretamente com uma nova conversa. Se for verdadeiro, o elemento mostra o componente doméstico. O valor padrão é true.
* **logoChat**: A URL do logotipo para mostrar na página inicial do widget.
* **lang** : Com esta configuração é possível forçar o widget lang. O widget tentará obter o lang do navegador, se não for possível usar o lang padrão "en"
* **HideHeaderCloseButton**: Ocultar o botão de fechar no cabeçalho do widget. Valores permitidos: verdadeiro, falso. O valor padrãoE é falso.
* **isOpen**: propriedade somente leitura. Configure esta propriedade verdadeira no script para abrir automaticamente o widget assim que for carregado. Valores permitidos: verdadeiro, falso. Valor padrão : false.
* ** fullscreenMode**: se for verdade, a janela de bate-papo está aberta em modo fullscreen. Valores permitidos: verdadeiro, falso. Valor padrão : false
* ** themeColor**: permite que você mude a cor do widget principal (cor do cabeçalho, cor do botão lançador, outros elementos menores). Valores permitidos: Códigos de cores Hex, p. ex. #87BC65 e códigos de cores RGB, p. ex. rgb(135.188,101)
* ** themeForegroundColor**: permite que você mude a cor do texto e ícones. Valores permitidos: códigos de cores Hex, por exemplo, #425635 e códigos de cores RGB, por exemplo, rgb(66,86,53)
* **DepartmentID:** para pular a seleção de departamentos, você pode definir o ID de departamento sobre o qual o widget deve iniciar a nova conversa. Ver o circuito [aqui](/docs/desenvolvedor/widget/advanced/preset-department).
* **isShown:** Leia apenas a propriedade. Esta propriedade devolve a visibilidade de todo o elemento, incluindo o balão do elemento. Se verdadeiro o widget é visível caso contrário (falso) o widget é escondido. Use *window\.chatcase.show()* e *window\.chatcase.hide()* métodos para alterar a visibilidade do widget.
* ** allowTranscriptDownload**: permite ao usuário baixar a transcrição do chat. O botão de download aparece quando o chat é fechado pelo operador. Valores de licença: verdadeiro, falso. Valor padrão: false
* **marginX**: Defina a margem lateral, esquerda ou direita, dependendo da propriedade alinhar. Tipo de valor: string. Valor padrão : "20px"
* **marginY**: Defina a distância da margem inferior da página. Tipo de valor: string. Valor padrão : "20px"
* **AutoStart**: Defina se o widget executa uma autenticação anônima automática na inicialização. Valor padrão : true
* ** startHidden**: Definir se o widget estárts em modo oculto. Valor padrão : false
* **persistência**: Você pode especificar como o estado de Autenticação persiste ao usar o ChatCase JS SDK. Isso inclui a capacidade de especificar se um usuário assinado deve ser persistido indefinidamente até que o sinal explícito saia ou seja limpo quando a janela está fechada. Valores de permissão: local, sessão. Valor padrão : local. O valor local indica que o estado será persistido mesmo quando a janela do navegador estiver fechada. É necessário um sinal explícito para limpar esse estado. O valor da sessão indica que o estado só irá persistir na sessão ou página actual e será apagado quando a página ou janela em que o usuário autenticado estiver fechada.
* ** showWaitTime**: Mostra o tempo de resposta esperado dos seus agentes na janela do widget inicial. Tipo de valor : booleano. O valor padrão é true.
* ** mostrarAgentes disponíveis**: Mostra os agentes disponíveis com o avatar na janela do widget inicial. Tipo de valor : booleano. O valor padrão é true.
* **showLogoutOption**: Mostra as opções de encerramento na janela do elemento inicial. Tipo de valor : booleano. O valor padrão é true.
* **isLogEnabled**: Active o log do widget. Tipo de valor: booleano. O valor padrão é falso.

#### Exemplo 1. Widget com nome completo do usuário e e-mail

```
<script type="application/javascript">
      window.chatcaseSettings =
          {
              projectid: "5b55e806c93dde00143163dd",
              userFullname: "Andrea Leo",
              userEmail: "redacted@example.invalid"
          };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id; //js.async=!0;
        js.src = "https://widget.chatcase.com/v4/launch.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'chatcase-jssdk'));
    </script>
`$([Environment]::NewLine)
#### Exemplo 2. Widget com pré-ChatForm e alinhamento esquerdo:

```
<script type="application/javascript">
  window.chatcaseSettings =
    {
      projectid: "5b55e806c93dde00143163dd",
      preChatForm: true,
      align: 'left'
    };
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://widget.chatcase.com/v4/launch.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'chatcase-jssdk'));
</script>
`$([Environment]::NewLine)
### Configuração usando parâmetros URL

Você também pode passar as configurações acima como um parâmetro Url com o prefixo **chatcase\ **. Por exemplo:

```
https://widget.chatcase.com/v4/index.html?chatcase_isOpen=true&chatcase_align=right
`$([Environment]::NewLine)
# # Métodos

Abra o widget

Isto irá abrir o elemento:

```
window.chatcase.open();
`$([Environment]::NewLine)
# # Minimizar o widget

Isto irá minimizar o elemento:

```
window.chatcase.close();
`$([Environment]::NewLine)
# # Esconder o widget

Isto irá esconder o elemento:

```
window.chatcase.hide();
`$([Environment]::NewLine)
# # Mostra o widget

Isto mostrará o elemento:

```
window.chatcase.show();
`$([Environment]::NewLine)
# # Reinicia o widget

Se seu aplicativo é caracterizado por muito poucas atualizações de página (ou seja, conteúdo é trocado no lado do cliente, mas nenhuma atualização de página acontece, Angular, React, jQuery, etc.) e muitos JS assíncronos, você precisará atualizar o ChatCase quando os dados do usuário mudarem. Uma chamada reInit simula uma atualização de página, fazendo com que o ChatCase carregue novamente o widget e todas as configurações.

```
window.chatcase.reInit();
`$([Environment]::NewLine)
## # Signin com JWT Custom Token

Este método faz um sigin usando um JWT Custom Token como descrito [aqui](/docs/desenvolvedor/widget/auth).

```
window.chatcase.signInWithCustomToken(customJwt);
`$([Environment]::NewLine)
Fazer um encerramento

Isto irá encerrar o widget:

```
window.chatcase.logout();
`$([Environment]::NewLine)
Mostra ou esconde o PreChatForm

Este parâmetro configura a visibilidade do PreChatForm:

```
window.chatcase.setPreChatForm(true|false);
`$([Environment]::NewLine)
# # # Enviar uma mensagem para uma conversa de apoio

Este método envia uma mensagem para a conversa de suporte atual:

```
const recipientId = window.chatcase.angularcomponent.component.g.activeConversation
const message = 'hello';
const type = 'text';
const metadata = {};
const attributes = {};
window.chatcase.sendSupportMessage(
    message,
    recipientId,
    type,
    metadata,
    attributes
)
`$([Environment]::NewLine)
# # Eventos

# # # telhaDeskAsyncInit

A função azulejoDeskAsyncInit é chamada quando o apis básico do widget são carregados. Dentro do azulejoDeskAsyncInit function the object window\. chatcase é definido e pode ser usado.

### window\.chatcase.on(event\ name, handler)

Registre um manipulador de eventos para um tipo de evento.

Eventos disponíveis:

Descrição do evento
------------------------------------- ---------------------------------------------------------------------------------
□ onLoadParams □ Disparado quando os parâmetros são carregados.
□ onInit □ Disparado quando o widget é inicializado
NoAuthStateChanged O evento é gerado quando o usuário faz logon ou log out
□ onAbrir □ Disparado quando o widget está aberto
EmFechar em Disparado quando o widget é fechado
EmAntes da mensagemEnviar em frente à mensagem enviada.
EmAfterMessageEnviar Este evento é gerado após a mensagem ter sido enviada.
□ no OpenEyeCatcher □ Disparado quando a caixa de chamada está aberta
NoClosedEyeCatcher , Disparado quando a caixa de chamada é fechada
SobreNewConversationComponentInit Sobre fogo logo após uma nova conversa ser inicializada
□AntesDepartamentosFormRender □ Disparado pouco antes de renderizar Departamentos na vista Departamentos
SobreMessageCriado SobreLigado quando o widget recebe uma mensagem
Sobre a Conversação Updated □ Disparado quando o widget receber uma atualização de conversação

Ciclo de vida dos eventos iniciais:

onLoadParams -> onInit -> onAuthStateChanged

O manipulador terá a função de assinatura(event\ data).

event\ data é um evento personalizado Javascript. Mais informações sobre CustomEvent [aqui](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)

Argumentos:

Parametrização Tipo
------------- ----------------------------------------------------------------- --------------------------------------------------------------------------
* Event\ name * String * SIM
Função com a função de assinatura(event\ data)

Exemplo 3. Registo de eventos de widgets

```
 <script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
       window.chatcase.on('onBeforeMessageSend', function(event_data) {
         var message =  event_data.detail;
         console.log("onBeforeMessageSend called ", message);
       });
       window.chatcase.on('onAfterMessageSend', function(event_data) {
         var message =  event_data.detail;
         console.log("onAfterMessageSend called ", message);
       });
      }
</script>
`$([Environment]::NewLine)
[Exemplo completo aqui] (https://github.com/chat21/chat21-web-widget/blob/master/src/test.html)

## # Carregar o evento Parâmetros

Este evento será disparado antes que os parâmetros do ChatCase sejam carregados. Use este evento para alterar ao executar as configurações do ChatCase.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
------------------------------
Detail.default\ settings □ Objeto

# # # # # Exemplo 4. Widget com nome completo do visitante e e-mail do localStorage

```
<script type="application/javascript">
    //set fullname to localstorage
    localStorage.setItem("user_fullname", "Andrea from localStorage");
    localStorage.setItem("user_email", "redacted@example.invalid");

      window.ChatCaseAsyncInit = function() {
       window.chatcase.on('onLoadParams', function(event_data) {
          window.chatcaseSettings.userFullname = localStorage.getItem("user_fullname");
          window.chatcaseSettings.userEmail = localStorage.getItem("user_email");
       });
      }
</script>
`$([Environment]::NewLine)
[Exemplo completo aqui] (https://github.com/chat21/chat21-web-widget/blob/master/src/test.html)

Exemplo 5. Widget com mensagem de boas- vindas com data atual

```
<script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
       window.chatcase.on('onLoadParams', function(event_data) {
         window.chatcaseSettings.wellcomeMsg = " Hello at: " + new Date().toLocaleString();
       });
      }
</script>
`$([Environment]::NewLine)
Antes de enviar a confusão

Este evento será disparado antes do envio da mensagem. Use este evento para adicionar informações de usuário ou atributos personalizados à sua mensagem de chat.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
---------- ----------- ---------------------------
Descrição do objeto A mensagem que está sendo enviada

Exemplo. Configuração programática de metadados personalizados do usuário

```
 <script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
       window.chatcase.on('onBeforeMessageSend', function(event_data) {
         var message =  event_data.detail;
         message.attributes.userCompany = "Frontiere21";
       });
      }
</script>
`$([Environment]::NewLine)
[Exemplo completo aqui] (https://github.com/chat21/chat21-web-widget/blob/master/src/test.html)

Exemplo. Adicionar um atributo personalizado (título da página) à mensagem.

```
 <script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
       window.chatcase.on('onBeforeMessageSend', function(event_data) {
         var message =  event_data.detail;
         message.attributes.pagetitle = document.title;
       });
      }
</script>
`$([Environment]::NewLine)
[Exemplo completo aqui] (https://github.com/chat21/chat21-web-widget/blob/master/src/test.html)

# # Depois da confusão enviada

Este evento é gerado após a mensagem ter sido enviada.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
---------- -------------------------------------
Descrição do objeto A mensagem que foi enviada

Exemplo:

```
 <script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
        window.chatcase.on('onAfterMessageSend', function(event_data) {
          var message =  event_data.detail;
          console.log("onAfterMessageSend called ", message);
       });
      }
</script>
`$([Environment]::NewLine)
## # em AuthStateChanged

Este evento é gerado quando o estado de autenticação é alterado (Ex: usuário login-in, usuário logout, etc.) Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
----------- ---------------------
Descrição do objeto O evento de autenticação

Descrição do evento de autenticação:

Parâmetro □ Tipo □ Descrição
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
□ Evento número □ Valores possíveis: 0 se não foi logado (com autoStart false), 200 já autenticado, 201 novo login, 400 error, -2 do método de reinit, -1 do logout
□ isLogged □ boolean □ Valores possíveis: true se o usuário estiver logado, false if not loged
& Usuário\ id & string; O identificador de usuário atual □
objeto global Um objeto com todos os parâmetros globais do widget
□ por omissão\ settings □ objeto □ Os parâmetros iniciais de configuração do widget (janela\.chatcaseSettings)
appConfigs objeto Os parâmetros de configuração remotos do widget obtidos a partir do servidor remoto ChatCase

Exemplo:

```
 <script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
      window.chatcase.on('onAuthStateChanged', function (event_data) {

            console.log("onAuthStateChanged ----> ", event_data.detail.event);
            if (!event_data.detail.isLogged) {
                console.log("NOT logged");
                window.chatcase.signInWithCustomToken("JWT CHANGE IT");
            } else {
              console.log("logged in");
            }
        });
      }
</script>
`$([Environment]::NewLine)
## EmAntesDepartamentosFormRender

Este evento é gerado antes de renderizar a Área de Seleção de Departamentos. Use este evento se quiser filtrar a lista de Departamentos padrão com base em algumas condições.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
------------------ ----- ----- ---- ----------------------------------------------------
Detail.departments O objeto O array dos departamentos padrão

Exemplo:

No exemplo a seguir, os Departamentos são filtrados com base na linguagem do widget atual. Na verdade, um Departamento não fornece um campo específico de linguagem. Neste exemplo, a língua do Departamento é colocada no campo de descrição do Departamento. Uma próxima atualização fornecerá "tags" específicos do Departamento (ou "lables") que serão usados para salvar informações específicas nos recursos do Departamento.

```
<script type="application/javascript">
window.ChatCaseAsyncInit = function() {
  window.chatcase.on('onBeforeDepartmentsFormRender', function(event_data) {
    var departments = event_data.detail.departments;
    var lang = window.chatcase.angularcomponent.component.g.lang;
    if (lang && lang === 'en') {
      return departments.filter(function(dep) {
        if (dep.description.includes('English')) {
            return dep;
        }
      });
    } else {
      return departments.filter(function(dep) {
        if (dep.description.includes('French')){
            return dep;
        }
      });
    }
  });
}
</script>
`$([Environment]::NewLine)
### na Nova ConversaComponenteInit

Este evento é gerado assim que uma nova visão de conversação é renderizada. Use este evento se quiser executar algumas ações em um início de conversa.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
------------------------------------------------------------
NovoConvId Objeto O id da conversa que disparou o evento

Exemplo:

No exemplo seguinte, uma mensagem escondida é enviada assim que uma conversa começa. Enviar uma mensagem escondida é útil para disparar uma mensagem de boas-vindas bot, se alguém for convidado na conversa.

```
<script type="application/javascript">
window.ChatCaseAsyncInit = function() {
    window.chatcase.on('onNewConversationComponentInit', function(event_data) {
    const message = 'hello';
    const recipientId = event_data.detail.newConvId;
    const type = 'text';
    const metadata = {};
    const attributes = {test:'test attributes', subtype: 'info'};
    window.chatcase.sendSupportMessage(
        message,
        recipientId,
        type,
        metadata,
        attributes
    )
    });
}
</script>
`$([Environment]::NewLine)
EmMessageCriado

Este evento é gerado quando o widget recebe uma mensagem.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
----------- ----------------------------------------
Descrição do objeto A mensagem recebida

Exemplo:

```
 <script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
       window.chatcase.on('onMessageCreated', function(event_data) {
              var message = event_data.detail;
              console.log(" TRIGGER onMessageCreated -> ", message);
        });
      }
</script>
`$([Environment]::NewLine)
Na conversa Atualizado

Este evento é gerado quando o widget recebe uma atualização de conversa.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
---------- -------------------------
Detalhes do assunto A conversa que foi recebida

Exemplo:

```
 <script type="application/javascript">
      window.ChatCaseAsyncInit = function() {
       var now = Date.now();
       window.chatcase.on('onConversationUpdated', function(event_data) {
          var dateConvUpdate = event_data.detail.conversation.timestamp
          console.log(" TRIGGER onConversationUpdated -> ", event_data.detail.conversation);
          console.log("now-> ", now);
          console.log("dateConvUpdate-> ", dateConvUpdate);
          if(now < dateConvUpdate){
            console.log(" New conversation!!!");
          }
        });
      }
</script>
`$([Environment]::NewLine)
# # Habilitando visitantes autenticados no widget Chat

Você pode configurar seu widget para autenticar os visitantes usando a API Javascript e o token JWT. Mais informações [Widget Autenticação](/docs/desenvolvedor/widget/auth)
