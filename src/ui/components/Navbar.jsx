import { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import ReactPlayer from 'react-player'

export const Navbar = () => {

    const { user, logout } = useContext ( AuthContext );

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true
        }); 
    }

    const [isPlaying, setIsPlaying] = useState(true);
    const handlePause = () => {
        setIsPlaying(false);
      };
    const handlePlay = () => {
        setIsPlaying(true);
      };

    const [isRed, setIsRed] = useState(false);

    const cambiarColor = () => {
        setIsRed(!isRed);
    };
    const controladorBuffer = () => {
        (!cambiarColor());
      };
    
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

                <Link className="navbar-brand"   to="/home">
                    Multiview 3.0
                </Link>

                <div className="navbar-collapse">

                    <div className="navbar-nav">

                        <NavLink  className={ ({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}` }  to="/home">
                            Home
                        </NavLink>

                    </div>

                    <>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </>

                    <button className="nav-item nav-link btn"  >  
                            Logout
                    </button>

                        <div className="Container-audio" style={{ backgroundColor: isRed ? 'red' : 'transparent' }}>
                            Radio&nbsp;Latina&nbsp;&nbsp;&nbsp;&nbsp;
                            <ReactPlayer 
                                controls playing url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' 
                                width='300px' 
                                height='200%'
                                volume= {0.15}
                                onBuffer={() => { controladorBuffer (); handlePlay(); }}
                                onBufferEnd={cambiarColor} 
                                onError={() => { cambiarColor(); handlePause(); }}
                                onPause={() => { cambiarColor(); handlePause(); }}
                                onPlay={handlePlay}
                                
                            />
                        </div>
                </div>



                <div className="navbar-nav">

                {isPlaying && (
                <div className="blinking">
                    &nbsp;&nbsp;Reproduciendo
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