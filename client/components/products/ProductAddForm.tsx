import { useState } from 'react'
import { useRouter } from 'next/router'
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

const ProductAddForm = () => {
 const router = useRouter()
 const [ active, setActive ] = useState(0)
 // initial values for product add form
 const form = useForm({
  initialValues: {
   title: '',
   description: '',
   selling_price: '',
   rent_amount: '',
   rent_type: '',
   categories: [],
  },
  validate: (values) => {
   if (active === 0) {
    if (!values.title) {
     return { title: 'Product title is required' }
    }
   }
   if (active === 1) {
    if (!values.categories) {
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
  
   const product_categories = [
     { value: 'electronics', label: 'Electronics' },
     { value: 'furniture', label: 'Furniture' },
     { value: 'home appliances', label: 'Home Appliances' },
     { value: 'sporting goods', label: 'Sporting Goods' },
     { value: 'outdoor', label: 'Outdoor' },
     { value: 'toys', label: 'Toys' },
   ]
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
      user_id: 1,
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
           {...form.getInputProps('categories')}
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
           <h3>Product Categories: {form.values.categories}</h3>
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
