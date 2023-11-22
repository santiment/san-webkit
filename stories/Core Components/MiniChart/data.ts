function randomNum(min: number, max: number, step: number) {
  return min + Math.floor((Math.random() * (max - min + 1)) / step) * step
}

export const volumes = new Array(20).fill(undefined).map(() => randomNum(20, 100, 1))

export const prices = new Array(20).fill(undefined).map(() => randomNum(100, 3000, 50))
