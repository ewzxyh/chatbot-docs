---
title: "Instalando widget em páginas selecionadas"
description: "Este tutorial orienta você através da configuração do widget de chat ao vivo do ChatCase para exibir apenas em páginas selecionadas do seu site. Ao alavancar um script personalizad"
---

Este tutorial orienta você através da configuração do widget de chat ao vivo do ChatCase para exibir apenas em páginas selecionadas do seu site. Ao alavancar um script personalizado, você pode incluir ou excluir o widget baseado na URL da página. O script verifica o URL atual e decide se deve carregar o widget ChatCase com base em condições definidas, e inclui funções para login, logout e autenticação personalizada.

# # Passo 1: Definir Páginas Incluídas/Excluídas

O script verifica o URL atual para decidir se o widget deve ser carregado. Veja como você pode configurar exclusões:

```javascript
const projectId = "63b711fa2ef2e4001a5e4977";
let attributes = {};

if (
  (window.location.href.indexOf('/cds') >= 0) ||
  (window.location.href.indexOf('%2Fcds') >= 0) ||
  (window.location.href.indexOf('/dashboard') >= 0) ||
  (window.location.href.indexOf('%2Fdashboard') >= 0)
) {
  // Pages to exclude: do not start the widget
} else if (
  ((window.location.href.indexOf('/login') >= 0) ||
   (window.location.href.indexOf('%2Flogin') >= 0) ||
   (window.location.href.indexOf('/signup') >= 0) ||
   (window.location.href.indexOf('%signup') >= 0)
  ) && screen.width < 800
) {
  // Also exclude these pages on mobile devices
} else {
  // startWidget()
}
`$([Environment]::NewLine)
Neste código, substitua /cds, /dashboard, /login, etc., pelos caminhos específicos em seu domínio onde você deseja excluir ou incluir o widget.

# # Passo 2: Defina a função startWidget

A função startWidget carrega o widget ChatCase com a configuração desejada, configurando o ID do projeto e o comportamento de inicialização automático.

```javascript
function startWidget(){
    window.chatcaseSettings = {
        projectid: projectId,
        autoStart: true
    };

    (function (d, s, id) {
        var w = window; var d = document; var i = function () { i.c(arguments); };
        i.q = []; i.c = function (args) { i.q.push(args); }; w.ChatCase = i;
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id; js.async = true; js.src = "https://widget.chatcase.com/v6/launch.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'chatcase-jssdk'));
}
`$([Environment]::NewLine)
# # Passo 3: Funções de controle adicionais

As seguintes funções fornecem controle adicional sobre o comportamento do widget:

* chatcase\ widget\ hide(): Esconde o elemento.
* chatcase\ widget\ show(): Mostra o elemento.
* chatcase\ widget\ login(atributo): Entra no usuário com um atributo personalizado.
* chatcase\ widget\ logout(): Registra o usuário e assina anonimamente.

Essas funções ajudam a gerenciar o estado do widget em páginas diferentes.

# # Passo 4: Autenticação personalizada

A função customAuth envia dados do usuário para uma URL de autenticação personalizada, recebendo um token JWT que é usado para assinar no usuário com o ChatCase.

```javascript
function customAuth(callback) {
    const storedUser = localStorage.getItem('user');
    let user = storedUser ? JSON.parse(storedUser) : null;
    if (!user) {
        callback(null);
        return;
    }
    const remote_support_project_userId = projectId + "_" + user._id;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "https://chatcase-custom-jwt-authentication.replit.app/chatcaseauth", true);
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function () {
        if (callback && xmlhttp.readyState == 4 && xmlhttp.status == 200 && xmlhttp.responseText) {
            callback(xmlhttp.responseText);
        }
    };
    xmlhttp.send("id=" + remote_support_project_userId + "&firstname=" + user.firstname + "&lastname=" + user.lastname + "&email=" + user.email);
}
`$([Environment]::NewLine)
# # Passo 5: Teste e verificação

1. Verifique Páginas Incluídas/Excluídas: Visite as páginas incluídas para confirmar o widget aparece, e as páginas excluídas para garantir que ele permanece oculto.
2. Test Login/Logout: Confirme que os comportamentos de login e logout estão funcionando como esperado, especialmente para o fluxo de autenticação personalizado.

Este script fornece controle granular sobre onde o widget ChatCase aparece, melhorando a experiência do usuário, excluindo-o de páginas específicas e habilitando autenticação personalizada.
