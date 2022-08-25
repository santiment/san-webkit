export declare const checkIsObject: (value: any) => boolean
declare type Value = {
  [key: string]: null | number | string | Value | any[]
}
export declare const checkAreDiffObjects: (base: null | Value, target: null | Value) => boolean
export declare function checkIsSameObject(base: null | Value, target: null | Value): boolean
export {}
