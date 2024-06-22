import styles from "./styles.module.scss"
import Link from "next/link";
import { Form } from "./components/Form";
import {BiLogoWhatsapp, BiMailSend, BiLogoGithub, BiLogoLinkedin} from "react-icons/bi"

export const Contact = () => {
    return (
        <main className={styles.main}>
            <h3>Contato</h3>
            <footer id="contato" className={styles.footer}>
            <div className={styles.links}>
                <Link className={styles.whats} target="blank" href="https://api.whatsapp.com/send?phone=5571991264179"><BiLogoWhatsapp size={30} /></Link>
                <Link  className={styles.linkedin}  target="blank" href={"https://www.linkedin.com/in/everton-brandao-16938922b/"} ><BiLogoLinkedin size={30}/></Link>
                <Link  className={styles.github}  target="blank" href={"https://github.com/Everton3012"} > <BiLogoGithub size={30}/></Link>
                <Link  className={styles.email}  target="blank" href={"mailto:evertonmoura137@outlook.com"}><BiMailSend size={30}/></Link>
            </div>
            <div className={styles.form}>
                <Form />
            </div>
        </footer>
        </main>
    );
};
