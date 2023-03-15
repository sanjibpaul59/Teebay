import Link from 'next/link'
import { Card, Center, Text, Badge, Button, Group } from '@mantine/core'

export default function Product({product}: any) {
  return (
    <>
      <h1>Product Details Page</h1>
      {/* <Link href="/products/{product.id}">
        <Center maw={600} h={350} mx="auto">
          <Card h={300} w={600} shadow="sm" padding="lg" radius="md" withBorder>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{product.title}</Text>
            </Group>
            <Text size="sm" color="dimmed">
              {product.description}
            </Text>
          </Card>
        </Center>
      </Link> */}
    </>
  )
}
