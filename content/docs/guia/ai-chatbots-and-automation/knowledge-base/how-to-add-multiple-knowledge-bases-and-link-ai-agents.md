---
title: "Como adicionar várias bases de conhecimento & link AI Agents"
description: " Organização: Separe diferentes tipos de conteúdo, como FAQs, documentação técnica e informações específicas do produto. AI Agent-Specific Knowledge: Assegure-se de que cada agente"
---

<figure><img src="/files/3ZIjvSnDJQyJAZTWhse9" alt=""><figcaption></figcaption></figure>Em ChatCase, você tem a flexibilidade para gerenciar várias Bases de Conhecimento (KBs) usando namespaces. Este recurso é incrivelmente útil para organizar diferentes conjuntos de informações e garantir que agentes de IA específicos tenham acesso aos dados relevantes. Este tutorial irá guiá-lo através do processo de criação e gerenciamento de vários namespaces para suas Bases de Conhecimento em ChatCase.

#### **Posição de múltiplos espaços de nomes#

* ** Organização**: Separe diferentes tipos de conteúdo, como FAQs, documentação técnica e informações específicas do produto.
* **AI Agent-Specific Knowledge**: Assegure-se de que cada agente de IA acesse apenas a base de conhecimento relevante, melhorando a precisão e eficiência das respostas.
* ** Escalabilidade**: Gerencie e escale facilmente suas Bases de Conhecimento à medida que seu conteúdo cresce.

Passo 1: Entre no ChatCase e navegue para a seção Fluxos<a href="#step-1-log-in-to-chatcase-and-navigate-to-the-bots-section" id="step-1-log-in-to-chatcase-and-navigate-to-the-bots-section"></a>1. Abra seu navegador da web e navegue para [ChatCase] (https://www.chatcase.com/).
2. [fazer login] (https://panel.chatcase.com/v3/dashboard/#/projects) com as suas credenciais.
3. No menu do lado esquerdo, clique na **Base de Conhecimento** com o ícone do cérebro.

Passo 2: Compreender o espaço de nomes padrão<a href="#step-2-understanding-the-default-namespace" id="step-2-understanding-the-default-namespace"></a>Na nova página, você verá a lista de bases de conhecimento do lado esquerdo. Por padrão, você tem uma base de conhecimento pronta para ser povoada, mas você pode adicionar mais.

<figure><img src="/files/H9WnH0lmfyPedbdPuVJH" alt=""><figcaption></figcaption></figure>Gerenciando várias bases de conhecimento<a href="#managing-multiple-knowledge-bases" id="managing-multiple-knowledge-bases"></a>####**1. Mudando o Nome da Base de Conhecimento (o**ptiona&#x6C;**)**

**Purpose**: Renomear o espaço de nomes padrão para refletir melhor seu conteúdo.\
** Como Mudar**:&#x20;

* Clique em “**Padrão**”.&#x20;
* Digite o nome desejado para sua Base de Conhecimento; ele será automaticamente salvo.

A adicionar uma nova base de conhecimento

**Purpose**: Criar espaços de nomes adicionais para diferentes conjuntos de conteúdo.\
** Como adicionar**:

* No menu do lado esquerdo, clique em "+ Nova Base de Conhecimento".
* Na janela pop-up, você tem a opção de escolher o tipo de base de conhecimento.
* Digite o nome da nova Base de Conhecimento e clique em Criar, como mostrado abaixo.

Nota, você pode construir um padrão ou [Hybrid search](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search) motor. [Você pode ler mais sobre isso aqui] (https://chatcase.com/blog/chatcase-hybrid-search-rag-architecture/).

<figure><img src="/files/OlwG0JiNnMd8zkVXzN9N" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/c2durWjK8mHczS7PC5hE" alt="" width="375"><figcaption></figcaption></figure>**3. Visualização e Mudança Entre Bases de Conhecimento **

**Purpose**: Navegue facilmente entre diferentes namespaces para gerenciar ou visualizar seu conteúdo.\
** Como alternar:**

* No menu à esquerda, sob suas bases de conhecimento, escolha a base de conhecimento desejada
* O conteúdo e a configuração do espaço de nomes selecionado serão exibidos
* Além disso, você pode ver qual agente de IA está conectado a esta Base de Conhecimento

<figure><img src="/files/tOmRpUccgi5lf3xf5YGP" alt=""><figcaption></figcaption></figure>Excluindo espaços de nomes<a href="#deleting-namespaces" id="deleting-namespaces"></a>Para esvaziar todo o espaço de nomes, basta clicar no botão Remover vermelho, como mostrado abaixo. &# x20;

Você também pode optar por remover o namespace completamente marcando a caixa "Também excluir a Base de Conhecimento".

<figure><img src="/files/A3l47B8vW3KDMdcXhlWR" alt=""><figcaption></figcaption></figure>**Atribuir agentes de IA às bases de conhecimento **

1\. Quando você selecionar um namespace específico, você verá qual Agente de IA está conectado a essa Base de Conhecimento em particular.

<figure><img src="/files/4kvq9oLWsLlk5BsXADx2" alt=""><figcaption></figcaption></figure>\
2\. Para atribuir um Agente de IA a uma base de conhecimento diferente:\
&# x20; \- Vá para a seção ** Fluxos**.\
&# x20; \- Selecione o Agente de IA que deseja configurar.\
&#x20; \- Nos fluxos de agentes, escolha o [Block](/docs/guia/ai-chatbots-and-automation/visual-builder-101/how-to-create-a-block) apropriado com a funcionalidade [Ask Knowledge Base](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base) contendo o espaço de nomes ligado.

<figure><img src="/files/EEfQl8Pp5hiHm06mT1zF" alt=""><figcaption></figcaption></figure>### ** Melhores práticas para usar vários espaços de nomes

\- **Categorizar por Tópico**: Criar espaços de nomes separados para diferentes tópicos ou departamentos para manter as informações organizadas.\
\- **Agent-Specific KBs**: Atribuir Bases de Conhecimento específicas a agentes de IA projetados para funções específicas, garantindo que eles tenham acesso às informações mais relevantes.\
\- ** Atualizações Regulares**: Atualizar e revisar regularmente cada espaço de nomes para garantir que as informações são atuais e você precisa.

Conclusão<a href="#conclusion" id="conclusion"></a>Usar vários namespaces para suas Bases de Conhecimento em ChatCase permite uma melhor organização, entrega de informações direcionadas e escalabilidade. Ao seguir este tutorial, você pode criar, gerenciar e utilizar de forma eficiente várias Bases de Conhecimento, melhorando o desempenho geral e a eficácia de seus Agentes de IA da ChatCase.

Enviar o seu feedback para[redacted@example.invalid](mailto:redacted@example.invalid) 👋
