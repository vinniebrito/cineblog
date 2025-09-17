export default function AboutPage() {
  return (
    <main className="container mt-20">
      <h1 className="font-serif text-5xl">Sobre o CineBlog</h1>

      <div className="mt-10 card p-8 space-y-4">
        <p className="text-white/80 leading-relaxed">
          O CineBlog nasceu da paixão por cinema e da vontade de compartilhar
          histórias, análises e reflexões sobre os filmes que marcaram época.
          Aqui, você vai encontrar críticas de grandes lançamentos, comentários
          sobre clássicos e um olhar especial para as produções que brilham nas
          premiações, como o Oscar.
        </p>

        <p className="text-white/80 leading-relaxed">
          A proposta é simples: falar de cinema de um jeito acessível, mas sem
          perder a profundidade. Mais do que resenhas, buscamos entender como
          cada filme conversa com seu tempo, seus temas e com o público.
        </p>

        <p className="text-white/80 leading-relaxed">
          Seja você um cinéfilo de carteirinha ou alguém que só quer boas
          recomendações, o CineBlog é um espaço aberto para a conversa e para
          celebrar a sétima arte.
        </p>

        <div className="mt-6 space-y-1 text-sm text-muted">
          <p>Contato: contato@cineblog.com</p>
          <p>Redes sociais: @cineblog</p>
        </div>
      </div>
    </main>
  );
}
