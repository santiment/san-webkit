export function assertNever(_: never): never {
  throw new Error("Didn't expect to get here")
}
