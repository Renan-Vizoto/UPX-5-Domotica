import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from './Calendario.module.css';
import IconInfo from "../../assets/img/info-circle-fill.svg";

function Calendario() {
    const [date, setDate] = useState<Date | null>(new Date());

    const handleDateChange = (value: Date | Date[] | null) => {
        if (Array.isArray(value)) {
            setDate(value[0] || null);
        } else {
            setDate(value);
        }
    };

    return (
        <div className={style.calendarioContainer}>
            <div className={style.tutorialDiv}>
                <a className={style.tutorialLink} href="#"><img className={style.tutorialInfo} src={IconInfo} alt="IconInfo" /> Tutorial</a>
            </div>
            <Calendar
                onChange={(value) => handleDateChange(value as Date | Date[] | null)}
                value={date}
                className={style.calendario}
            />
            <div className={style.selectedDate}>
                <h3>Data Selecionada:</h3>
                <p>{date ? date.toDateString() : 'Nenhuma data selecionada'}</p>
            </div>
        </div>
    );
}

export default Calendario;
