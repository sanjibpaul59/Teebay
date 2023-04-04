import { Container, Grid } from '@mantine/core'
import ProductEditForm from '@/components/products/ProductEditForm'
import Navigation from '@/components/Navbar'
import axiosClient from '@/utils/axiosClient'


export default function EditProduct(product: any){
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
  const res = await axiosClient.get(`/products/${id}`)
  const product = await res.data
  return {
    props: {
      product,
    },
  }
}