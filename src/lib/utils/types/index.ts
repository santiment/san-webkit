export type TNominal<GType, GName extends string> = GType & { readonly [Symbol.species]: GName }
