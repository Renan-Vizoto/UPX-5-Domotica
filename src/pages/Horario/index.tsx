import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useHorarios } from '../../context'; // Corrigido o caminho para o contexto
import style from './Horario.module.css';
import LogoHome from "../../assets/img/home_logo.png";
import IconRelogio from '../../assets/img/relogio.png'
import IconList from '../../assets/img/list.png'

export default function Horario() {
    const location = useLocation();
    const navigate = useNavigate();
    const { date } = location.state || {};
    const { addHorario } = useHorarios();

    const [time, setTime] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value);
    };

    const handleProgramarClick = () => {
        if (!date) {
            setError("Por favor, volte para o calendário e selecione uma data.");
            return;
        }

        addHorario({ date, time }); // Adicione o horário ao contexto
        navigate('/horarios-programados');
    };


    return (
        <div className={style.container}>
            <div className={style.h3Pai}>
                <h3 className={style.h3}>
                    Data selecionada: {date ? new Date(date).toLocaleDateString() : 'Nenhuma data selecionada'}
                </h3>
            </div>

            <div className={style.horarioPai}>
                <p className={style.pHorario}>
                    Defina o horário em que o dispenser vai abrir
                </p>
                <input type="time" className={style.horario} value={time} onChange={handleTimeChange} />

                <select className={style.mobileSelect}>
                    <option value="">Selecione um slot</option>
                    <option value="option1">Slot 1</option>
                    <option value="option2">Slot 2</option>
                    <option value="option3">Slot 3</option>
                    <option value="option3">Slot 4</option>
                    <option value="option3">Slot 5</option>
                    <option value="option3">Slot 6</option>
                    <option value="option3">Slot 7</option>
                    <option value="option3">Slot 8</option>
                </select>
            </div>

            <div className={style.buttonContainer}>
                <button
                    onClick={handleProgramarClick}
                    className={style.button}
                    style={{ backgroundColor: date ? '' : 'gray', cursor: date ? 'pointer' : 'not-allowed' }}
                    disabled={!date}
                >
                    Adicionar
                </button>

            </div>

            {/* Verifique se a mensagem de erro é exibida aqui */}
            {error && <p className={style.errorMessage}>{error}</p>}

            <footer className={style.menuNavegacao}>
                <span onClick={() => navigate("/programar-horarios")} className={style.logoContainer}>
                    <img src={IconRelogio} alt="logo home" className={style.logoHome} />
                </span>
                <span onClick={() => navigate("/home")} className={style.logoContainer} style={{ backgroundColor: "transparent" }}>
                    <img src={LogoHome} alt="logo home" className={style.logoHome} />
                </span>
                <span onClick={() => navigate("/horarios-programados")} className={style.logoContainer} style={{ backgroundColor: "transparent" }} >
                    <img src={IconList} alt="logo home" className={style.logoHome} />
                </span>
            </footer>
        </div>
    );
}
