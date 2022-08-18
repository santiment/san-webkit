export declare function Socket(url: string): {
  message(
    channel: string,
    event: string,
    data?: any,
  ): {
    promise: Promise<unknown>
    msg: any[]
  }
  send(channel: string, event: string, data?: any): Promise<any>
}
export declare const socket: {
  message(
    channel: string,
    event: string,
    data?: any,
  ): {
    promise: Promise<unknown>
    msg: any[]
  }
  send(channel: string, event: string, data?: any): Promise<any>
}
export declare function searchUserByUsername(username: string): Promise<SAN.Author[]>
