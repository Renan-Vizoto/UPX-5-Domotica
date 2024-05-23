import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Horario {
    date: Date | null;
    time: string;
}

interface HorariosContextType {
    horarios: Horario[];
    addHorario: (horario: Horario) => void;
}

interface HorariosProviderProps {
    children: ReactNode;
}

const HorariosContext = createContext<HorariosContextType | undefined>(undefined);

export const useHorarios = () => {
    const context = useContext(HorariosContext);
    if (!context) {
        throw new Error('useHorarios must be used within a HorariosProvider');
    }
    return context;
};

export const HorariosProvider: React.FC<HorariosProviderProps> = ({ children }) => {
    const [horarios, setHorarios] = useState<Horario[]>([]);

    const addHorario = (horario: Horario) => {
        setHorarios((prevHorarios) => [...prevHorarios, horario]);
    };

    return (
        <HorariosContext.Provider value={{ horarios, addHorario }}>
            {children}
        </HorariosContext.Provider>
    );
};
