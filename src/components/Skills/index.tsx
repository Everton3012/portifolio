import styles from "./styles.module.scss";

export const Skills = () => {
    return (
        <main className={styles.main} id="skills">
            <section className={styles.flex}>
                <div className={styles.hard}>
                    <h4>Hard Skills</h4>
                    <div>
                        <span>ReactJs</span>
                        <span>NextJs</span>
                        <span>Sass</span>
                        <span>NodeJs</span>
                        <span>ExpressJs</span>
                        <span>NestJs</span>
                        <span>MySQL</span>
                        <span>PostgreSQL</span>
                        <span>TypeScript</span>
                        <span>MongoDB</span>
                    </div>
                </div>
                <div className={styles.soft}>
                    <h4>Soft Skills</h4>
                    <div>
                        <span>Resolução de problemas</span>
                        <span>Autonomia</span>
                        <span>Capacidade de organização</span>
                        <span>Produtividade</span>
                        <span>Criatividade</span>
                        <span>Responsabilidade</span>
                    </div>
                </div>
            </section>
        </main>
    );
};
