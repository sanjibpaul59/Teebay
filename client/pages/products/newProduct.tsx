import Navigation from "@/components/Navbar"
import ProductAddForm from "@/components/products/ProductAddForm"
import {Container, Grid} from "@mantine/core"
const NewProduct = () => {
  return (
    <div>
      <Grid m={10}>
        <Grid.Col span="content">
          <Navigation />
        </Grid.Col>
        <Grid.Col span={8}>
          <Container mt={100}>
            <ProductAddForm />
          </Container>
        </Grid.Col>
      </Grid>
    </div>
  )
}
 
export default NewProduct