import { Container, Grid } from '@mantine/core'
import ProductEditForm from '@/components/products/ProductEditForm'
import Navigation from '@/components/Navbar'
import {Product} from '@/interfaces/Product'

export default function EditProduct(product: Product){
  return (
      <div>
        <Grid m={10}>
          <Grid.Col span="content">
            <Navigation />
          </Grid.Col>
          <Grid.Col span={8}>
            <Container mt={100}>
            <ProductEditForm product={product} />
            </Container>
          </Grid.Col>
        </Grid>
      </div>
  )
}

// get the product as server-side props to update
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