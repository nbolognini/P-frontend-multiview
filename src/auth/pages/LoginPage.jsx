import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const onLoginAnonimo = () => {
        navigate('/invitado', { replace: true });
    }

    const onLogin = () => {
        login('sistemas26');
        navigate('/', { replace: true });
    }

    const onLoginOut = () => {
        navigate('/loginerror', { replace: true });
    }

    const handleLoginClick = () => {
        if (username === 'sistemas26' && pass === 'sistemas26') {
            onLogin();
        } else {
          onLoginOut();
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
                <h1 className="navbar-brand">Multiview 3.0</h1>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                    </div>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-primary"></span>
                        <button className="nav-item nav-link btn" onClick={onLoginAnonimo}>
                            invitado
                        </button>
                    </ul>
                </div>
            </nav>
            <div>
                <hr />

                <div className="login-container">
                <div className="texto-login">
                    MULTIVIEW <br /> <br /> 
                </div>  
    <label>Usuario</label> 
    <input type="text" value={username} onChange={e => setUsername(e.target.value)} /> 
    <label>Contraseña</label>
    <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
    <button className='btn btn-primary' onClick={handleLoginClick}>
        Ingresar
    </button> 
</div>



                



            </div>
        </>
    )
}