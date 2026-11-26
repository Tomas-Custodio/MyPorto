import { Link, Outlet } from "react-router"

export default function App() {
  return (
    <div className="App">
      <header>
        <nav className="items-center" aria-label="Navegação principal">
          <Link to="/">Início</Link>
          <Link to="/details">Detalhes</Link>
          <Link to="/login">Entrar</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
