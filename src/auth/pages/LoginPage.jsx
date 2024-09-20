import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onLoginAnonimo = () => {
        navigate('/invitado', { replace: true });
    }


   // SOLO SI HAY QUE HACER UN LOGIN PROVISORIO
   // const onLogin = () => {
   //     login('sistemas26');
   //     navigate('/', { replace: true });
   //  }

    const onLoginOut = () => {
        navigate('/loginerror', { replace: true });
    }


    {/*   Segunda funcion de logueo, compara con la base de datos   */}
    const LoginDB = (e) => {
        e.preventDefault();
    
        const onLogin = () => {
            login(username);
            navigate('/', { replace: true });
        }
    
        const data = {
            username : username,
            password : password,
        }
        // ORIGINAL PARA QUE FUNCIONE EN PRODUCION: fetch('https://multiview.telecentro.net.ar:3000/validate/', {
        fetch('http://localhost:3000/validate/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('El servidor no responde');
            }
            return response.text();
        })
        .then(data => {
            if (data) {
                const parsedData = JSON.parse(data);
                onLogin();
                return parsedData;
            } else {
                onLoginOut();
            }
        })
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.error(error);
            if (error.message === 'net::ERR_CONNECTION_REFUSED') {
                window.alert('ERROR DE CONEXION CON SERVER BACKEND');
            }
            console.error("NO SE HA PODIDO ESTABLECER CONEXION CON SERVER BACKEND");
            window.alert("NO SE HA PODIDO ESTABLECER CONEXION CON SERVER BACKEND");
            window.alert("NO SE HA PODIDO ESTABLECER CONEXION CON LA BASE DE DATOS")

        })
    }


    {/*   RETORNO PRINCIPAL DE LA LOGINPAGE:   */}
    return (
        <>
            {/*   PARTE DE ARRIBA DECORATIVA, y la opcion de entrar como onLoginANONIMO   */}
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

                { /*   Recuadro de Login NUEVO  */}
                <div>
                        <hr />
                        <div className="login-container">
                                <div className="texto-login"> MULTIVIEW <br /> <br />  </div>

                                {/*   Para que con Enter clickee Login  */}
                                <form onSubmit={LoginDB} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}> 
                                {/*   Ingreso de Usuario   */}
                                <label>Usuario</label> 
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} style={{ width: '300px' }} />

                                {/*   Ingreso de Password   */}
                                <label>Contraseña</label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '300px' }} />

                                {/*   Boton de login   */}
                                <button className='btn btn-primary' onClick={LoginDB}> Ingresar </button>

                                {/*  <hr />                                                                   */}
                                {/*     Boton de login  SISTEMAS PROVISORIO                                   */}
                                {/*  <button className='btn btn-primary' onClick={onLogin}> Sistemas26 </button> */}

                                </form>

                        </div>
                </div>

          
        </>
    )
}
