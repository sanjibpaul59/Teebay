import ProductDetail from "@/components/products/ProductDetail"
import { Button, Container, Group, Space } from "@mantine/core"

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
  const res = await fetch(`http://localhost:3000/products/${id}`)
  const product = await res.json()
  return {
    props: {
      product, 
    }
  }
}


