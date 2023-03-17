import Link from 'next/link'
import Head from 'next/head'
import { Center, Flex, Button, Container } from '@mantine/core'
import Product from '@/components/Product'

function MyProducts({ products }: any) {
  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>

      <Center h={100}>
        <h1>MY PRODUCTS</h1>
      </Center>
      {/* <p>{ products }</p> */}
      <ul>
        {
          products.map((product: any) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}/edit-product`}>
                <Product product={product} />
              </Link>
            </li>
          ))
        }
      </ul>
      <Container size="40rem" mx="auto">
        <Flex justify="end" my={'lg'}>
          <Link href="/products/newProduct">
            <Button color="violet">ADD PRODUCT</Button>
          </Link>
        </Flex>
      </Container>
    </>
  )
}

// get the products from the server by user id from the query params
export async function getServerSideProps(context: any) { 
  const { userId } = context.query
  const res = await fetch(`http://localhost:3000/users/${userId}/products`)
  const products = await res.json()
  return {
    props: {
      products
    }
  }
}

export default MyProducts
