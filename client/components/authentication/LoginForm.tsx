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

import Link from 'next/link'

type LoginFormProps = {
  onSubmit: (email: string, password: string) => void
  error: string | null
  loginForm: any
}


const LoginForm = ({ onSubmit, error, loginForm }: LoginFormProps) => {

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
              mt={30}
              required
              placeholder="Email"
              {...loginForm.getInputProps('email')}
            />
            <PasswordInput
              mt={15}
              required
              placeholder="Password"
              {...loginForm.getInputProps('password')}
            />
            {/* {error && <Text color="red" align='center' italic>{error}</Text>} */}
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
        </Card>
      </Container>
    </Container>
  )
}
export default LoginForm