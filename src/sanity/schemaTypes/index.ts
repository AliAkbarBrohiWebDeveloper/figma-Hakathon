import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'


import { CustomerShema } from './custmer'
import { OrderSchema } from './order'
import ReviewSection from './Review'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,CustomerShema,OrderSchema,ReviewSection],
}
