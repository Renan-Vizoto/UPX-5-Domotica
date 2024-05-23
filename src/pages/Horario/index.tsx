import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useHorarios } from '../../context'; // Corrigido o caminho para o contexto
import style from './Horario.module.css';

export default function Horario() {
    const location = useLocation();
    const navigate = useNavigate();
    const { date } = location.state || {};
    const { addHorario } = useHorarios();

    const [time, setTime] = useState<string>("");

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTime(event.target.value);
    };

    const handleProgramarClick = () => {
        addHorario({ date, time }); // adicione o horário ao contexto
        navigate('/horarios-programados');
    };

    const handleVoltarClick = () => {
        navigate('/home');
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
            </div>

            <div className={style.buttonContainer}>
                <button onClick={handleProgramarClick} className={style.button}>Adicionar</button>
                <button onClick={handleVoltarClick} className={style.button}>Voltar para Calendário</button>
            </div>
        </div>
    );
}
