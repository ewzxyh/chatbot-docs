---
title: "Saiba como priorizar pedidos de entrada graças ao ChatGPT"
description: "Introduçãoa href=\"intro\" id=\"intro\"/aNeste tutorial, vamos mergulhar no poderoso mundo da otimização do suporte ao cliente, aproveitando a sinergia da ChatCase Generative AI Chatbo"
---

Introdução<a href="#intro" id="intro"></a>Neste tutorial, vamos mergulhar no poderoso mundo da otimização do suporte ao cliente, aproveitando a sinergia da ChatCase Generative AI Chatbot Development e as capacidades de integração do ChatGPT pela OpenAI. Saiba como marcar solicitações de clientes e definir seus níveis prioritários, tudo com a ajuda da tecnologia de ponta de IA. Vamos começar!

#### **Passo 1: Prepare seu Caso de Uso e Atributos e crie um bloco de tarefas GPT**<a href="#step-1-prepare-your-use-case-and-attributes-and-create-a-gpt-task-block" id="step-1-prepare-your-use-case-and-attributes-and-create-a-gpt-task-block"></a>* Para gerar respostas pertinentes usando GPT, você precisa definir um prompt que instrua GPT sobre como gerar uma resposta com base no feedback do cliente. Antes de começar, é essencial ter um caso de uso claro em mente. Por exemplo, digamos que você queira criar um bot que lida com solicitações de suporte com base em sua urgência ou prioridade. &#x20;
* No bloco Defallback padrão, escolha a ação GPT Task; nele, atribua um atributo à resposta gpt, bem como o texto do último usuário. Você pode criar um atributo personalizado (por exemplo, "gpt\ reply", "last\ user\ text") para interceptar a resposta gerada pelo ChatGPT com base no que o usuário lhe disse por último.
* Considere o contexto de seu chatbot. Se o seu caso de uso envolve solicitações de suporte, você pode usar um prompt como: "Análise um pedido de entrada de cliente via chat ao vivo ot determinar sua prioridade. Se a prioridade é alta, você pode responder “alto”, caso contrário “baixo”

Passo 2: Defina o número máximo de fichas<a href="#step-2-set-the-max-number-of-tokens" id="step-2-set-the-max-number-of-tokens"></a>* Decida o número máximo de tokens que você quer que a resposta GPT tenha. Tokens são pedaços de texto, e limitar seu número pode ajudar a controlar o comprimento das respostas geradas.
* Por exemplo, se você quiser respostas concisas, você pode definir o número máximo de tokens para 50. Se você quer respostas mais detalhadas, você pode configurá-lo para um valor maior, como 150.

Passo 3: Configure uma condição com o atributo GPT<a href="#step-3-set-up-a-condition-with-gpt-attribute" id="step-3-set-up-a-condition-with-gpt-attribute"></a>* Uma vez configurado seu bloco de tarefa GPT, adicione uma ação "Condição" abaixo para gerar a resposta com base na condição definida.
* Para definir a "Condição", configure o atributo "gpt\ reply" para: "contém Ignorar Caso" e no valor arquivado insira a palavra "alto".
* Desta forma, se a resposta GPT é alta, ele não vai enviar texto para o usuário.

Passo 4: Configurar os blocos Urgente + Não Urgente<a href="#step-4-configure-the-urgent-not-urgent-blocks" id="step-4-configure-the-urgent-not-urgent-blocks"></a>* Criar um novo bloco chamado “Urgente” onde você pode personalizar seu serviço ao cliente conectando imediatamente um agente humano, por exemplo.
* Criar outro bloco para Baixa Urgência onde, em vez disso, você pode conectar os dados do seu usuário e informá-los de que você vai olhar para o problema o mais rápido possível.
* Se a condição estabelecida no Passo 3 for cumprida - a prioridade é realmente encontrada para ser alta pela tarefa GPT - o bloco chamado “Urgente será acionado.
* Inversamente - ou “ou” - a conversa continuará para o bloco “Não Urgente”.

Passo 5: Teste o seu Chatbot<a href="#step-5-test-your-chatbot" id="step-5-test-your-chatbot"></a>* Teste seu chatbot para garantir que ele gera respostas pertinentes com base no feedback do cliente.
* Fornecer feedback no chat para ver como a resposta gerada pelo GPT é tratada.
* Verifique se a resposta é capturada no atributo "gpt\ reply" e exibida corretamente para o usuário.

\
É isso! Você criou com sucesso um chatbot com o ChatCase Design Studio que usa o recurso GPT Task para analisar as solicitações de suporte com base no feedback do usuário. Isso pode melhorar muito a capacidade do seu chatbot para tag inbound suporte solicitar uma prioridade o suporte necessário.
