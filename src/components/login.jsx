import { useToken } from "../context/Token_context.js"
import axios from "axios"
import url from "../Url.js"
import Cookies from 'universal-cookie';
import { useEffect } from "react"

export default function Login() {
  const { token, setToken } = useToken()
  const cookies = new Cookies()
  useEffect(() => {
    async function log() {
      try {
        const log = await axios.post(`${url}/authUser/login`, {
          Email: "m@gmail.com",
          Password: "12345"
        })
        cookies.set("refresh", log.data.refresh_token)
        cookies.set("token", log.data.access_token)
        setToken({
          username: log.data.UserName,
          token: cookies.get("token")
        })
      } catch (e) {
        console.log(e.response.data.message)
      }
    }
    log()
  }, []);
}