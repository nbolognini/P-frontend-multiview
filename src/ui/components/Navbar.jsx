import { useContext, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import ReactPlayer from 'react-player'
import { FaPlay } from "react-icons/fa";


export const Navbar = () => {

    //Para agregar la hora:
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    //Maneja el estado del usuario, y la salida del mismo
    const { user, logout } = useContext ( AuthContext );
    const navigate = useNavigate();
    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        }); 
    }

    //Para Iniciar en 5 segundos:
    const [playing, setPlaying] = useState(false);


    //Coloca el icono de Play cuando reproduce, true es Play
    const [isPlaying, setIsPlaying] = useState(false);
    //Maneja los errores de reproduccion
    const [isError, setIsError] = useState(false);

    //Maneja el color del boton de Rojo de Error
    const [isRed, setIsRed] = useState(false);


    //componente que se ejecuta cuando se da play react-Player (cambia el estado de isPlaying a true, icono verde de play)
    const controladorPlay = () => {
        setIsPlaying(true);
      };

    //componente que se ejecuta cuando se da pause react-Player (cambia el estado de isPlaying a false, icono verde de play desaprece)
    const controladorPause = () => {
        setIsPlaying(false);
      };



    const cambiarColor = () => {
        setIsRed(!isRed);
    };
    const controladorBuffer = () => {
        (!cambiarColor());
      };


    const colorError = () => {
        setIsRed(true);
    };

    const colorOk = () => {
        setIsRed(false);
    };

    //Iniciar en 5 segundos:
    useEffect(() => {
        const timer = setTimeout(() => {
          setPlaying(true);
        }, 5000); // 5000 milisegundos son 5 segundos
      
        // Limpia el temporizador cuando el componente se desmonte
        return () => clearTimeout(timer);
      }, []);
    
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

                <Link className="navbar-brand"   to="/home">
                    Multiview 3.0
                </Link>
                &nbsp;&nbsp;&nbsp;
                <div className="navbar-collapse">

                    <div className="navbar-nav">

                        <div class="container-reloj">
                            <span className="current-time">
                                {currentTime}
                            </span>
                        </div>

                    </div>

                    <>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </>

                    <button className="nav-item nav-link btn"  >  
                            
                    </button>

                        <div className="Container-audio" style={{ backgroundColor: isRed ? 'red' : 'transparent' }}>
                            Radio&nbsp;Latina&nbsp;&nbsp;&nbsp;
                            <ReactPlayer 
                                controls  url='https://stream-gtlc.telecentro.net.ar/live/Repetidoras' 
                                width='300px' 
                                height='200%'
                                volume= {0.18}
                                onBuffer=   {() => { colorOk         (); }}
                                //onBufferEnd={() => { controladorPause() ; colorError(); }}
                                onPlay=     {() => { controladorPlay () ; colorOk   (); }}
                                onPause=    {() => { controladorPause() ; colorError(); }}
                                onError=    {() => { controladorPause() ; colorError(); }}
                                playing={playing}
                                
                            />
                        </div>
                </div>



                <div className="navbar-nav">

                {isPlaying && (
                <div className="blinking">
                    <FaPlay style={{ fontSize: '16px', margin: '0 5px' }}/>
                </div>
                )}


                    </div>




                
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">

                        <span className="nav-item nav-link text-primary">
                            { user?.name }
                        </span>

                        <button className="nav-item nav-link btn" onClick= { onLogout } >  
                            Logout
                        </button>

                    </ul>
                </div>

            </nav>
        </>
    )

}
