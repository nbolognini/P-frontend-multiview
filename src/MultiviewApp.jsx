import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './auth'
import React from 'react'

export const MultiviewApp = () => {
  return (

    <AuthProvider>
      
        <AppRouter />
      
    </AuthProvider>

    
  )
}
