import { Card, Container, Text } from '@mantine/core'
import ProductEditForm from '@/components/products/ProductEditForm'

export default function EditProduct({ product }: any) { 
 
 return (
   <>
     <ProductEditForm product={product} />
   {/* <Container mt={50}>
    <Card mt={20}>
     <h1>{product.title}</h1>
     <Text mt={10} fw={500} color="dimmed">
      Categories: product.product_categories
     </Text>
     <Text mt={10} fw={500} color="dimmed">
      Price: BDT {product.selling_price}
     </Text>
     <Text mt={20}>
      {product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus deleniti excepturi? Nisi, molestias. Sed quasi nobis dolore, debitis natus, veritatis harum possimus corrupti, tenetur dignissimos fugit numquam deserunt eum distinctio ipsa magni! Quidem nesciunt sequi sit animi perferendis aspernatur dolores rerum reprehenderit magnam deleniti quasi minus numquam non nobis nam ullam labore molestiae, commodi necessitatibus unde ratione adipisci dolorem placeat facere. A corrupti amet sit delectus fugiat voluptas asperiores reprehenderit. Officiis assumenda facilis enim voluptatem pariatur, sequi quis ducimus nihil, voluptate ut corporis, incidunt fugiat perspiciatis totam temporibus! Necessitatibus illum illo repudiandae libero architecto temporibus eos possimus aliquid nam!
     </Text>
    </Card>
    </Container> */}
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
   product
  }
 }
}