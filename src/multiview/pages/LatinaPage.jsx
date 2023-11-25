import React from 'react'
import ReactPlayer from 'react-player'

export const LatinaPage = () => {
  return (
    <>
   
      <div class="Container-marco-gris">
            <div class="Container-marco">
                                    <div class="Container-titulo">
                                    LatinaTV <br></br> HLS
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/latinatvhls/main.m3u8' />
    
                                      </div>
                </div>
        </div>


        <div class="Container-marco-gris">
                <div class="Container-marco">
                                    <div class="Container-titulo">
                                    RadioLatina <br></br> HLS (Nebula)
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198"   url='https://stream-gtlc.telecentro.net.ar/hls/radiolatinahls/main.m3u8' />

                                    
    
                                      </div>
                </div>
        </div>








       




        <div class="Container-marco-gris">
                <div class="Container-marco">
                                    <div class="Container-titulo">
                                    RadioLatina <br></br> (Baja Calidad)
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <iframe src="https://streaming.latina101.com.ar:8080/RadioLatina" width="290" height="180"></iframe>
    
                                      </div>
                </div>
        </div>

        <div class="Container-marco-gris">
                <div class="Container-marco">
                                    <div class="Container-titulo">
                                    RadioLatina <br></br> (Alta Calidad)
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <iframe src="https://streaming.latina101.com.ar:9000/Repetidoras" width="290" height="180"></iframe>
    
                                      </div>
                </div>
          </div>



          <div class="Container-marco-gris">
                <div class="Container-marco">
                                    <div class="Container-titulo">
                                    LatinaTV <br></br> (Twitch)
                                    </div>
    
    
                                    <div class="Container-video>">
    
                                    <iframe
                                          src="https://player.twitch.tv/?channel=radiolatina1011&parent=multiview.telecentro.net.ar&muted=true"
                                          height="180"
                                          width="290"
                                          allowfullscreen>
                                    </iframe>
    
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
