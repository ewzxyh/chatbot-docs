---
title: "Administração da Base de Conhecimento"
description: "Ele é alimentado por uma arquitetura Native RAG (Retrieval Aumented Generation), combinando as capacidades de grandes modelos de linguagem com o conteúdo da sua empresa para fornec"
---

<figure><img src="/doc-images/HNXRsZVTEuWtSl51UTVX.png" alt=""><figcaption></figcaption></figure>O ChatCase oferece um poderoso módulo ** Information Retrieval** – o *Knowledge Base* – construído para fornecer respostas você precisa e conscientes do contexto** com base no conhecimento de sua organização.

Ele é alimentado por uma arquitetura **Native RAG** (Retrieval Aumented Generation), combinando as capacidades de grandes modelos de linguagem com o conteúdo da sua empresa para fornecer respostas relevantes e contextuais.

Com uma interface de gerenciamento **no-code**, você pode adicionar, atualizar e organizar suas fontes de conhecimento diretamente em ChatCase com zero-codificação.

Tecnologia

Quando um assistente de IA precisa responder a uma pergunta, ele usa o mecanismo de busca de ChatCase [**hybrid**](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search)**fulltext-semantic** para encontrar as informações mais relevantes:

* **Fulltext search**: encontra correspondências exatas de palavras e frases em seus documentos.
* **Semantic search**: compreende o significado por trás da pergunta, mesmo que palavras diferentes sejam usadas em comparação com os documentos.
* ** Modo híbrido**: combina ambas as abordagens para retornar resultados que são precisos e semanticamente relevantes.\
\&#xNAN;*(Para mais detalhes, consulte nosso* [*Hybrid search*](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) *&* [*Tilelesk Hybrid Search RAG Architecture*](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) *artigos.

A IA então gera uma resposta usando este conteúdo, garantindo que seja consistente com as informações da sua empresa e usando por padrão a mesma linguagem que o usuário adotou para a pergunta.

Para usar efetivamente a base de conhecimento em suas automações, você deve usar o bloco Ask Knowledge Base Action em seus fluxos de IA.

Para mais detalhes, consulte o artigo [Como funciona a Base de Conhecimento](/docs/guia/ai-chatbots-and-automation/knowledge-base/how-does-the-knowledge-base-work).

Criar uma nova base de conhecimento

Com ChatCase você pode criar [multiple Knowledge Bases](/docs/guia/ai-chatbots-and-automation/knowledge-base/how-to-add-multiple-knowledge-bases-and-link-ai-agents) em seu projeto. Isto é útil em muitos casos:

1. Se você precisa criar assistentes de IA respondendo em diferentes domínios, como diferentes produtos, diferentes departamentos de suporte (por exemplo, Suporte e Vendas) etc.
2. Se você quiser criar uma cadeia de Base de Conhecimento. Por exemplo, primeiro pergunte ao Website, no site backback pergunte aos PDFs oficiais da documentação e no backback pergunte finalmente à base de conhecimentos de auto-aprendizagem.
3. Outros cenários que virão à mente no futuro : )

Você pode criar dois tipos de Bases de Conhecimento com diferentes tipos de indexação/pesquisa, tudo gerenciado através da interface ChatCase.

Selecione o ícone □ no menu do lado esquerdo, você será redirecionado no **Padrão** Base de conhecimento que o ChatCase cria automaticamente para você em seus projetos. Se você quiser um novo, você pode pressionar o botão Nova Base de Conhecimento à esquerda.

<figure><img src="/doc-images/QgXwmwZ0iNaA996HBDfl.png" alt=""><figcaption></figcaption></figure>

<mark style="color:$warning;">**Nota: Você não pode excluir a base de conhecimento padrão nem alterar seu tipo, que só suporta pesquisa semântica**</mark> <mark style="color:$warning;"></mark><mark style="color:$warning;">(Padrão, veja mais tarde)</mark># # # Escolha o tipo de base de conhecimento

Antes de criar uma nova base de conhecimento, você deve fornecer o nome e escolher o seu tipo preferido

<figure><img src="/doc-images/hH468yyUpTzXfe2jxK8X.png" alt=""><figcaption></figcaption></figure>Padrão ou híbrido?

A principal diferença entre os dois é a seguinte:

**Standard** é alimentado por um clássico *Semântico* indexação vetorial. Isso significa que a recuperação de informações é feita usando a semântica das frases e blocos, não palavras-chave específicas. Ele funciona muito bem na maioria dos casos, mas não se encaixa muito bem quando você lida com palavras incomuns, como acrônimos, códigos alfanuméricos, nomes, etc.

[**Hybrid**](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) mistura resultados provenientes de uma abordagem semântica misturada com um texto completo. Para o resultado final também é aplicado um algoritmo de re-ranking que melhora os resultados da consulta. Este é um motor de consulta mais poderoso que fornece mais flexibilidade, potência e precisão em seus resultados.

# # # Popula com o seu conteúdo

Adicionar uma nova fonte

Clique em **+ Adicionar** e escolher o tipo de conteúdo a importar:

<figure><img src="/doc-images/2MDyYVrJXTPiCsk2jf9T.png" alt=""><figcaption></figcaption></figure>**URLs**: digite o endereço de uma ou mais páginas web (uma em cada linha) para indexar.

<figure><img src="/doc-images/8b1K8ji0JrjfTQ3kUqoz.png" alt=""><figcaption></figcaption></figure>Com opções avançadas, você pode ajustar quais partes da página web devem ser indexadas, garantindo que seu agente de IA treine no conteúdo mais relevante. &#x20;

Você pode ler mais sobre [Opções avançadas](/docs/guia/ai-chatbots-and-automation/knowledge-base/indexing-urls-in-chatcases-knowledge-base-with-advanced-options) aqui.

** Sitemap**: upload do URL de um sitemap XML para importar todas as suas páginas. É muito semelhante ao importador de URLs, exceto que o primeiro passo extrai todas as URLs contidas no mapa do site que você forneceu como URL.<br>**Perguntas e Respostas**: crie manualmente cartões de Q\&A para respostas rápidas e específicas. Você também pode importar seus Q\ & As usando um arquivo CSV<br>

<figure><img src="/doc-images/QVvOTswx7wGiy1h3YjXi.png" alt="" width="563"><figcaption></figcaption></figure>**PDF ou DOCX documentos**: arquivos de upload contendo guias, manuais, folhas técnicas, ou outro conteúdo de texto.<br>

<figure><img src="/doc-images/PjrIPvF009nNPXYY2D0q.png" alt="" width="375"><figcaption></figcaption></figure>## # Configure sua base de conhecimento

Você pode configurar e testar sua Base de Conhecimento diretamente da área de administração usando os botões *Configurar barra de ferramentas* como na figura a seguir

<figure><img src="/doc-images/YGiMlvCLdC7nTkYgsJS7.png" alt=""><figcaption></figcaption></figure>Quando você pressiona o botão *Preview*, um popup de teste permite que você configure a pergunta do usuário e veja como a resposta da base de conhecimento baseada em seu conteúdo

<figure><img src="/doc-images/NV9NqI5zRtyiDtjWkQeK.png" alt=""><figcaption></figcaption></figure>Você pode fornecer sua pergunta em qualquer idioma, a base de conhecimento irá responder em conformidade

<figure><img src="/doc-images/bfyGE2UkqiRkxRvGvoLE.png" alt=""><figcaption></figcaption></figure>Como você pode ver, você pode inspecionar as informações da resposta, como o **atraso** e **consumo de token**, e você pode inspecionar os **pedaços retornados** e **fontes,** também.

Você pode experimentar a configuração de IA enquanto estiver no modo teste. Clique na engrenagem superior direita do pop-up de visualização e você verá a janela de configuração. Aqui você pode jogar com todas as opções, desde a seleção de modelos LLM até o contexto do sistema, etc.

<figure><img src="/doc-images/jOmyPy35y2g4GNetiv1A.png" alt=""><figcaption></figcaption></figure>Configuração da Base de Conhecimento

Pressionando a engrenagem na barra de ferramentas *Configure,* você pode definir a configuração geral da base de conhecimento.

<figure><img src="/doc-images/riazQkFsRTHqnjsxBa6M.png" alt=""><figcaption></figcaption></figure>A janela de configuração tem muitas opções:

1. Modelo AI LLM
2. Max tokens
3. Temperature
4. Limite de Chunk
5. Contexto do sistema
6. Obter fontes de conteúdo
7. Modo híbrido (apenas disponível para [Hybrid](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) Bases de Conhecimento)
8. Re-ranking (apenas disponível para [Hybrid](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) Bases de Conhecimento)

Você pode ler mais detalhes sobre cada opção aqui: [Base de Conhecimento Avançada: AI Settings](/docs/guia/ai-chatbots-and-automation/knowledge-base/advanced-knowledge-base-ai-settings)

Aproveitem a construção de agentes de IA!
