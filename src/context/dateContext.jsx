// react imports
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// personal imports
import fetchBase from '@/fetch/fetch.jsx';

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
        plate: null
    },
    pay_method: 'efectivo'
 }

export const DateProvider = ({ children }) => {
    
    // pruebas de localStorage
    // localStorage.removeItem("dates");
    const [dateConfirm, setDateConfirm] = useState({});

    const navigate = useNavigate();

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

    const savedates = async (required) => {

        // console.log(required);
        const dateconfirm = {
            ...dates,
            date: dates.date ? dates.date.format('YYYY-MM-DD') : null,
            time: dates.time ? dates.time.format('HH:mm') : null,
        };

        const data = await fetchBase('api/savedate', {
            method: 'POST',
            body: required
        });


        if (data.success) {
            setDates(initialState);
            localStorage.setItem("dateconfirm", JSON.stringify(dateconfirm));
            alert(data.message);
            navigate('/confirmdate');
        }else {
            alert('Error: ' + data.message);
            console.log('Error: ' + data.message);
        }

    }

    return (
        <DateContext.Provider value={{ dates, setDates, initialState, savedates, dateConfirm, setDateConfirm }} >
            {children}
        </DateContext.Provider>
    )
    
}