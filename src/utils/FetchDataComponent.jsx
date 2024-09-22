import React, { useEffect } from 'react';
import { setItem } from './localStorage';

const FetchDataComponent = () => {
    useEffect(() => {
        fetch('http://localhost:3000/signals')
            .then(response => response.json())
            .then(data => {
                setItem('signals', data); // Guardar los datos en localStorage
            })
            .catch(error => {
                console.error('Error fetching signals:', error);
            });
    }, []);

    return;
};

export default FetchDataComponent;