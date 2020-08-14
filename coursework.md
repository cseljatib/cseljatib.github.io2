---
layout: page
title: Coursework
---

+ R stuff
+ Forest biometrics
+ Statistics


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
 
$$\begin{tikzpicture}[scale=1.0544]\small
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
\end{tikzpicture}$$
