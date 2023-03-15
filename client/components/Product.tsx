import {
  Container,
  Card,
  Title,
  Group,
  Text,
  TypographyStylesProvider,
} from '@mantine/core'

export default function Product({product}: any) {
 return (
   <Container mt={20} size="40rem" mx="auto" align-content="center">
     <Card shadow="sm" padding="lg" withBorder>
       <Group>
         <Text fz="xl">
           {product.title}
         </Text>
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
             {product.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet hic laudantium sit provident ad fuga nesciunt? Excepturi voluptates neque suscipit, impedit ut quo amet. Animi autem maiores pariatur asperiores quasi vel ratione? Facere earum cumque nulla optio! Praesentium quibusdam reiciendis non nam illo ut quasi, blanditiis quam commodi atque quo.
           </TypographyStylesProvider>
         </Text>
       </Group>
     </Card>
   </Container>
 )
}