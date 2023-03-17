import axios from 'axios'
import { ProductList } from '@/components/products/ProductList'

const Products = ({ products }: any) => { 
  return (
    <ProductList products={products} />
  )
}

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3000/products")
  console.log(res.data)
  return { props: { products: res.data } }
}

export default Products