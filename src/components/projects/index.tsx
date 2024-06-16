import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";

export const Projects = () => {
    return (
        <section id="projetos">
            <div className={styles.card}>
                <Link
                    href={
                        "https://next-ts-tarefas-f0ez62szs-evertons-projects-8acea483.vercel.app/"
                    }
                >
                    <h3>Tarefas+</h3>
                    <Image src={""} alt={""} />
                    <p></p>
                </Link>
            </div>
            <div className={styles.card}>
                <Link
                    href={
                        "https://dalygames-gqncd9xtt-evertons-projects-8acea483.vercel.app/"
                    }
                >
                    <h3>DalyGames</h3>
                    <Image src={""} alt={""} />
                    <p></p>
                </Link>
            </div>
            <div className={styles.card}>
                <Link
                    href={
                        "https://devmotors-2eyov0r77-evertons-projects-8acea483.vercel.app/"
                    }
                >
                    <h3>DevMotos</h3>
                    <Image src={""} alt={""} />
                    <p></p>
                </Link>
            </div>
            <div className={styles.card}>
                <Link href={"https://miniblog-ee3cb.web.app/"}>
                    <h3>MiniBlog</h3>
                    <Image src={""} alt={""} />
                    <p></p>
                </Link>
            </div>
        </section>
    );
};
