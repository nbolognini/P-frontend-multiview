import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { getItem } from './localStorage';
import './DisplayDataComponent.css'; // Importar el archivo CSS
import logo_none from '../ui/img/logo_none.jpg'; // Importar la imagen del logo none
import logo_error from '../ui/img/logo_error.jpg'; // Importar la imagen del logo error

import logo_canal26 from '../ui/img/logo_canal26.jpg'; // Importar la imagen del logo canal26
import logo_telemax from '../ui/img/logo_telemax.jpg'; // Importar la imagen del logo telemax


const DisplayMultiviewComponent = () => {
    const signals = getItem('signals');

    const [logos, setLogos] = useState({});

    useEffect(() => {
        const fetchLogos = async () => {
            const newLogos = {};
            for (const signal of signals) {
                const imageName = `${'logo_' + signal.channel_id.toLowerCase()}.jpg`;
                try {
                    const response = await fetch('http://localhost:3000/imageLogo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ imageName }),
                    });
                    const data = await response.json();
                    newLogos[signal.channel_id] = data.url;
                } catch (error) {
                    console.error('Error fetching logo:', error);
                    newLogos[signal.channel_id] = logo_none;
                }
            }
            setLogos(newLogos);
        };

        if (signals) {
            fetchLogos();
        }
    }, [signals]);

    return (
        <div>
            {signals ? (
                <div className="contenedor_senales2">
                    {signals.map((signal, index) => {
                        const logo = logos[signal.channel_id] || logo_none;

                        return (
                            <div key={index} className="Container-marco-gris2">
                               
                                    <div
                                        className="Container-marco-imagen-logo"
                                        style={{
                                            backgroundImage: `url(${logo})`,
                                        }}
                                    >
                                        <div className="Container-titulo2">
                                            <div>{signal.channel_name} <br /> {signal.signal_type}</div>
                                        </div>
                                        <div className="Container-video2">
                                            <ReactPlayer
                                                className="player"
                                                url={signal.signal_url}
                                                volume={0.001}
                                                controls
                                                playing
                                                width={signal.signal_type === 'Youtube' ? '290px' : '290px'} // Ajustar al tamaño del contenedor
                                                height={signal.signal_type === 'Youtube' ? '163px' : '163px'} // Ajustar al tamaño del contenedor
                                            />
                                        </div>
                                    </div>
                               
                            </div>
                        );
                    })}
                </div>
            ) : (
                <p className="light-gray-text">No data available</p>
            )}
        </div>
    );
};

export default DisplayMultiviewComponent;