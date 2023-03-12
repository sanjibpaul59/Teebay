import { useToggle, upperFirst } from '@mantine/hooks'
import { useForm, matchesField } from '@mantine/form'
import {
  TextInput,
  PasswordInput,
  Title,
  Paper,
  Group,
  Button,
  Anchor,
  Stack,
  createStyles,
  rem,
} from '@mantine/core'
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons'
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: 'cover',
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(350),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}))
export function AuthenticationForm(props) {
  const { classes } = useStyles()
  const [type, toggle] = useToggle(['login', 'register'])
  const form = useForm({
    initialValues: {
      first_name: '',
      last_name: '',
      address: '',
      email: '',
      phone_number: '',
      password: '',
      confirm_password: '',
    },

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
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to Teebay!
        </Title>

        <form onSubmit={form.onSubmit(() => {})}>
          <Stack>
            {type === 'register' && (
              <TextInput
                placeholder="First Name"
                value={form.values.first_name}
                onChange={(event) =>
                  form.setFieldValue('name', event.currentTarget.value)
                }
                radius="md"
              />
            )}
            {type === 'register' && (
              <TextInput
                placeholder="Last Name"
                value={form.values.last_name}
                onChange={(event) =>
                  form.setFieldValue('name', event.currentTarget.value)
                }
                radius="md"
              />
            )}
            {type === 'register' && (
              <TextInput
                placeholder="Address"
                value={form.values.address}
                onChange={(event) =>
                  form.setFieldValue('name', event.currentTarget.value)
                }
                radius="md"
              />
            )}

            <TextInput
              required
              placeholder="Email"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue('email', event.currentTarget.value)
              }
              error={form.errors.email && 'Invalid email'}
              radius="md"
            />

            {type === 'register' && (
              <TextInput
                placeholder="Phone Number"
                value={form.values.phone_number}
                onChange={(event) =>
                  form.setFieldValue('name', event.currentTarget.value)
                }
                radius="md"
              />
            )}

            <PasswordInput
              required
              placeholder="Password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue('password', event.currentTarget.value)
              }
              error={
                form.errors.password &&
                'Password should include at least 6 characters'
              }
              radius="md"
            />
            {type === 'register' && (
              <PasswordInput
                required
                placeholder="Confirm Password"
                value={form.values.confirm_password}
                onChange={(event) =>
                  form.setFieldValue(
                    'confirm_password',
                    event.currentTarget.value
                  )
                }
                error={form.errors.confirm_password && 'Password should match'}
                radius="md"
              />
            )}
          </Stack>

          <Group position="apart" mt="xl">
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
  )
}
