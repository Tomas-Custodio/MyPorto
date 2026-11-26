import { Link, Outlet } from "react-router";
import { HomeIcon, LinkIcon, CodeBracketIcon } from "@heroicons/react/24/outline";


export default function Layout(){

    return (

        <>
            <section className="container">

                <aside className="sidebar">

                    <nav>
                    
                        <Link to="/">
                            <HomeIcon className="icone" />
                            Início
                        </Link>

                        <Link to="/links">
                            <LinkIcon className="icone" />
                            Links
                        </Link>

                        <Link to="/skills">
                            <CodeBracketIcon className="icone" />
                            Skills
                        </Link>
        
                    </nav>

                </aside>

                <main className="main-content">
                    <Outlet />
                </main>

            </section>
        </>

    )
}