import { useRouter } from 'next/router'
import axios from 'axios'
import { useState } from 'react'
import RegistrationForm from '@/components/authentication/RegistrationForm'
import api from '@/baseUrl'

interface RegistrationResponse { 
  error?: string
}

export default function Registration() {
  const router = useRouter()
  const [ error, setError ] = useState<string | null>(null)
  
  const handleRegistration = async (
    first_name: string,
    last_name: string,
    address: string,
    email: string,
    phone_number: string,
    password: string
  ) => {
    const res = await axios.post('http://localhost:8000/users', {
      first_name,
      last_name,
      address,
      email,
      phone_number,
      password,
    })
    const data: RegistrationResponse = await res.data
    if (res.status === 201) {
      router.push({
        pathname: '/auth',
      })
    } else {
      setError(data.error || 'Something went wrong')
    }
  }

  return (
    <RegistrationForm onSubmit={handleRegistration} error={error} />
  )


 
}
