---
title: "HubSpot"
description: "HubSpot"
---

HubSpot

O HubSpot CRM é sem dúvida um dos mais robustos do mercado, e estamos emocionados em anunciar nossa integração nativa com ele. Esta integração permite que você grave todas as informações de contato do usuário do seu site/app diretamente em seu CRM. Vamos mergulhar!

######1.Criar um agente de IA de geração de chumbo:#

O primeiro passo é simples. Você pode começar a partir de um dos nossos modelos chatbot ou construir do zero. Para detalhar o processo, vamos começar do zero. Vão para o painel do ChatCase. Se você ainda não tem uma conta, você pode criar uma gratuitamente aqui: [Criar sua conta Free ChatCase](https://panel.chatcase.com/v3/dashboard/#/signup)

#### **2. Use um formulário para reunir os leads do usuário:**&#x20;

Como mostrado na imagem abaixo, você pode criar um formulário usando o ícone de formulário na parte superior direita de cada bloco. Existem formulários básicos e avançados predefinidos disponíveis, ou você pode criar o seu próprio a partir do zero. Para este tutorial, vamos pedir o nome do usuário e e-mail, mas você também pode pedir o nome da empresa, número de telefone ou qualquer outra informação que você precisa.

<figure><img src="/files/9pvHXKt0c3SXwxeEqRN7" alt=""><figcaption></figcaption></figure>####**3. Integração HubSpot:**&#x20;

O próximo passo é simplesmente arrastar a ação HubSpot das Integrações na barra de ferramentas do lado esquerdo, como mostrado na imagem abaixo.&#x20;

<figure><img src="/files/OQHUf75IJ2Hnv79a3ClC" alt=""><figcaption></figcaption></figure>Em seguida, clique em "Manage integration" para configurar sua integração. Na nova página, você verá um placeholder para o HubSpot API Key. Colar a sua chave aqui e salvar.

<figure><img src="/files/GxxEJPspZ7WCSL7f7jTe" alt=""><figcaption></figcaption></figure>Se você ainda não tem uma chave API, você pode obter uma gratuitamente criando um aplicativo no HubSpot. Aqui está um tutorial passo a passo:&#x20;

* Visite HubSpot.com e crie uma conta se você não tiver uma.
* Clique em "Configurações" após o login.
* Navegue para "Integrações" e selecione "Aplicativos Privados".
* Crie seu aplicativo privado.
* Na seção “Escopes”, certifique-se de ativar “Leia” e “Escreva” para crm.objects.contacts

<figure><img src="/files/VLt2PoswUnh73UsKAjZw" alt=""><figcaption></figcaption></figure>* Clique em "Criar aplicativo".
* Agora você terá acesso à sua chave de API HubSpot.

####**4. Envie dados para o seu HubSpot CRM:**&#x20;

De volta ao Design Studio, clique no bloco HubSpot que criamos antes. Precisamos definir quais atributos/parâmetros devem ser enviados para HubSpot. São eles:

* e-mail: userEmail
* primeiro nome: primeiro nome
* sobrenome: sobrenome

Por favor, considere que é essencial criar uma propriedade no HubSpot com o nome interno o mesmo que a chave no bloco da HubSpot em ChatCase.

<figure><img src="/files/GvKdz27LgVO9R4HrZ4So" alt=""><figcaption></figcaption></figure>Ótimo, estamos quase terminando. Vamos testar o bot e ver como ele envia instantaneamente dados para o nosso HubSpot CRM.&#x20;

<figure><img src="/files/mduP0FqLQNRk9kNMRT9g" alt=""><figcaption></figcaption></figure>Se você for para a seção “Contatos” do seu HubSpot CRM, você verá o contato lá.

<figure><img src="/files/nVQhyydblIp8HeTN3enV" alt=""><figcaption></figcaption></figure>Esperamos que você ache este tutorial útil.

Se precisar de mais assistência, não hesite em entrar em contato-nos[redacted@example.invalid](mailto:redacted@example.invalid).&#x20;

Feliz edifício de robôs!
