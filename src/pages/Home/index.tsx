import React from "react";
import style from './Home.module.css';
import Calendario from "../../components/Calendario";
import LogoHome from "../../assets/img/home_logo.png";
import BackgroundPerfil from "../../assets/img/background_perfil.png";

export default function Home() {
    return (
        <div className={style.home}>
            <header className={style.header}>
                <img src={BackgroundPerfil} alt="BackgroundPerfil" className={style.backgroundPerfil} />
                <div className={style.boasVindas}>
                    <p className={style.ola}>Olá</p>
                    <p>Seja bem vindo!</p>
                </div>
            </header>

            <section>
                <div className={style.h3Pai}>
                    <h3 className={style.h3}>Selecione a data para programar a medicação</h3>
                </div>

                <div className={style.calendarioDiv}>
                    <Calendario />
                </div>

                <div className={style.horarios}>
                    <a href="#">Programar horários</a>
                </div>
            </section>

            <footer className={style.menuNavegacao}>
                <a href="#" className={style.logoContainer}>
                    <img src={LogoHome} alt="logo home" className={style.logoHome} />
                </a>
            </footer>
        </div>
    )
}