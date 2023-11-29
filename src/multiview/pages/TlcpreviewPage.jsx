import React from 'react'
import ReactPlayer from 'react-player'

export const TlcpreviewPage = () => {
  return (
    <>
   


      <div className="Container-marco-gris">
          <div className="Container-marco">
                                <div className="Container-titulo">
                                  TLC Preview <br></br>HLS
                                </div>


                                <div className="Container-video>">

                                <ReactPlayer controls playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/telecentropreviewhls/main.m3u8' />

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
