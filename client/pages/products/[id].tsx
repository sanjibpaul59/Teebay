import ProductDetail from "@/components/products/ProductDetail"
import { Container } from "@mantine/core"
import axios from "axios"

export default function ProductDetails({ product }: any) {
  return (
      <Container mt={50}>
        <ProductDetail product={product} />
      </Container>
  )
}
// Path: client/pages/products/[id].tsx
// get server side props for dynamic pages
export async function getServerSideProps(context: any) { 
  const { params } = context
  const { id } = params
  const res = await axios.get(`http://api:8000/products/${id}`)
  const product = await res.data
  return {
    props: {
      product, 
    }
  }
}


