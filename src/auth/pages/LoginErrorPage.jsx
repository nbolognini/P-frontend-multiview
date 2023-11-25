import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

export const LoginErrorPage = () => {
  
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    const onLoginAnonimo = () => {
        login('Anomimo');
        navigate('/', { replace: true });
    }

    const onLogin = () => {
        login('sistemas');
        navigate('/', { replace: true });
    }

    const onLoginOut = () => {
        navigate('/loginerror', { replace: true });
    }

    const onLoginLogin = () => {
      navigate('/login', { replace: true });
  }

    const handleLoginClick = () => {
        if (username === 'sistemas' && pass === 'sistemas123') {
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
                        <button className="nav-item nav-link btn" onClick={onLoginLogin}>
                            Login
                        </button>
                    </ul>
                </div>
            </nav>
            <div>
                    <hr />

                    <div className="login-container">

                        <h5 className="titulo_error">Error de usuario o contraseña</h5> <br></br>

                        

                        <span className="nav-item nav-link text-primary"></span>
                        <button className="nav-item nav-link btn" onClick={onLoginLogin}>
                            Volver
                        </button>




            </div>

                        </div>

        </>
    )
}

