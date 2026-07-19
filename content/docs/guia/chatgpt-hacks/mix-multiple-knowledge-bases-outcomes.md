---
title: "Misture múltiplos resultados de Bases de Conhecimento"
description: "Às vezes, uma única base de conhecimento não é suficiente. Alguns exemplos:"
---

Às vezes, uma única base de conhecimento não é suficiente. Alguns exemplos:

1. Você indexou seus PDFs ou seu site, mas você quer adicionar mais conhecimento ar runtime, sem modificar ou adicionar mais pdfs, modificar páginas originais do site etc.
2. Você dividiu sua base de conhecimento em mais KBs para manutenção fácil, mas você quer consultar todos os KBs de uma só vez para descobrir a melhor resposta de todos eles
3. Você enviou seu conteúdo original, mas você quer corrigir alguma resposta, melhorando a qualidade da resposta, sem tocar no conteúdo original (pdfs, documentos, páginas do site etc.)

Há muitas maneiras de alcançar os objetivos anteriores. Mas, em primeiro lugar, você aproveitará a capacidade de ChatCase para **mixar várias Bases de Conhecimento no mesmo fluxo de chatbot**.

Como misturar muitos KBs para fornecer as melhores respostas? Usem engenharia rápida! No artigo seguinte, queremos mostrar-lhe uma maneira elegante de alcançar os seus objetivos de mistura "KBs" usando prompts com o ChatCase Design Studio.

Em ChatCase temos nossa Central de Ajuda (<https://gethelp.chatcase.com/>) que indexamos para cunssulting ao vivo através do nosso chatbot na nossa página inicial:

<figure><img src="/files/emm38H54SDKA7kAkVdxh" alt=""><figcaption></figcaption></figure>Pode perguntar tudo o que encontrar na Central de Ajuda ao nosso chatbot. O nosso motor RAG fornecer-lhe-á a melhor resposta disponível usando a ação Base de Conhecimento preenchida usando o mapa do site ChatCase ("<https://gethelp.chatcase.com/sitemap.xml>" carregado com o recurso "sitemap" do KB).

O que acontece quando queremos adicionar algum conteúdo adicional em nossa Central de Ajuda, mas sem modificá-lo ou atualizá-lo?

Você pode simplesmente adicionar outra ação Base de Conhecimento no fluxo. No novo você pode adicionar mais FAQs, corrigindo alguma resposta adicionando mais informações e/ou usando algum conteúdo externo que você não quer adicionar à sua Central de Ajuda online (por exemplo, por causa de políticas de SEO) etc. Como pode consultar todos os seus KBs ao mesmo tempo recebendo uma resposta simples, única e abrangente que misture o melhor de todos os seus KBs? Use um super prompt!

Suponhamos que queremos que nosso chatbot também responda a algumas perguntas de engenharia rápida, apesar do fato de que este curso não está disponível em nossa Central de Ajuda. Podemos adicionar todo o conteúdo do curso em um KB específico criado para o pourpose.

<figure><img src="/files/XHwLBb31eZ8HzY4vXYju" alt=""><figcaption></figcaption></figure>Bem, agora queremos obter respostas de ambos os nossos KBs, ChatCase Help Center e curso de engenharia Prompt. Passe para o nosso designer. Coloque em corrente os dois KBs como na imagem seguinte.

<figure><img src="/files/MmnlLSUYvi56IMLwCvni" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/qX4QJTEbBTUa1dF7YRn5" alt=""><figcaption></figcaption></figure>Não há necessidade de conectar os fluxos de sucesso e outros. Quando nenhum conector é definido as Ações são executadas, os atributos povoados (kb1 e kb2) e o fluxo continua para cima → para baixo. Quando um conector é encontrado ele será automaticamente seguido.

Durante o atributo fluxo kb1 será cumprida com a resposta eventualmente vindo da primeira consulta KB (chatcase), e kb2 com a resposta do segundo (prompt curso de engenharia). Neste ponto temos 2 atributos disponíveis, eventualmente povoados com algum conteúdo (dependendo da pergunta do usuário feita durante o fluxo runinng).

Aqui é onde a magin acontece. Criar um novo bloco com a tarefa GPT, com o seguinte prompt, que irá misturar ambas as respostas, gerando as melhores respostas misturando os atributos kb1 e kb2:

<figure><img src="/files/0AMj42aYRHvqC2RDxFgs" alt=""><figcaption></figcaption></figure>Este é todo o fluxo:

<figure><img src="/files/tejzpBGYQy8fvfRTsY1p" alt=""><figcaption></figcaption></figure>Como é que funciona? Basta perguntar algo direcionado para a primeira ou segunda base de conhecimento, e o prompt fará a magia de misturar o conteúdo togheter. Eu pedi algumas informações sobre a engenharia Prompt e o chatbot recebeu corretamente a resposta do segundo KB (curso de engenharia prompt)

<figure><img src="/files/slWa2y18pxxMYZ2BWBxI" alt=""><figcaption></figcaption></figure>Então eu perguntei algo sobre ChatCase, e a base de conhecimento "chatcase" respondeu de acordo:

<figure><img src="/files/9x3tpRYIy5Lnjzd9GRg4" alt=""><figcaption></figcaption></figure>Nós também introduzimos um erro de digitação, só para mostrar o quão grandes são LLMs : )

Este é o prompt que usamos:

```
Generate an answer to the user's question using the text contained between << >>
<<
{ {kb1} }
{ {kb2} }
>>
user's question:
`$([Environment]::NewLine)
Você também pode usar este método para misturar o conteúdo que quiser. Você pode, por exemplo, misturar conteúdos provenientes de múltiplos [OpenAI Assistants](/docs/guia/ai-chatbots-and-automation/actions-explained/chatgpt-assistant-beta) ou misturar Ações Ask KB com Assistentes OpenAI e quaisquer novas ações de conteúdo virão no futuro!

Este Chatbot está disponível para bifurcar na comunidade!<https://chatcase.com/community/search/getchatbotinfo/chatbotId/66e55d1feb7e950013c54d48-Mixing-Knowledge-Bases>Escrever para[redacted@example.invalid](mailto:redacted@example.invalid)para mais informações. Feliz ChatCase!
