---
title: "Política de Suporte de Containerização"
description: "Implantaçãoa href=\"deployment\" id=\"deployment\"/aChatCase suporta implantação usando a tecnologia padrão da indústria aberta Docker para contêinerização e Kubernetes para orquestraç"
---

Implantação<a href="#deployment" id="deployment"></a>ChatCase suporta implantação usando a tecnologia padrão da indústria aberta **Docker** para contêinerização e ** Kubernetes** para orquestração. Nós fornecemos imagens do Docker de referência e uma implantação orquestrada de referência usando Kubernetes e Helm. Esses modelos de implantação existem para permitir que os clientes compreendam as melhores práticas de implantação da nossa plataforma.

Tal como acontece com os métodos tradicionais de implantação de premissas, os clientes podem desejar personalizar ou desenvolver a tecnologia e ideias dentro dos nossos modelos de implantação. Os modelos de implantação fornecem um ponto de partida para os clientes simplificarem a criação de implantações exclusivas de suas próprias necessidades e conjuntos de habilidades.

Onde os clientes fazem esse tipo de personalização, o ChatCase irá suportar as imagens subjacentes, desde que eles estejam usando os componentes de infraestrutura suportados listados em nossas configurações de pilha suportadas pelo produto.

<figure><img src="/files/hQre0yKRZnbjKqYbrdyb" alt=""><figcaption></figcaption></figure>A ilustração acima mostra quatro opções de implantação, ChatCase cria e suporta apenas o software representado como App1, App2 e App3. O ChatCase não cria nem suporta mais nada no diagrama – que é considerado “infraestrutura”.

Existem diferentes maneiras de implantar o software ChatCase em uma infraestrutura antes de poder ser executado. Algumas opções incluem usar scripts de shell personalizados, instaladores, Docker Compose, Kubernetes, Docker Enterprise, OpenShift, Heroku, Google Cloud, AWS ECS, AWS EKS e assim por diante.

ChatCase não cria ou suporta qualquer ferramenta de implantação e os clientes podem escolher a ferramenta de implantação com a qual se sentem mais confortáveis, muitas vezes isso será baseado em um padrão da empresa. Os clientes devem ter as competências e conhecimentos necessários para utilizar eficazmente a sua ferramenta de implantação escolhida. A ChatCase não pode fornecer assistência na ferramenta de implantação/mecanismo, nossa abordagem é apoiar padrões líderes do setor e melhores práticas para dar aos clientes a escolha de plataformas para implantar.

ChatCase tem como objetivo atualizar as imagens de referência do Docker como o sistema operacional subjacente e bibliotecas são liberados, no entanto, como estamos construindo sobre o trabalho de outros, não podemos dar garantias e garantias sobre a oportunidade de atualizações e patches para problemas de segurança como faríamos para o nosso próprio software.

Finalmente, vamos compartilhar os guias rápidos para implantar ChatCase chat ao vivo código aberto + chatbot builder:

[Desenvolvendo a Comunidade de ChatCase usando a Docker Compose](https://github.com/ChatCase/chatcase/blob/master/docker-compose/README)

[Instalar ladrilho com Kubernetes e Helm] (https://github.com/ChatCase/chatcase/blob/master/helm/README)

Se, em vez disso, você estiver interessado em nossa distribuição Software-as-a-Service, você pode [verificar nossas opções de preços](https://chatcase.com/pricing-live-chat/) para encontrar o que se adequa melhor às suas necessidades.
