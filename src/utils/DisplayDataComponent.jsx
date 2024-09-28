import React from 'react';
import ReactPlayer from 'react-player';
import { getItem } from './localStorage';
import './DisplayDataComponent.css'; // Importar el archivo CSS

const DisplayDataComponent = () => {
    const signals = getItem('signals');
    const logos = getItem('logos');

    // console.log( "HOLA");
    // logos.map((logo) => {
    //     try {
    //         console.log(logo.channel_id);
    //         return require(`../ui/img/logo_${logo.channel_id}.jpg`);
    //     } catch (error) {
    //         console.error('Error importing logo:', error);
    //         return logo_error;
    //     }
    // });

    return (
        <div>
            {signals ? (
                <div className="contenedor_senales2">
                    {signals.map((signal, index) => (
                        // A partir de aca es cada caja de video individual
                        <div key={index}>
                            <div className="Container-marco-gris2">
                                <div className="Container-marco-telemax2">
                                    <div className="Container-titulo2">
                                        <div>{signal.fk_channel_id} <br /> {signal.signal_type}</div>
                                    </div>
                                    <div className="Container-video2">
                                        <ReactPlayer
                                            className="player"
                                            url={signal.signal_url}
                                            volume={0.001}
                                            controls
                                            playing
                                            width="100%" // Ajustar al tamaño del contenedor
                                            height="100%" // Ajustar al tamaño del contenedor
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default DisplayDataComponent;