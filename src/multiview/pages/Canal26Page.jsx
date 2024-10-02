import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player'

export const Canal26Page = () => {

  return (
    <>

        <div className="</div>">
          <div className="Container-marco-gris">
            <div className="Container-marco-canal26">
              <div className="Container-titulo">
                Canal26 <br></br>
                HLS
              </div>
              <div className="Container-video>">
                <ReactPlayer url={"https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8"} volume= {0.5}
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
              <div className="Container-titulo">
                Canal26 TEST<br></br>
                HLS
              </div>
              <div className="Container-video>">
                <ReactPlayer url={"https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8"} volume= {0.5}
                  controls
                  playing
                  width="264"
                  height="198"
                   />
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
