import axios from 'axios'
import Head from 'next/head'
import { ProductList } from '@/components/products/ProductList'
import { getCurrentUser } from '@/lib/getCurrentUser'
import Navigation from '@/components/Navbar'
import Unauthorized from '@/components/authentication/Unauthorized'
import { Grid, Center } from '@mantine/core'

export default function Products({ products }: any) { 
  const authenticatedUser = getCurrentUser()
  if (!authenticatedUser) { 
    return (
      <Unauthorized />
    )
  }
  return (
    <div>
      <Head>
        <title>Products List</title>
      </Head>
      <Grid>
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
    </div>
  )
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/products")
  console.log(res.data)
  return { props: { products: res.data } }
}
