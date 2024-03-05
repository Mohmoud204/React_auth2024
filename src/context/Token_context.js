import { createContext, useState, useContext } from "react"

const Token = createContext({})

export const TokenContext = ({ children }) => {
  const [token, setToken] = useState({})
  return (
    <Token.Provider value={{ token, setToken }}>
      {children}
    </Token.Provider>
  )
}

export const useToken = () => {
  return useContext(Token)
}