import {Product} from '@/interfaces/Product'
import { Card, Text, Button, Group, Space, Modal } from '@mantine/core'
import capitalize from '@/utils/capitalize'
import { modals } from '@mantine/modals'
import { useState } from 'react'
import { DatePickerInput } from '@mantine/dates'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useDisclosure } from '@mantine/hooks'
import axiosClient from '@/utils/axiosClient'



interface ProductDetailProps { 
  product: Product
}
const ProductDetail = ({ product }: ProductDetailProps) => {
  const router = useRouter()
  const [rentFrom, setRentFrom] = useState<Date | null>(null)
  const [ rentTo, setRentTo ] = useState<Date | null>(null)
  const [opened, { open, close }] = useDisclosure(false)
  const buyer = parseInt(Cookies.get('userId')!)

  async function handleProductBuy (){ 
    const res = await axiosClient.post('/transactions', {
      product_id: product.id,
      seller_id: product.user_id,
      buyer_id: buyer,
      price: product.selling_price,
      transaction_type: 'buy',
      selling_date: new Date(),
    })
    if(res.status === 201) {
      router.push('/products')
    }
  }
  async function handleProductRent() { 
    const res = await axiosClient.post('/transactions', {
      product_id: product.id,
      seller_id: product.user_id,
      buyer_id: buyer,
      price: product.rent_amount,
      transaction_type: 'rent',
      rent_start_date: rentFrom,
      rent_end_date: rentTo,
    })
    if(res.status === 201) {
      router.push('/products')
    }
  }
 return (
   <>
     <Modal size="auto" opened={opened} onClose={close} title="Rental Period" centered withCloseButton={false}>
       <DatePickerInput minDate={new Date()} dropdownType="modal" label="Rent From" value={rentFrom} onChange={setRentFrom} />
       <DatePickerInput minDate={new Date()} dropdownType='modal' label="Rent To" value={rentTo} onChange={setRentTo} />
       <Group position='right'>
        <Button onClick={close} mt={20} color="red">
          Go Back 
        </Button>
        <Button onClick={handleProductRent} mt={20} color="violet">
          Confirm rent
        </Button>
       </Group>
      </Modal>
     <Card mt={20}>
       <h1>{product.title}</h1>
       <Text mt={10} fw={500} color="dimmed">
         Categories:{' '}
         {product.categories
           .map((category) => capitalize(category.category_name))
           .join(', ')}
       </Text>
       <Text mt={10} fw={500} color="dimmed">
         Price:${+product.selling_price} | Rent:${product.rent_amount} {product.rent_type}
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
           onClick={open}
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
