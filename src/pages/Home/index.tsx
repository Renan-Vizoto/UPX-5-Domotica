import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';
import Calendario from "../../components/Calendario";
import LogoHome from "../../assets/img/home_logo.png";
import IconRelogio from '../../assets/img/relogio.png'
import IconList from '../../assets/img/list.png'
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

                <div className={style.buttonContainer}>
                    <button onClick={handleProgramarHorarioClick} className={style.button}>Novo horário</button>

                </div>

                <footer className={style.menuNavegacao}>
                    <span onClick={() => navigate("/programar-horarios")} className={style.logoContainer} style={{ backgroundColor: "transparent" }}>
                        <img src={IconRelogio} alt="logo home" className={style.logoHome} />
                    </span>
                    <span onClick={() => navigate("/home")} className={style.logoContainer} >
                        <img src={LogoHome} alt="logo home" className={style.logoHome} />
                    </span>
                    <span onClick={() => navigate("/horarios-programados")} className={style.logoContainer} style={{ backgroundColor: "transparent" }} >
                        <img src={IconList} alt="logo home" className={style.logoHome} />
                    </span>
                </footer>

            </div>
        </div>
    );
}
