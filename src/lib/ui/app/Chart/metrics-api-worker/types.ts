import type { TNominal } from '$lib/utils/index.js'
import type { TInterval, TMetricData } from '../api/index.js'
import type { TGlobalParameters } from '../ctx/global-parameters.svelte.js'
import type { TLocalParameters } from '../ctx/metric-data.svelte.js'

export type TMessageId = TNominal<number, 'TMessageId'>

export const MESSAGE_TYPE = {
  CancelRequest: 0,
  FetchMetric: 1,
} as const

export type TMessageType = {
  [K in keyof typeof MESSAGE_TYPE]: (typeof MESSAGE_TYPE)[K]
}
export type TMessageTypeValues = (typeof MESSAGE_TYPE)[keyof typeof MESSAGE_TYPE]

//

export const RESPONSE_STATE = {
  Done: 0,
  Progress: 1,
} as const

export type TMessage<GType extends TMessageTypeValues, GPayload = unknown> = {
  id: TMessageId
  type: GType
} & (unknown extends GPayload ? { payload?: unknown } : { payload: GPayload })

export type TMessageRequestResponse<
  GType extends TMessageTypeValues,
  GRequest = unknown,
  GResponse = unknown,
> = {
  request: TMessage<GType, GRequest>
  response: TMessage<GType, GResponse> & {
    state?: (typeof RESPONSE_STATE)[keyof typeof RESPONSE_STATE]
  }
}

export type TCancelRequestMessage = TMessageRequestResponse<TMessageType['CancelRequest']>

export type TFetchMetricMessage = TMessageRequestResponse<
  TMessageType['FetchMetric'],
  TLocalParameters & {
    selector: TGlobalParameters['selector']
    interval: TInterval
    from: string
    to: string
  },
  { timeseries: TMetricData } | { error: any }
>

//

export type TMessages = TCancelRequestMessage | TFetchMetricMessage

//

export type TMessageResponsesByType = {
  [V in TMessages['response'] as V['type']]: V
}

export type TRespondFn = <GType extends TMessageTypeValues>(
  type: GType,
  data: Omit<TMessageResponsesByType[GType], 'id' | 'type'>,
) => void

export type TRequestHandler<GMessage extends TMessages> = (
  respond: (
    type: GMessage['request']['type'],
    data: Omit<GMessage['response'], 'id' | 'type'>,
  ) => void,
  msg: GMessage['request'],
) => void
