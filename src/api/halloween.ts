import { mutate, query } from '@/api'

const UPDATE_PUMPKINS_MUTATION = (page: string) => `
mutation {
  updatePumpkins(page:"${page}")
}`

type UpdatePumpkinsMutation = SAN.API.Query<'updatePumpkins', boolean>

export const mutateUpdatePumpkins = (page: string) =>
  mutate<UpdatePumpkinsMutation>(UPDATE_PUMPKINS_MUTATION(page))

const CREATE_PUMPKIN_CODE_MUTATION = `
mutation {
  createPumpkinCode
}`

type CreatePumpkinCodeMutation = SAN.API.Query<'createPumpkinCode', string>

const createPumpkinCodeAccessor = ({ createPumpkinCode: code }): string => code
export const mutateCreatePumpkinCode = () =>
  mutate<CreatePumpkinCodeMutation>(CREATE_PUMPKIN_CODE_MUTATION).then(createPumpkinCodeAccessor)

const GET_PUMPKIN_CODE_QUERY = `{
  getPumpkinCode
}`

type GetPumpkinCodeQuery = SAN.API.Query<'getPumpkinCode', string>

const accessor = ({ getPumpkinCode }: GetPumpkinCodeQuery) => getPumpkinCode
export const queryGetPumpkinCode = () =>
  query<GetPumpkinCodeQuery>(GET_PUMPKIN_CODE_QUERY).then(accessor)
