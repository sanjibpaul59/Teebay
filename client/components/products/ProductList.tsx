import Head from 'next/head'
import { Product } from '@/interfaces/Product'
import { ProductCard } from './ProductCard'
import { Center } from '@mantine/core'

interface ProductListProps {
  products: Product[]
  
}

export const ProductList = ({ products  }: ProductListProps) => {
  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>
      <div>
        {/* <Center h={100}>
          <h1>ALL PRODUCTS</h1>
        </Center> */}
        {/* <ul> */}
          {products.map((product: any) => (
            // <li key={product.id}>
              <ProductCard product={product}  />
            // </li>
          ))}
        {/* </ul> */}
      </div>
    </>
  )
}
