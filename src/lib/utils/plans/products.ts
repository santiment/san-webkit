import { keyify } from '../object.js'

export const Product = keyify(
  {
    SANAPI: { id: '1' },
    SANBASE: { id: '2' },
  } as const,
  'name',
)

type TProductCheckProps = {
  id?: string
  name?: string
}

export const checkIsSanbaseProduct = ({ id, name }: TProductCheckProps) =>
  id === Product.SANBASE.id || name === Product.SANBASE.name

export const checkIsSanApiProduct = ({ id, name }: TProductCheckProps) =>
  id === Product.SANAPI.id || name === Product.SANAPI.name
