import React from 'react'
import ReactPlayer from 'react-player'

export const TelemaxPage = () => {
  return (
    <>
   
          <div className="Container-marco-gris">
                  <div className="Container-marco-telemax">
                                    <div className="Container-titulo">
                                    Telemax <br></br> HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer volume= {0.5} controls playing={true} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />
    
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
