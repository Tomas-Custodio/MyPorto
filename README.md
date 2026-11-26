<img width="1200" height="630" alt="portfolio-partilha-1200x630" src="https://github.com/user-attachments/assets/643be96d-d83a-40ba-b838-a81d09380e8d" />
# Portfólio | Tomás Custódio

Portfólio pessoal feito com React e TypeScript. Apresenta quem sou, os projetos que desenvolvi, as minhas skills e onde me encontrar nas redes.

## Páginas

- **Início**: apresentação, projetos desenvolvidos e o que ganhei com eles
- **Links**: LinkedIn, GitHub e Instagram
- **Skills**: tecnologias e ferramentas com que trabalho

## Tecnologias

- React
- TypeScript
- Vite
- React Router (rotas e layout com sidebar)
- Heroicons e React Icons (ícones)
- CSS puro

## Como o projeto está organizado

```
src/
├── main.tsx          # rotas do site
├── Layout.tsx        # sidebar + espaço onde a página aparece (Outlet)
├── index.css         # estilos de todo o site
└── components/
    ├── Home.tsx
    ├── Links.tsx
    ├── Me.tsx        # página de skills
   
```

O `Layout` é a moldura (sidebar sempre visível) e as páginas aparecem dentro dele, através do `Outlet`. As rotas estão todas no `main.tsx`.

## Como correr o projeto

Precisas de ter o [Node.js](https://nodejs.org) instalado.

```bash
# 1. instalar as dependências
npm install

# 2. arrancar em modo de desenvolvimento
npm run dev
```

O site abre em `http://localhost:5173`.

## Gerar a versão final

```bash
npm run build
```

Cria a pasta `dist` com o site pronto para publicar.

## Publicação

O site é publicado na Vercel. O ficheiro `vercel.json` garante que as rotas (`/links`, `/skills`) funcionam mesmo ao recarregar a página:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Autor

**Tomás Custódio**, desenvolvedor web (PHP, Laravel, MySQL, React e TypeScript).

- GitHub: [Tomas-Custodio](https://github.com/Tomas-Custodio)
- LinkedIn: [tomascustodio17](https://linkedin.com/in/tomascustodio17)
