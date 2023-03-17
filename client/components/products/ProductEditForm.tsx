import { Product} from "../../interfaces/Product"
import { useForm } from '@mantine/form'
import { Container, TextInput, Group, Button, Textarea, Grid, Select, MultiSelect} from "@mantine/core"


interface ProductEditProps { 
 product: Product
}
const ProductEditForm = ({ product }: ProductEditProps) => {
 const editForm = useForm({
  initialValues: {
   title: product.title,
   categories: [{id: 1, name: 'category1'} , {id: 2, name: 'category2'}],
   description: product.description,
   selling_price: product.selling_price,
   rent_amount: product.rent_amount,
   rent_type: product.rent_type,

  }

 })

 const rent_types = [
  { value: 'hourly', label: 'per hr' },
  { value: 'daily', label: 'per day' },
 ];
 const product_categories = [
  {value: 'electronics', label: 'Electronics'},
  {value: 'furniture', label: 'Furniture'},
  {value: 'home appliances', label: 'Home Appliances'},
  {value: 'sporting goods', label: 'Sporting Goods'},
  {value: 'outdoor', label: 'Outdoor'},
  {value: 'toys', label: 'Toys'},
 ]

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
  e.preventDefault()
  console.log('product edit form submitted')
  console.log(editForm.values)
 }
 return (
   <Container mt={100}>
     <Container mt={20} mx="auto" align-content="center">
       <form onSubmit={handleSubmit}>
         <TextInput
           mt={30}
           label="Product Title"
           placeholder="Product Title"
           {...editForm.getInputProps('title')}
         />
         <MultiSelect
           data={product_categories}
           mt={30}
           label="Categories"
           {...editForm.getInputProps('categories')}
         />
         <Textarea
           mt={30}
           label="Product Description"
           placeholder="Product Description"
           {...editForm.getInputProps('description')}
         />
         <Grid mt={30}>
           <Grid.Col md={4} lg={4}>
             <TextInput
               label="Price"
               placeholder="Price"
               {...editForm.getInputProps('selling_price')}
             />
           </Grid.Col>
           <Grid.Col md={8} lg={8}>
             <Group position="apart">
               <TextInput
                 label="Rent"
                 placeholder="Rent Amount"
                 {...editForm.getInputProps('rent_amount')}
               />
               <Select
         label=""
         placeholder="per hr"
         data={rent_types}
         {...editForm.getInputProps('rent_type')}
               />
             </Group>
           </Grid.Col>
         </Grid>

         <Group position="right" mt="xl">
           <Button type="submit" color="violet">
             EDIT PRODUCT
           </Button>
         </Group>
       </form>
     </Container>
   </Container>
 )
}

export default ProductEditForm