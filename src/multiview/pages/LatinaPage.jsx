import React from 'react'
import ReactPlayer from 'react-player'

export const LatinaPage = () => {
  return (
    <>
   
      <div className="Container-marco-gris">
            <div className="Container-marco-latinatv">
                                    <div className="Container-titulo">
                                    LatinaTV <br></br> HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />
    
                                      </div>
                </div>
        </div>


        <div className="Container-marco-gris">
                <div className="Container-marco-radiolatina">
                                    <div className="Container-titulo">
                                    RadioLatina <br></br> HLS (Nebula)
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer controls playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' />

                                    
    
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
