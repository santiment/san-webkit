export const randomNum = (min: number, max: number, step: number) =>
  min + Math.floor((Math.random() * (max - min + 1)) / step) * step

export const randomString = () => (Math.random() + 1).toString(36).substring(7)
