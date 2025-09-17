import { Post } from "@/types";

export const posts: Post[] = [
  {
    slug: "oppenheimer",
    title: "Oppenheimer: A explosão de Christopher Nolan",
    excerpt:
      "Um mergulho na mente do criador da bomba atômica e no olhar de Nolan.",
    content: `
Christopher Nolan nunca escondeu sua obsessão por tempo, escolhas morais e destinos inevitáveis. Em "Oppenheimer", ele encontra no físico J. Robert Oppenheimer o personagem perfeito para condensar tudo isso em um épico denso, psicológico e esteticamente arrebatador.

O filme não é apenas uma cinebiografia. É um estudo de personagem, uma reflexão sobre ciência e poder, e um mergulho na culpa que acompanha aqueles que mudam o rumo da humanidade. Nolan usa sua marca registrada de narrativa não linear para colocar o espectador dentro da mente fragmentada de Oppenheimer — interpretado de forma magistral por Cillian Murphy, em uma atuação que já entrou para a história do cinema.

Cada detalhe técnico é pensado para aumentar a imersão. A fotografia de Hoyte van Hoytema alterna entre o preto e branco e cores saturadas, criando contrastes que refletem os dilemas morais do protagonista. A trilha sonora de Ludwig Göransson é pulsante, quase sufocante, funcionando como um personagem à parte.

"Oppenheimer" não celebra a criação da bomba atômica — ele a coloca como um fardo. A explosão que todos esperam ver não é apenas física, mas emocional: o impacto de saber que, em nome da ciência e da política, um homem abriu a porta para o apocalipse.

No Oscar de 2024, o longa confirmou seu impacto: levou 7 estatuetas, incluindo Melhor Filme, Melhor Direção e Melhor Ator.
`,
    date: "2024-03-10",
    author: "CineBlog",
    category: "Oscar 2024",
    image: "https://lorena.r7.com/wp-content/uploads/2025/05/post_39505.jpg",
  },
  {
    slug: "poor-things",
    title: "Poor Things: Uma fantasia ousada com Emma Stone",
    excerpt:
      "O surrealismo de Yorgos Lanthimos em um conto excêntrico e provocador.",
    content: `
"Poor Things" é daqueles filmes que desafiam o público logo de cara. Yorgos Lanthimos cria uma fábula visualmente deslumbrante e desconfortável, misturando fantasia, comédia e crítica social.

A história de Bella Baxter, vivida por Emma Stone, é sobre renascimento e descoberta. Com a mente de uma criança em um corpo adulto, Bella percorre um mundo que a enxerga como objeto, mas que ela mesma decide explorar com liberdade radical. Emma Stone entrega uma das performances mais corajosas da sua carreira, oscilando entre inocência e ousadia sem perder humanidade.

Visualmente, o filme é um espetáculo. A direção de arte, os figurinos e a fotografia criam um universo quase de pintura surrealista. Lanthimos brinca com distorções, cores vibrantes e cenários que parecem escapar da realidade. Ao mesmo tempo, o roteiro não foge de discutir questões como autonomia, poder e gênero.

No Oscar, Emma Stone levou a estatueta de Melhor Atriz, consolidando sua posição como uma das intérpretes mais importantes da geração. "Poor Things" mostra como o cinema pode ser ao mesmo tempo provocador e encantador.
`,
    date: "2024-03-10",
    author: "CineBlog",
    category: "Oscar 2024",
    image:
      "https://www.indiewire.com/wp-content/uploads/2023/12/Poor-Things-1.jpg",
  },
  {
    slug: "killers-of-the-flower-moon",
    title: "Killers of the Flower Moon: O épico de Martin Scorsese",
    excerpt:
      "Uma história real sobre ganância, poder e violência contra o povo Osage.",
    content: `
Martin Scorsese volta às telas com uma obra que mistura épico histórico e investigação moral. "Killers of the Flower Moon" revisita os assassinatos em série da nação indígena Osage, nos Estados Unidos dos anos 1920, um capítulo sombrio da história americana.

O filme não tem pressa: suas mais de três horas de duração são usadas para detalhar a complexa rede de interesses que levou ao massacre. Leonardo DiCaprio interpreta Ernest Burkhart, um homem dividido entre a lealdade à sua esposa Osage, Molly (Lily Gladstone), e a manipulação de seu tio William Hale (Robert De Niro), símbolo máximo da ganância branca.

Scorsese constrói um épico de denúncia, mas também profundamente humano. Lily Gladstone é o coração do filme, entregando uma atuação silenciosa e poderosa que transmite tanto dor quanto dignidade. A fotografia de Rodrigo Prieto reforça a grandiosidade dos cenários e a intimidade dos dramas pessoais.

Embora não tenha levado tantas estatuetas quanto esperado, "Killers of the Flower Moon" foi celebrado pela crítica e destacou a importância de revisitar histórias que foram apagadas da memória oficial.
`,
    date: "2024-03-10",
    author: "CineBlog",
    category: "Oscar 2024",
    image:
      "https://media.newyorker.com/photos/6532a2c430a57c5d593bd8f6/master/w_2560%2Cc_limit/brody-killers%2520of%2520the%2520flower%2520moon.jpg",
  },
  {
    slug: "barbie",
    title: "Barbie: Entre sátira e espetáculo pop",
    excerpt:
      "Greta Gerwig transforma a boneca mais famosa em um manifesto divertido e crítico.",
    content: `
"Barbie" poderia ser apenas um filme colorido para vender nostalgia, mas nas mãos de Greta Gerwig se torna uma sátira pop afiada e surpreendente. A diretora cria uma narrativa que vai além do brilho rosa para discutir identidade, expectativas sociais e liberdade.

Margot Robbie brilha como a Barbie estereotipada que começa a questionar seu papel no mundo. Mas é Ryan Gosling, como Ken, quem rouba várias cenas com uma mistura de humor e vulnerabilidade que ganhou o público. O filme equilibra referências culturais, piadas metalinguísticas e momentos de pura emoção.

Visualmente, "Barbie" é um espetáculo. Cenários vibrantes, figurinos icônicos e uma trilha sonora cheia de hits criam um ambiente que celebra e ironiza ao mesmo tempo o universo da boneca.

No Oscar, levou Melhor Canção Original com "What Was I Made For?", mas o impacto cultural foi muito além dos prêmios. "Barbie" se consolidou como um fenômeno pop e uma das conversas mais relevantes do ano.
`,
    date: "2024-03-10",
    author: "CineBlog",
    category: "Oscar 2024",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzJjZDdiMTUtNDRhOS00MGIzLWE3ZjAtZTRjMTk2ZDBlYWU5XkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find((p) => p.slug === slug);

export const getAllSlugs = () => posts.map((p) => p.slug);
