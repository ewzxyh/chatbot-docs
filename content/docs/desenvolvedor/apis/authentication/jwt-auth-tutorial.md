---
title: "Tutorial de autenticação personalizado JWT"
description: "O Web Widget ChatCase fornece uma identidade anônima padrão para seus usuários. Isso significa que a primeira vez que o widget começa no navegador do usuário final, ele irá atribui"
---

# # Introdução

![imagem] (https://user-images.githubusercontent.com/32564846/171425319-6b23a172-0fe7-4a33-8926-a35f73cccea8.png)

O Web Widget ChatCase fornece uma identidade anônima padrão para seus usuários. Isso significa que a primeira vez que o widget começa no navegador do usuário final, ele irá atribuir ao usuário um único, aleatório * user-id*, que irá durar até que o cache do navegador seja limpo. Esta identidade temporária e aleatória oferece muitos benefícios, em primeiro lugar a opção de instalar imediatamente e usar o widget em seu site ou aplicativo, sem qualquer configuração.

Enquanto o modo "autenticação anônima" fornece a implantação imediata e fácil do widget ChatCase, às vezes você gostaria de dar aos seus usuários finais do ChatCase uma identidade persistente e reconhecível.

Isso é especialmente verdadeiro quando, por exemplo, seus usuários finais já têm uma identidade certificada no provedor de identidade de outra empresa.

O ChatCase oferece a opção de autenticar seus usuários finais com uma identidade personalizada e certificada, usando "autenticação JWT personalizada", uma tecnologia de autenticação muito fácil e comprovada no mercado.

Neste tutorial forneceremos um exemplo completo de como você pode configurar com sucesso uma autenticação JWT personalizada para seus usuários finais do Web Widget. Vamos começar!

# # A aplicação do tutorial

Desenvolvemos uma aplicação totalmente funcional (código cliente + servidor) já implantada no seguinte endereço http:

[custom-autentication-example.html on replit](https://chatcase-html-site.chatcase.repl.co/custom-authentication-example.html)

Esta aplicação irá fornecer-lhe uma compreensão completa da configuração necessária para configurar autenticação personalizada para o seu Projeto ChatCase.

Para entender como a aplicação funciona e o que significa ter uma identidade única, * certificada*, vamos fazer um pequeno teste.

Basta abrir o url e o widget incorporado da página, em seguida, iniciar uma nova conversa. Agora envie uma mensagem simples (ou seja, "teste"), como na figura:

![Enviar uma mensagem] (https://user-images.githubusercontent.com/32564846/170834302-0b590c01-0af1-443e-b8e9-8c95bd4a5217.png)

O histórico de conversas do usuário é sempre salvo nos servidores do ChatCase em uma base *por usuário-id* e visível na casa do widget. Com usuários anônimos, quando você abre a URL desta mesma página em um navegador diferente após a primeira conversa (se você abriu a página no Chrome tentar abri-la novamente no Firefox ou Safari), o histórico de conversa não é "conservado" entre diferentes sessões em navegadores diferentes porque o usuário é, por padrão, anônimo, e um novo é criado para cada sessão do navegador (a identidade anônima do usuário é de qualquer forma mantida na mesma instância do navegador até que o cache do seu navegador seja limpo).

Se você executar o nosso aplicativo em diferentes navegadores (de você abrir janelas anônimas do mesmo navegador) você irá em vez *magicamente * ver que o histórico de conversa é sempre conservado. Isso significa que o usuário conectado é mantido em todas as sessões, porque ele efetivamente é **o mesmo usuário autorizado** na instância de cada navegador.

![O histórico de conversas é conservado em todos os navegadores](https://user-images.githubusercontent.com/32564846/170826764-aded3d7c-ef09-4940-92ba-f53eff63e2f3.png)

Passos

Para configurar o aplicativo de frontend você precisa de um projeto * ChatCase* (com o relativo *projetado id*), seu serviço de backend "autentication" url (o endpoint REST que você irá pesquisar para obter o token JWT personalizado gerado com seu **project secret**) e você *frontend application* (uma página web onde o widget está hospedado e configurado para autenticação personalizada)

A seguir estão os passos envolvidos em nosso tutorial:

1. Criar um Projeto ChatCase
2. Configure o aplicativo de autenticação da infraestrutura
3. Configurar o aplicativo frontend

# # Crie um Projeto ChatCase

Primeiro de tudo, crie um projeto ChatCase. É fácil, basta clicar em "Adicionar projeto".

![imagem] (https://user-images.githubusercontent.com/32564846/170837894-3dfc14ac-8db3-4f7f-9979-006721424b20.png)

Agora escolha um nome para o seu projeto (ou seja, JWT Auth Tutorial) e pressione Criar projeto (deixar todas as opções em seus valores padrão):

![imagem] (https://user-images.githubusercontent.com/32564846/170837919-2c5a4196-8a7e-4417-b35e-8ea6b8e1dfc5.png)

O seu projeto está pronto.

# # Configurar a aplicação de autenticação da infra- estrutura

Para desenvolver nossa lógica de aplicativo, precisamos de um endpoint de aplicativo web que execute seu próprio código de autenticação e responda com um JWT que você usará no Widget.

Utilizaremos o serviço Repl.it para criar rapidamente o nosso próprio endpoint de aplicação Web NodeJS.

Desenvolva sua lógica de aplicação. Vamos dar um garfo!

Nós simplesmente bifurcamos o aplicativo tutorial, disponível nesta URL:

<https://replit.com/@chatcase/chatcase-jwt-token-example#index.js>Use o botão garfo e escolha um nome para o seu aplicativo:

![imagem] (https://user-images.githubusercontent.com/32564846/170930820-854734c8-29d3-4097-9a00-fcc4db7de604.png)

O aplicativo está bifurcado e pronto para ser executado.

Agora volte para a seção *Configurações > Configurações do projeto > Geral* do seu projeto e copie o *Id do projeto*.

![imagem] (https://user-images.githubusercontent.com/32564846/170838183-4386a55b-f9de-42dc-8ac7-84f87f73d647.png)

Copie e cole o *project id* aqui no arquivo *index.js* do seu aplicativo nodeJS em replit, como mostrado na figura:

![imagem] (https://user-images.githubusercontent.com/32564846/171025818-156bd922-52d1-43ee-85c9-11256b888b3d.png)

Agora volte (de novo) para a seção *Configurações > Configurações do projeto > Desenvolvedor* do seu projeto. Nós geraremos uma nova *chave secreta* que será usada para assinar seu token JWT. Pressione o botão "Segredo compartilhado" .

![imagem] (https://user-images.githubusercontent.com/32564846/170951136-a8d97f3d-d6df-497f-8725-725ba0593ea8.png)

Tome cuidado que cada vez que você gerar e novo segredo o anterior não é mais válido e você tem que substituir em qualquer lugar que você usou.

![imagem] (https://user-images.githubusercontent.com/32564846/171024674-d5b8fcc2-ec07-474c-9bc6-3c6112347d3e.png)

Agora você pode gerar o seu segredo.

![imagem] (https://user-images.githubusercontent.com/32564846/171029452-df96b7da-5517-42d8-b0a3-ce864e486c43.png)

Copie e cole a *secret key* aqui no arquivo index.js do seu aplicativo nodeJS em replit, como mostrado na figura:

![imagem] (https://user-images.githubusercontent.com/32564846/171032566-f809d043-c701-4101-a1c0-463cd2c50049.png)

Fizemos este aplicativo apenas um endpoint simples que "simula" o seu próprio, recebendo suas credenciais de usuário do cliente, olhar para cima no banco de dados para o usuário e, de acordo, usando o seu projectID e seu *project secret* para gerar um ChatCase assinado JWT para responder de volta ao widget.

Agora você pode pressionar o botão "Executar" no topo do seu projeto. Sua infraestrutura está agora em execução e pronta para aceitar solicitações de autenticação do seu widget.

![imagem] (https://user-images.githubusercontent.com/32564846/171037372-4c9e6442-54b6-4dad-a457-05fd0e22d5bd.png)

Todas as solicitações de autenticação apontarão para o seguinte url (e um método POST sa veremos mais tarde):

** Ponto final de autenticação**:<https://chatcase-jwt-token-example.chatcase.repl.co/auth>Vamos nos referir a este endpoint mais tarde no tutorial.

# # Configurar a Fronteira

O projeto fonte frontend - uma página web com o código de configuração do widget - está disponível na seguinte página replit:

<https://replit.com/@chatcase/ChatCase-HTML-Site#custom-authentication-example.html>Você pode facilmente "fork" o projeto ou cloná-lo em seu aplicativo frontend. Em seguida, modifique-o para realizar sua configuração da infraestrutura (veja *Backend setup*).

Agora cole o ID do projeto na propriedade *projectid* das configurações do Widget no código fonte da página:

![imagem] (https://user-images.githubusercontent.com/32564846/170838820-c9a0b7a7-b60a-4c8f-ac9d-4896a2908c92.png)

Agora vá para o método autenticar e configure o url de autenticação usando o endpoint da infraestrutura. Obter o url base de serviço do painel lateral (veja a figura) e adicionar /auth no final para criar o url para o endoponto de autenticação:

![imagem] (https://user-images.githubusercontent.com/32564846/171047872-220d0158-c5f6-43a1-aa15-fb832db169ff.png)

A nossa candidatura está agora pronta. Você pode executá-lo e testá-lo em muitos navegadores. Você notará que o histórico da conversa se referirá ao mesmo usuário ([redacted@example.invalid](mailto:redacted@example.invalid)) vindo de sua base de dados simulada.

![imagem] (https://user-images.githubusercontent.com/32564846/171426383-16f42c83-1d4e-4b8a-8286-d743ce8a82ba.png)

Se tiver algum problema, não se esforce para nos escrever no nosso [fórum comunitário](https://chatcase.discourse.group/)!

Vejo você no nosso próximo tutorial!

Tem sugestões sobre este artigo? Por favor, envie-nos o seu feedback escrevendo um email para **[redacted@example.invalid](mailto:redacted@example.invalid)**
