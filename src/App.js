import { useToken } from "./context/Token_context.js"
import axios from "axios"
import url from "./Url.js"
import Cookies from 'universal-cookie';
import refresh_token from "./components/refresh_token.jsx"
import Login from "./components/login.jsx"
import { useEffect } from "react"
function App() {
  const { token, setToken } = useToken()
  const cookies = new Cookies()
  useEffect(() => {

    const timeoutId = setTimeout(() => {
      refresh_token()
    }, 0.1);
    const intervalId = setInterval(() => {
      refresh_token()

    }, 900000);
    return () => {
      clearTimeout(timeoutId)
      clearInterval(intervalId);

    };
  }, []);
  Login()

  return <>hello</>


}

export default App;
