import React from 'react'
import ReactPlayer from 'react-player'

export const TelemaxPage = () => {
  return (
    <>
   
          <div class="Container-marco-gris">
                  <div class="Container-marco">
                                    <div class="Container-titulo">
                                    Telemax <br></br> HLS
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <ReactPlayer controls playing={true} width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/telemaxhls/main.m3u8' />
    
                                      </div>
                </div>
          </div>


      <div class="Container-marco-negro">
      </div>

      <div class="Container-marco-negro">
      </div>

      <div class="Container-marco-negro">
      </div>





    </>


  )
}
