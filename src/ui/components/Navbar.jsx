import { useContext } from 'react';
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

                    <Link className="navbar-brand" to="/latina">


                    </Link>

                    <button className="nav-item nav-link btn" onClick= { onLogout } >  

                            Logout
                    </button>
                        <div className="Container-audio">
                            Radio&nbsp;Latina:&nbsp;&nbsp;
                            <ReactPlayer 
                                controls playing url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' 
                                width='300px' 
                                height='200%'
                                volume= {0.033} 
                            />
                        </div>
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