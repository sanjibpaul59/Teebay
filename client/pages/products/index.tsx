import Head from 'next/head'
import { ProductList } from '@/components/products/ProductList'
import Cookies from 'js-cookie'
import Navigation from '@/components/Navbar'
import Unauthorized from '@/components/authentication/Unauthorized'
import { Grid, Center } from '@mantine/core'
import axiosClient from '@/utils/axiosClient'

export default function Products({ products }: any) { 
  const authenticatedUser = parseInt(Cookies.get('userId')!)
  if (!authenticatedUser) { 
    return (
      <Unauthorized />
    )
  }
  return (
    <>
      <Head>
        <title>Products List | Teebay</title>
      </Head>
      <Grid m={0}>
        <Grid.Col span="content">
          <Navigation />
        </Grid.Col>
        <Grid.Col span={8}>
          <Center h={100}>
            <h1>ALL PRODUCTS</h1>
          </Center>
          <ProductList products={products} />
        </Grid.Col>
      </Grid>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axiosClient.get("/unsold_products")
  return { props: { products: res.data } }
}
