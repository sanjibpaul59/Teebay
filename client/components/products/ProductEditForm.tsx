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
  CloseButton,
  Flex
} from '@mantine/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type EditProductFormProps = {
  product: any
}

type Category = {
  id: number
  category_name: string
}

const ProductEditForm = ({ product }: EditProductFormProps) => {
  const router = useRouter()
  const editableProduct = product.product
  const [ categories, setCategories ] = useState<Category[]>([])
  const [selectedCategories, setSelectedCategories] = useState<any>([])
  
  const editForm = useForm({
    initialValues: {
      title: editableProduct.title,
      description: editableProduct.description,
      selling_price: editableProduct.selling_price,
      rent_amount: editableProduct.rent_amount,
      rent_type: editableProduct.rent_type,
      categories: editableProduct.categories,
      category_ids: [] 
    },
  })

  useEffect(() => {
    axios
      .get('http://localhost:8000/categories')
      .then((response) => {
        setCategories(response.data)
        setSelectedCategories(editableProductCategories)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error)
      })

  }, [])

  const data = categories.map((category: Category) => {
    return {
      label: capitalize(category.category_name),
      value: category.id.toString(),
    }
  })
  const editableProductCategories = editableProduct.categories.map((category: Category) => category.id.toString())
  
  
  // Filter all categories in data with editableProductCategories to get the default values for MultiSelect
  const defaultCategories = data.filter((category) => {
    return editableProductCategories.includes(category.value)
  })

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, description, selling_price, rent_amount, rent_type } = editForm.values
    const updatedProduct = { title, description, selling_price, rent_amount, rent_type, category_ids: selectedCategories }
    
    const res = await axios.put(`http://localhost:8000/products/${editableProduct.id}`, {product : updatedProduct})
    if (res.status === 200) {
      router.push({
        pathname: '/products/user-products',
      })
    }
  }
  const handleCategoryChange = (value:any) => { 
    const prevValues : string[] = editForm.values.category_ids
    setSelectedCategories([...prevValues, ...value])
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

  const Item = forwardRef<HTMLDivElement, SelectItemProps>(({label, value, ...others}, ref) => {
    return (
      <div ref={ref} {...others}>
        <Flex align="center" justify="space-between">
          <Box>{label}</Box>
        </Flex>
    </div>
  )
  })

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
            data={data}
            valueComponent={Value}
            itemComponent={Item}
            searchable
            clearable
            value={selectedCategories}
            // value={defaultCategories.map((category: any) => category.value)}
            mt={30}
            label="Categories"
            onChange={handleCategoryChange}
            // {...editForm.getInputProps('category_ids')}
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

