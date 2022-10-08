---
layout: resume
title: Biometría forestal
excerpt: "biometria forestal"

---

<style>H1{color:DarkRed;}</style>
<style>H2{color:DarkGreen;}</style>

--------

Este sitio web contiene enlances a ejemplos de análisis estadísticos no cubiertos en el libro [**Análisis de datos con el programa estadístico R: una introducción aplicada**](https://tienda.zigzag.cl/9789566086109-analisis-de-datos-con-el-programa-estadistico-r.html) de Christian Salas-Eljatib ([ver más detalles en este link](./rlibro.md)). 

--------

## Modelos de altura-diametro


A height-diameter model has the following structure
\begin{equation}
   h_i=f({\theta},d_i) + \epsilon_i,  \label{eq:modh.0}
\end{equation}       
where: $h_i$ is height at the $i$-th tree;
$d_i$ is diameter at breast height at the $i$-th tree;
$f()$ is a mathematical function; 
${\theta}$ is a vector of coefficients (i.e., parameters)  of model $f()$;
$\epsilon_{i}$ is the random term for the $i$-th tree following a Gaussian 
 probability density function having an expected value of zero and variance 
  $\sigma^2_{\epsilon}$. 
 Noice that function $f()$ could either be linear o non-linear. 
 
<img src="https://i.upmath.me/svg/%5Cbegin%7Btikzpicture%7D%5Bscale%3D1.0544%5D%5Csmall%0A%5Cbegin%7Baxis%7D%5Baxis%20line%20style%3Dgray%2C%0A%09samples%3D120%2C%0A%09width%3D9.0cm%2Cheight%3D6.4cm%2C%0A%09xmin%3D-1.5%2C%20xmax%3D1.5%2C%0A%09ymin%3D0%2C%20ymax%3D1.8%2C%0A%09restrict%20y%20to%20domain%3D-0.2%3A2%2C%0A%09ytick%3D%7B1%7D%2C%0A%09xtick%3D%7B-1%2C1%7D%2C%0A%09axis%20equal%2C%0A%09axis%20x%20line%3Dcenter%2C%0A%09axis%20y%20line%3Dcenter%2C%0A%09xlabel%3D%24x%24%2Cylabel%3D%24y%24%5D%0A%5Caddplot%5Bred%2Cdomain%3D-2%3A1%2Csemithick%5D%7Bexp(x)%7D%3B%0A%5Caddplot%5Bblack%5D%7Bx%2B1%7D%3B%0A%5Caddplot%5B%5D%20coordinates%20%7B(1%2C1.5)%7D%20node%7B%24y%3Dx%2B1%24%7D%3B%0A%5Caddplot%5Bred%5D%20coordinates%20%7B(-1%2C0.6)%7D%20node%7B%24y%3De%5Ex%24%7D%3B%0A%5Cpath%20(axis%20cs%3A0%2C0)%20node%20%5Banchor%3Dnorth%20west%2Cyshift%3D-0.07cm%5D%20%7B0%7D%3B%0A%5Cend%7Baxis%7D%0A%5Cend%7Btikzpicture%7D" alt="\begin{tikzpicture}[scale=1.0544]\small
\begin{axis}[axis line style=gray,
	samples=120,
	width=9.0cm,height=6.4cm,
	xmin=-1.5, xmax=1.5,
	ymin=0, ymax=1.8,
	restrict y to domain=-0.2:2,
	ytick={1},
	xtick={-1,1},
	axis equal,
	axis x line=center,
	axis y line=center,
	xlabel=$x$,ylabel=$y$]
\addplot[red,domain=-2:1,semithick]{exp(x)};
\addplot[black]{x+1};
\addplot[] coordinates {(1,1.5)} node{$y=x+1$};
\addplot[red] coordinates {(-1,0.6)} node{$y=e^x$};
\path (axis cs:0,0) node [anchor=north west,yshift=-0.07cm] {0};
\end{axis}
\end{tikzpicture}" />


+ [Ajuste de modelo de altura-diametro](/statstuff/datosEspa.html)



### Comentarios/sugerencias?
Cualquier error, comentario o sugerencia, no dude en contactarme [vía e-mail](mailto:cseljatib@gmail.com), mis correos son cseljatib@gmail.com y/o también christian.salas@aya.yale.edu y/o christian.salas@maine.edu. 

<!-- ### Footer
+ [Usando un modelo de ahusamiento](/biolibro/ahusamientoTrozado.html)
* **[Miscellaneous](./misce.md)** 
<style>H2{color:DarkOrange;}</style>
<style>p{color:Black;}</style>
<img src="/images/portadaLibro.png" width="800" height="700">
salas20 /myPubs/2020hgrate_ecoModelling.pdf (https://doi.org/10.1016/j.ecolmodel.2020.109198)
ponce 17 `doi:10.3390/f8090329`
sensors cifuentes 2018 `doi:10.3390/s18103357`.
salas10 http://rchn.biologiachile.cl/pdfs/2010/3/Soto_et_al_2010.pdf
salas06 /myPubs/2006xylofagos_RebolledoSalas_Bosque.pdf
Last updated: August 2020 -->
