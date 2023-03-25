import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

export default function Logout() {
  const router = useRouter()
  useEffect(() => {
    Cookies.remove('userId')
    // localStorage.removeItem('userId')
    router.push('/auth')
  }, [router])
  return null
}