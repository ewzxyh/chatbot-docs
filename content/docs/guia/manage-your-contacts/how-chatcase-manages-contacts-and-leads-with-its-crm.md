---
title: "Como ChatCase gerencia contatos e leva com seu CRM"
description: "Na verdade, chumbos e contatos são sinônimos. Usamos o termo “Liderar” em documentos de desenvolvimento enquanto usamos “Contato” na UI."
---

Na verdade, chumbos e contatos são sinônimos. Usamos o termo “Liderar” em documentos de desenvolvimento enquanto usamos “Contato” na UI.

Um Contato agrega solicitações e metadados coletados durante conversas com um único usuário (Anônimo ou Autenticado, veja a próxima seção).

Exemplo de metadados recolhidos:

* Nome completo
* Sobrenome
* Email
* Metadados personalizados

Em geral, se o usuário estiver conectado como "Anônimo" um Lead é criado automaticamente com base no ID do usuário (o ID do usuário é um UUID gerado aleatoriamente durante o processo de autenticação anônima). Todas as próximas conversas de usuário com este UUID serão agregadas em um único Lead.

Um exemplo<a href="#an-example" id="an-example"></a>Quando um usuário inicia uma conversa a partir de uma instância de navegador (ou seja, Google Chrome) ele será solicitado para alguns metadados para acompanhar uma conversa:

<figure><img src="/files/R7BfoV4ykVvzfAdHVFSi" alt=""><figcaption></figcaption></figure>Em seguida, o usuário contata o suporte em outro momento, como você pode ver pelo resumo de conversas:

<figure><img src="/files/rGuE7C5oCyvUBzMrjO5f" alt=""><figcaption></figcaption></figure>Agora no módulo Contatos você pode pesquisar por e-mail ([redacted@example.invalid](mailto:redacted@example.invalid)) para o Chumbo:

<figure><img src="/files/CClLeJ0s0ByDkhSKYDq3" alt=""><figcaption></figcaption></figure>Como você pode ver, há apenas um contato com esse e-mail. Agora em detalhes de contato você pode ver todos os dois pedidos feitos por este usuário:

<figure><img src="/files/5WSAXD4flcIe2VlXIOBW" alt=""><figcaption></figcaption></figure>Se o usuário, com o mesmo e-mail, iniciar uma solicitação de outro navegador, ele receberá um novo ID de usuário anônimo.

Assim, por exemplo, se você iniciar uma nova solicitação do Safari (começamos com o navegador Chrome):

<figure><img src="/files/2dfXSJDVWzE5Uj7hBR2J" alt=""><figcaption></figcaption></figure>Como você pode ver, o usuário é totalmente novo (um novo usuário anônimo é criado com um novo UUID).

Agora inserimos o mesmo e-mail que no Chrome:

<figure><img src="/files/vQKFo5bvt05v7j5dOx3H" alt=""><figcaption></figcaption></figure>Se executarmos a mesma pesquisa que antes, por e-mail:

<figure><img src="/files/c8pzIfAh239zepashIQl" alt=""><figcaption></figcaption></figure>Agora eu encontro dois Contatos, porque eles têm um UUID diferente como você pode ver no detalhe do novo Contato (Andrea Sp1):

<figure><img src="/files/YDOQz8tSyvUREqGOOQBg" alt=""><figcaption></figcaption></figure>E este novo usuário só fez uma conversa.

Na verdade, nós não fornecemos um recurso para “mergulhar” os dois contatos em um (eles são efetivamente o mesmo usuário, reconhecido por seu e-mail idêntico, apesar dos dois Contatos terem usuário-ids diferentes). Este recurso, com a capacidade de criar e modificar contatos manualmente, está em nosso roteiro.
