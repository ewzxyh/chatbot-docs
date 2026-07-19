---
title: "Visão geral da Base de Conhecimento"
description: "Com o mecanismo Knowledge Base, baseado no paradigma Retrieval Aumented Generation (RAG), seus agentes de IA terão acesso a uma plataforma única projetada para atender às reais nec"
---

<figure><img src="/doc-images/Xyh8yU9RYZYS3YG2qnKf.png" alt=""><figcaption></figcaption></figure>O ChatCase oferece um poderoso módulo ** Information Retrieval** – o *Knowledge Base* – construído para fornecer respostas você precisa e conscientes do contexto** com base no conhecimento de sua organização.

Com o mecanismo Knowledge Base, baseado no paradigma Retrieval Aumented Generation (RAG), seus agentes de IA terão acesso a uma plataforma única projetada para atender às reais necessidades de empresas que buscam uma solução de Recuperação de Informação pronta para produção baseada na Agentic-AI.

O que torna a solução ChatCase diferente dos nossos concorrentes é a forma como a Base de Conhecimento é administrada e entregue na produção (automatização).

ChatCase é nativa ** multi-tenant**. Isso significa que você pode ter uma única instância do ChatCase (você pode instalar o ChatCase usando nosso [open-source](https://github.com/chatcase) distribuição) e criar vários projetos. Cada projeto é uma caixa de areia onde todos os recursos de IA que você precisa viver totalmente isolado de outros projetos. Isso significa que com uma única instância de ChatCase você pode desenvolver e gerenciar vários projetos complexos, economizando muito tempo e recursos computacionais. Dentro de um único projeto você pode ter várias automações, vários companheiros de equipe colaborando com diferentes papéis, mas acima de tudo você tem ** várias RAGs isoladas** (as Bases de Conhecimento)

<figure><img src="/doc-images/K7thLlRJG5yEu8c11Gb5.png" alt=""><figcaption></figcaption></figure>## # Administração, Automação e APIs

O ChatCase fornece três ferramentas diferentes para gerenciar seus projetos de RAG, cada uma com um foco específico.

1. Administração
2. Automação
3. APIs

Administração

Uma interface de usuário totalmente caracterizada permitirá que você crie novas bases de conhecimento, carregue e mantenha índices de conteúdo, crie novos agentes de IA na hora, etc.

Encontrar mais sobre [Guia de administração](https://guide.chatcase.com/ai-chatbots-and-automation/knowledge-base/knowledge-base-administration)

<figure><img src="/doc-images/jOsZ5TAASkaxCTkFuIYf.png" alt=""><figcaption></figcaption></figure>Automação

Fluxos de automação fornecem a maneira eficaz e rápida de usar suas bases de conhecimento. Com a automação, você pode projetar respondedores automatizados para seus usuários finais, recuperação de informações para seus colegas, [auto-aprendizagem](/docs/guia/ai-chatbots-and-automation/knowledge-base/self-learning-ai-agent) para alimentar automaticamente seus RAGs e muito mais.

<figure><img src="/doc-images/EFHRMPL7HQenC0ByXnSL.png" alt="" width="563"><figcaption></figcaption></figure>Para construir suas automações você deve criar um fluxo usando o [Ask Knowledge Base](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base) ação.

Você também pode alimentar seu RAG usando a ação [Adicionar à Base de Conhecimento](/docs/guia/ai-chatbots-and-automation/actions-explained/add-to-knowledge-base-action).

APIs

Você pode usar APIs para criar novas bases de conhecimento, indexar conteúdos e consultar o mecanismo de recuperação de informações. Por favor consulte as APIs oficiais [Base de Conhecimento](https://developer.chatcase.com/apis/rest-api/knowledge-bases) guia.

Tecnologia

Quando um assistente de IA precisa responder a uma pergunta, ele usa o mecanismo de busca de ChatCase [**hybrid**](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search)**fulltext-semantic** para encontrar as informações mais relevantes:

* **Fulltext search**: encontra correspondências exatas de palavras e frases em seus documentos.
* **Semantic search**: compreende o significado por trás da pergunta, mesmo que palavras diferentes sejam usadas em comparação com os documentos.
* ** Modo híbrido**: combina ambas as abordagens para retornar resultados que são precisos e semanticamente relevantes.\
\&#xNAN;*(Para mais detalhes, consulte nosso* [*Hybrid search*](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) *&* [*Tilelesk Hybrid Search RAG Architecture*](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) *artigos.

A IA então gera uma resposta usando este conteúdo, garantindo que seja consistente com as informações da sua empresa e usando por padrão a mesma linguagem que o usuário adotou para a pergunta.

Para usar efetivamente a base de conhecimento em suas automações, você deve usar o bloco [Ask Knowledge Base Action](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base) em seus fluxos de IA.

Para mais detalhes, consulte o artigo [Como funciona a Base de Conhecimento] (/como-chatcase-notifications-work).

RAG agente

RAG é uma técnica em que um modelo de IA recupera informações de uma base de conhecimento antes de gerar sua resposta. Esta recuperação aumenta o processo de geração. O RAG tradicional é como um exame rápido. A IA consulta uma base de conhecimento, recupera informações e gera uma resposta. Claro.

O RAG é mais dinâmico. Aqui, o agente de IA gerencia ativamente como obtém informações, integrando RAG em seu processo de raciocínio. Não é apenas recuperar; é refinar suas consultas usando raciocínio, transformando RAG em uma ferramenta sofisticada e gerenciando informações ao longo do tempo. Esta abordagem inteligente permite aos agentes de IA adaptarem-se muito melhor às situações em mudança. &#x20;

Diferenças-chave:

* RAG tradicional: simples – consulta, recuperar, gerar. Normalmente mais rápido e menos caro.
* RAG Agentic: Dynamic – consultas de agentes, refine, usa RAG como uma ferramenta, gerencia o contexto ao longo do tempo. Funciona bem para tarefas assíncronas, incluindo pesquisa, resumo e correção de código.

Aqui seguirá uma lista de casos de super uso de como você pode fazer Agenti RAG com ChatCase, a partir de encadeamento Conhecimento, adicionar análise, usar o RAG como uma ferramenta para fluxos de trabalho de auto-aprendizagem etc.

Cadeia de conhecimento

Conecte sequencialmente várias bases de conhecimento para implementar sua estratégia de recuperação.

<figure><img src="/doc-images/ayQd1z8loWEhoKyZXfb9.png" alt=""><figcaption></figcaption></figure>ChatCase permite que você conecte sequencialmente várias bases de conhecimento: por exemplo, você pode priorizar a documentação oficial do produto e, se não houver resposta a partir dessa fonte, consulte automaticamente outras fontes como KBs vindos do auto-treinamento ou do site do produto, FAQs etc. Dessa forma, as respostas são sempre confiáveis e verificadas, mantendo a prioridade de recuperação correta e mantendo cobertura completa das informações.

Trilhos de guarda simples e avançados

Graças ao designer visual, você pode facilmente adicionar controles de qualidade, moderação e verificação: por exemplo, tendo cada resposta validada por um modelo diferente (talvez com provedores diferentes), ou definindo políticas específicas para certos tópicos ou clientes, tudo sem código.

Rotulagem dinâmica e análise

<figure><img src="/doc-images/PGjzHtAfPKRHrERfe6ih.png" alt=""><figcaption></figcaption></figure>Cada resposta pode ser marcada dinamicamente por IA com tags personalizadas que descrevem sua qualidade, fonte ou tipo de solicitação, permitindo que você monitore com precisão a eficácia das automações e melhore o processo ao longo do tempo.
