import { mutate } from '@/api'

const UPDATE_PUMPKINS_MUTATION = (page: string) => `
mutation {
  updatePumpkins(page:"${page}")
}`

type UpdatePumpkinsMutation = SAN.API.Query<'updatePumpkins', boolean>

const updatePumpkinsAccessor = (updated) => updated
export const mutateUpdatePumpkins = (page: string) =>
  mutate<UpdatePumpkinsMutation>(UPDATE_PUMPKINS_MUTATION(page)).then(updatePumpkinsAccessor)

const CREATE_PUMPKIN_CODE_MUTATION = `
mutation {
  createPumpkinCode
}`

type CreatePumpkinCodeMutation = SAN.API.Query<'createPumpkinCode', string>

const createPumpkinCodeAccessor = ({ createPumpkinCode: code }): string => code
export const mutateCreatePumpkinCode = () =>
  mutate<CreatePumpkinCodeMutation>(CREATE_PUMPKIN_CODE_MUTATION).then(createPumpkinCodeAccessor)
