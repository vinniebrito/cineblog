# 🎬 CineBlog – Blog de Cinema com Next.js + Tailwind

Um blog responsivo e moderno para publicar críticas e análises de filmes, com foco em produções premiadas no Oscar.  
Projeto feito em **Next.js App Router** usando **Tailwind CSS**.

## ✨ Funcionalidades

- **Layout Global** com navegação entre **Home** e **Sobre**, design escuro e consistente.
- **Página Inicial** listando posts com título, resumo, data e link para leitura completa.
- **Posts Dinâmicos** (`/posts/[slug]`) com:
  - Conteúdo completo do artigo
  - Metadados (título, data, autor)
  - **Botão de Curtir** interativo com contador.
- **Página Sobre** apresentando o CineBlog, contato e redes sociais.
- **Pesquisa Modal** na navbar para encontrar posts rapidamente.
- **Design Responsivo** mobile-first e tipografia otimizada.

## 🏗️ Tecnologias

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [lucide-react](https://lucide.dev/) – ícones
- Google Fonts – Inter & Playfair Display

## 🔌 Arquitetura

**Server Components (padrão)**

- `app/layout.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/posts/[slug]/page.tsx`

**Client Components**

- `components/LikeButton.tsx` – botão de curtir com `useState`
- `components/Navbar.tsx` – modal de busca e eventos de teclado
- `components/Search.tsx` – filtro em tempo real
