---
title: "# Por que usar AI Condição"
description: "AI Condição"
---

AI Condição

**Ai Condition** é uma ação inteligente que permite automatizar a tomada de decisão dentro de um fluxo de conversação usando **Modelos de IA Generativos (LLMs)** tais como **OpenAI GPT-5**, **Google Gemini**, **Anthropic Claude**, **Grok**, e muito mais.

<figure><img src="/files/1Wk9qpR2r07JMWRHmAY4" alt=""><figcaption></figcaption></figure>Ao contrário da Ação de Condição padrão, que se baseia na lógica básica (por exemplo, “se o valor é igual a...”), a Condição **AI usa o entendimento da linguagem para avaliar o significado semântico da mensagem do usuário e tomar decisões conscientes do contexto.


O ChatCase só pode continuar um caminho de Condição por execução.

Se você definir uma Condição e não adicionar um passo depois, a execução irá parar.

# # Por que usar AI Condição

Esta ação é ideal quando sua lógica não pode ser expressa através de regras simples. Permite-lhe:

* Interpretar o tom, intenção ou contexto diretamente da linguagem natural.
* Roteie conversas automaticamente para o departamento correto ou agente humano (Vendas, Suporte, Billing, etc.).
* Melhorar a Resolução de Primeiro Contato (FCR) conectando os usuários ao recurso certo na primeira tentativa.
* Detectar frustração ou insatisfação e transferir imediatamente o chat para um operador ao vivo.
* Aplicar lógica de decisão complexa sem escrever código ou criar múltiplas condições manuais.

# # Onde encontrá-lo

No painel esquerdo do Design Studio, vá para **AI → AI Condição**. Esta ação está atualmente marcada como **BETA**.

# # Como funciona

{% stepper %}
{% step %}Passo 1

Envia a última mensagem do usuário para o LLM selecionado (por exemplo, GPT-5 ou Gemini).

<figure><img src="/files/cgl6fD3e46ec5QXrUHxK" alt=""><figcaption></figcaption></figure>
{% endstep %}

{% step %}Passo 2

O modelo analisa a linguagem e avalia se uma ou mais ** Condições de IA** são atendidas.
{% endstep %}

{% step %}Passo 3

Com base no resultado, o fluxo continua ao longo dos caminhos ** Sucesso** correspondentes (por exemplo, Suporte, Vendas, Transferência para o Humano).
{% endstep %}

{% step %}Passo 4

Se o modelo não conseguir classificar a mensagem, o conector **Fallback** é acionado.
{% endstep %}
{% endstepper %}Exemplo 1: Detectar frustração e transferir para um ser humano

Você pode usar **AI Condition** para melhorar a forma como você lida com conversas difíceis ou emocionais. Por exemplo, se um usuário mostrar frustração ou insatisfação, o chat pode ser automaticamente aumentado para um agente ao vivo.

Como configurar

{% stepper %}
{% step %}Arraste uma condição **AI** para o seu fluxo.
{% endstep %}

{% step %}Selecione o LLM (por exemplo, OpenAI GPT-5).
{% endstep %}

{% step %}Na Condição 1, digite:

> Se o usuário apresentar algum sinal de frustração, insatisfação ou sofrimento emocional, seja expresso diretamente ou implícito por meio de tom, redação ou queixas repetidas.
>{% endstep %}

{% step %}Defina o caminho ** Sucesso** para ** Transferir para Humano**.
{% endstep %}

{% step %}No campo *Instruções*, digite:`User said: {{lastUserText}}`

<figure><img src="/files/KFLzudl06DlORRDmAAjp" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}Benefício: Detectar usuários infelizes e prevenir churn conectando-os com um representante humano no momento certo.

Exemplo 2: Roteamento entre Suporte e Vendas

Com várias condições de IA, você pode projetar um sistema de roteamento inteligente que identifica o departamento certo com base na consulta do usuário.

Como configurar

{% stepper %}
{% step %}Adicione um bloco **AI Condition** e selecione um modelo (por exemplo, OpenAI GPT-5).
{% endstep %}

{% step %}Defina duas condições:

* Condição 1:

> Se a última pergunta do usuário estiver relacionada com suporte, solução de problemas, instruções, tutoriais ou orientação sobre como executar uma tarefa\
> Sucesso → **Depoimento de apoio**
* Condição 2:

> Se a pergunta do usuário estiver relacionada a assinaturas, preços, planos, upgrades, descontos ou qualquer outro tópico relacionado a vendas\
> Sucesso → **Dept de vendas**
>{% endstep %}

{% step %}No campo *Instruções*, digite:`User’s last question: {{lastUserText}}`

<figure><img src="/files/qbMcfkymuxcs04Woh8p8" alt=""><figcaption></figcaption></figure>
{% endstep %}
{% endstepper %}Benefício: Enviar automaticamente cada conversa para a equipe certa sem intervenção humana, reduzindo os tempos de espera e aumentando a Resolução de Primeiro Contato (FCR).

Em resumo

**A Condição IA** leva a automação conversacional para o próximo nível — transformando a compreensão de linguagem natural de modelos de linguagem de grande porte em decisões de roteamento acionáveis que melhoram a eficiência e a satisfação do cliente.

É a base para construir ** fluxos híbridos humanos-AI** que são mais adaptativos, empáticos e produtivos.
