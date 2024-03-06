import React, { useState } from 'react';
import ReactPlayer from 'react-player'


export const MusictopPage = () => {

  
  const [isRed, setIsRed] = useState(false);

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


  return (
    <>
   
          <div className="Container-marco-gris" style={{ backgroundColor: isRed ? 'red' : 'transparent' }} >
                  <div className="Container-marco-musictop">
                                    <div className="Container-titulo">
                                    MusicTop <br></br> HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer  volume= {0.5} controls playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' 
                                                  onBuffer={colorOk}
                                                  // onBufferEnd={cambiarColor} 
                                                  onError={colorError} 
                                                  onPause={colorError}
                                                  onPlay= {colorOk}
                                    />
    
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
