import Link from 'next/link'
import Head from 'next/head'
import { Center, Flex, Button, Container, Grid } from '@mantine/core'
import UserProduct from '@/components/products/UserProduct'
import { Product } from '@/interfaces/Product'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navigation from '@/components/Navbar'

interface UserProductsProps { 
  products: Product[]
}

interface Props {
  products: Product[]
}

// function UserProducts({ products }: UserProductsProps) {
const UserProducts: NextPage<Props> = ({ products }) => {
    const router = useRouter()
    const [userProducts, setUserProducts] = useState<Product[]>([])

  useEffect(() => {
      const userId = parseInt(localStorage.getItem('userId') || '0', 10)
      // filter the products by the user ID
      const filteredProducts = products.filter(
        (product) => product.user_id === userId
      )
      setUserProducts(filteredProducts)
    }, [products])

    if (router.isFallback) {
      return <div>Loading...</div>
    }
    return (
      <>
        <Head>
          <title>Products List</title>
        </Head>
        <Grid>
        <Grid.Col span="content">
          <Navigation />
          </Grid.Col>
          <Grid.Col span={8}>
        <Center h={100}>
          <h1>MY PRODUCTS</h1>
        </Center>

          {userProducts.map((product: any) => (
              <UserProduct product={product} />
          ))}
             <Container size="40rem" mx="auto">
          <Flex justify="end" my={'lg'}>
            <Link href="/products/newProduct">
              <Button color="violet">ADD PRODUCT</Button>
            </Link>
          </Flex>
        </Container>
          </Grid.Col>
          </Grid>
        
        
      </>
    )
  }

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const res = await fetch(`http://localhost:3000/products`)
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}

export default UserProducts
