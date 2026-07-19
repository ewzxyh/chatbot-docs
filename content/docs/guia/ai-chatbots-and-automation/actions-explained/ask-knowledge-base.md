---
title: "Perguntar à Base de Conhecimento"
description: "Pergunta à Base do Conhecimento"
---

Pergunta à Base do Conhecimento

Um dos recursos mais utilizados com base na nossa experiência do cliente é a ação “**Ask Knowledge Base”**. Esta ação está entre as ações de IA no menu do lado esquerdo e é um recurso gratuito que você pode usar para o seu negócio.

<figure><img src="/doc-images/BDv2cBkZ0jYRmlF0ol5z.png" alt=""><figcaption></figcaption></figure>Quando usar a ação da Base de Conhecimentos?<a href="#when-to-use-the-ask-knowledge-base-action" id="when-to-use-the-ask-knowledge-base-action"></a>A ação **Ask Knowledge Base** é um recurso poderoso que permite que você infunda seu agente de IA com dados específicos. Estes dados podem ser URLs do seu site, mapa do site ou arquivos em diferentes formatos.

Quando você fornece seu conteúdo, o agente de IA verifica, rasteja e aprende com as informações disponíveis nesse conteúdo. Isso pode incluir detalhes sobre seus produtos, serviços, história da empresa e muito mais. Se você fornecer um mapa do site, o agente de IA entende a estrutura do seu site e encontra as informações que ele precisa mais eficientemente.

Uma vez que o agente de IA é treinado em seus dados, ele pode aproveitar esse conhecimento para responder às perguntas do cliente de forma independente. Isso significa que, em vez de depender de respostas pré-definidas, o agente de IA pode gerar respostas com base nos dados específicos em que foi treinado. Isso permite respostas mais você precisa e específicas do contexto.

Como usar a ação Ask Knowledge Base?<a href="#how-to-use-the-ask-knowledge-base-action" id="how-to-use-the-ask-knowledge-base-action"></a>#### ** Carrega o seu conteúdo**:&#x20;

Primeiro, você precisa carregar seu conteúdo no sistema ChatCase. Vá para o painel [ChatCase] (https://panel.chatcase.com/v3/dashboard/#/login), selecione "Bases de Conhecimento" no menu da barra lateral esquerda.

<figure><img src="/doc-images/yittxhKkatUezTeffGVn.png" alt=""><figcaption></figcaption></figure>#### **Adicione o seu conteúdo**:&#x20;

Quando se trata de carregar conteúdo no painel do ChatCase, o formato que você escolhe pode impactar em como suas informações são comunicadas através do AI Agent. Aqui estão algumas diretrizes para ajudá-lo a selecionar o melhor formato para suas necessidades:

**FAQs**: Se você estiver procurando fazer upload de perguntas frequentes (FAQs), você pode simplesmente copiar e colar suas perguntas e suas respostas correspondentes uma após a outra na seção de texto simples. Este formato clássico de Pergunta/Resposta é simples, direto e fácil para o Agente de IA navegar.

**Documentos da empresa**: Se você tem documentos da empresa para compartilhar, estes são geralmente em formato PDF ou DOCX. Esses formatos são ideais para preservar o layout e formatação de seus documentos originais, garantindo que seu Agente de IA possa recuperar dados e compartilhá-los com os clientes.

**Bases de conhecimento publicadas**: Se você já tem uma base de conhecimento publicada, URLs do site são sua melhor opção. Você pode simplesmente colar os URLs em massa. Isso permite aos usuários acessar diretamente seus recursos existentes, sem a necessidade de formatação ou upload adicionais.

Lembre-se, depois de enviar seu conteúdo, certifique-se de que ele está indexado. Um tique azul duplo no painel ChatCase indica indexação bem sucedida. Isso significa que seu conteúdo agora está pronto para ser acessado pelos usuários.

<figure><img src="/doc-images/e3mws4eyIfjk3kiB8iop.png" alt=""><figcaption></figcaption></figure>#### **Criar/Editar um agente de IA**:&#x20;

Agora, é hora de voltar ao “**Flows**” para editar/criar um agente de IA para usar esta ação nele.&#x20;

<figure><img src="/doc-images/w0ognrzuy7cAN85re32E.png" alt=""><figcaption></figcaption></figure>Então você será redirecionado para o Design Studio, como mostrado na imagem abaixo

<figure><img src="/doc-images/ktkbKTMszE4sW7DzDZzZ.png" alt=""><figcaption></figcaption></figure>Localize a **"Ask Knowledge Base"** ação na barra de ferramentas esquerda sob a categoria **AI**. Arraste e solte no bloco d**efaultFallback**.

E remover o [Reply Action](/docs/guia/ai-chatbots-and-automation/actions-explained/reply-action) existente do bloco d**efaultFallback**, já que não é mais necessário.

<figure><img src="/doc-images/Half2sRmYoqtmAyfdyWH.gif" alt=""><figcaption></figcaption></figure>#### **Pergunte a configuração da Base de Conhecimento**:&#x20;

Quando você clicar no bloco d**efaultFallback**, um menu de configuração aparecerá no lado direito da tela. Este menu permite personalizar a ação **Ask Knowledge Base**.

Na seção **Use Question**, você notará que o atributo padrão está definido como **LastUserText**. Logo abaixo disso, há uma opção para selecionar uma Base de Conhecimento**. Para este tutorial, vamos ficar com o **base de conhecimento padrão**, mas você é livre para criar e usar personalizados dependendo de suas necessidades.

<figure><img src="/doc-images/DcfWiVFLQBqtG0EJ3X2l.png" alt=""><figcaption></figcaption></figure>Há também dois atributos aqui: **kb\ reply**, que é a resposta gerada através do seu agente de IA, e **kb\ source**, que é a fonte da resposta.

<figure><img src="/doc-images/srjIrnqYZm0rsX04Ktts.png" alt=""><figcaption></figcaption></figure>Essas configurações permitem que você personalize como seu agente de IA interage com a base de conhecimento e apresenta informações ao usuário.

#### **Configura as configurações de IA:**&#x20;

Você também pode ver uma opção para configuração **AI

** Modelos OpenAI:** Você pode escolher entre uma variedade de modelos de IA, dependendo de suas necessidades. Ao lado de cada modelo, você poderá visualizar seu consumo de **token**, o que ajuda você a gerenciar desempenho e custo.

Além disso, há uma opção para definir o contexto **System**, permitindo que você personalize como o modelo interpreta e responde à entrada do usuário. Isto pode ser configurado como mostrado na imagem abaixo. [Você pode ler sobre o contexto do sistema no final deste tutorial.](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base#advanced-context)

<figure><img src="/doc-images/vSjsgMpbSeVxwwHw2nGT.png" alt=""><figcaption></figcaption></figure>** Max Tokens**: Isto define o número total de fichas que deseja usar ao completar o seu 'prompt'.

**Temperatura**: Esta configuração influencia a variabilidade de suas respostas. Uma temperatura mais alta aumenta a variabilidade, enquanto uma temperatura mais baixa produz respostas mais exatas e focadas.

**Chunk**: Seu agente de IA seleciona dados “chunks” com a maior relevância para a questão/prompt. Cada bloco inclui informações específicas que o bot está usando para responder à pergunta do usuário.

<figure><img src="/doc-images/QbMOgLA8Nil5XhD74bkh.png" alt=""><figcaption></figcaption></figure>Em seguida, conecte os endpoints **green** e **red** a dois separado @[Reply Action](/docs/guia/ai-chatbots-and-automation/actions-explained/reply-action)s:

* O endpoint verde deve ser ligado a uma resposta KB. Isto irá mostrar a resposta gerada por IA quando o agente encontrar com sucesso uma resposta na Base de Conhecimento.
* Você também pode incluir o Código KB para compartilhar uma referência ou link, permitindo que os usuários leiam mais se estiverem interessados. Tenha em mente que isso consome mais tokens do que a recuperação regular do KB. A cota de Max-tokens será automaticamente ajustada para obter as citações, se necessário.
* O endpoint **red** deve se conectar a uma ação diferente de Resposta que lida com casos onde o agente de IA não conseguiu encontrar nenhuma informação relevante. Esta mensagem pode informar o usuário de que nenhuma resposta adequada foi encontrada.

Esta configuração garante uma experiência suave e informativa para respostas de consulta bem sucedidas e mal sucedidas, como ilustrado na imagem abaixo.

<figure><img src="/doc-images/IWAUf9bb2c4UxZPTTiRE.png" alt=""><figcaption></figcaption></figure>Testando o agente de IA<a href="#testing-the-ai-agent" id="testing-the-ai-agent"></a>Agora que carregamos nosso conteúdo no sistema e usamos um modelo de chatbot pronto para ir para ele, é hora de testar o agente de IA.

Como podem ver, o nosso agente de IA gerou uma mensagem de boas-vindas e respondeu com precisão à minha pergunta com base nas URLs do site que carreguei no sistema.

<figure><img src="/doc-images/5CD5JqodMotekzJ1p7nj.png" alt=""><figcaption></figcaption></figure>Esperamos que este tutorial o ajude a criar agentes de IA especificados.

Contexto avançado<a href="#advanced-context" id="advanced-context"></a>Sempre que você usa a ação Ask KB, nos bastidores, o OpenAI é invocado com um contexto específico do sistema criado automaticamente pelo ChatCase. Este contexto é uma mistura do contexto do sistema que você fornece (se existir) e um contexto oculto instruindo o OpenAI sobre como usar os blocos do Vector Database para criar a resposta final para seus usuários finais.

Com o recurso de contexto Avançado, você pode manipular diretamente o contexto oculto, melhorando a sintonia de suas respostas quando necessário. Tenha em mente que o contexto do sistema fornecido pelo ChatCase já está projetado para criar as melhores respostas possíveis. Mas às vezes isso não é suficiente para abordar todos os seus alvos, então esta característica vem realmente útil para superar os limites percebidos de avisos pré-engenharia ChatCase.

Outra coisa que você tem que ter em mente é que cada modelo (ou seja, gpt-40, gpt-4o-min, etc) tem seu próprio contexto pré-engenharia. Este é, por exemplo, o contexto do sistema que o ChatCase usa para o modelo GPT-4o.

contexto do sistema pré-engenharia gpt-4o usado pelo ChatCase Ask Knowledge Base Action:

```
you are an helpful assistant for question-answering tasks. Follow these steps carefully:
1. If the question was in English, answer in English. If it was in Italian, answer in Italian. If it was in French, answer in French. If it was in Spanish, answer in Spanish, and so on, regardless of the context language
2. Use ONLY the pieces of retrieved context delimited by #### to answer the question.
3. If the context does not contain sufficient information to generate an accurate and informative answer, return <NOANS>
####{context}####
Let's think step by step.
`$([Environment]::NewLine)
O contexto do sistema que você fornece na área de texto dedicada é anexado ao fim do contexto pré-engenharia.

Se, por exemplo, você fornecer seu próprio contexto de sistema especial:

<figure><img src="/doc-images/Mg5f3JUEJSazWzXwMiNG.png" alt=""><figcaption></figcaption></figure>O contexto final submetido ao OpenAI será algo como o seguinte:

```
you are an helpful assistant for question-answering tasks. Follow these steps carefully:
1. If the question was in English, answer in English. If it was in Italian, answer in Italian. If it was in French, answer in French. If it was in Spanish, answer in Spanish, and so on, regardless of the context language
2. Use ONLY the pieces of retrieved context delimited by #### to answer the question.
3. If the context does not contain sufficient information to generate an accurate and informative answer, return <NOANS>
####{context}####
Let's think step by step.
You are the online assistant of the "Assist Digital" Company. When someone asks you questions, answer as if you were part of the team. So for example if someone asks you "what services do you offer" you answer "we offer etc. etc.".
Manage these intents during the conversation:
- Demo Intent: when the user wants a demo. Example sentence: "I would like a demo" etc.
- Abandon Intent: if the user wants to abandon the conversation. Example sentence "delete" "let's forget it" "I changed my mind" etc.
If you decode one of these intents, answer with the name of the intent and do not use chunks from the knowledge base
`$([Environment]::NewLine)
Como você pode ver, adicionamos o contexto do sistema fornecido no final do contexto pré-engenharia, logo após “Vamos pensar passo a passo.”

Anatomia pré-engenharia do Contexto do Sistema

Quando você vai mudar para o contexto avançado ChatCase não usa mais o contexto pré-engenharia do sistema e espera que você forneça todo o novo contexto do sistema.

**IMPORTANTE**: Você deve sempre começar a partir de um contexto pré-engenharia porque ele tem uma anatomia que você deve cumprir e entender se você quer que o motor de automação para continuar trabalhando como esperado. Por exemplo, é realmente importante explicar no prompt quando responder como “nenhuma resposta neste contexto” respondendo com a tag NOANS, como explica a seguinte imagem:

<figure><img src="/doc-images/pK6iuQ5uMZsosglcAmaH.png" alt=""><figcaption></figcaption></figure>Você deve sempre fornecer a tag {context}, porque ela será dinamicamente substituída pelos blocos retornados pelo Vector Index DB.

**Contexto avançado

Depois de mudar para o modo de contexto Avançado, você será responsável por fornecer todo o contexto do sistema. Você pode começar a misturar os dois contextos usando o contexto acima como um exemplo inicial, como na seguinte imagem:

<figure><img src="/doc-images/apjBxMtVf3dNUtbjp8pK.png" alt=""><figcaption></figcaption></figure>Sinta-se livre para modificar o contexto enquanto preserva a anatomia. Seu próprio contexto será uma parte explícita e visível de todo o contexto do sistema. Com o contexto Avançado você tem controle sobre todo o contexto.

Para começar, [criar uma conta gratuita aqui](https://panel.chatcase.com/v3/dashboard/#/signup).

Se você tiver alguma dúvida, não hesite em entrar em contato-nos via[redacted@example.invalid](mailto:redacted@example.invalid).&#x20;

Para mais informações, visite [www.ChatCase.com](https://www.chatcase.com/).
