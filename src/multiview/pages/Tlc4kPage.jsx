import React from 'react'
import ReactPlayer from 'react-player'

export const Tlc4kPage = () => {
  return (
    <>
   
   <div className="Container-marco-gris">
          <div className="Container-marco-4k">
                                <div className="Container-titulo">
                                  Telecentro 4k <br></br>HLS
                                </div>


                                <div className="Container-video>">

                                <ReactPlayer volume= {0.5} controls playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/telecentro4k/main.m3u8' />

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
