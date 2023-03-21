import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Logout() {
  const router = useRouter()
  useEffect(() => {
    localStorage.removeItem('userId')
    router.push('/auth')
  }, [router])
  return null
}