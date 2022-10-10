# Sobre mi sitio web
este template esta basada en Jekyll, y los detalles de fuentes al respecto estan explicados mas abajo

+ Para hacerlo funcionar, principalmente hay que modificar los archivos .md que contienen cada una de las secciones del sitio web, siendo el index.md el de inicio o principal
+ en el archivo *_config.yml* se especifica el titulo de la pagina, asi como los detalles de mis cuentas de twitter, orcid, emails, etc
+ en la subcarpeta data, el archivo *navigation.yml* contiene la estructura de las secciones del sitio web

+ el url basico para entrar a esta web es http://cseljatib.github.io
+ para poder ocupar un dominio especifico, por ejemplo "eljatib.com" que compre en godaddy.com, recomiendo seguir lo explicado en https://jinnabalu.medium.com/godaddy-domain-with-github-pages-62aed906d4ef 
+ basicamente lo que debo hacer es ir a godaddy, y en configurar DNS, agregar los punteadores que se especifican aca

- In the Type “A” row update the IP address to: 185.199.108.153
(this will point your custom domain to GitHub’s server over HTTPS)

- In the CNAME row with Name “www” input your gh-pages website (cseljatib.github.io)

- At the bottom click the “ADD” button and make 3 more Type “A” rows with the IP addresses of: 185.199.109.153, 185.199.110.153, 185.199.111.153
(don’t worry when you leave the page it will alphabetize the types)

esto debiera crear unos dns de forma automatica, (al parecer)

luego:

- Go to your editor and in the repository of your website create a new file named “CNAME” in the root of your directory.

este archivo CNAME, que no debe tener extension, debe contener en la primera y unica linea "eljatib.com", que es el nombre del servidor que yo compre

despues commit y listo!!


## Detalles desde donde obtuve esta template

### Introduction
This template utilizes Jekyll, an open source static website generator, as well as a theme based largely off of the Minimal Mistakes theme by Michael Rose. The purpose of this template is to provide you with a simple, well designed website that is optimized for hosting on Github pages. We aim to reduce the technological know-how and time that is usually required for maintaining a personal or professional website.

#### Why Should I Use This?
By using this template you will have a website that is well designed, easy to maintain, free to host and easy to update. While there are many options out there for personal and professional websites, most are dependant on the platform on which they were built, and cannot be easily migrated. This template, while built for Github Pages integration, provides flexibility should you choose to host it elsewhere.

#### [Getting Started Guide](https://ncsu-libraries.github.io/jekyll-academic-docs/)
Complete documentation for getting started as well as advanced features of Jekyll Academic can be fount at [https://ncsu-libraries.github.io/jekyll-academic-docs/](https://ncsu-libraries.github.io/jekyll-academic-docs/).
