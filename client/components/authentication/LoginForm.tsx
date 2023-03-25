import {
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

import { useForm } from '@mantine/form'
import Link from 'next/link'

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void
  error: string | null
}


const LoginForm = ({ onSubmit, error }: LoginFormProps) => {

 const loginForm = useForm({
   initialValues: {
     email: '',
     password: '',
   },
   // Client-side Form validation
   validate: {
     email: (value: string) =>
       /^\S+@\S+$/.test(value) ? null : 'Invalid email',
     password: (value: string) =>
       value.length < 6 ? 'Password must have at least 6 characters' : null,
   },
 })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { email, password } = loginForm.values
    onSubmit(email, password)
  }
 
 
  return (
    <Container mt={100}>
      <Title align="center" order={2}>
        SIGN IN
      </Title>
      <Container mt={20} size="30rem" mx="auto" align-content="center">
        <Card shadow="sm" padding="lg" withBorder>
          <form onSubmit={handleSubmit}>
            <TextInput
              withAsterisk
              mt={30}
              required
              placeholder="Email"
              {...loginForm.getInputProps('email')}
            />
            <PasswordInput
              withAsterisk
              mt={15}
              required
              placeholder="Password"
              {...loginForm.getInputProps('password')}
            />

            <Group position="center" mt="xl">
              <Button type="submit" color="violet">
                LOGIN
              </Button>
            </Group>
          </form>

          <Text ta="center" mt="md">
            Don&apos;t have an account?{' '}
            <Link href="/auth/registration" legacyBehavior>
              <Anchor fz="md" fw="bold">
                Signup
              </Anchor>
            </Link>
          </Text>
          {error && <Text color="red">{error}</Text>}
        </Card>
      </Container>
    </Container>
  )
}
export default LoginForm