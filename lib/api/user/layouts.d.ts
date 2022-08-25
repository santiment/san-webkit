export declare const queryUserLayouts: (userId: number | string) => Promise<
  {
    id: number
    title: string
    metrics: string[]
  }[]
>
