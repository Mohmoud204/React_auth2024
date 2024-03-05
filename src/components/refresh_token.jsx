import { useToken } from "../context/Token_context.js"
import axios from "axios"
import url from "../Url.js"
import Cookies from 'universal-cookie';
import { useEffect } from "react"
import Login from "./login.jsx"
export default function refresh_token() {
  const cookies = new Cookies()
  const get_refresh = async () => {
    try {
      const headers = { "authorization": `Bearer ${cookies.get("refresh")}` }
      const refresh = await axios.get(`${url}/authUser/RefreshToken`, { headers })
      console.log(refresh.data.access_token)
    } catch (e) {
      Login()
    }
  }
  get_refresh()
}