---
title: "Como enviar suas imagens através da IA"
description: "Como enviar as suas imagens através da IA"
---

Como enviar as suas imagens através da IA

Este chatbot é projetado para analisar e responder às imagens apresentadas pelo usuário, especificamente com foco em bicicletas neste cenário de caso; você pode decidir em que tópico focar. O bot orienta os usuários através do upload de imagens e reúne respostas baseadas na imagem e nas entradas de texto que acompanham.

A funcionalidade central do chatbot centra-se na sua capacidade de analisar imagens, especificamente imagens de bicicletas, utilizando a API Vision da OpenAI (GPT-4 com visão) para produzir insights significativos. Esta quebra passo a passo mostra como o bot processa e responde a imagens com recursos integrados de IA.

**1. Configurar Estrutura Básica de Intenção**

* **Intenções ou Blocos** são as unidades fundamentais que definem as respostas e ações do bot. Para este bot:
* Há um ** bem-vindo intenção / bloco** que desencadeia uma saudação inicial e um prompt para carregar uma imagem com a seguinte mensagem "*Inserir uma imagem, por favor*".
* A **default fallback intention / block** é geralmente configurado para lidar com entradas não reconhecidas com prompts como “Você pode reformular sua pergunta?” Mas neste caso, é configurado para pedir ao usuário para escrever o que ele quer saber sobre a imagem que ele enviou.

<figure><img src="/files/lk6aDm8i1Zorb5WLrzgl" alt=""><figcaption></figcaption></figure>**2. Análise de imagem usando API de visão e integração GPT**

* ** Intenção da API de visão**: Esta é a principal característica onde o bot analisa as imagens carregadas e responde com insights.
* **Passos na Análise de Imagem**:
* **Requisito de Imagem**: Os usuários são instruídos a carregar uma imagem. O robô pausa com uma mensagem como, "Analisando...".
* **Web Request Setup**: Escolha a opção "Post" e insira a API:<https://api.openai.com/v1/chat/completions>

<figure><img src="/files/jhLhsfkLj9Qz1dJ8emMt" alt=""><figcaption></figcaption></figure>* **Prompt Design**: Escolha então a opção “Corpo” onde você pode inserir o prompt estruturado por Json:
&#x20; "modelo": "gpt-4o-mini",\
&#x20; "mensagens": \[\
&#x20; #
&#x20; "role": "usuário",\
&#x20; "conteúdo": \[\
&#x20; #
&#x20; "type": "text",\
&#x20; "texto":\
&# x20; },\
&#x20; #
&#x20; "type": "image\  url",\
&#x20; "imagem\  url":
&#x20; "url":\
&#x20; }\
&#x20; }\
&#x20; ]\
&#x20; }\
&#x20; ],\
&#x20; "max\  tokens": 300\
&# x20;}
* ** Autorização**: Insira o atributo neste campo depois de ter inserido a Chave OpenAI na seção Globals do seu Bot você vai encontrar como o terceiro ícone na extrema direita do Design Studio.
* ** Processamento de resultados**: A resposta da API é armazenada em uma variável (*result*), que o bot formata e retransmite para o usuário como uma descrição detalhada da bicicleta.

<figure><img src="/files/YnV7CbHwlKpTgve5ykC0" alt=""><figcaption></figcaption></figure>**3. Enviando a imagem para a API de visão do OpenAI**

* ** Configuração da Chamada API**: O bot constrói uma solicitação de API para o GPT-4 Vision API do OpenAI. Esta chamada API está configurada para enviar tanto um prompt de texto quanto a URL da imagem para o modelo para processamento.
* **API Request Structure**:
* O bot primeiro extrai a URL da imagem enviada e depois incorpora esta URL na solicitação da API.
* O prompt dado ao modelo é crucial. Neste caso, é definido para “Descrever esta bicicleta em detalhes, incluindo cor, estilo de moldura, e quaisquer características visíveis.” Um prompt bem projetado ajuda o modelo a retornar uma descrição abrangente.

**4. Manuseando a Resposta da API de Visão **

* ** Extração de dados**: A resposta da API inclui descrições detalhadas da bicicleta, tais como tipo de quadro, cor e quaisquer características notáveis.
* **Armazenando o Resultado**: O bot armazena a resposta em uma variável (por exemplo, resultado) para garantir que os dados sejam facilmente acessíveis para etapas adicionais.
* ** Intenção de Erro**: Se um erro ocorre durante a interação API, o bot captura e exibe no atributo erro.
* ** Comentários do Usuário**: O bot formata a resposta e envia-a de volta para o usuário como uma descrição detalhada, garantindo que a informação seja clara e fácil de usar.
* ** Seguimentos opcionais**: Depois de mostrar os resultados, o bot pergunta se o usuário deseja enviar outra imagem.

<figure><img src="/files/MCLcb3eiHuxzTi8jsAXQ" alt=""><figcaption></figcaption></figure>**5. Integração com ChatCase e OpenAI API**

* ** Autorização API**: O bot usa uma chave API armazenada com segurança na infraestrutura do ChatCase. Pedidos para a API do OpenAI são autorizados usando o cabeçalho Autorização.
* ** Configuração do JSON**: O bot utiliza solicitações JSON para enviar e receber dados da API Vision, seguindo um formato estruturado para consultas baseadas em imagens e textos.

A integração do ChatCase com a API GPT-4 Vision da OpenAI é essencial para alimentar a funcionalidade de análise de imagens. Esta seção abrange os principais aspectos da configuração segura e utilização de APIs para um desempenho ideal.

**A. Obtenção e garantia de chaves API **

* **API Key for OpenAI**: O bot requer uma chave API para acessar a API Vision do OpenAI. Esta chave é emitida após a criação da conta e é armazenada com segurança na infra-estrutura do ChatCase ou numa variável de ambiente seguro.
* ** Autorização**: Ao fazer pedidos à API do OpenAI, o bot inclui a chave API nos cabeçalhos da solicitação para autenticar cada chamada.

**B. Configurando as Solicitações da API em ChatCase**

* ChatCase permite integrações personalizadas da API configurando pedidos webhook na configuração do bot. Neste caso:
* Configurações do Webhook**: O webhook do bot está configurado para encaminhar cada pedido de upload de imagem do usuário para o endpoint da OpenAI Vision API.
* ** Endpoint API**: O endpoint da API para o modelo Vision do OpenAI é especificado em ChatCase, permitindo que cada solicitação seja perfeitamente roteada.
* **Testing the API Call**: Uma vez configurado, testes iniciais são realizados para garantir que o bot envia solicitações com sucesso e recebe as descrições de imagem desejadas em resposta.

**C. Manuseando a Resposta API**

* O código do bot processa a resposta JSON da API OpenAI, extraindo e formatando os dados de descrição para torná-lo fácil de usar.
* **Exemplo de um trecho de manipulação de resposta**:
* Esta abordagem assegura que os usuários recebam uma resposta clara e relevante com base na imagem que enviaram.

**D. Estruturando a Configuração JSON para Pedidos de API **

* Cada solicitação de API é estruturada em formato JSON, especificando o modelo, prompt, URL de imagem e configurações opcionais como max\ tokens para controlar o comprimento da resposta.
* **Exemplo JSON para pedido de API**:
* Esta estrutura permite que o chatbot envie prompts específicos e receba respostas detalhadas adaptadas à consulta do usuário.

**E. Tratamento de Erros e Recuos**

* ** Tratamento de Erros API**: Se a API falhar ou retornar um erro, o bot é configurado para capturar esses erros e responder com uma mensagem informativa ao usuário.
* ** Responses Fallback**: Se a resposta não atender aos critérios esperados (por exemplo, se for muito vago ou irrelevante), o bot pode pedir ao usuário para tentar refratar seu pedido ou enviar uma imagem mais clara.

**F. Segurança e Conformidade de Dados **

* **Storing User Data**: Todas as interações API devem cumprir os padrões de proteção de dados. As imagens e mensagens do usuário devem ser armazenadas com segurança, anonimizadas se necessário e apagadas após um período especificado para proteger a privacidade do usuário.
* **Using Environment Variáveis**: chaves API e outros dados sensíveis são armazenados em variáveis de ambiente ou configurações de backend seguras do ChatCase para evitar acesso não autorizado.

Esta estrutura do chatbot orienta eficientemente os usuários através de perguntas baseadas em imagens, responde com informações relevantes usando IA, e garante uma experiência suave do usuário através de respostas de erro e recuo pré-definidas. Esta configuração pode ser adaptada a várias aplicações que exigem análise de imagem e feedback detalhado.
