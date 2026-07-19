---
title: "Javascript API: Ouvintes/Eventos"
description: "Este evento irá disparar apenas quando o Widget ChatCase disparou algum evento numa situação específica. Assim que estiver pronto, serás capaz de fazer algo que precises no manipul"
---

Este evento irá disparar apenas quando o Widget ChatCase disparou algum evento numa situação específica. Assim que estiver pronto, serás capaz de fazer algo que precises no manipulador de fãs.

```javascript
window.ChatCase(event_name, handler)
`$([Environment]::NewLine)
Registre um manipulador de eventos para um tipo de evento.

# # Eventos disponíveis:

Descrição do evento
-------------------------------------------------------------------------------------------------------------------------------------------------------------
Os parâmetros são carregados.
NoInit** NoInit** no momento em que o widget é inicializado
Em AuthStateChanged** O evento é gerado quando o usuário faz logon ou log out
*onOpen** * Disparado quando o widget está aberto
□ **onFechar** □ Disparado quando o widget está fechado
EmBeforeMessageEnviar** Embarcaram antes do envio da mensagem.
*onAfterMessageSend** Este evento é gerado após a mensagem ter sido enviada.
No OpenEyeCatcher** No OpenEyeCatcher
□ **onClosedEyeCatcher** □ Disparado quando a caixa de chamada está fechada
□ **onCloseMessagePreview** □ Disparado quando o usuário clicar no botão fechar na visualização da mensagem enquanto nova mensagemé recebido e widget está fechado
Em NewConversationComponentInit** Logo após uma nova conversa ser inicializada
EmAntesDepartamentosFormRender** Embarcou pouco antes de renderizar Departamentos na vista Departamentos
**onMessageCriated** .
Sobre a NovaConversa** Sobre o fogo quando o widget inicia uma nova conversa
SobreConversaçãoAtualizada** Sobre Disparado quando o widget recebe uma atualização de conversa

\ * Este evento será disparado antes que os parâmetros do ChatCase sejam carregados. Use este evento para alterar em tempo de execução as configurações do ChatCase.

# # Ciclo de vida dos eventos iniciais:

onLoadParams -> onInit -> onAuthStateChanged

O manipulador terá a função de assinatura(event\ data).

event\ data é um evento personalizado Javascript. Mais informações sobre CustomEvent [aqui](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)

Argumentos:

Parametrização Tipo
------------- ----------------------------------------------------------------- --------------------------------------------------------------------------
* Event\ name * String * SIM
Função com a função de assinatura(event\ data)

# # Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
------------------------------
Detail.default\ settings □ Objeto

**Ex. Registro de eventos de widget**

```
<script type="application/javascript">
    window.ChatCase('onBeforeMessageSend', function(event_data) {
      var message =  event_data.detail.message;
      console.log("onBeforeMessageSend called ", message);
    });
    window.ChatCase('onAfterMessageSend', function(event_data) {
      var message =  event_data.detail.message;
      console.log("onAfterMessageSend called ", message);
    });
</script>
`$([Environment]::NewLine)
**Ex. Widget com nome completo do visitante e e-mail de localStorage**

```
<script type="application/javascript">
    //set fullname to localstorage
    localStorage.setItem("user_fullname", "Andrea from localStorage");
    localStorage.setItem("user_email", "redacted@example.invalid");

    window.ChatCase('onLoadParams', function(event_data) {
        window.chatcaseSettings.userFullname = localStorage.getItem("user_fullname");
        window.chatcaseSettings.userEmail = localStorage.getItem("user_email");
    });
</script>
`$([Environment]::NewLine)
**Ex. Widget com mensagem de boas-vindas com data atual**

```
<script type="application/javascript">
    window.ChatCase('onLoadParams', function(event_data) {
        window.chatcaseSettings.welcomeMsg = " Hello at: " + new Date().toLocaleString();
    });
</script>
`$([Environment]::NewLine)
## emAntes da MensagemEnviar

Este evento será disparado antes do envio da mensagem. Use este evento para adicionar informações de usuário ou atributos personalizados à sua mensagem de chat.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
----------------- ----------------------------------
□ detail.message

**Ex. Configuração programática de metadados personalizados do usuário**

```
<script type="application/javascript">
    window.ChatCase('onBeforeMessageSend', function(event_data) {
        var message =  event_data.detail.message;
        message.attributes.userCompany = "Frontiere21";
    });
</script>
`$([Environment]::NewLine)
**Ex. Adicione um atributo personalizado (título da página) à mensagem.**

```
<script type="application/javascript">
    window.ChatCase('onBeforeMessageSend', function(event_data) {
        var message = event_data.detail.message;
        message.attributes.pagetitle = document.title;
    });
</script>
`$([Environment]::NewLine)
## onAfterMessageSend

Este evento é gerado após a mensagem ter sido enviada.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
----------------- ----------------------------------
Message.message

**Ex:**

```
<script type="application/javascript">
    window.ChatCase('onAfterMessageSend', function(event_data) {
        var message =  event_data.detail.message;
        console.log("onAfterMessageSend called ", message);
    });
</script>
`$([Environment]::NewLine)
## em AuthStateChanged

Este evento é gerado quando o estado de autenticação é alterado (Ex: usuário login-in, usuário logout, etc.) Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
----------- ---------------------
Descrição do objeto O evento de autenticação

** Descrição do evento de autenticação: **

Parâmetro □ Tipo □ Descrição
---------------------- ---------- ----------------------------------------------------------------------------------------------------
□ ** evento** □ string □ Valores possíveis: 'online' quando o usuário está logado, 'offline' quando o usuário está logado
□ **isLogged** □ boolean □ Valores possíveis: true se o usuário estiver logado, false se não estiver logado
*User\ id** * string * O identificador de usuário atual □
*Objecto global** Um objeto com todos os parâmetros globais do widget
□ **default\ settings** objeto □ Os parâmetros iniciais de configuração do widget (janela\.chatcaseSettings)
*AppConfigs** Os parâmetros de configuração remotos do widget obtidos a partir do servidor remoto ChatCase

**Ex. :**

```
<script type="application/javascript">
    window.ChatCase('onAuthStateChanged', function (event_data) {
        console.log("onAuthStateChanged ----> ", event_data.detail.event);
        if (!event_data.detail.isLogged) {
            console.log("NOT logged");
            window.chatcase.signInWithCustomToken("JWT CHANGE IT");
        } else {
            console.log("logged in");
        }
    });
</script>
`$([Environment]::NewLine)
## emAntesDepartamentosFormRender

Este evento é gerado antes de renderizar a Área de Seleção de Departamentos. Use este evento se quiser filtrar a lista de Departamentos padrão com base em algumas condições.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
------------------ ----- ----- ---- ----------------------------------------------------
Detail.departments O objeto O array dos departamentos padrão

**Ex. :**

No exemplo a seguir, os Departamentos são filtrados com base na linguagem do widget atual. Na verdade, um Departamento não fornece um campo específico de linguagem. Neste exemplo, a língua do Departamento é colocada no campo de descrição do Departamento. Atenção você pode modificar o array de departamentos apenas por referência.

```
<script type="application/javascript">
    window.ChatCase('onBeforeDepartmentsFormRender', function(event_data) {
        var departments = event_data.detail.departments;
        var lang = window.chatcase.angularcomponent.component.g.lang;
        if (lang && lang === 'en') {
            var new_deps = departments.filter(function(dep) {
                if (dep.description && dep.description.includes('English')) {
                     return dep;
                }
            });
        } else {
            var new_deps = departments.filter(function(dep) {
                if (dep.description && dep.description.includes('French')){
                    return dep;
                }
            });
        }

        //modify the department array by reference

        departments.length=0;  //empty the array
        console.log("new_deps",new_deps);
        new_deps.forEach(function(d) { //populate the department array
            departments.push(d);
        });

    });
</script>
`$([Environment]::NewLine)
## na NovaConversaComponenteInit

Este evento é gerado assim que uma nova visão de conversação é renderizada. Use este evento se quiser executar algumas ações em um início de conversa.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
------------------------------------------------------------
NovoConvId Objeto O id da conversa que disparou o evento

**Ex. :**

No exemplo seguinte, uma mensagem escondida é enviada assim que uma conversa começa. Enviar uma mensagem escondida é útil para disparar uma mensagem de boas-vindas bot, se alguém for convidado na conversa.

```
<script type="application/javascript">
    window.ChatCase('onNewConversationComponentInit', function(event_data) {
        const message = 'hello';
        const recipientId = event_data.detail.newConvId;
        const recipientFullname = 'Owner';
        const type = 'text';
        const metadata = {};
        const attributes = {test:'test attributes', subtype: 'info'};
        window.chatcase.sendSupportMessage(
            message,
            recipientId,
            recipientFullname,
            type,
            metadata,
            attributes
        )
    });
}
</script>
`$([Environment]::NewLine)
## na MensagemCriada

Este evento é gerado quando o widget recebe uma mensagem.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
----------- ----------------------------------------
Descrição do objeto A mensagem recebida

**Ex. :**

```
<script type="application/javascript">
    window.ChatCase('onMessageCreated', function(event_data) {
        var message = event_data.detail;
        console.log("TRIGGER onMessageCreated -> ", message);
    });
</script>
`$([Environment]::NewLine)
# # Na Conversa Atualizado

Este evento é gerado quando o widget recebe uma atualização de conversa.

Carga útil importante do evento\ data:

Parâmetro □ Tipo □ Descrição
---------- -------------------------
Detalhes do assunto A conversa que foi recebida

Exemplo:

```
<script type="application/javascript">
    var now = Date.now();
    window.ChatCase('onConversationUpdated', function(event_data) {
        var dateConvUpdate = event_data.detail.conversation.timestamp
        console.log(" TRIGGER onConversationUpdated -> ", event_data.detail.conversation);
        console.log("now-> ", now);
        console.log("dateConvUpdate-> ", dateConvUpdate);
        if(now < dateConvUpdate){
            console.log(" New conversation!!!");
        }
    });
</script>
```
