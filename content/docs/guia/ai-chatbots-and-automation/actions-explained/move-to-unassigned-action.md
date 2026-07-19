---
title: "Mover para Ação Não Atribuída"
description: "Mova uma conversa para a fila de solicitações não atribuídas."
---

<figure><img src="/files/wP2YbVZHelYXdReZ1Ydk" alt=""><figcaption></figcaption></figure>Esta ação define este estado de conversação como * Não atribuído*. Útil se você tiver Atribuição Inteligente ativada e quiser gerenciar todas as solicitações de bate-papo através da fila Sem atribuição.

Quando você tiver a opção [Smart Atribution](/docs/guia/manage-your-workspace/setting-up-automatic-assignment) ativando todas as solicitações de chat no status Não atribuído (também conhecido por colocar na fila Não atribuída) será entregue aos Agentes de uma forma FIFO com base no tempo de criação da solicitação de chat.

Se um usuário estiver em um fluxo com um chatbot você tem muitas maneiras de atribuí-lo ao respectivo agente quando este momento chegar. Uma forma é através da [Agent Handoff Action](/docs/guia/ai-chatbots-and-automation/actions-explained/transfer-to-a-human). Esta ação irá encontrar um agente disponível com base no estado de disponibilidade do Agente. Isso significa que o Agent Handoff fará o seu melhor para atribuir a solicitação a um agente que está tanto no status disponível quanto com uma série de chats atribuídos (também conhecido como *chat requests*) sob a opção [Maximum chats](/docs/guia/manage-your-workspace/setting-up-automatic-assignment#chat-limit) da seção Smart Assignment:

<figure><img src="/files/Kg9pPSyC7fDEA66ktLNb" alt=""><figcaption></figcaption></figure>Mas quando Smart Assigment está ativo geralmente é preferível não tentar a abordagem para atribuir diretamente um chat a um agente. É melhor colocar diretamente o bate-papo na fila sem atribuição e deixar que o módulo Smart Atribuir (se ativo) defina os bate-papos e os atribua aos agentes disponíveis com base na hora de chegada (criação).
