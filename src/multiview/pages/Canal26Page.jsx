import React from 'react'
import ReactPlayer from 'react-player'


export const Canal26Page = () => {
  return (
    <>

<div className="</div>">
            <div className="Container-marco-gris">
                  <div className="Container-marco-canal26">
                                    <div className="Container-titulo">
                                      Canal26 <br></br>YouTube
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                          <iframe      
                                                    height="180"
                                                    width="290" 
                                                    src="https://www.youtube.com/embed/live_stream?channel=UCrpMfcQNog595v5gAS-oUsQ&amp;autoplay=1&amp;mute=0&amp;enablejsapi=1" 
                                                    title="YouTube video player" 
                                                    frameBorder="0" 
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                          allowFullScreen>  </iframe>
    
                                      </div>
                  </div>
              </div>
          </div>

          <div className="</div>">
            <div className="Container-marco-gris">
                  <div className="Container-marco-canal26">
                                    <div className="Container-titulo">
                                      Canal26 <br></br>HLS
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/canal26hls/main.m3u8' />
    
                                      </div>
                        </div>
                </div>
        </div>
    

        <div className="</div>">
                <div className="Container-marco-gris">
                        <div className="Container-marco-canal26">
                                    <div className="Container-titulo">
                                    Canal26 Fifa Tv <br></br> (OpterCast)
                                    </div>
    
    
                                    <div className="Container-video>">
    
                                    <ReactPlayer controls muted playing width="264" height="198" url='https://stream-gtlc.telecentro.net.ar/hls/fifatv/main.m3u8' />
    
                                      </div>
                        </div>
                </div>
        </div>



      <div className="Container-marco-negro">
      </div>

      <div className="Container-marco-negro">
      </div>


    </>


  )
}
