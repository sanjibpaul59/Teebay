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
} from '@mantine/core'
import Link from 'next/link'

type RegistrationFormProps = {
  onSubmit: (
    first_name: string,
    last_name: string,
    address: string,
    email: string,
    phone_number: string,
    password: string
  ) => void
  axioserror: { [ key: string ]: string } | null
  error: string | null
  registrationForm: any
}

const RegistrationForm = ({ onSubmit, axioserror, error, registrationForm }: RegistrationFormProps) => {


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (registrationForm.validate()) {
      const { first_name, last_name, address, email, phone_number, password } = registrationForm.values
      onSubmit(first_name, last_name, address, email, phone_number, password)
    }
  }

   return (
     <Container mt={100}>
       <Title align="center" order={2}>
         SIGN UP
       </Title>
       <Container mt={20} size="30rem" mx="auto" align-content="center">
         <Card shadow="sm" padding="lg" withBorder>
           <form onSubmit={handleSubmit}>
             <Grid mt={8}>
               <Grid.Col md={6} lg={6}>
                 <TextInput
                   required
                   placeholder="First Name"
                   {...registrationForm.getInputProps('first_name')}
                 />
               </Grid.Col>
               <Grid.Col md={6} lg={6}>
                 <TextInput
                   required
                   placeholder="Last Name"
                   {...registrationForm.getInputProps('last_name')}
                 />
               </Grid.Col>
             </Grid>
             <Grid mt={8}>
               <Grid.Col lg={12} md={12}>
                 <TextInput
                   required
                   placeholder="Address"
                   {...registrationForm.getInputProps('address')}
                 />
               </Grid.Col>
             </Grid>
             <Grid mt={8}>
               <Grid.Col sm={12} md={6} lg={6}>
                 <TextInput
                   required
                   placeholder="Email"
                   {...registrationForm.getInputProps('email')}
                 />
               </Grid.Col>
               <Grid.Col sm={12} md={6} lg={6}>
                 <TextInput
                   required
                   placeholder="Phone Number"
                   {...registrationForm.getInputProps('phone_number')}
                 />
               </Grid.Col>
             </Grid>
             <Grid mt={8}>
               <Grid.Col md={12} lg={12}>
                 <PasswordInput
                   required
                   placeholder="Password"
                   {...registrationForm.getInputProps('password')}
                 />
               </Grid.Col>
             </Grid>
             <Grid mt={8}>
               <Grid.Col md={12} lg={12}>
                 <PasswordInput
                   required
                   placeholder="Confirm Password"
                   {...registrationForm.getInputProps('confirm_password')}
                 />
               </Grid.Col>
             </Grid>
            {/* {error && <Text color='red' align='center' italic>{axi}</Text>} */}
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
