import { useMatch, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { PiNumberFourFill, PiTextTThin} from "react-icons/pi";
import { BiSolidLandscape } from "react-icons/bi";
import { TbSquareLetterP } from "react-icons/tb";
import { SiYoutubemusic } from "react-icons/si";
import { FaRadio } from "react-icons/fa6";
import { FaTh, FaBars, FaTv }from "react-icons/fa";
import ReactPlayer from 'react-player';

export const SidebarInvitado = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaTh/>
        },
        {
            path:"/canal26",
            name:"Canal26",
            icon:<FaTv/>
        },
        {
            path:"/latina",
            name:"Latina",
            icon:<FaRadio/>
        },
        {
            path:"/telemax",
            name:"Telemax",
            icon:<PiTextTThin/>
        },
        {
            path:"/musictop",
            name:"MusicTop",
            icon:<SiYoutubemusic/>
        },
        {
            path:"/tierramia",
            name:"TierraMia",
            icon:<BiSolidLandscape/>
        },
        {
            path:"/tlcpreview",
            name:"TlcPreview",
            icon:<TbSquareLetterP/>
        },
        {
            path:"tlc4k",
            name:"Telecentro_4k",
            icon:<PiNumberFourFill/>
        }
    ]
    return (

            <div className="container">

                    <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                                <div className="top_section">
                                        <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu
                                        </h1>
                                        <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars"> <FaBars onClick={toggle}/> 
                                        </div>
                                </div>
                                

                        {
                            menuItem.map((item, index) => {
                                    const match = useMatch(item.path);
                                    return (
                                        <Link to={item.path} key={index} className={match ? "link active" : "link"}>
                                        <div className="icon">{item.icon}</div>
                                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                                        </Link>
                                    );
                            })
                        }

                    </div>

           

                    <div className="Container-video-izquierda">

                            <div className="Container-marco">

                                    <div className="Container-titulo">
                                        Canal26 <br></br>HLS
                                    </div>
    
                                    <div className="Container-video>">
                                        <ReactPlayer controls playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />
                                    </div>

                            </div>
                    </div>




            </div>                  
    );
};