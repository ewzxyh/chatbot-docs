---
title: "Agente de IA auto-aprendizagem"
description: "Agente de IA auto-aprendizagem"
---

Agente de IA auto-aprendizagem

<figure><img src="/files/LHsFUAim2A1fhYb8L14a" alt=""><figcaption></figcaption></figure>O Agente de IA Auto-Aprendizável melhora automaticamente aprendendo com conversas resolvidas por agentes humanos. Quando o Agente de IA não consegue responder, a conversa é entregue a um humano. Uma vez que o operador fecha a solicitação, um processo automatizado analisa a conversa, extrai o conhecimento útil, gera um novo artigo e o adiciona à sua Base de Conhecimento para que o Agente de IA possa responder a perguntas semelhantes no futuro.

Como funciona o fluxo de auto-aprendizagem

O agente da IA como primeiro respondedor

Quando um usuário envia uma mensagem, o Agente de IA tenta responder com base em sua base de conhecimento.

2\. Escalada a um Humano

Se a IA não puder responder, a conversa é perfeitamente transferida para um operador humano.

3\. Aprender com Conversas resolvidas

* Analisa a conversa resolvida
* Extrai informações relevantes
* Gera novo conteúdo
* Adiciona automaticamente este conteúdo à base de conhecimentos da IA

4\. Melhoria contínua

A próxima vez que uma pergunta semelhante é feita, o agente de IA é capaz de responder sem intervenção humana. É como ter uma IA que aprende com todos os casos de apoio — automaticamente.

Como começar

O Agente de IA de auto-aprendizagem usa **Code Action** para interagir com terminais seguros e atualizar sua Base de Conhecimento. A ação de Código permite a execução do servidor com autenticação.

Você tem ** duas maneiras de implementar** o fluxo de auto-aprendizagem:

**Opção A — Usar o modelo pré-construído (mais rápido)**\
Você pode [download do modelo pronto para usar Self-Learning Flow](https://chatcase.com/community/getchatbotinfo/chatbotId/688b12d7ba540d00138a60e6-Self-Learning-AI-Agent--Ready-to-Use-Flow-Template) da comunidade e importá-lo para o seu projeto.\
Todas as configurações de Ação de Código necessárias já estão incluídas, então **você não precisa do acesso da Enterprise para usá-lo**.

<figure><img src="/files/bpKPdaYvSj3ojNeTnoyI" alt=""><figcaption></figcaption></figure>** Opção B — Construir o fluxo do zero**\
Se você preferir personalizar ou construir o fluxo manualmente no Design Studio, **Code Action deve ser ativado** — e isso é ** apenas disponível sob o plano Enterprise**.\
Se o Code Action não estiver habilitado em seu espaço de trabalho, ** contate-nos** e o ativaremos para você.

Agente de IA auto-aprendizado – Construa o fluxo a partir do arranhão

Para construir o fluxo do Agente de IA Auto-Aprendizável do zero, você precisa ter um projeto sob o plano Enterprise com Ação de Código ativado. Este tutorial orienta cada passo em detalhe para criar o loop de aprendizagem dentro do ChatCase Design Studio.

**Passo 1: Criar um Novo Fluxo**

1\. No painel ChatCase, vá para o menu do lado esquerdo e clique em "Flows".\
2\. Na nova página, clique no botão azul "Novo fluxo" no canto superior direito.\
3\. Escolha "Automation", em seguida, selecione "Webhook" e dar-lhe um nome (por exemplo, Auto Learning Flow).\
4\. Você será redirecionado para o Design Studio.

<figure><img src="/files/DBgSrvsH0PDHnOUywsLZ" alt=""><figcaption></figcaption></figure>**Passo 2: Adicione a Ação de Código**

1\. Passe por cima das ações “Especiais” e escolha “Ação de Código”.\
2\. Clique no bloco Ação Código. Aparecerá um menu do lado direito.\
3\. Substituir o código padrão com o seguinte trecho, e opcionalmente renomear o bloco para “criar\ transcript”.

<figure><img src="/files/fNAdjytQbrk1RsAP1nbU" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/cPuxSqABIlbiwr5CTuuB" alt=""><figcaption></figcaption></figure>** Aqui está o código que você deve usar:**

<pre><code><strong>let payload = contextual.atributes["payload"];
</strong>deixar mensagens = carga útil?. carga útil?. mensagens;
mensagens?.shift();
Deixe transcriptar = "";
mensagens?.paraCada(mensagem => {

// apenas mensagens não úteis têm subtipo
subtipo;

// apenas chatbots
intentionName = message?.attributes?.intentName;

// apenas usuários finais
// const requester id = message?.attributes?.requester id;

// apenas mensagens de serviço
const messlabel = mess?.attributes?.messagelabel;

// apenas mensagens humanas
se (!subtipo &#x26;&#x26;!messagelabel &#x26;&#x26;!intenntName) {
//console.log("mensagem:", mensagem);
let text = message.senderFullname + ": " + message.text;
transcrição += texto + "\n";
}
});
context.setAttribute("transcript", transcrição);
<strong>
</strong></code></pre>O que ele faz:\
\- Obtém mensagens de chat da carga útil.\
\- Filtra mensagens do sistema, AI Agent respostas, e mensagens de serviço.\
\- Mantém apenas conversas genuínas entre humanos.\
\- Formata cada mensagem como “Nome de Envio: MensagemTexto”.\
\- Cria uma única string de transcrição armazenada como "transcript" no contexto.\
\
Porquê: A transcrição filtrada fornece dados de conversação humana limpa sem ruído técnico, tornando-o ideal para treinar um agente de IA de auto-aprendizagem em padrões de diálogo natural.

**Passo 3: Adicionar um registro de fluxo**

1\. Hover novamente em "Especial" e selecione "Flow Log".\
2\. Coloque-o após o bloco de Ação de Código e escreva "auto aprendizagem começar" na seção de log.

<figure><img src="/files/9xoYIYlSda8hv0ME6cAL" alt=""><figcaption></figcaption></figure>**Passo 4: Adicione a Tarefa ChatGPT**

1\. Adicione um novo bloco e insira a “Tarefa ChatGPT” dos tipos de ação.

<figure><img src="/files/2xe6gqPvCF4czIGFxjEH" alt=""><figcaption></figcaption></figure>2\. Escreva um prompt que analisa uma transcrição de suporte e extrai conteúdo reutilizável.\
Use o seguinte prompt:\
\&#xNAN;*A transcrição abaixo é uma conversa de suporte onde um usuário pede uma solução de um problema e alguém responde fornecendo a solução solicitada.*\
*Se você avaliar que uma solução foi encontrada, a solução foi genérica o suficiente para ser útil para outros usuários - nenhuma solução específica do usuário em relação à sua conta pessoal ou o provisionamento de dados sensíveis são considerados úteis para outra pessoa - por favor preencha o campo de resumo do json com um resumo da solução removendo todos os dados sensíveis. Caso contrário, defina o campo sumário como null.*\
*Responda-me com este json *\
* {*\
*"title":"um título curto para este conteúdo",*\
*"summary": o resumo que você descobriu seguindo as instruções acima*\
*}\
* transcrição da conversa: {{transcript}} *

3\. Este prompt avalia se a conversa inclui uma solução reutilizável, exclui informações sensíveis/específicas do usuário, e retorna uma estrutura JSON com um título e um resumo.

<figure><img src="/files/jas3W9D3A0JCeo4CzAUS" alt=""><figcaption></figcaption></figure>** Passo 5: Extrair o Resumo **

1\. Adicione um novo bloco com a ação “Set Attributes” das ações “Flow”.\
2\. Use o valor {{gpt\  resply.summary}}.\
3\. Criar um novo atributo chamado “Resumo”.\
Isto armazenará o resumo gerado por IA em uma forma utilizável.

<figure><img src="/files/9Tg0lPOoYJQqH87C3prF" alt=""><figcaption></figcaption></figure>**Passo 6: Adicione uma condição para verificar a validade do resumo**

1\. Adicione um bloco “Condição w/else” das ações “Flow”.\
2\. Configure a condição para verificar se o resumo é nulo, indefinido ou vazio.\
Se corresponder a algum destes, significa que o resumo não é utilizável.

<figure><img src="/files/hG4hbsgoZfYNf2XkCXsk" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/jbrZ1FQjxQTwmJJKqF5a" alt=""><figcaption></figcaption></figure>**Passo 7: Lidar com Resumos Inutilizáveis**

1\. Do final verde do bloco de condição (se inválido), adicione uma nova ação "Flow Log".\
2\. Escreva "descartado" no campo de registro.

<figure><img src="/files/i16l9NwFUzrXR2kWwwQs" alt=""><figcaption></figcaption></figure>3\. Adicione um bloco "Resposta Web" para concluir o fluxo.

<figure><img src="/files/iUEuZRuRoclSJdSEYHKV" alt=""><figcaption></figcaption></figure>**Passo 8: Verifique se o conteúdo já existe **

1\. A partir do final vermelho do bloco de condição (se o resumo for válido), adicione uma ação "Pedir Base de Conhecimento".\
2\. Use o atributo Resumo no campo “Usar questão”.\
3\. Selecione o alvo Base de Conhecimento.

<figure><img src="/files/2B9lISbHHlvFHxmOqQ5s" alt=""><figcaption></figcaption></figure>4\. Se encontrado (fim verde), redirecionar de volta para o log “descartado”.\
5\. Se não for encontrado (fim vermelho), continue a adicionar o conteúdo.

<figure><img src="/files/ANdx0k5mKgf7UGs5IGHa" alt=""><figcaption></figcaption></figure>**Passo 9: Adicione Conteúdo à Base de Conhecimento**

1\. Do extremo vermelho da “Pedir Base de Conhecimento”, adicione uma ação “Adicionar à Base de Conhecimento”.

<figure><img src="/files/qBIyILVPbvLDBv3hX8qu" alt=""><figcaption></figcaption></figure>2\. Definir {{gpt\  resply.title}} como a Pergunta.\
3\. Definir {{gpt\ reply.summary}} como a resposta.\
4\. Escolha a base de conhecimento apropriada para o conteúdo.

**Passo 10: Registre a Ação**

1\. Adicione outra ação "Flow Log" para marcar a nova entrada.\
2\. Preencha-o com uma mensagem significativa (por exemplo, “artigo adicionado ao KB”).\
3\. Clique no botão azul "Publicar" no canto superior direito.

<figure><img src="/files/bbivD5qTxrMyRIh8rHXD" alt=""><figcaption></figcaption></figure>**Passo 11: Registre o Webhook para ativar o fluxo**

Depois de construir o fluxo, você precisa conectá-lo ao evento ** "Pedir Fechar" **. Isso garante que o fluxo é executado automaticamente cada vez que um agente humano fecha uma conversa de suporte.

Siga estes passos para configurar o webhook:

1- Clique no bloco **iniciando "Webhook"** no topo do fluxo.

2- No painel direito, localize o campo marcado ** URL de produção**.

3- **Copiar a URL de produção**. Você precisará dele nos próximos passos.

<figure><img src="/files/DEoELMOzQas0pneKLsjl" alt=""><figcaption></figcaption></figure>**Registre o Webhook no Painel de ChatCase**

1- Volte para o painel **ChatCase**.

2- No menu do lado esquerdo, clique em **Configurações**, depois vá para **Configurações do Projeto**.

3- Selecione a aba **Desenvolvedor** no topo da página.

4- Clique no botão **Manage Webhooks** (azul).

<figure><img src="/files/gTqGTdIhpq5KBymWAL6G" alt=""><figcaption></figcaption></figure>** Criar uma Nova Assinatura **

1- Clique no botão ** Adicionar Assinatura**.

2- Em **Select Event**, escolha ** “Request Close”** no menu suspenso.

3- Colar o URL de **Produção** (copiado anteriormente) no campo **Webhook URL**.

4- Clique no botão **Criar Assinatura** para finalizar.

<figure><img src="/files/iAW3pCcbxfzRvBpIjCb2" alt=""><figcaption></figcaption></figure>Uma vez salvo, seu fluxo de auto-aprendizagem será automaticamente ativado cada vez que uma solicitação de suporte for fechada — ativando todo o processo de aprendizagem sem intervenção manual.

Como testá-lo

1. Faça uma pergunta que seu agente de IA não sabe.
2. Deixe a conversa aumentar para um agente humano.
3. Ter o humano responder e fechar a conversa.
4. Espere alguns momentos para o fluxo de auto-aprendizagem ativar.
5. Se tiver sucesso, novos conteúdos serão adicionados ao seu KB.

<figure><img src="/files/XHLHkxMzSz7ru0IoaqX6" alt=""><figcaption></figcaption></figure>

<figure><img src="/files/g88p0MuAxMjWSXxnqaY4" alt=""><figcaption></figcaption></figure>Precisa de ajuda para transferir o conhecimento para o seu agente de IA?

Se seu centro de suporte lida com um **grande volume de tickets** e você não tem certeza de como **extrair e estruturar esse conhecimento** para o seu Agente de IA, ** estamos aqui para ajudar**.

Nossa equipe pode ajudá-lo em:

* Analisando conversas históricas
* Identificar o conhecimento reutilizável
* Estruturar e importá-lo em sua Base de Conhecimento
* Otimizando seu agente de IA para respostas autônomas

[**entre em contato conosco**](https://chatcase.com/free-live-chat-demo/) para obter suporte especializado e desbloquear todo o potencial de seu agente de IA de auto-aprendizagem.
