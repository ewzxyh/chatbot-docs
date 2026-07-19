---
title: "# # **Runtime Service:"
description: "Como funciona a Base de Conhecimento"
---

Como funciona a Base de Conhecimento

<figure><img src="/files/ltFTPzSHpehNf4OBBFN9" alt=""><figcaption></figcaption></figure>## # A explicação do conceito RAG

O modo **Standard** da base de conhecimento de ChatCase funciona seguindo a arquitetura RAG, com recuperação vetorial *semantic* em seu núcleo. Este paradigma de RAG tornou-se o quadro técnico principal para permitir que grandes modelos acessem aos conhecimentos externos mais recentes. Esta tecnologia foi implementada em uma variedade de cenários de aplicação.

Os desenvolvedores podem usar esta tecnologia para construir o serviço ao cliente alimentado por IA, bases de conhecimento empresarial, motores de busca de IA e muito mais a baixo custo. Usando a entrada de linguagem natural para interagir com várias formas de organização do conhecimento, eles podem criar sistemas inteligentes. Tomemos como exemplo um pedido de RAG representativo:

Nossa RAG (a Base de Conhecimento) tem dois serviços únicos que fazem com que funcione:

1. Um **parser** - acionado ao carregar um documento KB.
2. Um **retriever** - acionado quando seu usuário faz uma pergunta que atinge o KB.

Passo a passo<a href="#step-by-step" id="step-by-step"></a>Você envia um documento da Base de Conhecimento para o serviço do analisador:

<figure><img src="/files/8Pa9uJ7sMzlFRsf4Pqzk" alt=""><figcaption></figcaption></figure>1. O documento KB é carregado através de UI ou API do ChatCase.
2. **O documento KB é armazenado com segurança. É sempre removido no passo \[7]**
3. O serviço de Parser lê o documento KB do armazenamento e "chunks" o conteúdo usando diferentes técnicas (Nota: com as APIs de Upload do KB você pode ajustar o bloco, mas você não pode ditar quantos pedaços são analisados dentro de um documento).
4. Um modelo de incorporação é usado para converter cada pedaço em um vetor (também conhecido como “embedding”) que se parece com um vetor com componentes numéricos i'ts \[3.2, 2.13, ...] e representa seu “significante”.
5. Os programas de computador não ‘entendem’ a linguagem falada/escrita como os humanos podem. Precisa haver uma representação numérica das palavras para ajudar os programas a entender. Cada bloco de um documento KB é convertido em uma representação numérica (vector, aka “embedding”) do Significado por trás das palavras no bloco. Mais sobre por que isso é necessário na seção Retriever.\
\&#xNAN;*Nota*: Modelos de incorporação custam dinheiro para usar, geralmente por token. Quanto mais arquivos você enviar, mais você é cobrado para incorporar tokens.\
No ChatCase, não cobramos pelo processo de upload ou incorporação.
6. O vetor é colocado em um vetor db.
7. O documento original do KB é excluído do ChatCase

Você pode pensar neste vetor como um 'ponto' específico em "espaço". Todos esses pontos são algumas “distâncias” uns dos outros, e a distância entre dois desses pontos (vetores) é o quão semelhante no significado diferentes pedaços de texto são.

<figure><img src="/files/k4slyb6otSdClpne0EY6" alt=""><figcaption></figcaption></figure>A imagem vem deste [artigo online](https://blog.christianperone.com/2013/09/machine-learning-cosine-similarity-for-vector-space-models-part-iii/)

O usuário faz uma pergunta que atinge o KB através do serviço de recuperação:

<figure><img src="/files/yZqfpdEhAgzoaazf1mFU" alt=""><figcaption></figcaption></figure>

1. O serviço do retriever obtém a pergunta e transforma-a em um vetor.
2. O vetor de questão é pesquisado contra o vetorDB por uma pontuação de similaridade, retornando o número mais semelhante de pedaços (Chunk Limit define quantos pedaços) em ordem decrescente por pontuação de similaridade.
1. ** Pontuação de similaridade?**\
O escore de similaridade é determinado por algo chamado busca semântica. Isso vai além da correspondência de palavras-chave (suportada por ChatCase através da [Hybrid search](/docs/guia/ai-chatbots-and-automation/knowledge-base/hybrid-search)) e refere-se à similaridade contextual no significado entre palavras e frases. (ou seja, “O cão é um pesadelo para treinar”, e “O cachorro é teimoso e não ouve comandos” não compartilham palavras-chave. No entanto, eles têm alta similaridade semântica semanticamente.) Assim, a questão pode ser semanticamente comparada com os blocos de documentos KB que existem. Os vetores “mais próximos” à questão são aqueles com maior similaridade. O retriever retornará uma série de blocos (Chunk Limit in KB Settings) com base nesta proximidade vetorial.
2. **Chunk Limit?**\
Chunk Limit é a configuração KB que controla o número de blocos recuperados do vetor db e usados para sintetizar a resposta. Esta configuração visa proporcionar flexibilidade para aumentar a precisão das respostas de acordo com certos casos de uso.\
** Como o número de blocos recuperados afeta a precisão do KB?**\
Em teoria, quanto mais pedaços são recuperados, mais precisa é a resposta e mais fichas são consumidas. Na realidade, a "precisão" ligada aos blocos está fortemente associada com a forma como as fontes de dados KB são curadas.\
Se as fontes de dados KB são curadoras para que os tópicos sejam agrupados, isso deve ser mais do que suficiente para responder com precisão à pergunta. No entanto, se a informação estiver espalhadaoughout muitas fontes de dados KB diferentes, então provavelmente mais pedaços de tamanho menor irá aumentar a precisão da resposta.\
Você pode controlar o tamanho máximo do bloco de suas fontes de dados com as APIs doc Upload/Replace KB, usando o parâmetro query: maxChunkSize.\
**Ultimamente, a fim de fornecer a melhor resposta KB 'precisão' ao otimizar o consumo de token, recomendamos limitar o número de fontes de dados e grupos de tópicos dentro dessas fontes de dados.**

# # # **Runtime Service:

1. Tomamos o:
1. Blocos retornados
2. Configurações da base de conhecimento entradas
3. Pergunta

... e peça à LLM para nos dar uma resposta.

Esta etapa é chamada de síntese de respostas**.

Os prompts internos que usamos para iterar ao longo do tempo, mas estão na linha de, “usando o histórico de conversação e instruções fornecidas pelo usuário, responder a questão de fornecimento de informações apenas encontradas na Base de Conhecimento.”

** Esta requisição LLM tem tokens de consulta e resposta que você está cobrando para**. Você pode ver estes totais de token em uma citação de resposta enquanto testa no modo Debug no ChatCase:

<figure><img src="/files/GAdNNAdLw0fvVb3dcmpz" alt=""><figcaption></figcaption></figure>Como seus dados são tratados e protegidos<a href="#how-your-data-is-treated-and-secured" id="how-your-data-is-treated-and-secured"></a>Na base de dados ChatCase Knowledge é processado através de várias etapas fundamentais para garantir a funcionalidade e segurança. Em primeiro lugar, uma incorporação de um pedaço de texto (semantic vector) é gerada enviando o conteúdo sobre HTTPS para um serviço OpenAI.

** Embora o OpenAI tenha acesso às informações durante esta fase, não armazena quaisquer dados**. De qualquer forma, tenha em mente que se você tiver políticas rigorosas sobre seus dados, existem soluções alternativas. Ver último parágrafo.

O vetor gerado é então armazenado em um banco de dados Pinecone, que garante a criptografia em repouso. O bloco de texto original está associado ao vetor semântico correspondente dentro do banco de dados Pinecone.

Quando um usuário envia uma consulta, ela também é enviada para OpenAI (sem armazenamento) para gerar um vetor semântico. Este vetor é usado para a busca de proximidade em Pinecone, utilizando a distância cossena alghoritm para encontrar os pedaços de correspondência mais relevantes.

Finalmente, os blocos que saem da pesquisa são mesclados e passados para OpenAI para gerar a resposta final. ** Este é outro passo importante onde seu conhecimento é usado para alimentar um serviço externo que de qualquer forma declara nunca usar seus dados**.

Em geral, ** em relação à segurança da informação original, os serviços de geração de vetores semânticos são baseados em nuvem para o serviço básico**.

### **Protecção de dados melhorada#

Para maior proteção de dados, se você quiser ficar na nuvem, é possível

1. Use os serviços do Microsoft Azure que implementam [OpenAI em máquinas dedicadas ao cliente](https://learn.microsoft.com/en-us/shows/azure-enablement/building-a-private-chatgpt-with-azure-openai) ou
2. Use uma instalação no local de toda a plataforma ChatCase. Esta última configuração pode alavancar software de código aberto como o Qdrant/LLAMA para incorporações e bases de dados vetoriais, garantindo que as informações permaneçam completamente isoladas dos serviços em nuvem.
