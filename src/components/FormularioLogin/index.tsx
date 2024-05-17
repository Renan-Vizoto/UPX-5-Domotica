import React from "react";
import style from './FormularioLogin.module.css';

function FormularioLogin() {
    return (
        <form action="" className={style.form}>
            <div className={style.divInputContent}>
                <label htmlFor="email" className={style.label}>
                    Digite seu email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="login@gmail.com"
                    required
                    className={style.inputContent}
                />
            </div>
            <div className={style.divInputContent}>
                <label htmlFor="" className={style.label}>
                    Digite sua senha
                </label>
                <input
                    type="password"
                    name="senha"
                    id="senha"
                    required
                    className={style.inputContent}
                />
            </div>

            <a href="#" className={style.esqueciSenha}>Esqueci a senha</a>

            <button type="submit" className={style.botaoEntrar}>Entrar</button>
        </form>
    )
}


export default FormularioLogin;