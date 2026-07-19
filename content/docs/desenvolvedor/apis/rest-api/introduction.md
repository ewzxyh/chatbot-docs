---
title: "# A API"
description: "Introdução"
---

Introdução

ChatCase é uma solução de chat ao vivo que ajuda as empresas a aumentar a conversão de vendas, envolvendo importantes leads em seus sites. É nosso objetivo ajudar muitas dessas empresas a usar a API do ChatCase (a "API") para automatizar e melhorar seu suporte ao cliente com o ChatCase.

# # A API

Esta é a documentação para a API REST do ChatCase. Leia o conteúdo desta página cuidadosamente para entender como ser um bom cidadão API.

Os pontos finais são documentados com o método HTTP para a requisição e um identificador parcial de recursos. Exemplo:

** GET /v3/{project\ id}**

Seu ID do Projeto (isso aparece como projeto\ id em seu código) é um código exclusivo atribuído ao seu projeto quando você o cria em ChatCase. Existem algumas maneiras de encontrar o seu ID do Projeto.

A maneira mais fácil de encontrar seu ID do Projeto é verificar a URL de qualquer página que você tem aberta em ChatCase. É o código que vem depois de /project/ na URL. Então, por exemplo, se nós verificarmos o URL abaixo você pode ver que o ID do Projeto é *5c88a82990996000173cd4d1*.

![](/developer-files/hOQhgM9Bi8yGdkJEaHhP)

Seu ID do Projeto também está disponível no topo da página Configuração do Projeto do seu painel.

Para usar o prepreend da API<https://api.chatcase.com>ao identificador de recursos para obter o URL completo do endpoint:

[https://api.chatcase.com/v3/{project\_id}](https://api.chatcase.com/v3/%7Bproject_id%7D)

Os exemplos nos documentos são declarações cURL. Você pode executar as instruções em uma linha de comando para testar diferentes solicitações de API. No Windows, você precisará modificar alguns dos exemplos nos documentos para fazê-los funcionar.

# # Segurança e Autenticação

Esta API é uma API SSL somente. Você deve ser um usuário do ChatCase para fazer solicitações de API.

O ChatCase suporta as seguintes funções de usuário:

Convidado: Qualquer visitante desconhecido para o seu site que não está logado.
* Usuário: Um usuário é um visitante assinado usando JWT token o convertido do tipo convidado.
* Agente: Os agentes são membros da equipe da sua organização que entrarão no painel e responderão às conversas do seu cliente
* Admin: É um agente com permissões especiais
* Proprietário: É o criador do projeto.

Veja aqui a API [Autenticação REST](/docs/desenvolvedor/apis/rest-api/authentication).

O ChatCase suporta dois métodos de autenticação:

* Autenticação Básica
* Autenticação JWT

Autenticação básica

Use o seguinte formato de autenticação com seu endereço de e-mail e senha:

**{email\ endereço}:{password}**

Exemplo

```
curl -v -X GET -u redacted@example.invalid:123456 https://api.chatcase.com/v3/5ab0f32757066e0014bfd718/departments
`$([Environment]::NewLine)
Autenticação JWT

Use o método de login para obter um token JWT válido:

```
curl -v -X POST -H 'Content-Type:application/json' -d '{"email":"<YOUR_EMAIL>","password":"<YOUR_PASSWORD>"}' https://api.chatcase.com/v3/auth/signin
`$([Environment]::NewLine)
Exemplo

```
curl -v -X POST -H 'Content-Type:application/json' -d '{"email":"redacted@example.invalid","password":"123456"}' https://api.chatcase.com/v3/auth/signin
`$([Environment]::NewLine)
Exemplo: Como usar o token JWT

```
curl -v -X GET -H 'Authorization: JWT <JWT_TOKEN>' https://api.chatcase.com/v3/5ab0f32757066e0014bfd718/departments
`$([Environment]::NewLine)
Limitação da Taxa

Esta API é taxa limitada. Só permitimos um certo número de pedidos por minuto. Reservamo-nos o direito de ajustar o limite de taxa para determinados objetivos, a fim de fornecer uma alta qualidade de serviço para todos os clientes. Como um consumidor de API, você deve esperar ser capaz de fazer pelo menos 200 pedidos por minuto.

Se o limite de taxa for excedido, o ChatCase responderá com um código de resposta HTTP 429 Too Many Requests e um corpo que detalha a razão para o limitador de taxa chutar.

### # Formato de solicitação

Esta é uma API só para JSON. Você deve fornecer um cabeçalho *Content-Type: application/json* em pedidos PUT e POST. Às vezes você tem que definir um cabeçalho Accept: application/json em uma solicitação específica. Você pode obter uma resposta texto/plain em caso de um erro como um pedido ruim. Você deve tratar isso como um erro que você precisa tomar medidas.

Formato de resposta

ChatCase responde a solicitações bem sucedidas com códigos de status HTTP na faixa 200 ou 300. Quando você cria ou atualiza um recurso, o ChatCase renderiza a representação resultante do JSON no corpo de resposta. Os selos de tempo usam o tempo UTC e seu formato é **ISO8601**.

Respondemos a solicitações mal sucedidas com códigos de status HTTP na faixa de 400. A resposta pode ser "texto/plain" tipo de conteúdo para mensagens de erro de nível API (como ao tentar chamar a API sem SSL). Se você vê uma resposta de um endpoint conhecido que se parece com texto simples, você provavelmente cometeu um erro de sintaxe em sua chamada REST. Se você já experimentou respostas com códigos de status na faixa de 500, a ChatCase pode estar tendo problemas internos ou ter uma manutenção programada (durante a qual enviamos um código de status 503 Service Indisponível). Por favor, verifique a página de status em tais casos para quaisquer problemas conhecidos.

Ao construir um cliente API, recomendamos tratar quaisquer 500 códigos de status como um aviso ou estado temporário. No entanto, se o status persistir e não tivermos uma interrupção de manutenção ou serviço anunciada publicamente, entre em contato conosco em *[redacted@example.invalid](mailto:redacted@example.invalid)*.

# # APIs

Abaixo do apis:

* [Autenticação](/docs/desenvolvedor/apis/rest-api/authentication)
* [Pedidos](/docs/desenvolvedor/apis/rest-api/requests)
* [Leads](/docs/desenvolvedor/apis/rest-api/leads)
* [Mensagens](/docs/desenvolvedor/apis/rest-api/messages)
* [Actividades](/docs/desenvolvedor/apis/rest-api/activities)
* [projetos](/docs/desenvolvedor/apis/rest-api/projects)
* [Equipe](/docs/desenvolvedor/apis/rest-api/team)
* [ChatBot] (https://github.com/ChatCase/chatcase-docs/tree/782fa84dbf0a19a68076756029cbb9a33ce2b6f1/apis/rest-api/bots/README)
* [Gestão] (https://github.com/ChatCase/chatcase-docs/tree/782fa84dbf0a19a68076756029cbb9a33ce2b6f1/apis/rest-api/management-api/README)

Avisos legais

Restrições e responsabilidades Seu uso e acesso à API estão expressamente condicionados à sua conformidade com as políticas, restrições e outras disposições relacionadas com a API estabelecidas na nossa API Restrições e Responsabilidades e a outra documentação que lhe fornecemos. Você também deve cumprir as restrições estabelecidas nos Termos de Serviço e na Política de Privacidade que se aplicam ao seu uso do Serviço ChatCase, em todos os usos da API. Se a ChatCase acredita que você tenha ou tentado violar qualquer termo, condição ou espírito dessas políticas ou acordos, seu direito de acessar e usar a API pode ser temporariamente ou permanentemente revogado.

Change Policy ChatCase pode modificar os atributos e recursos disponíveis para a API e nossas políticas relacionadas ao acesso e uso da API de tempos em tempos sem aviso prévio. A ChatCase usará esforços comercialmente razoáveis para notificá-lo de quaisquer modificações na API ou políticas através de notificações ou posts no Site da ChatCase. A modificação da API pode ter um efeito adverso nas Aplicações ChatCase, incluindo, mas não limitado, alterar a forma como as Aplicações ChatCase se comunicam com a API e exibir ou transmitir seus dados. ChatCase não será responsável perante você ou qualquer terceiro por tais modificações ou quaisquer efeitos adversos resultantes de tais modificações.
