import React from "react";
import { useNavigate } from 'react-router-dom';
import { useHorarios } from '../../context';
import style from './Programados.module.css';
import LogoHome from "../../assets/img/home_logo.png";
import IconRelogio from '../../assets/img/relogio.png'
import IconList from '../../assets/img/list.png'

export default function Programados() {
    const navigate = useNavigate();
    const { horarios } = useHorarios();

    const handleProgramarClick = () => {
        const lastDate = horarios.length > 0 ? horarios[horarios.length - 1].date : null;
        navigate('/programar-horarios', { state: { date: lastDate } });
    };

    const handleVoltarClick = () => {
        navigate('/home');
    };

    return (
        <div className={style.container}>
            <div className={style.header}>
                <h3>Horários Programados</h3>
            </div>

            <div>
                {horarios.map((horario, index) => (
                    <div key={index} className={style.horarios}>
                        <p>Data: {horario.date ? new Date(horario.date).toLocaleDateString() : 'Nenhuma data selecionada'}</p>
                        <p>Horário: {horario.time || 'Nenhum horário selecionado'}</p>
                    </div>
                ))}
            </div>

            <div className={style.buttonContainer}>
                <button onClick={handleProgramarClick} className={style.button}>Adicionar Novo Horário</button>
                <button onClick={handleVoltarClick} className={style.button}>Voltar para Calendário</button>
            </div>

            <footer className={style.menuNavegacao}>
                <span onClick={() => navigate("/programar-horarios")} className={style.logoContainer} style={{ backgroundColor: "transparent" }}>
                    <img src={IconRelogio} alt="logo home" className={style.logoHome} />
                </span>
                <span onClick={() => navigate("/home")} className={style.logoContainer} style={{ backgroundColor: "transparent" }}>
                    <img src={LogoHome} alt="logo home" className={style.logoHome} />
                </span>
                <span onClick={() => navigate("/horarios-programados")} className={style.logoContainer}  >
                    <img src={IconList} alt="logo home" className={style.logoHome} />
                </span>
            </footer>
        </div>
    );
}
