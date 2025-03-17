export type TNominal<GType, GName extends string> = GType & { readonly [Symbol.species]: GName }

export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N
