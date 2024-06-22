"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import emailJs from "@emailjs/browser";
import styles from "./styles.module.scss";

export const Form = () => {
    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [msg, setMsg] = useState<string>();

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === " " || email === " " || msg === " ") {
            alert("Prencha todos os campos");
            return;
        }

        const templeteParams = {
            to_name: "Everton",
            from_name: name,
            message: msg,
            "e-mail": email,
        };

        emailJs
            .send(
                "service_5qa9p3e",
                "template_np79dpq",
                templeteParams,
                "CQbYt8SsHjakPGjQN"
            )
            .then(
                (res) => {
                    console.log("Email Enviado", res.status, res.text);
                    alert("email Enviado com sucesso");
                    setName("");
                    setEmail("");
                    setMsg("");
                },
                (err) => {
                    console.log("Erro: ", err);
                }
            );
    };

    return (
        <div className={styles.form}>
            <form onSubmit={sendEmail}>
                <input
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    value={name}
                    type="text"
                    name="name"
                    placeholder="nome"
                />
                <input
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    name="email"
                    placeholder="email"
                />
                <textarea
                    onChange={(e:ChangeEvent<HTMLTextAreaElement>) => setMsg(e.target.value)}
                    value={msg}
                    name="msg"
                    placeholder="mensagem"
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};
