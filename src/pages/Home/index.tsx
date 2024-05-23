import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';
import Calendario from "../../components/Calendario";
import LogoHome from "../../assets/img/home_logo.png";
import BackgroundPerfil from "../../assets/img/background_perfil.png";

export default function Home() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const navigate = useNavigate();

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const handleProgramarHorarioClick = () => {
        navigate('/programar-horarios', { state: { date: selectedDate } });
    };
    const handleHorariosProgramadosClick = () => {
        navigate('/horarios-programados', { state: { date: selectedDate } });
    };

    return (
        <div className={style.home}>
            <header className={style.header}>
                <img src={BackgroundPerfil} alt="BackgroundPerfil" className={style.backgroundPerfil} />
                <div className={style.boasVindas}>
                    <p className={style.ola}>Olá</p>
                    <p>Seja bem vindo!</p>
                </div>
            </header>

            <div className={style.principalSection}>
                <div className={style.h3Pai}>
                    <h3 className={style.h3}>Selecione a data para programar a medicação</h3>
                </div>

                <div className={style.calendarioDiv}>
                    <Calendario onDateChange={handleDateChange} />
                </div>

                <div className={style.divBotoes}>
                    <div className={style.horarios}>
                        <button onClick={handleProgramarHorarioClick}>Programar horários</button>
                    </div>

                    <div className={style.horarios}>
                        <button onClick={handleHorariosProgramadosClick}>Horarios programados</button>
                    </div>
                </div>

            </div>

            <footer className={style.menuNavegacao}>
                <a href="#" className={style.logoContainer}>
                    <img src={LogoHome} alt="logo home" className={style.logoHome} />
                </a>
            </footer>
        </div>
    );
}
