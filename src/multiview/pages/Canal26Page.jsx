import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

export const Canal26Page = () => {

  const [video_01, setvideo_01] = useState('https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1');
  const [video_02, setvideo_02] = useState('https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8');

  useEffect(() => {
    const timer = setInterval(() => {
      // Recarga las fuentes de video
      setvideo_01('https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=1&amp;enablejsapi=1?rnd=' + Math.random());
      setvideo_02('https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8?rnd=' + Math.random());
    }, 10000); // Cada 10 segundos

    return () => clearInterval(timer); // Limpia el intervalo si el componente se desmonta
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
                    url={video_02} />
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
