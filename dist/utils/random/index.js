export const randomNum = (min, max, step) => min + Math.floor((Math.random() * (max - min + 1)) / step) * step;
export const randomString = () => (Math.random() + 1).toString(36).substring(7);
