import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import capitalize from '@/lib/capitalize'
import {
  Stepper,
  Button,
  Group,
  TextInput,
  Textarea,
  MultiSelect,
  Select,
  Container,
  NumberInput
} from '@mantine/core'
import { useForm } from '@mantine/form'

// type Category = {
//   id: number
//   category_name: string
// }
/* 
TODOS:  
1. Fetch categories from the server 
2. Populate form with categories 
3. Add product with categories
*/
const ProductAddForm = () => {
 const router = useRouter()
  const [ active, setActive ] = useState(0)
  const userId = parseInt(localStorage.getItem('userId') || '0', 10)
  const [ categories, setCategories ] = useState<any[]>([])
    useEffect(() => {
    axios
      .get('http://localhost:3000/categories')
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error)
      })

  }, [])
 // initial values for product add form
 const form = useForm({
  initialValues: {
   title: '',
   description: '',
   selling_price: '',
   rent_amount: '',
   rent_type: '',
   category_ids: [],
  },
  validate: (values) => {
   if (active === 0) {
    if (!values.title) {
     return { title: 'Product title is required' }
    }
   }
   if (active === 1) {
    if (!values.category_ids) {
     return { categories: 'Product categories is required' }
    }
   }
   if (active === 2) {
    if (!values.description) {
     return { description: 'Product description is required' }
    }
   }
   if (active === 3) {
    if (!values.selling_price) {
     return { selling_price: 'Product selling price is required' }
    }
    if (values.rent_amount && !values.rent_type) {
     return { rent_type: 'Product rent type is required' }
    }
   }
   return {}
  }
 })

   const nextStep = () =>
     setActive((current) => {
       if (form.validate().hasErrors) {
         return current
       }
       return current < 5 ? current + 1 : current
     })

   const prevStep = () =>
     setActive((current) => (current > 0 ? current - 1 : current))
  
   const product_categories = categories.map((category) => {
    return {
      label: capitalize(category.category_name),
      value: category.id.toString(),
    }
   })
  let labels = ""
  if (form.values.category_ids.length > 0) { 
    const categoryIds: string [] = form.values.category_ids
    labels = product_categories
          .filter(category => categoryIds.includes(category.value))
      .map(category => category.label).join(', ')
  }
  const rent_types = [
    { value: 'hourly', label: 'per hr' },
    { value: 'daily', label: 'per day' },
  ]
  const handleSubmit = async () => {
    const requestBody = {
      title: form.values.title,
      description: form.values.description,
      selling_price: form.values.selling_price,
      rent_amount: form.values.rent_amount,
      rent_type: form.values.rent_type,
      user_id: userId,
      category_ids: form.values.category_ids,
    }
   const res = await fetch('http://localhost:3000/products', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(requestBody),
   })

   if (res.ok) {
     router.push('/products')
   } else {
     console.error('Error creating product')
   }
 }

 return (
   <>
     <Stepper active={active} breakpoint="sm">
       <Stepper.Step label="Product Title">
         <TextInput mt={30} {...form.getInputProps('title')} />
       </Stepper.Step>
       <Stepper.Step label="Product Categories">
         <MultiSelect
           mt={30}
           data={product_categories}
           {...form.getInputProps('category_ids')}
         />
       </Stepper.Step>
       <Stepper.Step label="Product Description">
         <Textarea mt={30} {...form.getInputProps('description')} />
       </Stepper.Step>
       <Stepper.Step label="Product Price">
         <Group mt={30} position="center">
           <NumberInput
             placeholder="Purchase Price"
             {...form.getInputProps('selling_price')}
           />
         </Group>
         <Group position="center">
           <NumberInput
             mt={50}
             placeholder="Rent Price"
             {...form.getInputProps('rent_amount')}
           />
           <Select
             mt={50}
             data={rent_types}
             {...form.getInputProps('rent_type')}
           />
         </Group>
       </Stepper.Step>
       <Stepper.Completed>
         <Container mt={30}>
           <h1>Summary</h1>
           <h3>Product Title: {form.values.title}</h3>
           <h3>Product Categories: {labels} </h3>
           <h3>Product Description: {form.values.description}</h3>
           <h3>Product Price: {form.values.selling_price}</h3>
           <h3>Product Rent Price: {form.values.rent_amount}</h3>
           <h3>Product Rent Type: {form.values.rent_type}</h3>
         </Container>
       </Stepper.Completed>
       {/* <Stepper.Completed>
     <Group position="center">
      <Button color="violet" onClick={prevStep}>
       Back
      </Button>
      <Button color="violet" type='submit' onClick={handleSubmit}>
       Submit
      </Button>
     </Group>
    </Stepper.Completed> */}
     </Stepper>
     <Group position="apart" m="xl">
       {active !== 0 && (
         <Button color="violet" onClick={prevStep}>
           Back
         </Button>
       )}
       {active === 4 ? (
         <Button color="violet" type="submit" onClick={handleSubmit}>
           Submit
         </Button>
       ) : (
         <Button color="violet" onClick={nextStep}>
           Next
         </Button>
       )}
     </Group>
   </>
 )
}
export default ProductAddForm
