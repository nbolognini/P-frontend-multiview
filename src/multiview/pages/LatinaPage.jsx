import React from 'react'
import ReactPlayer from 'react-player'

export const LatinaPage = () => {
  return (
    <>
   
      <div className="Container-marco-gris">
            <div className="Container-marco">
                                    <div className="Container-titulo">
                                    LatinaTV <br></br> HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />
    
                                      </div>
                </div>
        </div>


        <div className="Container-marco-gris">
                <div className="Container-marco">
                                    <div className="Container-titulo">
                                    RadioLatina <br></br> HLS (Nebula)
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' />

                                    
    
                                      </div>
                </div>
        </div>








       




        <div className="Container-marco-gris">
                <div className="Container-marco">
                                    <div className="Container-titulo">
                                    RadioLatina <br></br> (Baja Calidad)
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <iframe src="https://streaming.latina101.com.ar:8080/RadioLatina" width="290" height="180"></iframe>
    
                                      </div>
                </div>
        </div>

        <div className="Container-marco-gris">
                <div className="Container-marco">
                                    <div className="Container-titulo">
                                    RadioLatina <br></br> (Alta Calidad)
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <iframe src="https://streaming.latina101.com.ar:9000/Repetidoras" width="290" height="180"></iframe>
    
                                      </div>
                </div>
          </div>



          <div className="Container-marco-gris">
                <div className="Container-marco">
                                    <div className="Container-titulo">
                                    LatinaTV <br></br> (Twitch)
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <iframe
                                          src="https://player.twitch.tv/?channel=radiolatina1011&parent=multiview.telecentro.net.ar&muted=true"
                                          height="180"
                                          width="290"
                                          allowFullScreen>
                                    </iframe>
    
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
