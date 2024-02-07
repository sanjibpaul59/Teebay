import Head from 'next/head'
import { Product } from '@/interfaces/Product'
import { ProductCard } from './ProductCard'

interface ProductListProps {
  products: Product[]
  
}

export const ProductList = ({ products }: ProductListProps) => {
  if (products.length === 0) return <div>loading...</div>
  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>
      <div>
        {products.map((product: any) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
        {/* </ul> */}
      </div>
    </>
  )
}
