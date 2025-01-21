import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import orderShema from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,orderShema],
}
