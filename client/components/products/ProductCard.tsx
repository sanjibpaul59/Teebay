import Link from 'next/link'
import { Product } from "@/interfaces/Product"
import {
  Container,
  Card,
  Group,
  Text,
  TypographyStylesProvider,
} from '@mantine/core'

import capitalize from "@/lib/capitalize"
import formattedDate from "@/lib/formatDate"

interface ProductCardProps { 
  product: Product
  
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Container mt={20} size="40rem" mx="auto" align-content="center">
      <Card shadow="sm" padding="lg" withBorder>
        <Link href={`/products/${product.id}`} passHref>
          <Group position="apart">
            <Text fz="xl">{product.title}</Text>
          </Group>
        </Link>
        <Text fw={500} color="dimmed">
          Categories:{' '}
          {product.categories
            .map((category) => capitalize(category.category_name))
            .join(', ')}
        </Text>
        <Text fw={500} color="dimmed">
          Price: ${+product.selling_price} | Rent: ${product.rent_amount}{' '}
          {product.rent_type}
        </Text>
        <Group position="apart" mt="md" mb="xs">
          <Text size="sm" lineClamp={3}>
            <TypographyStylesProvider>
              {product.description} Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Eveniet hic laudantium sit provident ad fuga
              nesciunt? Excepturi voluptates neque suscipit, impedit ut quo
              amet. Animi autem maiores pariatur asperiores quasi vel ratione?
              Facere earum cumque nulla optio! Praesentium quibusdam reiciendis
              non nam illo ut quasi, blanditiis quam commodi atque quo.
            </TypographyStylesProvider>
          </Text>
        </Group>
        <Group position="apart">
          <Text color="dimmed">
            Date Posted: {formattedDate(product.created_at)}{' '}
          </Text>
          <Text color='dimmed'> Views Count </Text>
        </Group>
      </Card>
    </Container>
  )
}
