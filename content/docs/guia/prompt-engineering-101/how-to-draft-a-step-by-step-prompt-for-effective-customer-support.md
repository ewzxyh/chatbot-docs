---
title: "Como elaborar um prompt passo a passo para o suporte eficaz ao cliente"
description: "Introdução: A Chain of Thought Approacha href=\"intro-a-chain-of-thought-approach\" id=\"intro-a-chain-of-thought-approach\"/aAo elaborar prompts para agentes de suporte ao cliente, o "
---

Introdução: A Chain of Thought Approach<a href="#intro-a-chain-of-thought-approach" id="intro-a-chain-of-thought-approach"></a>Ao elaborar prompts para agentes de suporte ao cliente, o objetivo é criar uma estrutura sistemática e lógica que garanta que cada consulta ao cliente seja tratada de forma eficaz. Essa abordagem de "cadeia de pensamento" ajuda os agentes a fornecer soluções claras, empáticas e eficientes, mantendo a consistência. Abaixo está um framework genérico, adequado para suporte ao cliente em todas as indústrias, inspirado nos princípios do método prompt passo a passo.

Uma vez pronto, certifique-se de inserir seu prompt na seção de configurações de IA >> Contexto do sistema. Juntamente com o prompt, você pode escolher o modelo GPT, bem como configurar a temperatura, um número máximo de tokens de IA e pedaços ao raspar seu dedicado [Base de Conhecimento](/docs/guia/chatgpt-hacks).

***

Define o papel e o contexto<a href="#id-1-define-the-role-and-context" id="id-1-define-the-role-and-context"></a>Comece delineando claramente o papel do agente de suporte ao cliente e o tipo de suporte que eles fornecem. Isso garante que o agente compreenda seu propósito e o alcance de suas responsabilidades. Por exemplo:

* **Role:** O agente deve ser conhecedor, acessível e qualificado na resolução de problemas comuns de clientes dentro do domínio (por exemplo, serviços de internet, comércio eletrónico ou suporte técnico).
* **Contexto:** O agente opera dentro de um fluxo de suporte estruturado, usando ferramentas como uma base de conhecimento (KB) e FAQs para ajudar os clientes de forma eficiente.

***

#####2.Adoptar um framework passo a passo#<a href="#id-2-adopt-a-step-by-step-framework" id="id-2-adopt-a-step-by-step-framework"></a>Uma abordagem baseada em passos permite que os agentes resolvam problemas do cliente em uma sequência lógica e gerenciável. Veja como estruturar o framework:

**Passo 1: Esclareça a Consulta do Cliente**

* Comece escutando ativamente o problema ou pergunta do cliente.
* Se a consulta não estiver clara ou faltar informação crítica, por favor peça esclarecimentos. Por exemplo:\
\&#xNAN;*"Você poderia fornecer mais detalhes sobre o problema que você está enfrentando? Isso vai me ajudar a ajudá-lo melhor.

** Passo 2: Apresentar os passos propostos

* Uma vez que o problema é compreendido, apresentar uma série de passos acionáveis para resolvê-lo. Use pontos claros e numerados, garantindo que cada passo é conciso e começa com uma ação ** bolded** (por exemplo, *"Reinicie seu roteador."*).
* Passos de ordem logicamente, priorizando ações não-intrusivas em primeiro lugar (por exemplo, verificando configurações antes de redefinir o equipamento).
* Exemplo de fraseamento:\
\*"Aqui está o que podemos fazer para resolver este problema:
1. ** Reinicie seu dispositivo.** Desliga-o e liga-o para reiniciar a ligação.
2. ** Verifique se há falhas na rede.** Visite nossa página de interrupção aqui: \[link].\
Deixe-me saber se você gostaria de prosseguir!"\*

**Passo 3: Executar e Verificar Cada Passo**

* Guiar o cliente através de cada passo, um de cada vez. Após completar um passo, pedir feedback:\
\&#xNAN;*"Passo 1: Reinicie o roteador pressionando o botão de energia. Isso resolveu o problema?
* Se um passo resolver o problema, confirme-o com o cliente antes de prosseguir.

***

#### **3. Confirmar resolução e oferecer ajuda adicional**<a href="#id-3-confirm-resolution-and-offer-additional-help" id="id-3-confirm-resolution-and-offer-additional-help"></a>* Uma vez que o cliente confirma seu problema é resolvido, realizar uma verificação de acompanhamento para garantir a satisfação. Por exemplo:\
\&#xNAN;*"Ótimo! Você poderia executar um teste rápido para confirmar que tudo está funcionando como esperado?"*
* Sempre oferecer assistência adicional antes de terminar a interação:\
\&#xNAN;*"Posso ajudá-lo em mais alguma coisa hoje?"*

***

####**4.Frustração de clientes de endereços#<a href="#id-4-address-customer-frustration" id="id-4-address-customer-frustration"></a>Se o cliente expressar frustração ou insatisfação:

* Empatia e desculpas sinceras: *"Sinto muito em ouvir isso tem sido frustrante. Vamos resolver isso o mais rápido possível.
* Se o cliente preferir falar com um agente humano, inicie uma transferência com uma comunicação clara:\
\&#xNAN;*"Vou transferi-lo para um dos nossos agentes vivos imediatamente. Por favor, aguarde.

***

####**5. Lidar com questões técnicas com precisão**<a href="#id-5-handle-technical-issues-with-precision" id="id-5-handle-technical-issues-with-precision"></a>Para solucionar problemas técnicos específicos (por exemplo, conectividade à Internet ou bugs de software), siga estas melhores práticas:

* Identificar a causa raiz sistematicamente (por exemplo, verificar se há interrupções, confirmar a funcionalidade do equipamento, distinguir entre hardware e problemas de software).
* Use instruções gerais se os detalhes exatos (por exemplo, modelo de roteador) não estiverem disponíveis.
* Priorize ações que minimizem o esforço do cliente, como diagnósticos remotos ou guias fáceis de seguir.

***

# # # **6. Use Base de Conhecimento e Ferramentas Efetivamente #<a href="#id-6-use-knowledge-base-and-tools-effectively" id="id-6-use-knowledge-base-and-tools-effectively"></a>* Fornecer recursos como guias passo-a-passo, artigos de FAQ, ou tutoriais em vídeo, quando aplicável. Assegurar que as ligações sejam claras e relevantes para a questão.
* Links de artigos de estrutura e recursos em um formato consistente, como:\
\&#xNAN;*"Você pode encontrar mais detalhes neste guia: \[link]."*

***

Acaba com a interacção graciosamente<a href="#id-7-end-the-interaction-gracefully" id="id-7-end-the-interaction-gracefully"></a>Quando o problema do cliente é resolvido, ou eles não precisam mais de assistência, feche a conversa educadamente. Use um tom amigável e profissional, como:\
\&#xNAN;*"Obrigado por entrar em contato! Aproveite o resto do seu dia!

***

#### **8. Otimizar Prompts para Necessidades Específicas da Indústria#<a href="#id-8-optimize-prompts-for-industry-specific-needs" id="id-8-optimize-prompts-for-industry-specific-needs"></a>Personalize o framework genérico para combinar com o setor que você está apoiando. Por exemplo:

* Em ** e-commerce**, incluir etapas como confirmar detalhes da ordem ou verificar políticas de reembolso.
* Em **telecomunicações**, priorizar a solução de problemas comuns de conectividade (por exemplo, resets de roteador, falhas de serviço).
* Em **software suporte**, foco em orientar os clientes através de configuração, solução de problemas de erro, ou uso de recursos.

***

### **Conclusão#<a href="#conclusion" id="conclusion"></a>Uma estrutura rápida passo a passo bem projetada garante que os agentes de suporte ao cliente possam lidar com perguntas com clareza, empatia e eficiência. Ao estruturar conversas logicamente, personalizar soluções e alavancar recursos como bases de conhecimento, os agentes podem consistentemente oferecer excelentes experiências ao cliente. Se o problema é técnico ou relacionado ao serviço, esta abordagem em cadeia de pensamento fornece uma maneira confiável de orientar os clientes para a resolução.

E como vão as suas habilidades de engenharia? Envie-nos algumas dicas úteis ou feedback em[redacted@example.invalid](mailto:redacted@example.invalid)
