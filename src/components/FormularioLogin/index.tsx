import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './FormularioLogin.module.css';

function FormularioLogin() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();

        if (email === 'login@gmail.com' && senha === 'senha123') {
            navigate("/home");
        } else {
            alert('Email ou senha incorretos. Tente novamente.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={style.form}>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={style.divInputContent}>
                <label htmlFor="senha" className={style.label}>
                    Digite sua senha
                </label>
                <input
                    type="password"
                    name="senha"
                    id="senha"
                    required
                    className={style.inputContent}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <a href="#" className={style.esqueciSenha}>Esqueci a senha</a>

            <button type="submit" className={style.botaoEntrar}>Entrar</button>
        </form>
    );
}

export default FormularioLogin;
