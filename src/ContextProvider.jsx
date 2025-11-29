import React, { Children } from 'react'
import { createContext } from 'react'

export const UserContext=createContext();

export default function ContextProvider({children}) {

    const host ="http://localhost:7000"
    // const host="https://server-zs9y.onrender.com"

  return (
    <div>
      <UserContext.Provider value={{host}}>
      {children}
      </UserContext.Provider>
    </div>
  )
}
