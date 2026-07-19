---
title: "Transferência para um ser humano"
description: "Tradução para um humano"
---

Tradução para um humano

<figure><img src="/doc-images/SAh8RkThFNkEJYmaWUg3.png" alt=""><figcaption></figcaption></figure>Quando você precisa entregar um chat de um fluxo para um operador humano (HITL: Humano no loop) esta é a ação que faz o trabalho para você.

O exemplo mais fácil é usar a ação anexada a um botão para permitir que o usuário final “Fale com um humano” sempre que quiser.

<figure><img src="/doc-images/NQSBx7T2BH6BUmjHKhuY.png" alt=""><figcaption></figcaption></figure>Para criar este fluxo, basta arrastar e soltar a entrega humana do menu lateral para o palco.

<figure><img src="/doc-images/nZeITSHnrdV4QFvjcNYX.png" alt=""><figcaption></figcaption></figure>Uma vez conectado a um botão (ou qualquer bloco no fluxo) esta ação moverá o fluxo para um agente disponível, se houver. Se nenhum agente estiver disponível, a ação será movida automaticamente para o status *unassignado* e colocada na fila *unassignado*.

Se nenhuma [Atribuição Inteligente](/docs/guia/manage-your-workspace/setting-up-automatic-assignment) estiver ativa, a única variável selecionada para atribuição é o status *avaialble dos Agentes*. O chat será movido para o primeiro disponível após um round-robin alghoritm.

Em vez disso, quando a atribuição inteligente estiver ativa, também a opção *Conversas máximas* (ver imagem abaixo) da configuração do módulo de atribuição inteligente será verificada.

<figure><img src="/doc-images/kibgFx0JhAD0WunJ9aGf.png" alt=""><figcaption></figcaption></figure>Se nenhum agente estiver disponível, o chat será novamente colocado no status Não atribuído (você verá o chat no painel Monitor sob a seção *Desatribuído*).

Usando esta ação junto com [Se Online Agents Action](/docs/guia/ai-chatbots-and-automation/actions-explained/if-online-agent) lhe dará os melhores resultados quando nenhuma atribuição inteligente estiver ativa.

Quando em vez disso, a atribuição inteligente é ativa às vezes a melhor abordagem é usar sempre o [Move to Unassigned Action](/docs/guia/ai-chatbots-and-automation/actions-explained/move-to-unassigned-action).

Você pode encontrar um pequeno tutorial sobre como transferir uma conversa para um humano

Você tem algum feedback sobre este artigo? Por favor, envie-nos em[redacted@example.invalid](mailto:redacted@example.invalid)Aproveitem o ChatCase!
