import React from "react";
import FormularioLogin from "../../components/FormularioLogin";
import style from './Login.module.css';
import logo from '../../assets/img/logo.png';
import linha from '../../assets/img/linha.png';

export default function Login() {
    return (
        <div className={style.container}>
            <img src={logo} alt="logo" className={style.logo} />
            <FormularioLogin />

            <p className={style.linhaOu}><img src={linha} alt="linha" /> ou <img src={linha} alt="linha" /></p>

            <p className={style.cadastro}>Não tem conta? <a href="#">Cadastre-se</a></p>
        </div>
    )
}