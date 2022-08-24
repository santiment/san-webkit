import type MediumEditor from 'medium-editor'
export declare const anchor: MediumEditor.AnchorFormOptions
export declare const TOOLBAR: {
  buttons: (
    | string
    | {
        name: string
        action: string
        tagNames: string[]
        contentDefault: string
      }
  )[]
}
export declare const COMMENTS_TOOLBAR: {
  buttons: (
    | string
    | {
        name: string
        action: string
        tagNames: string[]
        contentDefault: string
        useQueryState: boolean
      }
  )[]
}
