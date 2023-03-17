import { useForm, matchesField } from '@mantine/form'
import {
  Grid,
  Container,
  Card,
  TextInput,
  Group,
  Button,
  PasswordInput,
  Title,
  Text,
  Anchor,
  NavLink,
} from '@mantine/core'
import Link from 'next/link'

type RegistrationFormProps = {
  onSubmit: (first_name:string, last_name:string, address:string, email: string, phone_number:string, password: string) => void
  error: string | null
}

const RegistrationForm = ({ onSubmit, error }: RegistrationFormProps) => {
  const registrationForm = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      address: '',
      email: '',
      phone_number: '',
      password: '',
      confirm_password: '',
      created_at: new Date().toISOString(),
    },

    // Client-side Form validation
    validate: {
      first_name: (value) =>
        value.length < 1 ? 'Provide a name to continue' : null,
      // last_name: (value) => value.length <1 ? "Name should not be empty": null,
      address: (value) =>
        value.length < 1 ? 'Please enter a valid address' : null,
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      phone_number: (val) =>
        /^(?:\+?88)?01[13-9]\d{8}$/.test(val) ? null : 'Invalid phone number',
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
      confirm_password: matchesField('password', 'Passwords are not the same'),
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { first_name, last_name, address, email, phone_number, password } = registrationForm.values
    onSubmit(first_name, last_name, address, email, phone_number, password)
  }

   return (
     <Container mt={100}>
       <Title align="center" order={2}>
         SIGN UP
       </Title>
       <Container mt={20} size="30rem" mx="auto" align-content="center">
         <Card shadow="sm" padding="lg" withBorder>
           <form
             onSubmit={handleSubmit}
           >
             <Grid>
               <Grid.Col md={6} lg={6}>
                 <TextInput
                   withAsterisk
                   mt={30}
                   placeholder="First Name"
                   {...registrationForm.getInputProps('first_name')}
                 />
               </Grid.Col>
               <Grid.Col md={6} lg={6}>
                 <TextInput
                   withAsterisk
                   mt={30}
                   placeholder="Last Name"
                   {...registrationForm.getInputProps('last_name')}
                 />
               </Grid.Col>
             </Grid>
             <Grid>
               <Grid.Col lg={12} md={12}>
                 <TextInput
                   withAsterisk
                   mt={8}
                   placeholder="Address"
                   {...registrationForm.getInputProps('address')}
                 />
               </Grid.Col>
             </Grid>
             <Grid>
               <Grid.Col md={6} lg={6}>
                 <TextInput
                   withAsterisk
                   mt={8}
                   placeholder="Email"
                   {...registrationForm.getInputProps('email')}
                 />
               </Grid.Col>
               <Grid.Col md={6} lg={6}>
                 <TextInput
                   withAsterisk
                   mt={8}
                   placeholder="Phone Number"
                   {...registrationForm.getInputProps('phone_number')}
                 />
               </Grid.Col>
             </Grid>
             <PasswordInput
               withAsterisk
               mt={15}
               placeholder="Password"
               {...registrationForm.getInputProps('password')}
             />
             <PasswordInput
               withAsterisk
               mt={15}
               placeholder="Confirm Password"
               {...registrationForm.getInputProps('confirm_password')}
             />

             <Group position="center" mt="xl">
               <Button color="violet" type="submit">
                 REGISTER
               </Button>
             </Group>
           </form>
           <Text ta="center" mt="md">
             Already have an account?{' '}
             <Link href="/auth" legacyBehavior>
               <Anchor fz="md" fw="bold">
                 Sign In
               </Anchor>
             </Link>
           </Text>
         </Card>
       </Container>
     </Container>
   )
}
export default RegistrationForm
