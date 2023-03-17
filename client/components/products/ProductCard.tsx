import Link from 'next/link'
import { Product } from "../../interfaces/Product"
import {
  Container,
  Card,
  Group,
  Text,
  TypographyStylesProvider,
} from '@mantine/core'
import { MdDelete } from 'react-icons/md'

interface ProductCardProps { 
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Container mt={20} size="40rem" mx="auto" align-content="center">
      <Link href={`/products/${product.id}`} passHref>
        <Card shadow="sm" padding="lg" withBorder>
          <Group position="apart">
            <Text fz="xl">{product.title}</Text>
            {/* <Text fz="xl">
            <MdDelete />
          </Text> */}
          </Group>
          <Text fw={500} color="dimmed">
            Categories: Category Names Here
          </Text>
          <Text fw={500} color="dimmed">
            Price: BDT {product.selling_price}
          </Text>
          <Group position="apart" mt="md" mb="xs">
            <Text size="sm" lineClamp={3}>
              <TypographyStylesProvider>
                {product.description} Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eveniet hic laudantium sit provident ad fuga
                nesciunt? Excepturi voluptates neque suscipit, impedit ut quo
                amet. Animi autem maiores pariatur asperiores quasi vel ratione?
                Facere earum cumque nulla optio! Praesentium quibusdam
                reiciendis non nam illo ut quasi, blanditiis quam commodi atque
                quo.
              </TypographyStylesProvider>
            </Text>
          </Group>
        </Card>
      </Link>
    </Container>
  )
}
