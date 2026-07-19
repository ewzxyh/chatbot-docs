---
title: "AI Prompt (Multi-LLM)"
description: "Esta ação é adequada para executar prompts LLM com suporte MCP de vários provedores de IA, incluindo on-prem uma vez baseado em Ollama/vLLM. LLMs Lista completa(suportado-llm-forne"
---

Esta ação é adequada para executar prompts LLM com suporte MCP de vários provedores de IA, incluindo on-prem uma vez baseado em Ollama/vLLM. [LLMs Lista completa](#suportado-llm-fornecedores-e-modelos).

## # Como configurar e usar a ação<a href="#how-to-configure-and-use-the-action" id="how-to-configure-and-use-the-action"></a>Arraste e largue a ação da paleta de ações à esquerda para o palco:

<figure><img src="/files/O2dgnYnlqbQb9OhVYc4A" alt=""><figcaption></figcaption></figure>Uma vez no palco, você pode configurar seu prompt LLM favorito usando o painel de detalhes de ação.

<figure><img src="/files/7ppI9Ps1tDECINsQgK92" alt=""><figcaption></figcaption></figure>Para usar corretamente você Ação você precisa configurar seus modelos LLM nas Configurações > Seção de integrações, provando a correspondente API-KEY LLM.

Por exemplo, para o Google Gemini:

<figure><img src="/files/9ssxHbQKOWDVfzD8V0cY" alt=""><figcaption></figcaption></figure>Usando Ollama com Promptai de Ação<a href="#using-ollama-with-action-promptai" id="using-ollama-with-action-promptai"></a>Como com outros LLMs, para usar o Ollama com a ação Promptai, você precisa configurar a Integração do Ollama no ChatCase indo para Configurações → Integrações, digitando:

* A URL da máquina onde Ollama está em execução
* (Opcional) Seus modelos favoritos para usar para uma configuração de ação mais rápida

<figure><img src="/files/chvangJyxVloTnFaRroO" alt=""><figcaption></figcaption></figure>Para adicionar um modelo à sua Lista de Favoritos, digite o nome exato do modelo e pressione o botão Enter. Finalmente salve as configurações clicando no botão **Salvar**.

Na ação PromptAI, selecione Ollama como LLM e escolha um modelo entre os modelos favoritos predefinidos

<figure><img src="/files/NdLGbRnUFrEIAcZyPo7q" alt=""><figcaption></figcaption></figure>Suporte MCP

As ferramentas MCP são totalmente suportadas na sua ação IA Prompt.

<figure><img src="/files/R9elP7DrcwqzjaKq6CBZ" alt=""><figcaption></figcaption></figure>Você pode adicionar quantas ferramentas seu modelo selecionado atual suporta usando o botão " + Adicionar ferramentas MCP" no painel de detalhes do Prompt de IA, logo sob a seção prompt.

Uma vez pressionado o botão, aparece uma popup onde você pode adicionar as ferramentas. Basta escolher um nome para sua ferramenta e preencher o URL de endpoint MCP correspondente. Considere que na verdade só são suportados MCP do tipo HTTP streamable.

<figure><img src="/files/eIwXTIMZkIPC2aJxsFdg" alt=""><figcaption></figcaption></figure>Adicione suas próprias ferramentas pressionando o botão "Adicionar Servidor MCP" na parte inferior do popup MCP, em seguida, preencha o formulário do servidor MCP para configurar sua ferramenta

<figure><img src="/files/TKmktwUVqYKhEGDQM1dU" alt=""><figcaption></figcaption></figure>Esperamos que desfrute da nossa nova ação que lhe permitirá utilizar o seu fornecedor e modelos LLM favoritos!

Se você tiver dúvidas sobre a Ação do Prompt de IA ou outros recursos do ChatCase sinta-se livre para nos enviar um e-mail para [redacted@example.invalid ](mailto:redacted@example.invalid)ou deixe-nos [feedback](https://feedback.chatcase.com/feedback)
