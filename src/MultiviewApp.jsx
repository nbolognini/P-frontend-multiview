import React from 'react'

import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'


export const MultiviewApp = () => {
  return (
          <AuthProvider> 
                  <AppRouter />
          </AuthProvider>
  )
}
