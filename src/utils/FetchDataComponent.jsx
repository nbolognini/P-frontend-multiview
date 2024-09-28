import React, { useEffect } from 'react';
import { getItem, setItem } from './localStorage';

const FetchDataComponent = () => {
    useEffect(() => {
        const user = getItem('user'); // Obtener el valor de 'user' desde localStorage
        const data = { user_name_id: user.name }; // Crear el objeto a enviar

        //limpio data de ls
        //localStorage.removeItem('signals');
        fetch(`${import.meta.env.VITE_API_BASE_URL}/getChannelAndSignal`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data) // Convertir la variable data a JSON
        })
            .then(response => response.json())
            .then(data => {
                setItem('signals', data); // Guardar los datos en localStorage
            })
            .catch(error => {
                console.error('Error fetching signals:', error);
            });
    }, []);

    return null; // Puedes retornar null o algún JSX si es necesario
};

export default FetchDataComponent;