import ReactPlayer from 'react-player'
import React, { useEffect } from 'react';

export const HomePage = () => {


        

        useEffect(() => {
                const interval = setInterval(() => {
                    window.location.reload();
                }, 10000); // Recargo cada 10 segundos
        
                return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
        }, []);

        return (
        <>

                <div className="Container-marco-gris">
                        <div className="Container-marco-canal26">
                                <div className="Container-titulo">
                                      Canal26 <br></br>YouTube
                                </div>
                                <div className="Container-video>">
                                        <iframe      
                                                height="180"
                                                width="290" 
                                                src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1" 
                                                title="YouTube video player" 
                                                frameBorder="0" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                                allowFullScreen>  
                                        </iframe>
    
                                </div>
                        </div>
                </div>

                <div className="Container-marco-gris">
                        <div className="Container-marco-canal26">
                                        <div className="Container-titulo">
                                                Canal26 <br></br>HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />
                                        </div>
                        </div>
                </div>
    
                <div className="Container-marco-gris">
                        <div className="Container-marco-canal26">
                                        <div className="Container-titulo">
                                                Canal26 Fifa Tv <br></br> (OpterCast)
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8' />
                                        </div>
                        </div>
                </div>



                <div className="Container-marco-gris">
                        <div className="Container-marco-telemax">
                                        <div className="Container-titulo">
                                                Telemax <br></br> HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing={true} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />
                                        </div>
                        </div>
                </div>
    
                <div className="Container-marco-gris">
                        <div className="Container-marco-musictop">
                                        <div className="Container-titulo">
                                                MusicTop <br></br> HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />
                                        </div>
                        </div>
                </div>
    
                <div className="Container-marco-gris">
                        <div className="Container-marco-tierramia">
                                        <div className="Container-titulo">
                                                TierraMia <br></br> HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />
                                        </div>
                        </div>

                </div>
    
                <div className="Container-marco-gris">
                        <div className="Container-marco-latinatv">
                                        <div className="Container-titulo">
                                                LatinaTV <br></br> HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />
                                        </div>
                        </div>
                </div>
    
                <div className="Container-marco-gris">
                        <div className="Container-marco-tlcpreview">
                                        <div className="Container-titulo">
                                                Tlc Preview <br></br> HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />
                                        </div>
                        </div>
                </div>
    
                <div className="Container-marco-gris">
                        <div className="Container-marco-4k">
                                        <div className="Container-titulo">
                                                Tlc 4k <br></br> HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/telecentro4k/main.m3u8' />
                                        </div>
                        </div>
                </div>
    

                <div className="Container-marco-gris">
                        <div className="Container-marco-radiolatina">
                                        <div className="Container-titulo">
                                                RadioLatina <br></br> HLS
                                        </div>
                                        <div className="Container-video>">
                                                <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' />
                                        </div>
                        </div>
                </div>

                <div className="Container-marco-gris">
                        <div className="Container-marco">
                                        <div className="Container-titulo">
                                                TEST <br></br> (Sistemas)
                                        </div>
                                        <div className="Container-video>">
                                                <iframe
                                                src="https://player.twitch.tv/?channel=sistemas26&parent=multiview.telecentro.net.ar&muted=true"
                                                height="180"
                                                width="290"
                                                allowFullScreen>
                                                </iframe>
                                        </div>
                        </div>
                </div>

                <div className="Container-marco-negro">
                </div>
    

        </>

        )
}