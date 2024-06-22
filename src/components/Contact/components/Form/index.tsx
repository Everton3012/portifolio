'use client';
import { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss"

export const Form = () => {

    const [nome, setNome] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [msg, setMsg] = useState<string>();

  return (
    <div className={styles.form}>
        <form>
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.value} value={nome} type="text" name="nome" placeholder="nome" />
            <input onChange={(e: ChangeEvent<HTMLInputElement>) => e.target.value} value={email}  type="text" name="email" placeholder="email" />
            <textarea onChange={(e: ChangeEvent<HTMLTextAreaElement>) => e.target.value} value={msg} name="msg" placeholder="mensagem"/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
