export { default } from './index.svelte'

export type Props = {
  className?: string

  /** Width of the svg */
  w?: string | number

  /** Height of the svg, defaults to the 'w' prop value */
  h?: string | number

  /**
   * Is an illustration?
   * @default false  */
  illus?: boolean

  /** WIll be replaced with union of id in lib */
  id: string
}
