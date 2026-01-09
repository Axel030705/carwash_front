// react imports
import { createContext, useState, useEffect } from 'react';

// dayjs imports
import dayjs from 'dayjs';

export const DateContext = createContext();

 const initialState = {
    services: null,
    date: null,
    time: null,
    data: {
        name: "",
        phone: "",
        car: "",
        plate: ""
    },
    card: null
 }

export const DateProvider = ({ children }) => {
    
    // pruebas de localStorage
    // localStorage.removeItem("dates");

    const [dates, setDates] = useState(() => {
        const saved = localStorage.getItem("dates");

        if (!saved) return initialState;

        const parsed = JSON.parse(saved);

        return {
        ...parsed,
        date: parsed.date ? dayjs(parsed.date) : null,
        time: parsed.time ? dayjs(parsed.time) : null
        };
    });

    useEffect(() => {
        localStorage.setItem("dates", JSON.stringify(dates));
    }, [dates]);

    return (
        <DateContext.Provider value={{ dates, setDates, initialState }} >
            {children}
        </DateContext.Provider>
    )
    
}