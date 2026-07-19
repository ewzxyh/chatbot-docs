---
title: "Parâmetros de email e configuração de modelos"
description: "Use esta informação para configurar os serviços de e-mail para a instalação on-premise para e-mail de saída para gerenciar todos os e-mails enviados de ChatCase para usuários como "
---

Use esta informação para configurar os serviços de e-mail para a instalação on-premise para e-mail de saída para gerenciar todos os e-mails enviados de ChatCase para usuários como convites de projeto, verificação de e-mail, assinaturas e notificações. O ChatCase usa [NodeMailer] (https://nodemailer.com/) para enviar os e-mails.

# # Habilitar o subsistema de email

Para ativar o serviço de e-mail, defina a propriedade **env** para verdadeiro do seu componente **iledesk-server**. O valor padrão é falso.

```
EMAIL_ENABLED=true
`$([Environment]::NewLine)
# # Configuração SMTP

As seguintes propriedades podem ser configuradas para o tipo de subsistema SMTP Outbound:

* **EMAIL\ HOST**=YOUR\ EMAIL\ HOST Especifica o nome da máquina (padrão para "localhost") da máquina SMTP, isto é, o nome da máquina ou endereço IP do servidor para o qual o e-mail deve ser enviado.
* **EMAIL\ USERNAME**=YOUR\ EMAIL\ USERNAME Especifica o nome de usuário da conta que se conecta ao servidor smtp.
* **EMAIL\ SECURE**=true #defaults to 587 se for seguro é false ou 465 se true Se true a conexão usará TLS ao se conectar ao servidor. Se false (o padrão) então TLS é usado se o servidor suporta a extensão STARTTLS. Na maioria dos casos defina este valor para true se você estiver se conectando à porta 465. Para o porto 587 ou 25, é falso.
* **EMAIL\ PORT**=25 É a porta a que se ligar (por omissão, 587 se for seguro é falso ou 465 se for verdadeiro)
* **EMAIL\ PASSWORD**=YOUR\ SMTP\ PASSWORD Especifica a senha para o nome de usuário usado no EMAIL\ USERNAME.
* ** EMAIL\ FROM\ ADDRESS**=FROM\ EMAIL\ ADDRESS Especifica o endereço de e- mail a partir do qual as notificações de e- mail são enviadas. Esta configuração é para e-mails que não são acionados por um usuário, por exemplo, emails de notificação de atividade.
* **EMAIL\ BASEURL**=<https://YOOURDOMAIN.com/dashboard>Este é o ponto final do painel. O valor padrão é :<https://panel.chatcase.com/v3/dashboard># # Configuração do modelo de email

Em ChatCase você pode personalizar o modelo de e-mails usando as seguintes variáveis **env** (cadeias multilinhas) do seu componente **iledesk-server** :

* ** EMAIL\ ASSIGN\ REQUEST\ HTML\ TEMPLATE** Email enviado para notificar um novo pedido no modo atribuído.
* **EMAIL\ ASSIGN\ MESSAGE\ EMAIL\ HTML\ TEMPLATE** Email enviado para notificar um novo pedido no modo atribuído para o canal de email de entrada.
* ** EMAIL\ POOLED\ REQUEST\ HTML\ TEMPLATE** Email enviado para notificar um novo pedido no modo agrupado.
* **EMAIL\ POOLED\ MESSAGE\ EMAIL\ HTML\ TEMPLATE** E-mail enviado para notificar uma nova solicitação no modo agrupado para o canal de e-mail de entrada.
* ** EMAIL\ NEW\ MESSAGE\ HTML\ TEMPLATE** Email enviado ao solicitante para notificar uma nova mensagem quando o solicitante estiver offline
* ** EMAIL\ TICKET\ HTML\ TEMPLATE** E-mail enviado ao solicitante para notificar uma nova mensagem para o canal de email de entrada.
* ** EMAIL\ FOLLOWER\ HTML\ TEMPLATE** Email enviado ao seguidor de pedidos para notificar uma atualização.
* **EMAIL\ DIRECT\ HTML\ TEMPLATE** Email enviado para mensagem direta.
* ** EMAIL\ RESET\ PASSWORD\ HTML\ TEMPLATE** Email enviado quando um usuário redefinir a senha.
* ** EMAIL\ PASSWORD\ CHANGED\ HTML\ TEMPLATE** E- mail enviado quando a senha é alterada.
* ** EMAIL\ EXUSER\ INVITADO\ HTML\ TEMPLATE** E-mail enviado quando um agente convida um usuário de plataforma existente.
* ** EMAIL\ NEWUSER\ INVITADO\ HTML\ TEMPLATE** E-mail enviado quando um agente convida um novo usuário.
* ** EMAIL\  VERIFY\ HTML\ TEMPLATE** E-mail enviado quando um agente se inscreve na plataforma.
* **EMAIL\ SEND\ TRANSCRIPT\ HTML\ TEMPLATE** Se a propriedade "Transcrito por e-mail" estiver habilitada, este e-mail é enviado automaticamente no final de cada bate-papo para o solicitante.

Você pode encontrar os modelos de email padrão sob o [template/email](https://github.com/ChatCase/chatcase-server/tree/master/template/email) pasta do projeto de servidor de azulejos

Consulte estes guias para variáveis de env multi-linha:

* [Yaml multi-linha] (https://yaml-multiline.info) para Kubernetes
* [Controlo multi-linha Helm] (https://helm.sh/docs/chart_template_guide/yaml_techniques/#controlling-spaces-in-multi-line-strings)
