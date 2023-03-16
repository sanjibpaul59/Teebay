import Link from "next/link"
import {useRouter} from 'next/router'
import { useForm } from "@mantine/form"
import {
  Flex,
  Container,
  Box,
  Card,
  TextInput,
  Group,
  Button,
  PasswordInput,
  Title,
  Paper,
  Text,
  Anchor,
} from '@mantine/core'


export default function Login() {
  const router = useRouter()
  const handleSubmit = () => {
    // e.preventDefault()
    router.push("/products")
  }
  const loginForm = useForm({
    initialValues: { email: '', password: '' },

    // Client-side Form validation
    validate: {
      email: (value:string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value:string) => (value.length < 6 ? 'Password must have at least 6 characters': null)
    },
  })

  return (
    <Container mt={100}>
      <Title align="center" order={2}>
        SIGN IN
      </Title>
      <Container mt={20} size="30rem" mx="auto" align-content="center">
        <Card shadow="sm" padding="lg" withBorder>
          {/* <Box maw={400} mx="auto"> */}
          <form onSubmit={loginForm.onSubmit(handleSubmit)}>
            <TextInput
              withAsterisk
              mt={30}
              placeholder="Email"
              {...loginForm.getInputProps('email')}
            />
            <PasswordInput
              withAsterisk
              mt={15}
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
        </Card>
      </Container>
    </Container>
  )
}