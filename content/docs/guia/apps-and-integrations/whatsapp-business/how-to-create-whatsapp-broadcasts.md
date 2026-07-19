---
title: "Como criar transmissões WhatsApp"
description: "O recurso WhatsApp Broadcasts permite que você envie uma mensagem única e modelada de sua Conta de Negócios do WhatsApp para um grande número de contatos ao mesmo tempo. Isso é ide"
---

O recurso **WhatsApp Broadcasts** permite que você envie uma mensagem única e modelada de sua Conta de Negócios do WhatsApp para um grande número de contatos ao mesmo tempo. Isso é ideal para enviar anúncios, promoções de marketing, atualizações de pedidos ou lembretes de eventos de forma eficiente e em escala.

Para usar este recurso:

* Você deve ter uma conta WhatsApp Business conectada ao ChatCase (veja [Artigos Relacionados](#artigos relacionados) abaixo)
* Envie todas as mensagens usando modelos de mensagens pré-aprovados do WhatsApp (isso garante o cumprimento das políticas do WhatsApp e fornece um formato de mensagens estruturado e confiável para os destinatários).

Para garantir a máxima compatibilidade em diferentes implementações da WhatsApp Business Platform, nós **recomendamos usando modelos que dependem exclusivamente de variáveis numeradas (por exemplo, {{1}}, {{2}, {{3}})** dentro do corpo da mensagem.\
Essa abordagem segue as diretrizes oficiais da Meta e ajuda a evitar potenciais problemas relacionados a variáveis nomeadas, que podem ser tratadas de forma inconsistente por sistemas externos.

A imagem abaixo mostra um exemplo de um modelo devidamente configurado.

<figure><img src="/files/ijxwBVktWftVNPreC0mV" alt=""><figcaption></figcaption></figure>Para começar a criar uma transmissão da barra lateral esquerda selecione o item de menu **WhatsApp Broadcast** e clique no botão **New broadcast**<br>

<figure><img src="/files/zyrBjywI5ME3Y6coIbp2" alt=""><figcaption></figcaption></figure>Na página ** Nova transmissão** siga este passo<br>** Escolha um modelo **

* Localize o **"Escolha um Modelo"** caixa de combinação.
* Clique no botão de seleção para ver todos os modelos disponíveis de sua Conta de Negócios WhatsApp vinculada.
* Selecione o modelo apropriado para sua mensagem (por exemplo,`appointment_reminder`, `health_tip`).

**Importar contatos de um arquivo CSV **

* Clique no botão **"Importar de CSV"**
* Uma janela de diálogo será aberta. ** Baixe o arquivo de exemplo** clicando no link para **`dental_office.csv`** (ou o nome do arquivo sugerido). Use este arquivo como um guia para formatar seu CSV corretamente.

1. Prepare seu arquivo CSV seguindo a estrutura da amostra (note: No arquivo CSV, os nomes das colunas têm o mesmo nome que os placeholders na pré-visualização do modelo). A coluna mais importante é **phone\ number**, que deve ser em formato **internacional**: a **+**, o código **country discing**, e o **full telefone**.\
Exemplo:`+1 555 123 4567`.
2. Envie seu arquivo CSV clicando em **"Escolha Arquivo"**

<figure><img src="/files/FdQg2rdj4s1G8BRwxELV" alt=""><figcaption></figcaption></figure># # # Verificar os Campos e Enviar #

Depois de importar o arquivo CSV, verifique os campos na seção Contatos e clique no botão **Enviar transmissão**

<figure><img src="/files/sazEOD58Oqh6DRXeFwY9" alt=""><figcaption></figcaption></figure>Depois de enviar a transmissão

Você pode monitorar o status de sua transmissão na página de transmissões WhatsApp (esta página contém todo o histórico de suas transmissões).<br>

<figure><img src="/files/tRk3obH6cmVTFpKHG1yl" alt=""><figcaption></figcaption></figure>Para obter informações mais detalhadas, basta clicar em qualquer transmissão na lista para visualizar seus detalhes

<figure><img src="/files/PMURlbbGf3lZoJKExH9b" alt=""><figcaption></figcaption></figure>Artigos relacionados

* [Como configurar uma conta WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-connect-chatcase-with-whatsapp-business)
* [Como conectar ChatCase com WhatsApp Business](/docs/guia/apps-and-integrations/whatsapp-business/how-to-connect-chatcase-with-whatsapp-business)
* [Como usar modelos WhatsApp com ChatCase](/docs/guia/apps-and-integrations/whatsapp-business/how-to-use-whatsapp-templates-with-chatcase)
