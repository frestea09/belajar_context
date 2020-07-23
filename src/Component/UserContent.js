import React from 'react'

const UserContent = React.createContext()
const UserProvider = UserContent.Provider
const UserConsumer = UserContent.Consumer

export  {UserProvider,UserConsumer}