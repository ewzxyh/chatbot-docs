---
title: "Re-ranking"
description: "Re-ranking é uma segunda etapa de seleção mais inteligente aplicada após uma pesquisa inicial (por exemplo, busca por vetores, busca por palavras-chave, pesquisa híbrida)."
---

<figure><img src="/doc-images/b0QZ2wtZqRmxQBabUGQ3.png" alt=""><figcaption></figcaption></figure># # O que é re-ranking (explicação fácil)

Re-ranking é uma segunda etapa de seleção mais inteligente aplicada após uma pesquisa inicial (por exemplo, busca por vetores, busca por palavras-chave, pesquisa híbrida).

1. **Primeiro passo – Recuperação**\
O sistema recupera um * conjunto de resultados de candidatos* que são *provavelmente relevantes* para a pergunta do usuário\
(por exemplo, 20 blocos superiores de uma base de dados vetorial).
2. ** Segundo passo – Re-ranking**\
Um modelo mais preciso avalia cada candidato no contexto da consulta real do usuário e:
* atribui uma pontuação de relevância
* os tipos resultam de mais para menos relevantes
* opcionalmente descarta correspondências de baixa qualidade

Resumindo:

> **Retrieval encontra “respostas possíveis” → Re-ranking encontra as “melhores respostas.”**

# # Porque é necessário re-ranquear

A semelhança vetorial por si só é poderosa, mas tem limitações:

* Ele pode recuperar **semanticamente semelhante, mas contextualmente errado** pedaços
* Trata todos os candidatos como igualmente bons uma vez recuperados
* Nem sempre pode entender intenção, restrições ou prioridade

Re-ranking resolve isso comparando profundamente a questão do usuário com cada candidato, em vez de comparar apenas incorporações.

# # Como funciona a re-classificação

```
User Question
     ↓
Initial Retrieval (Vector / Hybrid Search)
     ↓
Top N Candidates (e.g. 20)
     ↓
Re-ranking Model
     ↓
Top K Best Chunks matches (e.g. 5)
     ↓
LLM Answer Generation
`$([Environment]::NewLine)
# # Que modelo de re-ranking avalia

Em ChatCase, o re-ranking é usado em **RAG pipelines** para melhorar a qualidade de resposta através de:

* Assistentes de apoio ao cliente
* Bases de conhecimento internas
* Pesquisa de documentos empresariais
* Fluxos de trabalho multiagentes

ChatCase permite a re- classificação a ser aplicada:

* Automaticamente em fluxos de RAG
* Como um passo configurável nos gasodutos de agentes
* Em implementações on-premise, híbridas ou em nuvem

# # Caso de utilização intuitiva

Cenário

Uma empresa usa o ChatCase para alimentar um assistente de suporte com:

* Manuais do produto
* Procedimentos internos
* Guias de resolução de problemas

** Pergunta do usuário:**

> “Como posso redefinir meu dispositivo se ele está preso durante a atualização do firmware?”

***

Sem reclassificar

A pesquisa vetorial recupera pedaços como:

1. Visão geral da atualização do Firmware
2. Reset dispositivo após teste de fábrica
3. Resolução de problemas do dispositivo – problemas de conexão
4. Histórico da versão do Firmware
5. Reiniciar o procedimento do dispositivo (correto)

O LLM vê contexto misto e pode:

* Resposta parcialmente
* Mencione passos irrelevantes
* Alucinar os detalhes faltando

***

Com o Re-ranking Activado

O modelo de re-ranking analisa cada pedaço **contra a pergunta exata** e produz:

1. Procedimento do dispositivo do reset (modo da recuperação do firmware)
2. Solução de problemas – cenários presos firmware
3. Visão geral da atualização do Firmware
4. Reinicie após o teste de fábrica
5. História da versão

Apenas o conteúdo superior e mais relevante é passado para a LLM.

Resultado para o Usuário

* Resposta mais precisa
* Passos corretos na primeira tentativa
* Menos confusão
* Resolução mais rápida

# # Benefícios para usuários e organizações

# # # # 1. Precisão de Resposta Mais Alta

A nova classificação reduz significativamente:

* Contexto irrelevante
* Respostas parciais
* Alucinações

2. Melhor Uso do Conhecimento Existente

Mesmo grandes ou barulhentos bases de conhecimento se tornam:

* Mais confiável
* Mais fácil de manter
* Mais escalável

3. Confiança de usuário melhorada

Usuários notam quando:

* As respostas são consistentes
* As instruções estão corretas
* O assistente “entende” intenção

Isto leva a:

* Maior adopção
* Regresso inferior ao apoio humano

4. Otimização de Custo e Desempenho

Enviando apenas os melhores blocos** para o LLM:

* Menos tokens são usados
* As respostas são mais rápidas
* Os custos são reduzidos

# # # # 5. Controle de Campo Enterprise

Em ChatCase, suportes de re- classificação:

* Implementações no local e conforme ao GDPR
* Integração com lógica de recuperação personalizada

# # # Como permitir o Re-ranking?

Vá para a seção Bases de Conhecimento e pressione + Novo botão Base de Conhecimento, em seguida, escolha a opção "Hybri search"

<figure><img src="/doc-images/Y8bxKCAbzwvax5phwnHR.png" alt=""><figcaption></figcaption></figure>Uma vez que a base de conhecimento é criada, você pode criar e conectar um Agente de IA diretamente a ele

<figure><img src="/doc-images/o2EHpuW2LZKdP6vjTbc0.png" alt=""><figcaption></figcaption></figure>No fluxo do AI Agent, você também pode decidir ativar/desativar a re-classificação para uma ação específica da base de conhecimento de pedido

<figure><img src="/doc-images/tyKXOb3TFw9xStJXDdnk.png" alt=""><figcaption></figcaption></figure># # # Quando você deve permitir a re-classificação?

A reclassificação é especialmente valiosa quando:

* Bases de conhecimento são grandes (centenas ou milhares de documentos)
* Os documentos são semelhantes uns aos outros
* Questões de precisão (dominios legais, técnicos, industriais)
* Os usuários fazem perguntas complexas ou multi-constraint

# # Re-ranking usa GPUs

Em ChatCase, o re-ranking é projetado para precisão empresarial em tempo real, o que o torna adequado principalmente para instalações GPU on-prem**.

Re-ranking depende de *cross-encoder* modelos que devem marcar muitos * (query, block)* pares em paralelo, uma carga de trabalho que é computacionalmente intensiva e sensível à latência. Executar este passo em CPUs introduz atrasos imprevisíveis.

Uma GPU on-prem permite que a ChatCase execute modelos de re-ranking localmente, com baixa latência estável, soberania de dados completa e desempenho previsível sob carga, tornando-se o único modelo de implantação que atende consistentemente aos SLAs empresariais e aos requisitos de conformidade.

Na nossa implantação da SAAS usamos extensivamente GPUs para pesquisa e re-ranking híbridos.

Modelos de nova classificação

Em nosso energing de produção nós realmente dependemos de cross-encoder local/ms-marco-MiniLM-L-6-v2 por padrão (opcionalmente optando por algumas necessidades específicas no bge-reranker-v2-m3) &#x20;

Avaliar a IET também com BAAI/bge-reranker-larg.

Para Pinecone optamos por cohere-rerank-3.5, bge-rranker-v2-m3, pinecone-rrank-v0
