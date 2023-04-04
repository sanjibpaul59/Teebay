// interfaces/Product.ts
export interface Product {
  id: number
  title: string
  description: string
  selling_price: number
  rent_amount: number
  rent_type: string
  user_id: number
  categories: Category[]
  category_ids: number[]
  created_at: Date
  view_count: number
}

export type Category = {
  id: number
  category_name: string
}

export interface ProductForm { 
  title: string
  description: string
  selling_price: number
  rent_amount: number
  rent_type: string
  category_ids: number[]
}