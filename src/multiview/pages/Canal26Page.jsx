import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

export const Canal26Page = () => {

  const [tiempo] = useState(120000); // Seteado en 2 minutos (en milisegundos)
  const [video_01, setvideo_01] = useState('https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1');
  const [video_02, setvideo_02] = useState('https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8');
  const [video_03, setvideo_03] = useState('https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8');
  
  useEffect(() => {
      const timer = setInterval(() => {
          // Recarga las fuentes de video
          setvideo_01(  video_01 + '?rnd=' + Math.random() );
          setvideo_02(  video_02 + '?rnd=' + Math.random() );
          setvideo_03(  video_03 + '?rnd=' + Math.random() );
          }, [tiempo] );
      return () => clearInterval(timer); // Limpio componente
  }, []);
  
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
                <iframe src={'https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1'}
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
                <ReactPlayer url={video_02} volume= {0.15}
                  controls 
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



      <div className="Container-marco-negro">
      </div>

      <div className="Container-marco-negro">
      </div>


    </>


  )
}
