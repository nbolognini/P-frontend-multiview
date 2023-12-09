import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar, Sidebar } from '../../ui';

import { LoginPage }      from "../../auth/pages/LoginPage"


import {  HomePage, 
          Canal26Page, 
          LatinaPage, 
          TelemaxPage, 
          MusictopPage, 
          TierramiaPage, 
          TlcpreviewPage, 
          Tlc4kPage,
        } from "../../multiview/"


//import { Navbar } from "../ui/components/Navbar"

export const MultiviewRoutes = () => {
  return (
    <>
        <Navbar/>

              <div className="body_contenedor">

                  <Sidebar >

                      <div className="flex-Container">

                            <Routes>
                                  <Route path="home" element={<HomePage/>} />
                                  <Route path="canal26" element={<Canal26Page/>} />
                                  <Route path="latina" element={<LatinaPage/>} />
                                  <Route path="telemax" element={<TelemaxPage/>} />
                                  <Route path="musictop" element={<MusictopPage/>} />
                                  <Route path="tierramia" element={<TierramiaPage/>} />
                                  <Route path="tlcpreview" element={<TlcpreviewPage/>} />
                                  <Route path="tlc4k" element={<Tlc4kPage/>} />
                            
                                  <Route path="login" element={<LoginPage/>} />
                                  <Route path="/" element={<Navigate to="/home" />} />
                            </Routes>

                        </div>
                
                  </Sidebar>

              </div>

    </>

  )
}
