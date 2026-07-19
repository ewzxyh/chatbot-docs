---
title: "Usando Botões em um fluxo de trabalho de IA para ativar a base de conhecimento"
description: "- Prepara o seu agente de IA.a href=\"id-1-set-up-your-chatbot-flows\" id=\"id-1-set-up-your-chatbot-flows\"/aCertifique-se de ter carregado uma Base de Conhecimento (URLs, arquivos de"
---

<figure><img src="/doc-images/KAXjxUzdcuudpqw0cmYH.png" alt=""><figcaption></figcaption></figure>Neste tutorial, você aprenderá a usar botões em um fluxo de IA de tal forma que o texto do título do botão passa como valores para o próximo bloco a ser acionado. Vamos conseguir isso atribuindo o texto do botão como um valor correspondente ao seu título e uma chave que corresponde ao \`lastUserText\`atributo. Este atributo é então usado para desencadear uma pesquisa na base de conhecimento usando a ação [Ask Knowledge Base](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base) no bloco subsequente.

- Prepara o seu agente de IA.<a href="#id-1-set-up-your-chatbot-flows" id="id-1-set-up-your-chatbot-flows"></a>Certifique-se de ter carregado uma Base de Conhecimento (URLs, arquivos de texto, Mapa do Site) na seção [Base de Conhecimento](/docs/guia/ai-chatbots-and-automation/knowledge-base/knowledge-base-overview).\
Desenhe o bloco inicial onde o usuário irá interagir com os botões. Cada botão representará uma consulta ou opção que desencadeará uma resposta específica. Você pode incluir esses botões em seu Bloco de Boas-vindas, onde você pode oferecer alguns exemplos de FAQ.

# # # # 2. Capture o texto do botão e Atribua ao último texto do usuário<a href="#id-2-capture-button-text-and-assign-to-lastusertext" id="id-2-capture-button-text-and-assign-to-lastusertext"></a>** Certifique-se de que cada botão está conectado a um bloco primeiro** escolhendo o tipo de botão: ** ir para bloco** >> escolher o respectivo bloco.

Em seguida, clique na seção ‘**Atributos**’ abaixo e insira a) o ‘**lastUserText**’ como o **Key** e b) o título do botão** como o **Value**. Desta forma, o Agente IA captura o texto do botão e atribui-o ao \`**lastUserText**\`atributo.

<figure><img src="/doc-images/YjXIK6RWS39CLrG6jkSR.png" alt=""><figcaption></figcaption></figure>3. Configure o bloco de busca da base de conhecimento<a href="#id-3-configure-the-knowledge-base-lookup-block" id="id-3-configure-the-knowledge-base-lookup-block"></a>Criar um novo bloco que irá lidar com a pesquisa base de conhecimento com base no \`lastUserText\`valor. Use a ação [Ask Knowledge Base](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base) para consultar a base de conhecimento. Em seguida, adicione a resposta de texto com o clássico 'kb\ reply' que permitirá ao agente carimbar a resposta.

<figure><img src="/doc-images/slvUDN2T6PFdX8Q2i6Qb.png" alt=""><figcaption></figcaption></figure># # # # 4. Teste o fluxo do agente de IA<a href="#id-4-test-the-chatbot-flow" id="id-4-test-the-chatbot-flow"></a>Teste o fluxo completo interagindo com os botões (/ai-chatbots-and-automation/actions-explicated/reply-action#buttons) e garantindo que a pesquisa e a resposta adequada da base de conhecimento é desencadeada.

Resumo<a href="#summary" id="summary"></a>Ao seguir este tutorial, você criou com sucesso um fluxo do AI Agent onde as interações de botões disparam específicos [Blocks](/docs/guia/ai-chatbots-and-automation/visual-builder-101/how-to-create-a-block) com base no texto do título do botão. Este texto é passado através do \`lastUserText\`atributo e é utilizado para consultar uma base de conhecimento, fornecendo aos usuários informações relevantes baseadas em suas seleções. Esta abordagem aumenta a interação do usuário, fornecendo respostas dinâmicas e contextualmente relevantes.

<figure><img src="/doc-images/DCp3kBqbsWmbEi3CKdEU.png" alt=""><figcaption></figcaption></figure>Não hesite em entrar em contato e compartilhar seu feedback conosco em[redacted@example.invalid](mailto:redacted@example.invalid) 🧡
