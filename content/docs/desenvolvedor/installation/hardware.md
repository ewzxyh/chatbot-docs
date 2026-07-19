---
title: "# Requisitos do servidor para ChatCase"
description: "Escolhendo Hardware"
---

Escolhendo Hardware

# # Requisitos do servidor para ChatCase

## # Infraestrutura Mínima

A configuração mínima recomendada para hospedar o ChatCase envolve dois servidores separados:

* **Server 1**: Para hospedar o Servidor ChatCase, Painel, Widget e Web Chat.
* **Server 2**: Dedicado a MongoDB.

Esta infraestrutura básica permite que os servidores estejam em funcionamento, mas não conta com parâmetros de qualidade avançados, como desempenho, alta disponibilidade, backups, redundância e recuperação de desastres.

** Recomendação do tipo de instalação**: O tipo de instância padrão recomendado é um **AWS EC2.pequeno** (ou equivalente), que é suficiente para ambientes de teste. Para ambientes de produção, uma instância **c4.large** é ideal, proporcionando melhor desempenho e estabilidade.

** Alternativo com Heroku**: Se você preferir usar Heroku, recomendamos pelo menos o tipo **Dino Hobby** para pequenas aplicações, embora ChatCase também possa ser executado no tipo **Free** para desenvolvimento e teste.

## # Configuração do ambiente de produção

Para ambientes de produção com maiores requisitos de tráfego e confiabilidade, considere uma configuração de servidor mais robusta:

* ** Balanceador de carga**: Para gerenciar o tráfego e aumentar a disponibilidade, distribuindo a carga em várias instâncias.
* ** Escala automática**: Para ajustar dinamicamente a capacidade do servidor com base no tráfego.
* **Backup e Recuperação de Desastre**: Habilitar backups automatizados regulares e definir um plano de recuperação de desastres.

# # Componentes front-end

Para servir os componentes front-end da ChatCase (Dashboard, Widget e Web Chat), sugerimos o uso de **AWS S3 + CloudFront**. Esta configuração permite uma distribuição eficiente e escalável de conteúdo estático.

# # Otimização do trânsito

* **Ativar compressão Gzip** na CloudFront para reduzir o tráfego de rede e melhorar o desempenho de carregamento. Mais informações aqui:<https://aws.amazon.com/blogs/aws/new-gzip-compression-support-for-amazon-cloudfront/># # Base de Dados

Recomendamos as seguintes configurações para MongoDB:

Opções do MongoDB

1. **MongoDB Atlas**:
* ** M10**: Adequado para testes ou aplicações de baixo tráfego. Ele suporta backups contínuos para segurança de dados.
* **M30 ou superior**: Recomendado para aplicações de alto tráfego ou ambientes de produção, proporcionando melhor desempenho e escalabilidade.
2. ** Instalação local no modo replica set**:
* **Replica Set** com pelo menos três nós, cada um localizado em uma Zona de Disponibilidade separada para melhorar a confiabilidade e disponibilidade do banco de dados. Esta configuração reduz o risco de perda de dados e garante maior continuidade do serviço.

## # Dicas adicionais de gerenciamento de banco de dados

* **Sharding (para cargas de trabalho elevadas)**: Em casos de uso pesado do banco de dados, considere implementar o scarding para distribuir a carga e melhorar o desempenho.
* ** Monitoramento de desempenho**: Use ferramentas como MongoDB Compass ou integrações com sistemas de monitoramento (por exemplo, CloudWatch) para rastrear o status do banco de dados e otimizar a alocação de recursos.

# # Outros requisitos de infra-estrutura (serviços de terceiros)

Para executar o ChatCase em um ambiente on-premise, são necessários os seguintes serviços de infraestrutura de terceiros:

Serviços Obrigatórios

* **RabbitMQ** - *Message broker* usado para comunicação interna entre microservices.
* **Redis** - *Caching layer* que melhora o desempenho do sistema armazenando dados temporários na memória.

Estes serviços devem ser instalados e devidamente configurados antes de prosseguir com a instalação do ChatCase.

Modos de implantação

* Para ** ambientes não críticos para negócios** (por exemplo, testes ou implantações em pequena escala), todos os serviços podem ser instalados em uma configuração de ** singlenode** em uma única máquina virtual ou servidor.
* Para ambientes críticos de produção ou negócios**, uma configuração de alta disponibilidade (HA)** com replicação de serviço e failover é fortemente recomendada para garantir confiabilidade e tempo de funcionamento.

***

# # Opcional: Hospedagem de modelos de linguagem grandes (LLMs)

Se você planeja hospedar um Modelo de Linguagem Grande (LLM), como o LLaMA 3, que requer recursos computacionais substanciais, aqui estão especificações e recomendações adicionais de hardware:

# # # Especificações de hardware para hospedagem LLM

GPU

* ** Arquitetura**: NVIDIA Ampere ou mais recente (por exemplo, A100, A6000, H100).
* ** Memória GPU**: Pelo menos 40 GB de HBM2 ou superior (para modelos maiores).
* ** CUDA Cores**: Pelo menos 6.912 núcleos para lidar com cargas de trabalho de IA intensivas.
* ** NVLink**: Se disponível, use NVLink para conectar várias GPUs, aumentando a largura de banda de comunicação entre GPUs e melhorando o desempenho para modelos maiores.

CPU

* ** Multi-core CPU**: Mínimo de 16 núcleos (32 threads) para suportar cargas de trabalho distribuídas. De preferência uma recente CPU AMD EPYC ou Intel Xeon.
* **Clock Speed**: Pelo menos 2,5 GHz por núcleo.

RAM

* Quantidade **RAM**: Mínimo de 128 GB DDR4/DDR5. Para modelos particularmente grandes, considere 256 GB ou mais, especialmente se o modelo irá lidar com várias solicitações simultaneamente.

Armazenagem

* ** Tipo de armazenamento**: NVMe SSD para acesso mais rápido aos dados e melhor desempenho de E/S.
* ** Capacidade de armazenamento**: Mínimo 1 TB, com escalabilidade baseada no tamanho do modelo e quaisquer dados auxiliares. Para projetos de longo prazo, considere um sistema de armazenamento distribuído.

***

Sugestões adicionais de otimização

1. **Cooling and Power**: GPUs de alto desempenho como o A100 ou H100 requerem resfriamento adequado e fonte de alimentação estável. Assegure-se de que a infraestrutura de refrigeração seja suficiente, especialmente para as instalações.
2. **Configurações do cliente**: Para aplicações em grande escala, considere usar um cluster GPU, por exemplo, através de um sistema Kubernetes com suporte GPU. Isso permite escalonamento elástico baseado na carga de trabalho e proporciona redundância.
3. **Networking**: Para clusters, considere usar uma rede de alta velocidade (por exemplo, InfiniBand) para minimizar a latência entre nós e melhorar o desempenho geral.
4. **Contentores e virtualização**: Use Docker ou outros recipientes para rápida implantação e para garantir portabilidade do modelo em diferentes plataformas.
5. **Gestão e monitoramento de recursos**: Use ferramentas como o GPU Cloud (NGC) da NVIDIA para monitorar e gerenciar recursos, otimizando a utilização de GPU e mantendo a estabilidade do sistema.

***

# # Considerações sobre hospedagem em nuvem

ChatCase pode ser implantado em ambientes de nuvem privada ou pública, utilizando configurações de hardware dedicadas fornecidas por provedores de nuvem como AWS, Azure ou Google Cloud, com suporte para GPUs de alto nível como NVIDIA A100 e V100. Esta abordagem oferece escalabilidade e gestão simplificada sem a necessidade de manutenção de hardware físico.

***

Este guia fornece uma configuração sólida e escalável para a execução da ChatCase em ambientes de desenvolvimento e produção, com sugestões de infraestrutura opcionais para hospedagem de Modelos de Língua Grande, se necessário, permitindo que sua infraestrutura cresça com base nas demandas de tráfego.
