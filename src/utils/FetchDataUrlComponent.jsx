import React, { useEffect } from 'react';
import { setItem } from './localStorage';

const FetchDataUrlComponent = () => {
    useEffect(() => {
        const data = { user_name_id: 'nbolognini' }; // Define los datos que necesitas enviar en el cuerpo de la solicitud
                                            // Se pone clave y valor, en este caso se pone user y nbolognini

        fetch('http://localhost:3000/getChannelAndSignal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify("data")
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

export default FetchDataUrlComponent;











    //ejemplo para tomar como modelo:
//     fetch('http://localhost:3000/validate/', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('El servidor no responde');
//         }
//         return response.text();
//     })
//     .then(data => {
//         if (data) {
//             const parsedData = JSON.parse(data);
//             onLogin();
//             return parsedData;
//         } else {
//             onLoginOut();
//         }
//     })
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.error(error);
//         if (error.message === 'net::ERR_CONNECTION_REFUSED') {
//             window.alert('ERROR DE CONEXION CON SERVER BACKEND');
//         }
//         console.error("NO SE HA PODIDO ESTABLECER CONEXION CON SERVER BACKEND");
//         window.alert("NO SE HA PODIDO ESTABLECER CONEXION CON SERVER BACKEND");
//         window.alert("NO SE HA PODIDO ESTABLECER CONEXION CON LA BASE DE DATOS")

//     })
// }