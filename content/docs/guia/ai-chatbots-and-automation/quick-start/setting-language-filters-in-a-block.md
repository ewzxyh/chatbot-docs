---
title: "Configurar os Filtros de Linguagem num Bloco"
description: "Configurar os Filtros de Linguagem num Bloco"
---

Configurar os Filtros de Linguagem num Bloco

Introdução<a href="#intro" id="intro"></a>Este guia irá ajudá-lo a configurar filtros de linguagem para campos de texto em um bloco, garantindo que os usuários vejam conteúdo em seu idioma preferido com base em suas configurações de navegador. Para uma configuração rápida, você pode importar um Chatbot Multilingual [aqui](https://chatcase.com/community/search/getchatbotinfo/chatbotId/65acd812484b9f0013c13e9c-Multi-language-chatbot-example-using-Reply-Filters).&#x20;

Se, por outro lado, você está procurando um Bot Multilingual mais simples, mas eficaz, você também pode tentar carregar uma estrutura JSON para suas traduções - dê uma olhada neste modelo [aqui](https://chatcase.com/community/search/getchatbotinfo/chatbotId/65aedcd48431bd0013646c72-Multi-language-chatbot-using-Globals-section-to-host-all-the-translations-in-JSON).

Passo 1: Acesse a Opção de Filtro<a href="#step-1-access-the-filter-option" id="step-1-access-the-filter-option"></a>1\. ** Abra o bloco:**\
&# x20; \- Navegue para o bloco onde deseja definir os filtros de idioma.\
&#x20; \- Clique dentro do bloco no campo de texto

2\. **Encontrar a Opção de Filtro:**\
&# x20; \- Olhe acima do campo de texto dentro do bloco para a opção filtro. \
&# x20; \- Clique no ícone do filtro para abrir as configurações de filtragem.

<figure><img src="/files/mqsQ9oAQAcjHVFlZ8gHm" alt=""><figcaption></figcaption></figure>Passo 2: Defina o filtro para o inglês - este pode ser o seu idioma pivô<a href="#step-2-set-the-filter-for-english-this-can-be-your-pivot-language" id="step-2-set-the-filter-for-english-this-can-be-your-pivot-language"></a>1\. **Escolha o atributo:**\
&#x20; \- Na lista de atributos, selecione \`user\_language\`.&#x20;

2\. **Definir a condição:**\
&#x20; \- Definir a condição como \`contains ignore case\`.

3\. **Entrar o Valor (código iso "en"):**\
&#x20; \- Isso garante que apenas os usuários com seu idioma de navegador definido para Inglês verão este texto.

4\. **Linguagem de pivô** (a linguagem de retrocesso usada quando não há suporte para a linguagem de usuário pelo chatbot). Adicione outra condição selecionando a opção “OR”. A condição alternativa deve corresponder a um valor regex contendo os códigos iso para as suas outras línguas filtradas.

Usamos o regex:

```
^((?!it|es).)*$
`$([Environment]::NewLine)
Usamos este regex para obter uma condição "verdadeira" quando o idioma do usuário é diferente dos outros dois que sabemos que são suportados. Como podem ver, as línguas são representadas pelos seus códigos iso "it" e "es". Se você suporta outros idiomas diferentes do pivô, você deve adicioná-los como abaixo:

```
^((?!it|es|fr|ru).)*$
```

<figure><img src="/files/YsVCcNCMD37hmHWxpzQZ" alt=""><figcaption></figcaption></figure>Última etapa: Adicionar filtros para idiomas adicionais

1\. **Add a New Text Field:**\
&# x20; \- Adicionar outro campo de texto ao bloco para a próxima tradução da língua.

2\. ** Configuração do Filtro de Repetição:**\
&# x20; \- Carregue na opção de filtro acima do novo campo de texto.\
&#x20; \- Escolha o \`user\_language\`atributo novamente.\
&#x20; \- Definir a condição como \`contains ignore case\`.

3\. **Entrar no valor da linguagem:**\
&#x20; \- Para o italiano, digite \`it\`no campo valor.\
&# x20; \- Repita estes passos para outras línguas adicionando mais campos de texto e definindo os códigos de idioma apropriados (por exemplo, \`es\`para espanhol, \`fr\`para francês).

<figure><img src="/files/XbhDsyMYH8oYKLHqylWl" alt=""><figcaption></figcaption></figure>Conclusão

Somente os campos de texto que atendam às condições definidas pelos respectivos filtros serão exibidos ao usuário.\
Certifique-se de que cada campo de texto está corretamente configurado com o \`user\_language\`atributo e a condição adequada. Seguindo estes passos, você pode gerenciar efetivamente conteúdo multilingue em seus blocos, garantindo que os usuários vejam conteúdo em seu idioma preferido com base em suas configurações de navegador.

Para qualquer feedback, não seja tímido, atire-nos um email em[redacted@example.invalid](mailto:redacted@example.invalid) 🧡
