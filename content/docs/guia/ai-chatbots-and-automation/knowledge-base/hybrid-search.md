---
title: "Busca híbrida"
description: "Em Retrieval-Augmented Generation (RAG), a técnica mais utilizada durante o estágio de recuperação é a busca por vetores, que identifica resultados baseados na similaridade semânti"
---

## # Por que a busca híbrida é necessária?

Em Retrieval-Augmented Generation (RAG), a técnica mais utilizada durante o estágio de recuperação é a busca por vetores, que identifica resultados baseados na similaridade semântica. O processo funciona dividindo documentos de uma base de conhecimento externa em unidades semanticamente significativas, como parágrafos ou frases, e convertendo cada unidade em uma representação numérica (vetores multidimensionais) que pode ser processada por um computador. A mesma transformação é aplicada à consulta do usuário. Isso permite que o sistema reconheça conexões semânticas nuances entre a consulta e o texto armazenado. Por exemplo, as frases “gatos perseguem ratos” e “gatos caçam ratos” seriam consideradas mais intimamente relacionadas do que “gatos perseguem ratos” e “Gosto de comer presunto”. Uma vez que o sistema encontra as passagens mais relevantes, fornece-as como contexto para o modelo de linguagem grande, ajudando-o a formular uma resposta precisa.

Além de permitir a recuperação de texto semântico avançado, a pesquisa vetorial oferece vários outros benefícios:

* Reconhecendo significados relacionados (por exemplo, carro/automóvel/veículo, YouTube/Vimeo/plataforma de vídeo)
* Recuperação de línguas cruzadas (por exemplo, correspondência de consultas em inglês para o conteúdo chinês)
* Matching multimodal (por exemplo, comparando texto, imagens, áudio e vídeo em uma base de similaridade)
* Tolerância de erro (manuseamento de erros e consultas imprecisas)

No entanto, a busca por vetores é menos eficaz em certos cenários, incluindo:

* Nomes específicos: “Marie Curie”, “Tesla Model 3”
* Obtenção de abreviaturas ou frases curtas: “NLP”, “HTML”
* Encontrar IDsi exato: “AB-1234-XY”, “ver.2.4.7”

São precisamente estes os domínios em que a procura tradicional de palavras-chave continua a ser superior, em especial para:

* Correspondências exatas (por exemplo, nomes de produtos, nomes pessoais, números de catálogo)
* Consultas muito curtas (lutas de busca vector com entrada mínima, mas muitos usuários apenas digitam algumas palavras-chave)
* Termos raros ou de baixa frequência (muitas vezes cruciais para o significado, como em “Gostaria de tomar café comigo?” onde “café” e “tenho” são mais significativos do que “você” e “como”)

Para a maioria dos cenários de busca de texto, o objetivo principal é garantir que os resultados potenciais mais relevantes apareçam nos resultados dos candidatos. A busca por vetores e busca por palavras-chave cada um tem suas vantagens no campo de recuperação. A busca híbrida combina os pontos fortes das tecnologias de busca e compensa suas fraquezas. Na busca híbrida, você precisa estabelecer índices vetoriais e índices de palavras-chave no banco de dados com antecedência. Quando uma consulta de usuário é entrada, os textos mais relevantes são recuperados dos documentos usando ambos os métodos de recuperação.

<figure><img src="/doc-images/Dv4ZRW32nHzfMbGGtL44.png" alt=""><figcaption></figcaption></figure>A “busca híbrida” não tem uma definição precisa. Se no futuro usarmos novas combinações de algoritmos de busca, ainda o chamaremos de “busca híbrida”. Por exemplo, temos no roteiro para usar técnicas de grafos de conhecimento para recuperar novas relações de entidade poderosas. Diferentes sistemas de recuperação se sobressaem em encontrar várias relações sutis entre textos (parágrafos, frases, palavras), incluindo relações exatas, relações semânticas, relações temáticas, relações estruturais, relações de entidade, relações temporais, relações de evento, etc. Nenhum modo de recuperação único pode ser adequado para todos os cenários. ** A busca híbrida alcança complementaridade entre múltiplas tecnologias de recuperação através da combinação de múltiplos sistemas de recuperação. Mas no momento em ChatCase só implementamos uma abordagem mista semântica + fulltext para pesquisa.**

## # Busca de Vetores

Definição: Gerando incorporações de consulta e consultando os segmentos de texto mais semelhantes às suas representações vetoriais.

**Limite de Chunk (TopK): ** Usado para filtrar os fragmentos de texto mais semelhantes à consulta do usuário. O sistema irá ajustar dinamicamente o número de fragmentos com base no tamanho da janela de contexto do modelo selecionado. O valor padrão é 3.

<figure><img src="/doc-images/x9f5FqYS83OVkbqhoVHz.png" alt="" width="188"><figcaption></figcaption></figure>Texto completo

Definição: Indexando todas as palavras no documento, permitindo aos usuários consultar qualquer palavra e retornar fragmentos de texto contendo essas palavras.

## # Busca híbrida

Simultaneamente realiza pesquisa de texto completo e busca vetorial, aplicando uma etapa de re-ranking para selecionar os melhores resultados correspondentes à consulta do usuário de ambos os tipos de resultados de consulta.

<figure><img src="/doc-images/LYFk5twYOCGJjRwPbw0H.png" alt="" width="188"><figcaption></figcaption></figure>Você pode controlar quanto peso é dado à pesquisa de palavras-chave em comparação com a pesquisa semântica, ajustando o controle deslizante. Movendo-o para a esquerda prioriza a busca de palavras-chave, e na esquerda distante somente a busca de palavras-chave será usada. Movendo-o para a direita prioriza a busca semântica, e na extrema direita somente a busca semântica será usada. Isto permite-lhe ajustar o equilíbrio entre os dois métodos para obter os resultados mais relevantes para as suas necessidades.

Reclassificação

Habilitar re-ranking melhora muito a qualidade dos resultados, proporcionando ao mesmo tempo menos uso de tokens em LLMs e redução da latência da resposta.

<figure><img src="/doc-images/rEkBGTyutp2Z3ne8sJDE.png" alt=""><figcaption></figcaption></figure>Mais pedaços que você obter de sua loja vetorial mais probabilidade que você tem de encontrar os pedaços mais eficazes respondendo às perguntas do usuário. O alghoritm usado pelo motor de busca vetorial apenas fornece uma distância matemática em termos de correspondência de significado dos blocos em comparação com as incorporações de palavras de perguntas do usuário. Nem sempre este cálculo de distância recupera os blocos certos em ordem de relevância. Às vezes, a ordem de distância colocar em cima de seus resultados os pedaços errados, apesar do fato de que eles são semanticamente os mais relevantes.

Outro problema complementar é que você quer usar o menor número possível de blocos para passar para o seu prompt LLM. Então você vai tentar "cortar" a consulta do yout para o mínimo possível pedaços, por exemplo 5. Mas se você tiver azar, os melhores pedaços terão sido o 6o e o 7o, aqueles imediatamente após o último pedaço retornado. &#x20;

A idéia por trás de re-ranking é pedir o máximo de pedaços possível, suponha em vez de 5 pedir 50! Recuperando 5 ou 50 pedaços apenas aumento de poucos milissegundos sua busca na loja vetorial. Mas uma vez que você tem 50 blocos, você pode aplicar um modelo ML para encontrar os melhores correspondentes à consulta do usuário com o objetivo de minimizar o número de blocos a usar no prompt LLM.

Você pode descobrir mais sobre re-ranking [aqui](/docs/guia/ai-chatbots-and-automation/knowledge-base/re-ranking).
