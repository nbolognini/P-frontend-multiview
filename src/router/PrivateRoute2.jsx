import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../auth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute2 = ( { children }) => {

    const { logged } = useContext( AuthContext );

    if (logged && user.roles.includes("contenido")) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
    
  
}
