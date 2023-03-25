import Link from 'next/link'
import Head from 'next/head'
import { Center, Flex, Button, Container, Grid } from '@mantine/core'
import UserProduct from '@/components/products/UserProduct'
import { Product } from '@/interfaces/Product'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navigation from '@/components/Navbar'
import Unauthorized from '@/components/authentication/Unauthorized'
import axios from 'axios'
import Cookies from 'js-cookie'

interface UserProductsProps { 
  products: Product[]
}

interface Props {
  products: Product[]
}

const UserProducts: NextPage<Props> = ({ products }) => {
  const router = useRouter()
  const [ userProducts, setUserProducts ] = useState<Product[]>([])
  const [ authenticatedUser, setAuthenticatedUser ] = useState<any>(null)
  useEffect(() => {
      const userId = parseInt(Cookies.get('userId')!)
      // filter the products by the user ID
      setAuthenticatedUser(userId)
      const filteredProducts = products? products.filter(
        (product) => product.user_id === userId
      ) : []
      setUserProducts(filteredProducts)
    }, [])

    if (router.isFallback) {
      return <div>Loading...</div>
    }
   if (!authenticatedUser) {
     return <Unauthorized />
   }
    return (
      <>
        <Head>
          <title>My Products | Teebay</title>
        </Head>
        <Grid m={0}>
        <Grid.Col span="content">
          <Navigation />
          </Grid.Col>
          <Grid.Col span={8}>
        <Center h={100}>
          <h1>MY PRODUCTS</h1>
        </Center>
        <ul>
            {userProducts? userProducts.map((product: any) => (
            <li key={product.id}>
                <UserProduct product={product} />
            </li>
            )): <div>Loading...</div>}
              </ul>
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
  const res = await axios.get("http://api:8000/products/")
  console.log(res)
  const products = await res.data

  return {
    props: {
      products,
    },
  }
}

export default UserProducts
