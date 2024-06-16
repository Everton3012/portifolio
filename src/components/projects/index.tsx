import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import Dalygames from "../../../public/dalygames.png";
import DevMotors from "../../../public/devmotors.png";
import MiniBlog from "../../../public/miniblog.png";
import Tarefas from "../../../public/tarefas+.png";

export const Projects = () => {
    return (
        <section className={styles.project} id="projetos">
            <div className={styles.card}>
                <Link
                    href={
                        "https://next-ts-tarefas-f0ez62szs-evertons-projects-8acea483.vercel.app/"
                    }
                >
                    <h3>Tarefas+</h3>
                    <Image
                        className={styles.projectImage}
                        quality={100}
                        priority={true}
                        fill={true}
                        src={Tarefas}
                        alt={"imagem do projeto, clique para ser redirecionado"}
                    />
                    <p>
                        Um sistema de compatilhamento de tarefas ,feito em
                        NextJS e Firebase com sistema de login usando o google
                    </p>
                </Link>
            </div>
            <div className={styles.card}>
                <Link
                    href={
                        "https://dalygames-gqncd9xtt-evertons-projects-8acea483.vercel.app/"
                    }
                >
                    <h3>DalyGames</h3>
                    <Image
                        className={styles.projectImage}
                        quality={100}
                        priority={true}
                        fill={true}
                        src={Dalygames}
                        alt={"imagem do projeto, clique para ser redirecionado"}
                    />
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
                    <Image
                        className={styles.projectImage}
                        quality={100}
                        priority={true}
                        fill={true}
                        src={DevMotors}
                        alt={"imagem do projeto, clique para ser redirecionado"}
                    />
                    <p></p>
                </Link>
            </div>
            <div className={styles.card}>
                <Link href={"https://miniblog-ee3cb.web.app/"}>
                    <h3>MiniBlog</h3>
                    <Image
                        className={styles.projectImage}
                        quality={100}
                        priority={true}
                        fill={true}
                        src={MiniBlog}
                        alt={"imagem do projeto, clique para ser redirecionado"}
                    />
                    <p></p>
                </Link>
            </div>
        </section>
    );
};
