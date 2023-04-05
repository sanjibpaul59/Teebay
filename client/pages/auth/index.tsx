import {useRouter} from 'next/router'
import { useState } from 'react'
import axios, {AxiosError} from "axios"
import LoginForm from "@/components/authentication/LoginForm"
import Cookies from 'js-cookie'
import { notifications } from '@mantine/notifications'
import { useForm } from '@mantine/form'
import axiosClient from '@/utils/axiosClient'

interface LoginResponse{
  error?: string
}

export default function Login() {
  const router = useRouter()
  const [ axioserror, setError ] = useState<string | null>(null)

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    // Client-side Form validation
    validate: {
      email: (value: string) => /^\S+@\S+$/.test(value) ? null : 'Invalid email',
      password: (value: string) => value.length < 6 ? 'Password must have at least 6 characters' : null,
    }
  })

  const handleLogin = async (email: string, password: string) => {
    try {
      const res = await axiosClient.post("/login", {email, password})
      if (res.status === 200) {
        notifications.show({
        color: 'green',
        title: 'Success',
        message:'Login successful',
      })
      const userId = res.data.user[ "id" ]
      Cookies.set("userId", userId)
      // localStorage.setItem("userId", userId)
      router.push({
        pathname: '/products/user-products',
      })
      }
      const data: LoginResponse = await res.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError
        if (axiosError.response) {
          if (axiosError.response.status === 400) {
            setError(axiosError.response.statusText || 'Invalid credentials')
            console.log(axioserror)
            notifications.show({
              color: 'red',
              title: 'Error',
              message:'Invalid credentials',
            })
          }
        }
       }
      
    }
   }

  return (
    <LoginForm onSubmit={handleLogin} error={axioserror} loginForm={loginForm} />
  )
}