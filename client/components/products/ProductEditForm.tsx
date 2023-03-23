import { Product } from '@/interfaces/Product'
import { useForm } from '@mantine/form'
import { forwardRef } from 'react'
import capitalize from '@/lib/capitalize'
import {
  Container,
  TextInput,
  Group,
  Button,
  Textarea,
  Grid,
  Select,
  MultiSelect,
  NumberInput,
  MultiSelectValueProps,
  SelectItemProps,
  Box,
  rem,
  Flex,
  Text,
  CloseButton,
} from '@mantine/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type EditProductFormProps = {
  product: Product
}

type Category = {
  id: number
  category_name: string
}

const ProductEditForm = ({ product }: EditProductFormProps) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategories, setSelectedCategories] = useState<any[]>([])
  const editForm = useForm({
    initialValues: {
      title: product.title,
      description: product.description,
      selling_price: product.selling_price,
      rent_amount: product.rent_amount,
      rent_type: product.rent_type,
      categories: product.categories,
    },
  })

  useEffect(() => {
    axios
      .get('http://localhost:3000/categories')
      .then((response) => {
        setCategories(response.data)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error)
      })

    setSelectedCategories(
      product.categories? product.categories.map((category) => {
        return { label: category.category_name, value: category.id.toString() }
      }): []
    )
  }, [])
  console.log(
    'selectedCategories:',
    selectedCategories.map((category: any) => category.value)
  )
  const handleCategoryChange = (value: Category[]) => {
    setSelectedCategories(value)
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // const updatedProduct = { ...editForm.values, category_ids: selectedCategories.map((category: any) => category.value) }
    // rename the categories key to category_ids before sending to the server

    const categoryIds = editForm.values.categories.map(
      (category) => category.id
    )
    console.log('editForm.values:', editForm.values, categoryIds)
    const updatedProduct = { ...editForm.values, category_ids: categoryIds }
    console.log('updatedProduct:', updatedProduct)

    const { categories, ...rest } = updatedProduct
    const newObj = Object.fromEntries(Object.entries(rest))
    console.log('product:', newObj)
  }

  function Value({
    value,
    label,
    onRemove,
    classNames,
    ...others
  }: MultiSelectValueProps & { value: string }) {
    return (
      <div {...others}>
        <Box
          sx={(theme) => ({
            display: 'flex',
            cursor: 'default',
            alignItems: 'center',
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
            border: `${rem(1)} solid ${
              theme.colorScheme === 'dark'
                ? theme.colors.dark[7]
                : theme.colors.gray[4]
            }`,
            paddingLeft: theme.spacing.xs,
            borderRadius: theme.radius.sm,
          })}
        >
          <Box sx={{ lineHeight: 1, fontSize: rem(12) }}>{label}</Box>
          <CloseButton
            onMouseDown={onRemove}
            variant="transparent"
            size={22}
            iconSize={12}
            tabIndex={-1}
          />
        </Box>
      </div>
    )
  }

  return (
    <Container mt={100}>
      <Container mt={20} mx="auto" align-content="center">
        <form onSubmit={handleFormSubmit}>
          <TextInput
            mt={30}
            label="Product Title"
            placeholder="Product Title"
            {...editForm.getInputProps('title')}
          />
          <MultiSelect
            data={categories.map((category: Category) => {
              return {
                label: capitalize(category.category_name),
                value: category.id.toString(),
              }
            })}
            defaultValue={selectedCategories.map(
              (category: any) => category.value
            )}
            valueComponent={Value}
            mt={30}
            label="Categories"
            searchable
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
                <NumberInput
                  label="Rent"
                  placeholder="Rent Amount"
                  {...editForm.getInputProps('rent_amount')}
                />
                <Select
                  label=""
                  placeholder="per hr"
                  data={[
                    { label: 'per hr', value: 'hourly' },
                    { label: 'per day', value: 'daily' },
                  ]}
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

// import { useForm } from '@mantine/core'
// import { Multiselect } from '@mantine/core'
// import { useState, useEffect } from 'react'

// interface Product {
//   id: number
//   title: string
//   description: string
//   selling_price: number
//   rent_amount: number
//   rent_type: string
//   user_id: number
//   categories: number[]
// }

// interface Props {
//   product: Product
// }

// export default function ProductUpdateForm({ product }: Props) {
//   const [categories, setCategories] = useState<number[]>(product.categories)
//   const [errorMessage, setErrorMessage] = useState<string>('')
//   const form = useForm<Product>({
//     initialValues: {
//       id: product.id,
//       title: product.title,
//       description: product.description,
//       selling_price: product.selling_price,
//       rent_amount: product.rent_amount,
//       rent_type: product.rent_type,
//       user_id: product.user_id,
//       categories: product.categories,
//     },
//     onSubmit: async (formData) => {
//       try {
//         // Handle form submission
//         console.log(formData)
//       } catch (error) {
//         setErrorMessage('An error occurred while updating the product')
//       }
//     },
//     validationRules: {
//       // Define any validation rules for the form here
//     },
//   })

//   useEffect(() => {
//     form.setFieldValue('categories', categories)
//   }, [categories])

//   const handleCategoryChange = (selectedItems: number[]) => {
//     setCategories(selectedItems)
//   }

//   return (
//     <form ref={formRef}>
//       <TextInput
//         label="Title"
//         name="title"
//         value={values.title}
//         onChange={handleChange}
//         error={errors.title}
//       />
//       <Textarea
//         label="Description"
//         name="description"
//         value={values.description}
//         onChange={handleChange}
//         error={errors.description}
//       />
//       <TextInput
//         type="number"
//         label="Selling price"
//         name="selling_price"
//         value={values.selling_price}
//         onChange={handleChange}
//         error={errors.selling_price}
//       />
//       <TextInput
//         type="number"
//         label="Rent amount"
//         name="rent_amount"
//         value={values.rent_amount}
//         onChange={handleChange}
//       />
//       <MultiSelect
//         data={product.categories.map((category: any) => ({
//           value: category.id,
//           label: category.category_name,
//         }))}
//         label="Categories"
//         placeholder="Select categories"
//         name="category_ids"
//         value={values.category_ids.map((id) => id.toString())}
//         onChange={(value) =>
//           handleChange({ target: { name: 'category_ids', value } })
//         }
//       />
//       <Button
//         type="button"
//         variant="outline"
//         onClick={handleUpdate}
//         disabled={isLoading}
//       >
//         {isLoading ? <Loader /> : 'Update product'}
//       </Button>
//     </form>
//   )
// }
