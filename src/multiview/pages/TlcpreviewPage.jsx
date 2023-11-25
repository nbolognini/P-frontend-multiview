import React from 'react'
import ReactPlayer from 'react-player'

export const TlcpreviewPage = () => {
  return (
    <>
   


      <div class="Container-marco-gris">
          <div class="Container-marco">
                                <div class="Container-titulo">
                                  TLC Preview <br></br>HLS
                                </div>


                                <div class="Container-video>">

                                <ReactPlayer controls playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />

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
