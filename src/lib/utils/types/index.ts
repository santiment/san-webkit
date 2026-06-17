export type TNominal<GType, GName extends string> = GType & { readonly [Symbol.species]: GName }

export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N

export type NonNullableProperties<T> = {
  [K in keyof T]-?: NonNullable<T[K]>
}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends readonly (infer X)[]
      ? readonly DeepPartial<X>[]
      : DeepPartial<T[P]>
}
