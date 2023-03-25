import {
  Container,
  Card,
  Button,
  Group,
  Text,
  TypographyStylesProvider,
} from '@mantine/core'
import { MdDelete } from 'react-icons/md'
import { Product } from '@/interfaces/Product'
import capitalize from "@/lib/capitalize"
import Link from 'next/link'
import { modals } from '@mantine/modals'
import axios from 'axios'
import { useRouter } from 'next/router'
import formattedDate from '@/lib/formatDate'

interface UserProductProps {
  product: Product
}

const UserProduct = ({ product }: UserProductProps) => {
  const router = useRouter()
  async function handleProductDelete() { 
    const res = await axios.delete(`http://localhost:8000/products/${product.id}`)
    if(res.status === 204) {
      router.push('/products')
    }

  }
 return (
   <Container mt={20} size="40rem" mx="auto" align-content="center">
     <Card shadow="sm" padding="lg" withBorder>
       <Group position="apart">
         <Link href={`/products/${product.id}/edit-product`}>
           <Text fz="xl">{product.title}</Text>
         </Link>
         <Button
           fz="xl"
           variant="subtle"
           color="dark"
           onClick={() =>
             modals.openConfirmModal({
               withCloseButton: false,
               centered: true,
               children: (
                 <Text size="xl">
                   Are you sure you want to delete this product?
                 </Text>
               ),
               labels: {
                 confirm: 'Yes',
                 cancel: 'No',
               },
               cancelProps: { color: 'red' },
               confirmProps: { color: 'violet' },
               onCancel: () => console.log('Cancel'),
               onConfirm: () => handleProductDelete(),
             })
           }
         >
           <MdDelete />
         </Button>
       </Group>
       <Text fw={500} color="dimmed">
         Categories:{' '}
         {product.categories
           ?.map((category) => capitalize(category.category_name))
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
             nesciunt? Excepturi voluptates neque suscipit, impedit ut quo amet.
             Animi autem maiores pariatur asperiores quasi vel ratione? Facere
             earum cumque nulla optio! Praesentium quibusdam reiciendis non nam
             illo ut quasi, blanditiis quam commodi atque quo.
           </TypographyStylesProvider>
         </Text>
       </Group>

       <Group position="apart">
         <Text color="dimmed">
           Date Posted: {formattedDate(product.created_at)}{' '}
         </Text>
         <Text color="dimmed"> Views Count </Text>
       </Group>
     </Card>
   </Container>
 )
}

export default UserProduct