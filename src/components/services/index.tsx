import Link from "next/link";
import styles from "./styles.module.scss";

export const Services = () => {
    return (
        <main>
            <h3 className={styles.title}>Serviços</h3>
            <section className={styles.project} id="servicos">
                <div className={styles.card}>
                    <div>
                        <Link href={"#contato"}>
                            <h3>Criação e manutenção de sites</h3>
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                <div>
                        <Link href={"#contato"}>
                            <h3>Criação e manutenção de sistemas</h3>
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                <div>
                        <Link href={"#contato"}>
                            <h3>criação de APIs</h3>
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                <div>
                        <Link href={"#contato"}>
                            <h3>Criação de Landing pages</h3>
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                <div>
                        <Link href={"#contato"}>
                            <h3>Criação de aplicativos</h3>
                        </Link>
                    </div>
                </div>

            </section>
        </main>
    );
};
