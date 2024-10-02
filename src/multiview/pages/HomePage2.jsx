import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

export const HomePage2 = () => {

        //SETEO DE TIEMPO DE REFRESCO y DE FUENTES  ( le saue un 0, hay que agregarlop)
        const [tiempo] = useState(3600000); // Seteado en 2 minutos (en milisegundos)
        const [video_01, setvideo_01] = useState('https://www.youtube.com/embed/MS0QdZ5zvn8?si=mpnwJeJU46ygQEKp&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1');
        const [video_02, setvideo_02] = useState('https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8');
        const [video_03, setvideo_03] = useState('https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8');
        const [video_04, setvideo_04] = useState('https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8');
        const [video_05, setvideo_05] = useState('https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8');
        const [video_06, setvideo_06] = useState('https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8');
        const [video_07, setvideo_07] = useState('https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8');
        const [video_08, setvideo_08] = useState('https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8');
        const [video_09, setvideo_09] = useState('https://stream-gtlc.telecentro.net.ar/hls/telecentro4k/main.m3u8');
        const [video_10, setvideo_10] = useState('https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8');
        
        //ACTUALIZADOR DE FUENTES
        useEffect(() => {
            const timer = setInterval(() => {
                // Recarga las fuentes de video
                setvideo_01(  video_01 + '?rnd=' + Math.random() );
                setvideo_02(  video_02 + '?rnd=' + Math.random() );
                setvideo_03(  video_03 + '?rnd=' + Math.random() );
                setvideo_04(  video_04 + '?rnd=' + Math.random() );
                setvideo_05(  video_05 + '?rnd=' + Math.random() );
                setvideo_06(  video_06 + '?rnd=' + Math.random() );
                setvideo_07(  video_07 + '?rnd=' + Math.random() );
                setvideo_08(  video_08 + '?rnd=' + Math.random() );
                setvideo_09(  video_09 + '?rnd=' + Math.random() );
                setvideo_10(  video_10 + '?rnd=' + Math.random() );
                }, [tiempo] );
            return () => clearInterval(timer); // Limpio componente
        }, []);

        //ESTRUCTURA DE LA PAGINA
        return (
          <>
              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-canal26">
                    <div className="Container-titulo">  
                      Canal26 <br></br>
                      YouTube 
                    </div>
                    <div className="Container-video>"> 
                      <iframe src={video_01}
                        height="180"
                        width="290" 
                        frameBorder="0" 
                        allowFullScreen
                         >  
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-canal26">
                    <div className="Container-titulo">
                      Canal26 <br></br>
                      HLS
                    </div>
                    <div className="Container-video>">
                      <ReactPlayer url={video_02}
                        controls 
                        muted 
                        playing 
                        width="264" 
                        height="198" 
                         />
                    </div>
                  </div>
                </div>
              </div>
          
              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-canal26">
                    <div className="Container-titulo">       Canal26 Fifa Tv <br></br> (OpterCast) </div>
                      <div className="Container-video>">
                        <ReactPlayer
                          controls
                          muted
                          playing 
                          width="264" 
                          height="198" 
                          url={video_03} />
                      </div>
                    </div>
                </div>
              </div>

              <div className="</div>">
                <div className="Container-marco-gris">
                  <div className="Container-marco-telemax">
                    <div className="Container-titulo">       Telemax <br></br> HLS </div>
                      <div className="Container-video>">
                        <ReactPlayer
                          controls
                          muted
                          playing 
                          width="264" 
                          height="198" 
                          url={video_04} />
                      </div>
                    </div>
                </div>
              </div>

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
                  <div className="Container-marco-latinatv">
                    <div className="Container-titulo">       LatinaTv <br></br> HLS </div>
                      <div className="Container-video>">
                        <ReactPlayer
                          controls
                          muted
                          playing 
                          width="264" 
                          height="198" 
                          url={video_07} />
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
            <div className="Container-marco-negro">
            </div>

          </>
        )
      }
      
