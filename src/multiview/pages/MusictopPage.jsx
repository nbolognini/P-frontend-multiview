import React from 'react'
import ReactPlayer from 'react-player'


export const MusictopPage = () => {
  return (
    <>
   
          <div className="Container-marco-gris">
                  <div className="Container-marco-musictop">
                                    <div className="Container-titulo">
                                    MusicTop <br></br> HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer volume= {0.15} controls playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/musictophls/main.m3u8' />
    
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
