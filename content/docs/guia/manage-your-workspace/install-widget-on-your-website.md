---
title: "Instalar widget em seu site"
description: "Instalaçãoa href=\"installation\" id=\"installation\"/aPara conversar com os seus visitantes, incorpore o widget no seu site, seguindo os seguintes passos: &x20;"
---

Instalação<a href="#installation" id="installation"></a>Para conversar com os seus visitantes, incorpore o widget no seu site, seguindo os seguintes passos: &#x20;

1. **Localize o código javascript**\
Você pode encontrar seu código javascript exclusivo ChatCase no seu painel ChatCase dirigindo-se para as **Configurações > Widget > Adicionar chat ao seu site**

<figure><img src="/doc-images/FFkD1UqD78YFLcicQU20.png" alt=""><figcaption></figcaption></figure>1. **Copiar o código Javascript**

```
  <script type="application/javascript">
      window.chatcaseSettings=
      {
          projectid: "5f47e834c85eca0012c97888"
      };
      (function(d, s, id) {
          var w=window; var d=document; var i=function(){i.c(arguments);};
          i.q=[]; i.c=function(args){i.q.push(args);}; w.ChatCase=i;
          var js, fjs=d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js=d.createElement(s);
          js.id=id; js.async=true; js.src="https://widget.chatcase.com/v5/launch.js";
          fjs.parentNode.insertBefore(js, fjs);
      }(document,'script','chatcase-jssdk'));
  </script>
`$([Environment]::NewLine)
Copie o javascript acima na seção *With javascript code*.\
O exemplo é fornecido abaixo:&#x20;

<figure><img src="/doc-images/Z7XtGcYvfRd28Bqgcr9K.png" alt=""><figcaption></figcaption></figure>**3. Abra a página HTML do seu site**\
Acesse a página na qual seu site está hospedado com a ferramenta que lhe permite modificar os arquivos ou fazer login em sua respectiva plataforma Dashboard.\
&#x20;

**4. Colar o código javascript**\
Colar o código javascript na página de origem HTML entre o \`\<head><\head>\`tags.\
&#x20;

** 5. Gravar as alterações**\
Salve as mudanças, e é isso! Agora, verifique o seu site e desfrutar widget ChatCase
&#x20;

6. Verifique seu site**\
Vá ao seu site e verifique se você pode ver o widget ChatCase

<figure><img src="/doc-images/LIZhbuFGslfTxFtMdE9J.gif" alt=""><figcaption></figcaption></figure>
