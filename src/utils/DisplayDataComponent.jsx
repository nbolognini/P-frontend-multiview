import React from 'react';
import { getItem } from './localStorage';

const DisplayDataComponent = () => {
    const signals = getItem('signals');

    return (
        <div>
            {signals ? (
                <ul>
                    {signals.map((signal, index) => (
                        <li key={index}>
                            {signal.fk_channel_id} - {signal.signal_type} - {signal.signal_url}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data availablee</p>
            )}
        </div>
    );
};

export default DisplayDataComponent;