---
title: "Resposta Ação"
description: "Resposta Ação"
---

Resposta Ação

<figure><img src="/files/Ruu3VW4Ly1SQRCylX5Fo" alt=""><figcaption></figcaption></figure>A ação Resposta é o “núcleo” de automações conversacionais. Ele ajuda você a responder corretamente ao usuário criando o que, de fato, é a interface de usuário final percebida em seu aplicativo de chat. A Ação Resposta pode enviar para o usuário diferentes pedaços de conteúdo, alguns não-interativos como texto simples ou imagens, alguns outros interativos como botões ou carrosséis. Ele também pode enviar de volta para o conteúdo multimídia do usuário, como vídeo ou (depende do canal obviamente) aplicativos web inteiros contidos dentro de um iframe.

Além disso, considere que todos os componentes enviados para o usuário podem se adaptar automaticamente ao canal que o usuário está usando para conversar. Por exemplo, as conversas do Whatsapp só suportam até três botões, mas se você enviar mais de três botões, a resposta adapta a conversa automaticamente para mostrar os botões com um menu pop-up em vez de botões simples. Alguns outros canais não suportam botões (ou seja, SMS) e o Reply faz um esforço adicional para aplicar mais "energia" em inventar uma solução para você, por exemplo, criar automaticamente um menu baseado em números com todas as opções.

É hora de ver como a ação Resposta funciona.

Quando você trabalha com respostas (e outras Ações) você sempre terá duas “views” diferentes da ação.

1. Visualização da ação
2. Editor de ação

A pré-visualização da ação** representa uma visão sintética da ação dentro do palco. É muito útil ter uma boa visualização da ação no palco para obter uma boa compreensão de todo o fluxo quando você tem muitos blocos. Algumas pré-visualizações de ação, como a Ação Resposta em si, também são interativas. Por exemplo, você pode facilmente criar e conectar um botão diretamente da visualização, sem a necessidade de abrir o editor.

O **Action Editor** representa a visão detalhada da ação e permite editar e configurar suas ações com todos os detalhes necessários e suportados. &#x20;

<figure><img src="/files/bQq6xmIrHa40gfeId01O" alt=""><figcaption></figcaption></figure>## # Respostas de texto

Se você quiser responder texto simples, a resposta padrão arrastada no palco está pronta para a tarefa. Você só precisa preencher o campo de texto mostrado com a frase desejada:

<figure><img src="/files/02SckoLlBssKX4wa5DEG" alt=""><figcaption></figcaption></figure>Vamos tentar. Testa-o!

<figure><img src="/files/ZZjyZmkU64cv7vw7VtDB" alt=""><figcaption></figcaption></figure>Recebemos o nosso texto como mensagem de boas-vindas.

Visualização de URLs

A opção **URL Preview** permite adicionar um ou mais links de origem a uma Ação de Resposta.

Você pode usá-lo para mostrar páginas de usuários ou documentos relacionados à resposta quando a resposta é gerada com a ação [Ask Knowledge Base](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base).

<figure><img src="/files/pxDqMZgAF0EbmhT39nuF" alt=""><figcaption></figcaption></figure># # # # Adicionar antevisões de URL

Para adicionar uma antevisão de URL:

1. Abra a **Reply Action**.
2. Clique na opção **URL Preview**.
3. Escolha como você deseja fornecer os URLs.

<figure><img src="/files/KV9kMXNaxQdlYPYOAiBg" alt=""><figcaption></figcaption></figure>O ChatCase suporta três maneiras de adicionar antevisões de URL:

Fontes JSON

Use **JSON Sources** quando você quiser exibir os URLs de origem precisos dos documentos usados para gerar uma resposta de IA.

Para usar esta opção:

1. Abra o link **Pedir Base de Conhecimento** ação.
2. Vá para as configurações **AI**.
3. Habilitar **Obter fontes de conteúdo**.
4. Em **Atribuir Fontes KB JSON a **, adicione o atributo onde os URLs de origem serão salvos.\
Para este tutorial, usamos:
5. Volte para a Ação Resposta.
6. Selecione ** Fontes JSON** na seção Preview URL.

<figure><img src="/files/IetrkWmaOfU7FIDvaT0D" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/fSjGhF8NEb8KDxuAmeux" alt=""><figcaption></figcaption></figure>Uma vez configurada, a Ação Resposta pode exibir os URLs de origem usados para gerar a resposta.

Texto

Use **Texto** quando você quiser adicionar manualmente uma ou mais URLs.

Adicionar uma lista de URLs válidas separadas por um espaço.

<figure><img src="/files/Kwi5dyJRrPDG2kk09X9s" alt=""><figcaption></figcaption></figure>Forma

Use **Form** quando você quiser adicionar visualizações de URL manualmente com mais detalhes.

Para cada link, você pode adicionar:

* **Link**: o URL que você deseja exibir
* ** Title**: o título da página
* **Descrição**: uma breve descrição da página
* ** URL de imagem**: uma imagem opcional para mostrar na visualização

Para adicionar mais links, clique em ** Adicionar** e complete os campos para cada URL.

Esta opção é útil quando você deseja controle total sobre como a pré-visualização do link aparece para o usuário.

<figure><img src="/files/aTZaPnQIzQJadnVeOtqN" alt=""><figcaption></figcaption></figure>Imagens

Adicionar uma imagem à sua resposta também é muito fácil. Basta usar a barra de ferramentas e clicar no ícone da imagem. Um componente de imagem será exibido na resposta. Agora você pode configurar sua imagem carregando-a diretamente do seu dispositivo.

<figure><img src="/files/0Cu175z9inx9vdaanC2m" alt=""><figcaption></figcaption></figure>Configurar a sua imagem.

<figure><img src="/files/OAM6liFjTwwdqPwsjsQz" alt=""><figcaption></figcaption></figure>Testa outra vez. A sua imagem é exibida na mensagem de boas-vindas.

<figure><img src="/files/WuNzI62pgcDFZOR8nCL7" alt=""><figcaption></figcaption></figure>Agora temos nossa imagem seguindo nosso texto.

Botões

Botões, também conhecidos como Respostas Rápidas, são um elemento principal na interação do usuário. Eles fornecem ao usuário uma maneira rápida de responder ao seu chatbot. Você pode adicionar um ou mais botões anexados a alguns elementos de resposta (texto, imagens, quadros, etc.).

Os botões podem três ações principais em ChatCase:

1. Mover para outro bloco
2. Envie um texto predefinido
3. Uma url web clicável em forma de botão

Você pode adicionar um botão de duas maneiras principais.

1. Adicionando um botão do editor de ação Responder
2. Adicionando um botão da visualização

#### ** Adicionando um botão do editor de ação Responder**

Quando no editor, você pode facilmente adicionar um botão pressionando o botão + Adicionar placeholder abaixo do elemento selecionado. Neste exemplo, adicionaremos um botão anexado à mensagem de boas-vindas.

<figure><img src="/files/mUZ72WSvTVTvAH5qRhUG" alt=""><figcaption></figcaption></figure>Assim que você clicar em um botão é adicionado com um texto básico pré-cheio “Button”. Você pode alterar o texto do botão clicando nele. O editor de detalhes do botão aparece, onde você pode escolher o texto de você botão e seu tipo. Falamos sobre tipos de botões mais tarde. Por enquanto nos limitaremos a mudar o nome do botão. Por exemplo “Suporte” (um botão ideal que pode mover o usuário para outro “Departamento”). Podemos deixar o tipo padrão “texto” por enquanto. Isso significa que o texto do botão será enviado de volta para o chatbot assim que o usuário clicar nele.

<figure><img src="/files/asEWFo6hJCOGYeLiXczf" alt=""><figcaption></figcaption></figure>Podemos ver isso em ação. Basta pressionar o botão Teste e vamos ver o que acontece:

<figure><img src="/files/e3l8X0JNTHYGdKsZlNyO" alt=""><figcaption></figcaption></figure>O botão aparece após a resposta de texto. Se você pressionar o botão você receberá uma mensagem padrão de "não entender" o que você disse. Isto porque nenhum bloco foi treinado com o texto enviado pelo botão e quando isso acontece o bloco defallback padrão é executado automaticamente (o bloco defallback padrão também estava disponível nas imagens de desenhos anteriores, eu simplesmente escondo-o para o bem da semplicidade). Vamos tentar.

<figure><img src="/files/85X7rVS2Yxhfk1zOb9vN" alt=""><figcaption></figcaption></figure>Agora podemos tentar adicionar uma nova ação de resposta no palco e conectá-la ao botão. Abra o menu Ações à esquerda e arraste a ação no palco:

<figure><img src="/files/YX8NyZOxS4tLytAzfVrs" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/F2n5CjJTZCuQ97DNhaiS" alt=""><figcaption></figcaption></figure>Assim que você liberar o botão do mouse, um novo bloco é colocado no palco com uma ação Responder dentro. Podemos personalizar a ação com uma mensagem de boas-vindas para o departamento de Suporte:

<figure><img src="/files/eSC88zoJbm8zjAtnmkuC" alt=""><figcaption></figcaption></figure>Mas como conectar o botão ao bloco? Basta clicar no botão Suporte. O editor de detalhes do botão será aberto:

<figure><img src="/files/4vuAjFbSlMaCFVpI89iJ" alt=""><figcaption></figcaption></figure>Agora mude o tipo de botão para “ir para o relógio” a partir do seletor Tipo. O seletor Ir para bloquear aparece. Encontre o bloco de destino do botão da lista. No nosso caso é “fluxo de apoio”.

<figure><img src="/files/QHSHYMVvd3TLRBmcbasF" alt=""><figcaption></figcaption></figure>Assim que você escolher o bloco de destino uma seta aparece no palco (3) ligando o botão diretamente ao bloco.

<figure><img src="/files/LF9ffoIgBUbsp9OETYkj" alt=""><figcaption></figcaption></figure>Executando o fluxo obteremos o bloco respondendo com o texto configurado dentro assim que pressionarmos o botão Suporte:

<figure><img src="/files/thumpGM1VLV7E1XAs95i" alt=""><figcaption></figcaption></figure>#### **Adicionar um botão da antevisão**

Você pode facilmente adicionar um botão diretamente de uma ação de resposta no palco. Pressione "Adicionar botão" diretamente e um botão será adicionado. Agora você pode conectar o botão ao bloco que deseja simplesmente clicar na pequena etiqueta do botão à esquerda e então arrastar a linha para o bloco selecionado.

<figure><img src="/files/HDXicIuRKK0LfHrUqDkq" alt=""><figcaption></figcaption></figure>Uma vez conectado você pode configurar o nome do botão simplesmente clicando nele, usando o editor de botão que aparecerá à direita do palco:

<figure><img src="/files/Yat6OSVyvZpudMzKJGbn" alt=""><figcaption></figcaption></figure>Botões JSON

Você pode renderizar dinamicamente seus botões usando o JSON. Este recurso é útil quando você não conhece seus botões na hora do design e você precisa renderizar seus botões - por exemplo - com base em uma resposta de ação Web Request.

Existem muitos tipos de botões suportados pelo ChatCase.

1. Botões de ação: usados para conectar diretamente a um bloco
2. Botões de texto: esses botões simplesmente imitam o usuário final digitando algum texto. É até o fluxo para gerenciar a resposta de texto
3. Botões de URL

** Botões de ação**

Você pode configurar os botões usando a estrutura básica do JSON documentada [aqui](https://developer.chatcase.com/widget/advanced/widget-json-protocol#action-buttons).

Aqui siga um exemplo. Um botão de ação conecta diretamente a um bloco usando o nome do bloco como mostrado na figura a seguir. ** Depois de conectar o botão ao bloco, preste atenção ao renomear o título do bloco, pois o botão não funcionará mais**.

<figure><img src="/files/MD4ElN1lTUkuXjiu47kn" alt=""><figcaption></figcaption></figure>Para fins de prototipagem rápida, é útil saber que seus botões estáticos simplesmente ficaram acinzentados enquanto você tem botões JSON ativos. Isso é útil se você quiser ver um gráfico com alguns conectores ativos, apesar do fato de que esses conectores serão posteriormente renderizados dinamicamente usando a seção Botões JSON, como na seguinte imagem:

<figure><img src="/files/xMgORb6lnFUka2zMWTmi" alt=""><figcaption></figcaption></figure>Atributos em Botões JSON.

Você também pode usar atributos para renderizar botões JSON. Atributos podem ser definidos em uma Ação de Código ou um Atributos de Conjunto como no exemplo a seguir:

<figure><img src="/files/q4WGy4HOXfk0V8Y63lkp" alt=""><figcaption></figcaption></figure>Depois de definir seu JSON, você pode renderizar seus botões na seção Botões JSON usando seu atributo:

<figure><img src="/files/imtaRwMcilqalY2c1JuW" alt=""><figcaption></figcaption></figure>Se seu atributo é um JSON real (não um JSON stringificado) não se esqueça de usar o modificador (nós usamos [LiquidJS](https://liquidjs.com/filters/json.html) para renderizar atributos)

<figure><img src="/files/MdCCKzPEvcRlzZb9xxLX" alt=""><figcaption></figcaption></figure>Carrossels (Galeria)

Uma galeria em ChatCase (também conhecido por **Carousel)** é uma mensagem interativa composta por uma sequência de “cartões”, cada uma contendo uma imagem, título, descrição e botões de ação.

<figure><img src="/files/8fThV3PGguqb06VwpOd9" alt="" width="375"><figcaption></figcaption></figure>\
É especialmente útil em contextos como **e-commerce (ou seja, Shopify)** porque permite que você mostre vários produtos ou opções de forma compacta, ajudando os clientes a fazer escolhas sem sair do chat.

Com um carrossel você pode, por exemplo:

* Apresentar rapidamente uma seleção de produtos em destaque
* Sugerir itens relacionados durante o suporte ao cliente
* Guia usuários para comprar com botões que ligam diretamente à página do produto ou adicionar itens ao carrinho

Carrossels Estáticos

Carrossels estáticos são úteis como uma ferramenta protótipo. Você pode configurá-lo rapidamente para mostrar seus clientes demos simples de seus agentes de comércio eletrônico. Se você está recebendo listas dinâmicas de produtos e você quer usar um carrossel você deve usar um carrossel dinâmico (JSON Gallery)

<figure><img src="/files/Wfcbmy9UeW1Ug3AvhVO5" alt=""><figcaption></figcaption></figure>Pressione o botão Galeria no topo da barra de ferramentas de componentes Resposta

<figure><img src="/files/K6qssBT5asvQUzNsTPXX" alt="" width="375"><figcaption></figcaption></figure>Agora você pode adicionar cartas com prevew, descrição e botões de vários tipos.

<figure><img src="/files/1uIqV8hQaCb54D36ywMU" alt="" width="375"><figcaption></figcaption></figure>Obtendo o seguinte como resultado final

<figure><img src="/files/jienLd4VsxZFaUT9Z0pB" alt="" width="375"><figcaption></figcaption></figure>Carrossels Dinâmicos

Depois de adicionar um elemento Galeria, pressione a galeria JSON:

<figure><img src="/files/bP7sFf3hcFc2gvoP855f" alt="" width="375"><figcaption></figcaption></figure>Agora você tem uma caixa de texto onde você pode preencher seu JSON dinâmico usando a sintaxe JSON do carossel para renderizar dinamicamente as placas de produto em ChatCase:

<figure><img src="/files/RQ1MosSYyMqNy413irZk" alt=""><figcaption></figcaption></figure>O sintetizador tem a seguinte especificação geral:

```json
[
    {
        "preview": {
            "src": "Your card image URL"
        },
        "title": "The card title",
        "description": "The card description",
        "buttons": [] // the buttons array, follows the JSON Buttons syntax
    }, {...}
]
`$([Environment]::NewLine)
Primeiro considere que a lista de cartas é um array JSON, então todas as cartas estão incorporadas entre \[ ... ].

Além disso, é importante notar que a seção de botões segue a sintaxe [Botões JSON](#json-botões).

Você pode encontrar um modelo de carrossel completo(https://chatcase.com/community/getchatbotinfo/chatbotId/6878ad0b1485170013edec5a-Carousel-demo-flow) na nossa comunidade. Basta importar o modelo e usá-lo como ponto de partida.

Considere que suportamos extensivamente a sintaxe LiquidJS em nossas seções de texto e assim faz a seção JSON Gallery. Nós já fornecemos um exemplo com o LiquidJS suportando uma iteração da lista de produtos que renderiza uma carta na hora (veja o modelo acima).

```liquid
[
    {% for item in results limit:10 %}
    {
        "preview": {
            "src": {{item.imageURL | json}}
        },
        "title": {{item.name | json}},
        "description": {{item.description | json}},
        "buttons": [{"type": "url","value": "Buy","link": {{item.imageURL | json}}}]
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
]
`$([Environment]::NewLine)
Filtros

Os filtros são uma forma especial de esconder/desocultar seções específicas de uma Ação de Resposta com base nos valores dos atributos de fluxo.

Você pode usar Filtros para reduzir o número de ramificações no fluxo, simplesmente construindo uma Resposta que adapta automaticamente o conteúdo mostrado com base nos valores de alguns atributos.

Um bom caso de uso para entender Filtros é para Multi idioma. Você pode criar uma única resposta "server" vários idiomas. Desta forma, quando o caso de uso de linguagem Multi não é muito complexo, você pode abordar uma solução viável com Filtros.

<figure><img src="/files/FQBN3zrWJV7c4cq3TI8C" alt=""><figcaption></figcaption></figure>Para entender melhor os Filtros criamos um Agente documentado em nossa comunidade. Por favor, dê uma olhada no tutorial na seguinte URL: \
<https://chatcase.com/community/search/getchatbotinfo/chatbotId/65acd812484b9f0013c13e9c-Multi-language-chatbot-example-using-Reply-Filters>Resposta avançada

Resposta avançada é uma nova ação que desenvolvemos para fornecer mais controle sobre o fluxo.

<figure><img src="/files/aJnpp02TnxrK57WcYCX5" alt="" width="375"><figcaption></figcaption></figure>Com Resposta Avançada você tem:

* Tempo limite de entrada do usuário
* Verificar se os botões correspondem à entrada do usuário

Sem entrada

Se o usuário não responder na quantidade especificada do você pode tomar uma ação específica. Isso é extremamente útil quando, por exemplo, você quer fechar uma conversa após algum período de inatividade. Uma opção real de mudança de jogo para gerenciar o fluxo de conversas com seus agentes de IA.

<figure><img src="/files/04HK6l1mBoXlfXpw4cyb" alt=""><figcaption></figcaption></figure>Não há correspondência

Nós introduzimos o conector No match permitindo que seus usuários possam responder não só clicando em um botão, mas também escrevendo o texto dentro.\
Isto é extremamente útil especialmente em Whatsapp (ou outros canais externos) onde o usuário às vezes prefere responder a uma pergunta escrevendo um texto em vez de clicar no botão.

Com a nova Resposta você também pode tomar uma ação específica quando um texto escrito não corresponde a nenhum dos botões texto. Você pode usar o conector "sem correspondência" para gerenciar este caso com um fluxo específico.

<figure><img src="/files/OrWKHwOG7zXflR3rXyr2" alt="" width="375"><figcaption></figcaption></figure>Se você tiver dúvidas sobre a Ação de Resposta ou outros recursos do ChatCase sinta-se livre para enviar um e-mail para [redacted@example.invalid ](mailto:redacted@example.invalid)ou deixe-nos um [feedback](https://feedback.chatcase.com/feedback)
