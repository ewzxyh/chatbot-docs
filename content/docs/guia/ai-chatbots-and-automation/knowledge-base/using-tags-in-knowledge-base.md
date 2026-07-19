---
title: "Usando Tags na Base de Conhecimento"
description: "Use tags para organizar e consultar conteúdos da base de conhecimento."
---

Este tutorial explica como usar tags na Base de Conhecimento e na ação [Ask Knowledge Base](/docs/guia/ai-chatbots-and-automation/actions-explained/ask-knowledge-base). O objetivo é controlar qual o conteúdo que o Agente de IA pode pesquisar ao responder a uma pergunta.

O que você terá no fim

No final desta configuração, o seu Agente de IA irá procurar apenas no conteúdo KB que corresponda à tag seleccionada, como`approved`.

<figure><img src="/files/E70c4i9vkyk1HM8Yk2UG" alt="" width="563"><figcaption></figcaption></figure># # O que esta característica faz

Tags são rótulos simples aplicados ao conteúdo da Base de Conhecimento. Você pode adicionar uma ou mais tags ao criar ou editar um item de conteúdo.

<figure><img src="/files/U9yNHXWEWAIKg6PDOW0z" alt=""><figcaption></figcaption></figure>Por favor, note: você tem que pressionar Enter após escrever a etiqueta.

Então, dentro da **Ask Knowledge Base** action in Design Studio, em AI Settings, você pode adicionar a mesma tag no campo **Tags**. Quando você faz isso, a pesquisa é executada apenas no conteúdo que corresponde a essa tag.

<figure><img src="/files/e5rlJ0b6DU1ji6zeKzjF" alt=""><figcaption></figcaption></figure>As tags podem ser aplicadas a diferentes tipos de conteúdo do Knowledge Base, incluindo URLs do site, [syncronized sitemaps](/docs/guia/ai-chatbots-and-automation/knowledge-base/how-to-use-synchronized-sitemap-in-knowledge-base), FAQs, texto simples e arquivos carregados em formatos suportados. Isso significa que você pode organizar e filtrar muitos tipos de conteúdo usando a mesma lógica de tag.

# # Quando usá-lo

Esta opção é útil quando você quer mais controle sobre o que o Agente de IA pode usar na produção.

* Use apenas conteúdo revisado com a tag`approved`* Excluir conteúdo auto-aprendedo até que um humano o reveja. (Leia mais sobre o módulo de auto-aprendizagem aqui: [Agente de IA auto-aprendizagem](/docs/guia/ai-chatbots-and-automation/knowledge-base/self-learning-ai-agent)
* Conteúdo separado por idioma, equipe ou caso de uso
* Criar diferentes experiências filtradas para diferentes agentes de IA

Fluxo de trabalho de aprovação típico

{% stepper %}
{% step %}# # Novo conteúdo criado

Novo conteúdo auto-aprendedo é criado sem a tag`approved`.
{% endstep %}

{% step %}Revisão humana

Um humano revisa o novo conteúdo.
{% endstep %}

{% step %}Marca se válida

Se o conteúdo for válido, o revisor adiciona a tag`approved`.
{% endstep %}

{% step %}### Configure a base de perguntas

A ação **Ask Knowledge Base** é configurada com a tag`approved`.
{% endstep %}

{% step %}AI usa conhecimento aprovado

O Agente de IA usa apenas conhecimento aprovado.
{% endstep %}
{% endstepper %}Como usá-lo

{% stepper %}
{% step %}Passo 1: Adicione uma tag a um conteúdo da Base de Conhecimento

Abra sua Base de Conhecimento e crie ou edite um item de conteúdo.

No formulário de conteúdo, adicione a tag que deseja usar, por exemplo`approved`, então salve o conteúdo.

Esta tag está agora anexada a esse item KB específico.

<figure><img src="/files/MEqXhT4Ti2B52yIynWlE" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}Passo 2: Abra a ação Perguntar Base de Conhecimento

No Design Studio, abra o fluxo onde seu agente de IA pesquisa na Base de Conhecimento.

Selecione a ação **Ask Knowledge Base**. Este é o passo que recupera respostas do KB durante a conversa.
{% endstep %}

{% step %}### Passo 3: Adicione a mesma tag no campo Etiquetas

Dentro da ação **Ask Knowledge Base**, role para o campo **Tags**.

Digite a mesma tag usada no conteúdo KB, por exemplo`approved`.

Uma vez adicionada, a ação irá pesquisar apenas dentro do conteúdo marcado`approved`. O conteúdo sem essa tag será ignorado.

<figure><img src="/files/3YJwHLo8ceNaE7gdwkVi" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}Passo 4: Teste o fluxo

Agora teste o Agente de IA com uma pergunta que deve ser respondida a partir do conteúdo marcado.

Se o item KB relevante tiver a etiqueta`approved`, pode ser usado na resposta. Se outro item KB não tiver essa tag, ela não será considerada.

<figure><img src="/files/NREJo1cUq0CYKItPvbcE" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}\
Espero que ajude.

Se precisar de mais assistência, não hesite em entrar em contato-nos[redacted@example.invalid](mailto:redacted@example.invalid).&#x20;

Para ler mais sobre o ChatCase, visite [www.chatcase.com](https://www.chatcase.com)
