---
title: "Como conectar sua base de conhecimento para automação GPT"
description: "Título: Conectando sua base de conhecimento para ChatCase Usando ChatGPT"
---

Título: Conectando sua base de conhecimento para ChatCase Usando ChatGPT

Introdução<a href="#introduction" id="introduction"></a>Integrar o ChatGPT no ChatCase pode melhorar as capacidades do seu chatbot conectando-o a uma base de conhecimento (KB). Este tutorial irá guiá-lo através dos passos para conectar sua base de conhecimento ao ChatCase usando o ChatGPT. Esta integração permite que seu chatbot recupere informações do KB para fornecer respostas mais você precisa às consultas do usuário. Você será capaz de carregar seu próprio KB simplesmente indexando um pedaço de URLS, um mapa do site e/ou carregando texto simples.

Pré-requisitos<a href="#prerequisites" id="prerequisites"></a>* Acesso à conta do ChatCase.
* URL(s) de sua base de conhecimento.
* FAQ texto simples para copiar e colar.
* Seu mapa do site.

[Acessar recurso externo](<https://www.youtube.com/watch?embeds_referring_euri=https://gethelp.chatcase.com/&source_ve_path=MzY4NDIsMjg2NjY&time_continue=2&v=it9I7bDWsTQ>)
Passos<a href="#steps" id="steps"></a>**1. Adicione sua Base de Conhecimento (KB):**

* Entre na sua conta do ChatCase.
* Navegue até a seção Chatbots.
* Role até a base de conhecimento: Gerencie seu conteúdo
* Indice um pedaço de URLs, texto simples ou um mapa do site, como abaixo.

<figure><img src="/files/6Gxucto4H8ejQSqHPttm" alt=""><figcaption></figcaption></figure>**2. Configure sua mensagem de boas-vindas:**

* Ainda nas configurações do chatbot, role para baixo para a seção "Bem-vindo Mensagem".
* Personalize sua mensagem de boas-vindas como desejado. Esta é a mensagem inicial que os usuários receberão ao interagir com seu chatbot, veja um exemplo abaixo.

<figure><img src="/files/ek5Q8xdA9ZK8lLpkA32p" alt=""><figcaption></figcaption></figure>**3. Adicione "Pergunte à Base de Conhecimento" Ação:**

* Navegue para o menu "Ações" em sua configuração do chatbot.
* Selecione "Pergunte à Base de Conhecimento" da lista de ações das Integrações.
* Arraste e solte dentro do bloco **Default Fallback Block**, como abaixo.

<figure><img src="/files/0bl0iz9F7OlsW3MG9Lj0" alt=""><figcaption></figcaption></figure>**4. Adicionar Atributos de Resposta: kb\  resply e kb\  source:**

* Enquanto ainda está na seção Ações, edite a ação "Pergunte à Base de Conhecimento".
* Nas configurações de ação, encontre a seção "Atributos de Resposta".
* Adicionar dois atributos de resposta:\
&# x20; \- "kb\  resply": Este atributo irá armazenar a resposta recuperada da base de conhecimento.\
&#x20; \- "kb\ source": Este atributo conterá a fonte ou referência da informação KB, veja abaixo.

**5. Criar caminhos para o sucesso e blocos de falha:**

Você precisará criar dois caminhos: 1o conectado ao caminho “Sucesso” e 2o conectado ao caminho “Falha”.

* Criar um novo caminho clicando no porto de saída verde (Sucesso) e conectá-lo ao bloco "KB Success". Este caminho representa respostas bem sucedidas da base de conhecimento.
* Criar um segundo caminho da porta de saída vermelha (Else) para um novo bloco chamado "KB Fail". Este caminho irá lidar com casos em que a base de conhecimento não fornece uma resposta relevante, veja abaixo.

<figure><img src="/files/RA6RtAZw6sIe0vhDOAIO" alt=""><figcaption></figcaption></figure>Com estas etapas concluídas, seu chatbot alimentado pelo ChatGPT em ChatCase está agora conectado à sua base de conhecimento. Quando os usuários interagem com o bot, ele usará o ChatGPT para consultar o KB para obter informações, armazenar a resposta e fonte e orientar os usuários através do caminho apropriado baseado na resposta do KB.

**6. Como atualizar, verificar o status e excluir seu conteúdo KB**

Lembre-se de atualizar regularmente sua base de conhecimento para garantir que seu chatbot forneça informações você precisa e atualizadas aos usuários. Além disso, você pode personalizar ainda mais o comportamento e as respostas do seu chatbot com base no conteúdo da base de conhecimento e nas necessidades do usuário. Uma vez atualizado, clique no ícone ** Atualizar** para atualizar seus recursos, como abaixo.

<figure><img src="/files/beGYQ2dnn0OdOSbwrh37" alt=""><figcaption></figcaption></figure>Para verificar o status ** de cada conteúdo, clique nos três pontos e escolha "Verificar status". Da mesma forma, escolheu a opção "Excluir" se você quiser **remover** um conteúdo, como abaixo.

<figure><img src="/files/g4xH0W5MpLisUfgPwtxp" alt=""><figcaption></figcaption></figure>Obrigado por leres. Para qualquer feedback, grave um email para[redacted@example.invalid](mailto:redacted@example.invalid)
