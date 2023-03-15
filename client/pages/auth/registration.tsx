import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm, matchesField } from '@mantine/form'
import {
  Flex,
  Grid,
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
  Anchor
} from '@mantine/core'

export default function Registration() {
  const router = useRouter()
  const handleSubmit = () => {
    // e.preventDefault()
    router.push('/auth')
  }
  const registrationForm = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      address: '',
      email: '',
      phone_number: '',
      password: '',
    confirm_password: '',
      created_at: new Date().toISOString()
    },

    // Client-side Form validation
    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
      password: (val) =>
        val.length <= 6
          ? 'Password should include at least 6 characters'
          : null,
      confirm_password: matchesField('password', 'Passwords are not the same'),
    },
  })

  return (
    <Container mt={200}>
      <Title align="center" order={2}>
        SIGN UP
      </Title>
      <Container mt={20} size="30rem" mx="auto" align-content="center">
        <Card shadow="sm" padding="lg" withBorder>
          {/* <Box maw={400} mx="auto"> */}
          <form onSubmit={registrationForm.onSubmit((values) => console.log(values))}>
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
              <Button type="submit">REGISTER</Button>
            </Group>
          </form>
          <Text ta="center" mt="md">
            Already have an account?{' '}
            {/* <Anchor<'a'>
              href="/auth"
              weight={700}
              onClick={(event) => event.preventDefault()}
            >
              Sign in
            </Anchor> */}
            <Link href="/auth" legacyBehavior>
              <a>Sign in</a>
            </Link>
          </Text>
          {/* </Box> */}
        </Card>
      </Container>
    </Container>
  )
}
