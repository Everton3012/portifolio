import Image from "next/image";
import hero from "../../public/dev.jpg";
import styles from "./page.module.scss";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import Link from "next/link";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/services";
import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <>
            <main>
                <header className={styles.container}>
                    <Header />
                </header>

                <section className={styles.container}>
                    <div className={styles.flex}>
                        <div>
                            <h3>Olá , me chamo Everton Brandão</h3>
                            <h1>Full-stack Developer</h1>
                            <Link href={"#contato"}>Contato</Link>
                        </div>
                        <div className={styles.containerChib}>
                            <Image
                                priority
                                quality={100}
                                className={styles.imageChib}
                                fill={true}
                                alt={"personagem de representação"}
                                src={hero}
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.container}>
                    <About />
                </section>
                <section className={styles.container}>
                    <Projects />
                </section>
                <section className={styles.container}>
                    <Skills />
                </section>
                <section className={styles.container}>
                    <Services />
                </section>
                <section className={styles.container}>
                    <Contact/>
                </section>
            </main>
        </>
    );
}
