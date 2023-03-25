import Head from 'next/head'
import {
  IconShoppingCart,
  IconCalendarCheck,
  IconCalendarDollar,
  IconMoneybag,
} from '@tabler/icons-react'
import Navigation from '@/components/Navbar'
import { Grid, Center, Tabs } from '@mantine/core'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { ProductCard } from '@/components/products/ProductCard'
import Cookies from 'js-cookie'

const Transactions = () => {
  const [sold_products, setSoldProducts] = useState([])
  const [bought_products,setBoughtProducts] = useState([])
  const [borrowed_products,setBorrowedProducts] = useState([])
  const [ lent_products, setLentProducts ] = useState([])
  const current_user = parseInt(Cookies.get('userId')!)
  useEffect(() => {
    axios.get(`http://localhost:8000/users/${current_user}/sold_products`).then((response) => setSoldProducts(response.data) )
    axios.get(`http://localhost:8000/users/${current_user}/bought_products`).then((response) => setBoughtProducts(response.data) )
    axios.get(`http://localhost:8000/users/${current_user}/lent_products`).then((response) => setLentProducts(response.data) )
    axios.get(`http://localhost:8000/users/${current_user}/borrowed_products`).then((response) => setBorrowedProducts(response.data) )
  },[])

  return (
    <div>
      <Head>
        <title>Transactions List</title>
      </Head>
      <Grid>
        <Grid.Col span="content">
          <Navigation />
        </Grid.Col>
        <Grid.Col span={8}>
          <Tabs defaultValue="bought" color="violet">
            <Tabs.List grow position="center">
              <Tabs.Tab
                value="bought"
                icon={<IconShoppingCart size="0.8rem" />}
              >
                Bought
              </Tabs.Tab>
              <Tabs.Tab value="sold" icon={<IconMoneybag size="0.8rem" />}>
                Sold
              </Tabs.Tab>

              <Tabs.Tab
                value="borrowed"
                icon={<IconCalendarCheck size="0.8rem" />}
              >
                Borrowed
              </Tabs.Tab>
              <Tabs.Tab
                value="lent"
                icon={<IconCalendarDollar size="0.8rem" />}
              >
                Lent
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="bought" pt="xs">
              <ul>
                {bought_products.map((product: any) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value="sold" pt="xs">
              <ul>
                {sold_products.map((product: any) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value="borrowed" pt="xs">
              <ul>
                {borrowed_products.map((product: any) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value="lent" pt="xs">
              <ul>
                {lent_products.map((product: any) => (
                  <li key={product.id}>
                    <ProductCard product={product} />
                  </li>
                ))}
              </ul>
            </Tabs.Panel>
          </Tabs>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default Transactions