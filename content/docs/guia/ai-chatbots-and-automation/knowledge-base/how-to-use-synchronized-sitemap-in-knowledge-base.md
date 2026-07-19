---
title: "Como usar o Mapa do Site Sincronizado na Base de Conhecimento"
description: "O recurso Synchronized Sitemap permite que você importe e mantenha automaticamente um sitemap inteiro em sua Base de Conhecimento do ChatCase. Uma vez configurados, todos os URLs d"
---

O recurso **Synchronized Sitemap** permite que você importe e mantenha automaticamente um sitemap inteiro em sua Base de Conhecimento do ChatCase. Uma vez configurados, todos os URLs do mapa do site são continuamente sincronizados e atualizados com base na taxa de atualização que você define, garantindo que sua base de conhecimento sempre reflete o conteúdo mais recente do seu site.

<figure><img src="/doc-images/Z0JiuTJ1s0BK5s8tsPsH.png" alt=""><figcaption></figcaption></figure>Este recurso é ideal para manter documentação atualizada, centros de ajuda, blogs ou qualquer conteúdo do site que muda regularmente, sem intervenção manual.

Características chave

** Sincronização Automática

* Atualizações contínuas: URLs são atualizadas automaticamente com base em sua taxa de atualização configurada
* Nova detecção de URL: Novas páginas adicionadas ao seu sitemap são automaticamente importadas para a Base de Conhecimento
* Limpeza automática: URLs removidas do mapa do seu site são automaticamente excluídas da Base de Conhecimento

** Configuração Unificada**

* Configurações herdadas: Todos os URLs herdam a mesma configuração que o sitemap pai
* Processamento consistente: [ tags HTML](#html-tags-configuração) e [ tags RAG](#rag-tags-configuração) as configurações se aplicam uniformemente a todas as URLs
* Gerenciamento centralizado: Configure uma vez no nível do mapa do site, aplique a todas as URLs

Como funciona

1. Importação inicial: ChatCase obtém todos os URLs do mapa do site e importa-os para a Base de Conhecimento
2. Monitoramento contínuo: Com base na taxa de atualização, ChatCase periodicamente verifica o mapa do site para mudanças
3. Atualizações automáticas:

Os URLs existentes são re- rastreados e atualizados com conteúdo novo

&# x20; □ Novas URLs são adicionadas automaticamente à Base de Conhecimento

Os URLs removidos são automaticamente excluídos da Base de Conhecimento

4. &# x20; Herança: Todos os URLs mantêm as mesmas marcas HTML, marcas RAG e taxa de atualização como o mapa de site pai

<figure><img src="/doc-images/XrBGLHOBkhsNPzjHJfqI.png" alt=""><figcaption></figcaption></figure>A ver URLs sincronizadas

Uma vez importado, você pode:

* Ver todas as URLs do mapa do site na lista de Base de Conhecimento
* Veja a última data e status de sincronização para cada URL
* Verifique o conteúdo individual da URL e metadados

<figure><img src="/doc-images/WK2S8frt8tCXC5LlPRLU.png" alt=""><figcaption></figcaption></figure>

<br>

<figure><img src="/doc-images/uv6NigknMEvWEr5CCAgy.png" alt=""><figcaption></figcaption></figure>Configuração de etiquetas HTML

Especifique quais elementos HTML incluir ou excluir durante a extração de conteúdo. Páginas são ** completamente renderizadas e executadas em uma instância Chromium sem cabeça** antes da extração de texto, garantindo que o conteúdo renderizado por JavaScript seja capturado corretamente.

# # # Extrair etiquetas #

Defina as tags HTML a partir das quais o conteúdo será extraído. **`<body>`** é incluído por padrão e cobre todo o corpo da página.

Você pode substituí-lo ou extendê-lo com tags mais específicas para reduzir o conteúdo extraído:

*`article`— conteúdo do artigo principal
*`main`— conteúdo das páginas principais
*`div.content`— uma divisão específica da classe "conteúdo"

> **Dica: ** Usar etiquetas mais específicas em vez de`<body>`melhora a qualidade da resposta de IA reduzindo o ruído de seções de páginas não relacionadas.

Etiquetas indesejadas

Defina tags HTML que devem ser **excluídas** da extração, mesmo que elas estejam dentro de uma etiqueta de extração:

**Exemplos:**

```
nav, footer, aside, header, script, style
`$([Environment]::NewLine)
Nomes de classe indesejados

Excluir elementos pelo seu nome de classe **CSS, independentemente do tipo de tag. Útil para remover componentes de UI recorrentes, como banners, barras laterais ou avisos de cookies:

**Exemplos:**

```
sidebar, comments, cookie-banner, related-posts, advertisement
`$([Environment]::NewLine)
Configuração das etiquetas do RAG

Adicione tags de metadados para melhorar a recuperação e relevância de IA.

O que são etiquetas?

Tags RAG são rótulos que você pode atribuir a um ou mais conteúdos em sua Base de Conhecimento para **filtro que conteúdo a IA usa ao responder perguntas**.

Quando um usuário faz uma pergunta, a IA pesquisa **apenas entre os conteúdos que correspondem à tag especificada**, ignorando todos os outros.

** Exemplo:** Suponha que você tenha uma base de conhecimento onde:

* Alguns conteúdos são importados manualmente e marcados como`approved`* Outros conteúdos são gerados automaticamente (por exemplo, via auto-aprendizagem) e têm **no tag**

Quando você executa uma pergunta usando a etiqueta`approved`, a IA irá ** apenas recuperar respostas de conteúdos marcados`approved`** — os desmarcados serão completamente ignorados.

Isto é especialmente útil quando você quer:

* Separar ** conteúdo verificado** de conteúdo gerado automaticamente ou rascunho
* Servir ** audiências diferentes** com diferentes subconjuntos de sua base de conhecimento
* Certifique-se que o Agente de IA apenas responde usando ** fontes confiáveis ou curadoria**

Exemplos de etiquetas

*`approved`
* `product-documentation`
* `pricing-information`
* `technical-support`
* `getting-started`
