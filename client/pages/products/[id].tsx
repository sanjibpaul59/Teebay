import ProductDetail from "@/components/products/ProductDetail"
import axiosClient from "@/utils/axiosClient"
import { Container } from "@mantine/core"

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
  const res = await axiosClient.get(`/products/${id}`)
  const product = await res.data
  return {
    props: {
      product, 
    }
  }
}


