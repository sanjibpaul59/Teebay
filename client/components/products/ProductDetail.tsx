import {Product} from '@/interfaces/Product'
import { Card, Text, Button, Group, Space, TextInput, Flex } from '@mantine/core'
import capitalize from '@/lib/capitalize'
import { modals } from '@mantine/modals'
import { useState, useEffect } from 'react'
import { DateInput } from '@mantine/dates'
import { getCurrentUser } from '@/lib/getCurrentUser'
import axios from 'axios'
import { useRouter } from 'next/router'


interface ProductDetailProps { 
  product: Product
}
const ProductDetail = ({ product }: ProductDetailProps) => {
  const router = useRouter()
  const [rentFrom, setRentFrom] = useState<Date | null>(null)
  const [ rentTo, setRentTo ] = useState<Date | null>(null)
  const buyer = getCurrentUser()
  async function handleProductBuy (){ 
    const res = await axios.post('http://localhost:3000/transactions', {
      product_id: product.id,
      seller_id: product.user_id,
      buyer_id: buyer,
      price: product.selling_price,
      transcation_type: 'buy',
      rentFrom: null,
      rentTo: null,
      selling_date: new Date(),
    })
    if(res.status === 201) {
      router.push('/products')
    }
  }
 return (
   <>
     <Card mt={20}>
       <h1>{product.title}</h1>
       <Text mt={10} fw={500} color="dimmed">
         Categories:{' '}
         {product.categories
           .map((category) => capitalize(category.category_name))
           .join(', ')}
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
         pariatur tempore quia distinctio aperiam eaque nemo! Laborum totam vero
         id sed nobis placeat recusandae nisi, cum dicta, autem laudantium quod
         explicabo. Magni soluta suscipit ipsum fuga quas, reiciendis facere
         saepe ex corporis doloremque, exercitationem assumenda minus rem eum
         perspiciatis aspernatur nulla labore commodi dicta repellendus porro
         hic modi. Doloribus quos aliquid eum, veniam corrupti qui dolor nulla
         debitis.
       </Text>
       <Space h="xl" />
       <Group position="right">
         <Button
           color="violet"
           onClick={() => console.log('Rent')}
         >
           Rent
         </Button>
         <Button
           color="violet"
           onClick={() =>
             modals.openConfirmModal({
               withCloseButton: false,
               centered: true,
               children: (
                 <Text size="xl">
                   Are you sure you want to buy this product?
                 </Text>
               ),
               labels: {
                 cancel: "No",
                 confirm: 'Yes',
               },
               cancelProps: { color: 'red' },
               confirmProps: { color: 'violet' },
               onCancel: () => console.log('Cancel'),
               onConfirm: () => handleProductBuy(),
             })
           }
         >
           Buy
         </Button>
       </Group>
     </Card>
   </>
 )
}

export default ProductDetail
