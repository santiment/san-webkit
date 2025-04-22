export type TNominal<GType, GName extends string> = GType & { readonly [Symbol.species]: GName }

export type IfAny<T, Y, N> = 0 extends 1 & T ? Y : N

export function exactObjectKeys<T extends object>(obj: T) {
  return Object.keys(obj) as (keyof typeof obj)[]
}
