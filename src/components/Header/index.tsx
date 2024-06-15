import Link from "next/link";
import styles from "./styles.module.scss"

export const Header = () => {
    return (
        <nav>
            <ul className={styles.flex}>
                <li><Link href={"#sobre"}>Sobre min</Link></li>
                <li><Link href={"#projetos"}>Projetos</Link></li>
                <li><Link href={"#servicos"}>Serviços</Link></li>
                <li><Link href={"#skills"}>Skills</Link></li>
            </ul>
        </nav>
    );
};
