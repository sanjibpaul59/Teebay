import { Card, Container, Text } from '@mantine/core'
import ProductEditForm from '@/components/products/ProductEditForm'

export default function EditProduct({ product }: any) {
  return (
    <>
      <ProductEditForm product={product} />
    </>
  )
}

// get server-side props to edit a product
export async function getServerSideProps(context: any) {
  const { params } = context
  const { id } = params
  const res = await fetch(`http://localhost:3000/products/${id}`)
  const product = await res.json()
  return {
    props: {
      product,
    },
  }
}
