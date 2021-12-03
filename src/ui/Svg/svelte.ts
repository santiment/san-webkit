export { default } from './index.svelte'

export type Props = {
  className?: string

  /** Width of the svg */
  w?: string

  /** Height of the svg, defaults to the 'w' prop value */
  h?: string

  /**
   * Is an illustration?
   * @default false  */
  illus?: boolean

  id:
    | 'user'
    | 'arrow-down'
    | 'search'
    | 'pointer-arrow-right'
    | 'logout'
    | 'comment'
    | 'share'
    | 'cookies'
    | 'lightbulb'
    | 'question-round'
    | 'filter'
    | 'close'
    | 'sheriff'
    | 'reddit'
    | 'facebook'
    | 'twitter'
    | 'linked-in'
    | 'telegram'
    | 'github'
    | 'discord'
    | 'youtube'
    | 'edit'
    | 'remove'
    | 'plus-round'
    | 'info'
    | 'arrow-left'
    | 'santiment'
    | 'dots'
    | 'clock'
    | 'success'
    | 'error'
    | 'comment-bubble'
}
