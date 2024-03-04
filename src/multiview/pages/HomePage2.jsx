import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

export const HomePage2 = () => {

        //SETEO DE TIEMPO DE REFRESCO y DE FUENTES
        const [tiempo] = useState(120000); // Seteado en 2 minutos (en milisegundos)
        const [video_05, setvideo_05] = useState('https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8');
        const [video_06, setvideo_06] = useState('https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8');
        const [video_08, setvideo_08] = useState('https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8');
        const [video_09, setvideo_09] = useState('https://stream-gtlc.telecentro.net.ar/hls/telecentro4k/main.m3u8');
      
        //ACTUALIZADOR DE FUENTES
        useEffect(() => {
            const timer = setInterval(() => {
                // Recarga las fuentes de video
                setvideo_05(  video_05 + '?rnd=' + Math.random() );
                setvideo_07(  video_07 + '?rnd=' + Math.random() );
                setvideo_08(  video_08 + '?rnd=' + Math.random() );
                setvideo_09(  video_09 + '?rnd=' + Math.random() );
                }, [tiempo] );
            return () => clearInterval(timer); // Limpio componente
        }, []);

          
        //ESTRUCTURA DE LA PAGINA
        return (
          <>


              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-musictop">
                    <div className="Container-titulo">       MusicTop <br></br> HLS </div>
                      <div className="Container-video>">
                        <ReactPlayer
                          controls
                          muted
                          playing 
                          width="264" 
                          height="198" 
                          url={video_05} />
                      </div>
                    </div>
                </div>
              </div>

              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-tierramia">
                    <div className="Container-titulo">       TierraMia <br></br> HLS </div>
                      <div className="Container-video>">
                        <ReactPlayer
                          controls
                          muted
                          playing 
                          width="264" 
                          height="198" 
                          url={video_06} />
                      </div>
                    </div>
                </div>
              </div>



              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-tlcpreview">
                    <div className="Container-titulo">       Tlc-Preview <br></br> HLS </div>
                      <div className="Container-video>">
                        <ReactPlayer
                          controls
                          muted
                          playing 
                          width="264" 
                          height="198" 
                          url={video_08} />
                      </div>
                    </div>
                </div>
              </div>

              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-4k">
                    <div className="Container-titulo">       Tlc-4K <br></br> HLS </div>
                      <div className="Container-video>">
                        <ReactPlayer
                          controls
                          muted
                          playing 
                          width="264" 
                          height="198" 
                          url={video_09} />
                      </div>
                    </div>
                </div>
              </div>



            <div className="Container-marco-negro">
            </div>
            <div className="Container-marco-negro">
            </div>

          </>
        )
      }
      
