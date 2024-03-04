import { Route, Routes } from "react-router-dom"
import { MultiviewRoutes } from "../multiview";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { LoginPage }      from "../auth/pages/LoginPage"
import { LoginErrorPage } from "../auth/pages/LoginErrorPage"
import { InvitadoPage }   from "../auth/pages/InvitadoPage";
import { PrivateRoute2 } from "./PrivateRoute2";
import { MultiviewRoutes2 } from "../multiview/routes/MultiviewRoutes2";

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="/login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
              }   
            />

            <Route path="/loginerror" element={
                <PublicRoute>
                    <LoginErrorPage />
                </PublicRoute>
              }   
            />


            <Route path="/invitado" element={
                <PublicRoute>
                    <InvitadoPage />
                </PublicRoute>
              }   
            />

            <Route path="/contenido" element={
                <PrivateRoute2>
                    <MultiviewRoutes2 />
                </PrivateRoute2>
              }   
            />


            <Route path="/*" element={
              <PrivateRoute>
                <MultiviewRoutes />
              </PrivateRoute>
            } />


            
        </Routes>
    </>
  )
}
