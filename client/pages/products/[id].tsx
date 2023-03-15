import Link from 'next/link'
import { Card, Center, Text, Badge, Button, Group, Container, Space } from '@mantine/core'
import { useRouter } from 'next/router'

export default function ProductDetails({ product }: any) {
  const router = useRouter()
  const productId = router.query.id
  return (
    <Container mt={50}>
      <Card mt={20}>
        <h1>{product.title}</h1>
        <Text mt={10} fw={500} color="dimmed">
          Categories: product.product_categories
        </Text>
        <Text mt={10} fw={500} color="dimmed">
          Price: BDT {product.selling_price}
        </Text>
        <Text mt={20}>
          {product.description} Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nemo unde consectetur ipsum reiciendis eius eum
          assumenda aliquam quas nobis, facere tenetur. Esse eius excepturi
          voluptatem omnis, porro obcaecati commodi dolor quod, sint quae
          laboriosam laborum vitae molestias recusandae libero possimus, dolores
          pariatur tempore quia distinctio aperiam eaque nemo! Laborum totam
          vero id sed nobis placeat recusandae nisi, cum dicta, autem laudantium
          quod explicabo. Magni soluta suscipit ipsum fuga quas, reiciendis
          facere saepe ex corporis doloremque, exercitationem assumenda minus
          rem eum perspiciatis aspernatur nulla labore commodi dicta repellendus
          porro hic modi. Doloribus quos aliquid eum, veniam corrupti qui dolor
          nulla debitis.
        </Text>
      </Card>
      <Space h="xl" />
      <Group position="right" mt="xl">
        <Button color="red" variant="outline" onClick={() => router.back()}>
          Rent
        </Button>
        <Button>Buy</Button>
      </Group>
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
      product
    }
  }
}
