import {Navbar, Flex} from '@mantine/core'
import Link from 'next/link'
import { getCurrentUser } from '@/lib/getCurrentUser'

export default function Navigation() {
  const authenticatedUser = getCurrentUser()
  return (
    <>
      <Navbar height={700} width={{ sm: 300 }} p="md">
        <Flex direction="column" align="left" justify="center">
          <Link href="/" replace scroll={false}>
            Home Page
          </Link>
          <Link href="/products" replace scroll={false}>
            Products
          </Link>
          <Link href="/products/user-products" replace scroll={false}>
            My Products
          </Link>
          <Link href="/products/newProduct" replace scroll={false}>
            Add Product
          </Link>
          <Link href='/users/transactions' replace scroll={false}>
            My Transactions
          </Link>
          {authenticatedUser ? (
            <Link href="/auth/logout">Logout</Link>
          ) : (
            <Link href="/auth">Login</Link>
          )}
        </Flex>
      </Navbar>
    </>
  )
}
