import { useForm } from '@mantine/form'
import { useState } from 'react'
import { MultiSelect, Textarea, TextInput, Button } from '@mantine/core'

type FormData = {
  title: string
  description: string
  category_ids: number[]
}
type Category = {
 id: number
 category_name: string
}

type Props = {
  onSubmit: (data: FormData) => void
  defaultValues?: FormData
}

const ProductForm = ({ onSubmit, defaultValues }: Props) => {
  const [categories, setCategories] = useState<Category[]>([])
  const form = useForm<FormData>({
    initialValues: defaultValues || {
      title: '',
      description: '',
      category_ids: [],
    },
  })

  const handleSubmit = () => {
    onSubmit(form.values)
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        {...form.getInputProps('title')}
        defaultValue={defaultValues?.title}
      />
      {form.errors.title && <div>{form.errors.title}</div>}
      <br />
      {/* <label htmlFor="description">Description:</label> */}
      <Textarea
        id="description"
     name="description"
    label="Description"
        {...form.getInputProps('description')}
        defaultValue={defaultValues?.description}
      />
      {form.errors.description && <div>{form.errors.description}</div>}
      <br />
      {/* <label htmlFor="category_ids">Category IDs:</label> */}
      <MultiSelect
        id="category_ids"
     name="category_ids"
    label="Categories"
        data={categories.map((category: Category) => ({value: category.id.toString(), label: category.category_name})) }
        {...form.getInputProps('category_ids')}
        defaultValue={categories.map((category:Category) => category.id.toString())}
      >
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.category_name}
          </option>
        ))}
      </MultiSelect>
      {form.errors.category_ids && <div>{form.errors.category_ids}</div>}
      <br />
      <Button type="submit">Submit</Button>
    </form>
  )
}

export default ProductForm