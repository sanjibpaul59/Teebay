import { useRouter } from 'next/router'
import axios, {AxiosError} from 'axios'
import { useState } from 'react'
import RegistrationForm from '@/components/authentication/RegistrationForm'
import { notifications } from '@mantine/notifications'
import { useForm, matchesField } from '@mantine/form'
import axiosClient from '@/utils/axiosClient'
interface RegistrationResponse {
  axioserror?: { [ key: string ]: string } | null
  error?: string | null
  registrationForm?: any
}

export default function Registration() {
  const router = useRouter()
  const [ axioserror, setAxiosError ] = useState({})
  const [ error, setError ] = useState<string | null>(null)
    const registrationForm = useForm({
      initialValues: {
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        phone_number: '',
        password: '',
        confirm_password: '',
      },

      // Client-side Form validation
      validate: {
        first_name: (value: string) =>
          value.length < 4 ? 'Provide a name to continue' : null,
        // last_name: (value) => value.length <1 ? "Name should not be empty": null,
        address: (value: string) =>
          value.length < 4 ? 'Please enter a valid address' : null,
        email: (val: string) =>
          /^\S+@\S+$/.test(val) ? null : 'Invalid email',
        phone_number: (val: string) =>
          /^(?:\+?88)?01[13-9]\d{8}$/.test(val) ? null : 'Invalid phone number',
        password: (val: string) =>
          val.length <= 6
            ? 'Password should include at least 6 characters'
            : null,
        confirm_password: matchesField(
          'password',
          'Passwords are not the same'
        ),
      },
    })
  
  const handleRegistration = async (
    first_name: string,
    last_name: string,
    address: string,
    email: string,
    phone_number: string,
    password: string
  ) => {
    try {
      if (registrationForm.validate()) {
        const res = await axiosClient.post('/users', {
        first_name,
        last_name,
        address,
        email,
        phone_number,
        password,
      })
      const data: RegistrationResponse = await res.data
        if (res.status === 201) {
          notifications.show({
            color: 'green',
            title: 'Success',
            message: 'Registration successful',
          })
        router.push({
          pathname: '/auth',
        })
      } 
      } else {
        notifications.show({
          color: 'red',
          title: 'Error',
          message: 'Invalid credentials',
        })
      }
      
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError: AxiosError = error as AxiosError
        if (axiosError.response) {
          if (axiosError.response.status === 400) {
            setAxiosError(axiosError.response.data || 'Invalid credentials')
            if (error.response?.data.email) {
              notifications.show({
                color: 'red',
                title: 'Invalid email',
                message: error.response?.data.email[0],
              })              
            }
            if (error.response?.data.phone_number) { 
              notifications.show({
                color: 'red',
                title: 'Invalid phone number',
                message: error.response?.data.phone_number[0],
              })              
            }
          }
        }
      }
    }
  }

  return (
    <RegistrationForm registrationForm={registrationForm} onSubmit={handleRegistration} axioserror={axioserror} error={error} />
  )


 
}
