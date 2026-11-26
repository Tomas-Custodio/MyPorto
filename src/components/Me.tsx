export default function Me() {

    return (

        <section className="skills">

            <h1>Skills</h1>
            <p className="skills-sub">As tecnologias e ferramentas com que trabalho.</p>

            <div className="skills-grupos">

                <div className="skills-grupo">
                    <h3>Back-end</h3>
                    <div className="skills-tags">
                        <span className="tag">PHP</span>
                        <span className="tag">Laravel</span>
                        <span className="tag">Eloquent</span>
                        <span className="tag">Livewire</span>
                        <span className="tag">APIs REST</span>
                        <span className="tag">Sanctum</span>
                    </div>
                </div>

                <div className="skills-grupo">
                    <h3>Base de dados</h3>
                    <div className="skills-tags">
                        <span className="tag">MySQL</span>
                    </div>
                </div>

                <div className="skills-grupo">
                    <h3>Front-end</h3>
                    <div className="skills-tags">
                        <span className="tag">HTML</span>
                        <span className="tag">CSS</span>
                        <span className="tag">Tailwind CSS</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">React</span>
                        <span className="tag">TypeScript</span>
                    </div>
                </div>

            

                <div className="skills-grupo">
                    <h3>Ferramentas</h3>
                    <div className="skills-tags">
                        <span className="tag">Git e GitHub</span>
                        <span className="tag">VS Code</span>
                        <span className="tag">APIs externas (TMDB)</span>
                    </div>
                </div>


            </div>

        </section>

    )
}