import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Importando o Axios
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

        const isoDate = new Date(date).toISOString().split('T')[0]; // Formata a data para o padrão ISO sem a parte do tempo
        const [hours, minutes] = time.split(':');
        const dateObj = new Date(date);
        dateObj.setUTCHours(Number(hours) + 3, Number(minutes), 0, 0); // Adiciona 3 horas ao horário UTC
        const isoDateTime = dateObj.toISOString(); // Converte para o formato ISO

        axios.post('http://localhost:3333/schedule', {
            time: isoDateTime,
            value: '1' // O valor desejado, pode ser substituído por qualquer valor que você queira enviar
        })
        .then((response) => {
            console.log(response.data);
            addHorario({ date, time }); // Adicione o horário ao contexto
            navigate('/horarios-programados');
        })
        .catch((error) => {
            console.error('Erro ao programar horário:', error);
            setError('Erro ao programar horário. Tente novamente.');
        });
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
