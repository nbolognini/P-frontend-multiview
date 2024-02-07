import React from 'react'
import ReactPlayer from 'react-player'

export const TierramiaPage = () => {
  return (
    <>
   
   <div className="Container-marco-gris">
                  <div className="Container-marco-tierramia">
                                    <div className="Container-titulo">
                                    TierraMia <br></br> HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer volume= {0.5} controls playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/tierramiahls/main.m3u8' />
    
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
