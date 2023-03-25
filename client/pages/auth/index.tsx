import {useRouter} from 'next/router'
import { useState } from 'react'
import axios from "axios"
import LoginForm from "@/components/authentication/LoginForm"
import Cookies from 'js-cookie'

interface LoginResponse{
  error?: string
}

export default function Login() {
  const router = useRouter()
  const [ error, setError ] = useState<string | null>(null)

  const handleLogin = async (email: string, password: string) => {
    
    const res = await axios.post("http://localhost:8000/login", {email, password})
    const data: LoginResponse = await res.data
    if (res.status === 200) {
      const userId = res.data.user[ "id" ]
      Cookies.set("userId", userId)
      // localStorage.setItem("userId", userId)
      router.push({
        pathname: '/products/user-products',
      })
    }
    else {
      setError(data.error || 'Something went wrong')
    }
   }

  return (
    <LoginForm  onSubmit={handleLogin} error={error} />
  )
}