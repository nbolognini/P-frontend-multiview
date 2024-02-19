import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar, Sidebar } from '../../ui';
import { RoleContext } from "../../auth";

import {  HomePage, AdministracionUsersPage } from "../../multiview/"


//import { Navbar } from "../ui/components/Navbar" OK

export const AdministradorRoutes = () => {
    const { role } = useContext(RoleContext); // Obtener el rol del contexto

    return (
        <>
            <Navbar/>
            <div className="body_contenedor">
                <div className="flex-Container">
                    {role === "administrador" ? <Navigate to="/administracionusers" /> : <Navigate to="/home" />}
                </div>
            </div>
        </>
    )
}