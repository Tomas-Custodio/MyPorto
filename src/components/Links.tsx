export default function Links() {

  return (

    <section className="links">

      <h1>Links</h1>

      <h2>Onde me podes encontrar.</h2>

      <div className="links-cards">

        <a
          className="card-link"
          href="https://linkedin.com/in/tomascustodio17"
          target="_blank"
          rel="noreferrer"
        >
          <h3>LinkedIn</h3>
          <p>O meu perfil profissional.</p>
        </a>

        <a
          className="card-link"
          href="https://github.com/Tomas-Custodio"
          target="_blank"
          rel="noreferrer"
        >
          <h3>GitHub</h3>
          <p>O meu código e projetos.</p>
        </a>

        <a
          className="card-link"
          href="https://instagram.com/o_teu_usuario"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Instagram</h3>
          <p>Dicas e conteúdo sobre programação.</p>
        </a>

      </div>

    </section>

  )
}