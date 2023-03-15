import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'
import { Card, Center, Text, Badge, Button, Group } from '@mantine/core'
import Product from '@/components/Product'
function ProductList({products} : any) {
 return (
   <>
     <Head>
       <title>Products List</title>
     </Head>
     <div>
       <Center h={100}>
         <h1>ALL PRODUCTS</h1>
       </Center>
       <ul>
         {products.map((product: any) => (
           <li key={product.id}>
             <Link href={`/products/${product.id}`}>
               <Product product={product} />
              </Link>
           </li>
         ))}
       </ul>
     </div>
   </>
 )
}

ProductList.getInitialProps = async (ctx: any) => {
 const res = await axios.get("http://localhost:3000/products")
 console.log(res.data)
 return { products : res.data}
}

export default ProductList