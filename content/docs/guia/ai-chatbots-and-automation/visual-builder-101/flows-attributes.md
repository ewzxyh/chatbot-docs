---
title: "Atributos do Fluxo"
description: "Atributos são uma parte fundamental de suas automações. Eles permitem armazenar informações temporariamente e reutilizá-las em seus fluxos de trabalho."
---

Atributos são uma parte fundamental de suas automações. Eles permitem armazenar informações temporariamente e reutilizá-las em seus fluxos de trabalho.

<figure><img src="/doc-images/Bc2VIlLM3uXcByEB7PBk.png" alt=""><figcaption></figcaption></figure>Com Atributos, seu AI Agent pode capturar dados como entrada de usuário, números de telefone ou IDs de pedidos, e então usar essas informações para fornecer respostas personalizadas e conscientes do contexto. Atributos também podem ser passados entre diferentes agentes de IA, permitindo automações mais avançadas e conectadas.

Neste tutorial, vamos explorar como os atributos funcionam e como você pode usá-los para criar fluxos de trabalho de IA mais inteligentes e envolventes.<br>Atributos podem ser usados em muitas Ações diferentes. Aqui estão alguns exemplos:

**Chatgpt task**\
Esta ação traz o poder do ChatGPT para o seu Fluxo. Um caso de uso é usar um atributo chamado {{user\ language}} no [ChatGPT Task](/docs/guia/ai-chatbots-and-automation/actions-explained/chatgpt-task) para gerar uma resposta na linguagem do usuário.

<figure><img src="/doc-images/jFtA39eOBeaymCgrfw21.png" alt=""><figcaption></figcaption></figure>**Pedir Base de Conhecimento**\
Outra ação útil é [Ask Knowledge Base](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base). Ele pode usar um atributo como {{lastUserText}} para recuperar informações da Base de Conhecimento com base na última pergunta do usuário.

<figure><img src="/doc-images/2SynANYOw3PxHVguiUK7.png" alt=""><figcaption></figcaption></figure>** Resposta do usuário de captura**\
Esta ação é útil quando você deseja [capture information from the user](/docs/guia/ai-chatbots-and-automation/actions-explained/capture-user-reply-action), por exemplo, seu endereço de e-mail. A conversa pausa até que o usuário responda, e o valor é armazenado em um atributo como {{UserEmail}}. Mais tarde, você pode reutilizar *UserEmail* em outras Ações, por exemplo para enviar uma mensagem ou enviar um [email](/docs/guia/ai-chatbots-and-automation/actions-explained/send-email).

<figure><img src="/doc-images/hcInxjwyOYuvDOK6TOcN.png" alt=""><figcaption></figcaption></figure>Há muitos outros exemplos.

Agora vamos dar uma olhada mais de perto nas categorias de Atributos:

1. Atributos definidos pelo usuário
2. Atributos mais usados
3. Atributos definidos pelo sistema
4. Atributos de documentos enviados
5. Atributos de imagem enviados
6. Atributos de chumbo
7. Atributos dinâmicos

# # # #

####**Atributos definidos pelo usuário**

Os atributos definidos pelo usuário são especialmente úteis quando você precisa coletar dados do usuário ou receber dados de serviços web externos (por exemplo, Pedidos Web ou tarefas ChatGPT).

Você pode criar um atributo definido pelo usuário clicando no`{}`ícone, disponível onde os atributos podem ser usados.\
Por exemplo, você pode abrir um [Reply Action](/docs/guia/ai-chatbots-and-automation/actions-explained/reply-action) e clicar no`{}`ícone no canto inferior direito da caixa de texto para definir um novo atributo.

A partir daí, você pode selecionar um dos atributos listados na seção *User definite*. Neste exemplo, usaremos **gpt\ reply**.

Isso significa que a resposta gerada pela tarefa Chatgpt será armazenada no atributo **gpt\ reply**. Então, usando uma Ação de Resposta, o conteúdo de **gpt\ reply** pode ser enviado de volta para o usuário.

<figure><img src="/doc-images/Fe21noI4Sa7RWcVMpjrU.png" alt=""><figcaption></figcaption></figure>** Atributos mais usados

A categoria *Most used* contém atributos especiais que são frequentemente aplicados em conversas.

* ** lastUserText** (String)\
O último texto introduzido pelo usuário. Este valor é substituído cada vez que o usuário responde.
* ** user\ country** (String)\
O país do usuário, como detectado por ChatCase.
* **User\ city** (String)\
A cidade do usuário, como detectado por ChatCase.
* **User\ language** (String)\
O idioma do usuário, detectado a partir das configurações do navegador do usuário.
* **Transcript** (String)\
A transcrição completa de todas as mensagens trocadas com o agente da IA durante a conversa.

<figure><img src="/doc-images/EA4R8AbXBDfIescQIiwY.png" alt=""><figcaption></figcaption></figure>** Atributos definidos pelo sistema**\
Estes são atributos automaticamente fornecidos pelo ChatCase durante uma conversa:

* ** departamento\ name** (String)\
O nome do departamento onde o agente de IA está ativo.
* ** departamento\ id** (String)\
A identificação do departamento onde o agente de IA está ativo.
* **project\ id** (String)\
A identificação do projeto a que pertence o Agente de IA.
* ** last\ message\ id** (String)\
A identificação única da última mensagem enviada.
* ** conversação\ id** (String)\
A identificação única da conversa.
* **chatbot\ name** (String)\
O nome do agente da IA.
* **chatbot\ token** (String)\
Um token que você pode usar para invocar as APIs do ChatCase. Este token é continuamente renovado durante o fluxo, e cada token expira 4 horas após a emissão.
* ** user\ id** (String)\
O ID único do usuário no banco de dados do ChatCase.
* ** user\ agent** (String)\
O agente de usuário web do dispositivo onde a conversação começou.
* **ChatChannel** (String)\
O canal da conversa, por exemplo, *web*, *whatsapp*, *facebook*, *telegram*.
* ** user\ source\ page** (String)\
A página onde a conversa está em execução. Disponível apenas no canal *web*.
* **Chat\ url** (String)\
O URL do chat, que você pode compartilhar com um colega. Use a Ação *Convide humano* para convidar um agente humano para este chat.
* ** user\ ip\ endereço** (String)\
O endereço IP do usuário, quando disponível.
* **ticketId** (String)\
O ID do ticket atribuído automaticamente a cada conversação.

<figure><img src="/doc-images/ksEsiHyBS5mgMmcCAmZY.png" alt=""><figcaption></figcaption></figure>####**Atributos de documentos carregados#

Estes atributos estão disponíveis quando um usuário envia um documento durante uma conversa:

* ** lastUserDocumentAsAttachmentURL** (String)\
A URL pública para acessar o documento carregado como um anexo. Vazio se nenhum documento for carregado. Use este atributo para fornecer um link de download para usuários finais. O URL expira após 5 minutos.
* ** lastUserDocumentURL** (String)\
O URL público para acessar o documento enviado. Vazio se nenhum documento for carregado. O URL expira após 5 minutos.
* ** lastUserDocumentName** (String)\
O nome do documento carregado. Vazio se nenhum documento for carregado.
* ** lastUserDocumentType** (String)\
O tipo de documento enviado. Vazio se nenhum documento for carregado.

<figure><img src="/doc-images/gIkYF9S1h2bHPhWcWhjf.png" alt=""><figcaption></figcaption></figure>####**Atributos de imagem carregados#

Estes atributos estão disponíveis quando um usuário envia uma imagem durante uma conversa:

* ** lastUserImageURL** (String)\
O URL público para acessar a imagem enviada. Vazio se nenhuma imagem for enviada. O URL expira após 5 minutos.
* ** lastUserImageName** (String)\
O nome da imagem enviada. Vazio se nenhuma imagem for enviada.
* ** lastUserImageType** (String)\
O tipo da imagem enviada. Vazio se nenhuma imagem for enviada.
* ** lastUserImageHeight** (String)\
A altura em pixels da imagem enviada. Vazio se nenhuma imagem for enviada.
* ** lastUserImageWidth** (String)\
A largura em pixels da imagem enviada. Vazio se nenhuma imagem for enviada.

<figure><img src="/doc-images/DJU5k3FciBv4YviBCOIS.png" alt=""><figcaption></figcaption></figure>####**Atributos de informação líder#

Esses atributos fornecem informações sobre o usuário armazenado em Contatos do ChatCase ou passado através da autenticação:

* **currentPhoneNumber** (String)\
O número de telefone usado na conversa atual (por exemplo, nos canais WhatsApp ou SMS).
* **UserPhone** (String)\
Número de telefone do usuário armazenado em ChatCase Contatos.
* ** userEmail** (String)\
E-mail do usuário armazenado em ChatCase Contatos.
* **UserLeadId** (String)\
O ID de contacto do usuário em Contactos ChatCase.
* **UserEmpresa** (String)\
O nome da empresa do usuário em ChatCase Contatos.
* ** userFullname** (String)\
O nome completo do usuário em ChatCase Contacts.
* **decodificadoCustomJWT** (JSON)\
O JWT usado pelo usuário para autenticar com autenticação Personalizada (Strong).\
Para exibir o JWT JSON decodificado, use a sintaxe LiquidJS para stringificar o objeto.

Exemplo:

```
{
    "iat": 1727252***,
    "sub": "userexternal",
    "aud": "https://chatcase.com/projects/6406e34727b57500120b1***",
    "_id": "6406e34727b57500120b1bd6_745408***",
    "firstname": "Andrew",
    "lastname": "Flavor",
    "email": "**@***.us",
    "profile": "Admin",
    "classified": "true",
    "id": "6406e34727b57500120b3bd8_745408***",
    "fullName": "Andrew Flavor"
}

`$([Environment]::NewLine)
* ** ForteAutenticado** (String)\
Indica se o usuário autenticou com autenticação Personalizada (Strong). Os valores são “verdadeiros” ou “falsos”.

<figure><img src="/doc-images/GmjKLruC1MmwSTz1K6Zd.png" alt=""><figcaption></figcaption></figure>** Atributos dinâmicos

Esses atributos são gerados dinamicamente durante a conversação:

* ** timestamp** (Número)\
A hora atual em milissegundos (formato Número).
* ** agora** (data ISO)\
A data atual no formato ISODate, por exemplo:`2024-09-25T10:14:41.638Z`(Formato de montagem).
* **UUID** (String)\
Um UUID gerado dinamicamente com base no UUIDv4, com traços removidos.
* **UUIDv4** (String)\
Um UUIDv4 padrão gerado dinamicamente.

<figure><img src="/doc-images/PeRYJMsk1nYNHhzw26fJ.png" alt=""><figcaption></figcaption></figure>** Criando um novo atributo**

Você também pode criar um atributo completamente novo para usar em seus fluxos de trabalho. Siga estes passos:

1. Clique no`{ }`ícone.
2. Na parte inferior da página, clique em **+ Adicionar um atributo personalizado**.\
(imagem)
3. Uma janela pop-up aparecerá onde você pode definir o nome do seu novo atributo.
4. Uma vez criado, o atributo estará disponível e pronto para usar em seus Fluxos.

<figure><img src="/doc-images/R0WWPeFBncx7HuBoVyy1.gif" alt=""><figcaption></figcaption></figure>**Definir atributos e excluir atributos**

Ambas as Ações estão disponíveis em **Ações de fluxo** e estão diretamente relacionadas com o gerenciamento de Atributos.

**Set Atributos**\
Esta ação é útil quando você deseja atribuir um valor a um atributo, seja dinâmico ou estático.\
Por exemplo:

1. Você pode pedir a uma tarefa Chatgpt para extrair um código de rastreamento da transcrição da conversa.
2. O resultado é armazenado no atributo **gpt\ reply**.
3. Usando *Set Attributes*, você pode salvar este valor em um novo atributo que você criou anteriormente, como **TrackingID**.

<figure><img src="/doc-images/YHpu1xjTWipkRCrmsBxZ.png" alt=""><figcaption></figcaption></figure>**Excluir Atributos**\
Esta ação permite- lhe remover o valor de um atributo. É útil quando você não precisa mais de certos dados em seu Flow e quer clareá-los.

<figure><img src="/doc-images/2KCHimiIsibC1Jm2abq3.png" alt=""><figcaption></figcaption></figure>Com Atributos, você pode armazenar, atualizar e gerenciar dados em seus Fluxos, tornando seus Agentes de IA mais dinâmicos e personalizados. &#x20;

Ao combinar ações como Set Attributes e Delete Attributes, você ganha controle total sobre como as informações são capturadas, reutilizadas ou limpas, dando-lhe a flexibilidade para construir automações mais inteligentes.
