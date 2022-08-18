/// <reference types="react" />
import type { Props } from './svelte'
declare const Svg: ({ id, illus, className, w, h }: Props) =>
  | false
  | import('react').DetailedReactHTMLElement<
      {
        ref: import('react').RefObject<HTMLElement>
        className: string
      },
      HTMLElement
    >
  | null
export default Svg
