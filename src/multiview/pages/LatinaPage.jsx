import React, { useState } from 'react';
import ReactPlayer from 'react-player'

export const LatinaPage = () => {
  
  const [isRed, setIsRed] = useState(false);
  const [isRed2, setIsRed2] = useState(false);

  const cambiarColor = () => {
    setIsRed(!isRed);
  };

  const cambiarColor2 = () => {
    setIsRed2(!isRed2);
  };


  const controladorBuffer = () => {
    (!cambiarColor());
  };

  const controladorBuffer2 = () => {
    (!cambiarColor2());
  };

  const colorError = () => {
    setIsRed(true);
};

const colorOk = () => {
  setIsRed(false);
};

const colorOk2 = () => {
  setIsRed2(false);
};

const colorError2 = () => {
  setIsRed2(true);
};


  return (
    <>
   
      <div className="Container-marco-gris"  style={{ backgroundColor: isRed ? 'red' : 'transparent' }} >
            <div className="Container-marco-latinatv">
                                    <div className="Container-titulo">
                                    LatinaTV <br></br> HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer  volume= {0.5} controls playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' 
                                                  onBuffer={colorOk}
                                                  // onBufferEnd={cambiarColor} 
                                                  onError={colorError} 
                                                  onPause={colorError}
                                                  onPlay= {colorOk}
                                    />
    
                                      </div>
                </div>
        </div>


        <div className="Container-marco-gris"  style={{ backgroundColor: isRed2 ? 'red' : 'transparent' }} >
                <div className="Container-marco-radiolatina">
                                    <div className="Container-titulo">
                                    RadioLatina <br></br> HLS (Nebula)
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer  volume= {0.5} controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' 
                                                  //onBuffer={controladorBuffer2}
                                                  //onBufferEnd={cambiarColor2} 
                                                  onError={colorError2} 
                                                  onPause={colorError2}
                                                  onPlay= {colorOk2}
                                                   
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
