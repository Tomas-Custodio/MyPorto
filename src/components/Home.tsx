import { Link } from "react-router";
import {
  FolderIcon,
  LightBulbIcon,
  ShoppingCartIcon,
  NewspaperIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <section className="home">

      <header className="home-hero">

        <h1>Olá, eu sou o Tomás Custódio</h1>

        <p>
          Sou desenvolvedor web e Trabalho com as seguintes tecnologias {<br></br>}PHP, Laravel, MySQL, React
          e TypeScript, desenvolvendo sistemas e interfaces para diferentes
          necessidades.
        </p>

        <div className="home-botoes">
          <Link to="/links" className="botao">Ver os meus links</Link>
          <Link to="/skills" className="botao-secundario">Ver skills</Link>
        </div>

      </header>

      <section className="home-secao">

        <h2 className="titulo-icone">
          <FolderIcon className="icone-titulo" />
          Projetos que desenvolvi
        </h2>

        <div className="home-cards">

          <div className="card">

            <ShoppingCartIcon className="icone-card" />

            <h3>WiseStore</h3>

            <p>
              WiseStore é uma loja virtual desenvolvida com Laravel, Livewire, PHP e MySQL.
                Inclui gestão de produtos e categorias, carrinho de compras, encomendas e 
                uma área administrativa para gerir a loja.

              Tecnologias: PHP, Laravel, Livewire, MySQL, HTML, CSS, Git & GitHub.
            </p>
          </div>

          <div className="card">

            <NewspaperIcon className="icone-card" />
            <h3>Portal de Noticias</h3>

            <p>
             Portal de notícias desenvolvido com Laravel e Tailwind CSS, onde os utilizadores podem ler publicações, reagir com likes, comentar e receber notificações, e onde os administradores gerem todo o conteúdo através de uma área dedicada.
            </p>

          </div>

          <div className="card">

            <CalendarDaysIcon className="icone-card" />
            <h3>WaveOn</h3>

            <p>
              WaveOn é uma aplicação web de descoberta musical desenvolvida com Laravel, que obtém e apresenta conteúdos musicais a partir de uma API externa.

              Permite explorar músicas e categorias musicais, pesquisar faixas e consultar os detalhes de cada uma.

              Tecnologias: PHP, Laravel, Blade, Tailwind CSS e integração com APIs REST.
            </p>

          </div>

        </div>

        <section>

            <h2 className="titulo-icone">
              <LightBulbIcon className="icone-titulo" />
              O que eu ganhei com isto?
            </h2>

            <p>
              Com estes projetos ganhei experiência prática no desenvolvimento de
              aplicações web, desde a conceção até à implementação de várias
              funcionalidades. Aprendi a trabalhar com diferentes tecnologias e
              frameworks, a resolver problemas e a criar soluções eficientes e
              escaláveis.
            </p>

            <p>
              Na parte técnica, ganhei domínio sobre o back-end: modelar bases de
              dados, ligar as tabelas entre si, criar autenticação de utilizadores,
              construir APIs e organizar o código para ser fácil de manter. Com o
              Livewire aprendi a fazer interfaces dinâmicas sem complicar o
              front-end, e com o Laravel aprendi a respeitar uma estrutura clara,
              onde cada coisa tem o seu lugar.
            </p>

            <p>
              Cada projeto trouxe problemas que eu não sabia resolver no início.
              Pesquisando e lendo documentações, testando hipóteses e não
              desistindo, cheguei a conhecer as soluções que resolveram esses
              problemas, que hoje são uma experiência para mim.
            </p>

            <p>
              Hoje consigo analisar numa ideia e preparar uma ideia para implementá-la
              para uma aplicação web funcional,
              com autonomia e com cuidado no resultado final. Vê a minha {" "}
              <Link to="/links">página de links</Link>. Por lá podes acompanhar os
              meus projetos e seguir-me nas diferentes plataformas.
            </p>

          </section>

      </section>

    </section>
  );
}