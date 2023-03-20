import {Navbar, Flex} from '@mantine/core'
import Link from 'next/link'
import { getCurrentUser } from '@/lib/getCurrentUser'

export default function Navigation() {
  const authenticatedUser = getCurrentUser()
  return (
    <>
      <Navbar height={700} width={{ sm: 300 }} p="md">
        <Flex direction="column" align="center" justify="center">
          <Link href="/">Home Page</Link>
          <Link href="/products">Products</Link>
          <Link href="/products/user-products">My Products</Link>
          <Link href="/products/newProduct">Add Product</Link>
          {authenticatedUser ? (
            <Link href="/logout">Logout</Link>
          ) : (
            <Link href="/auth">Login</Link>
          )}
        </Flex>
      </Navbar>
    </>
  )
}
