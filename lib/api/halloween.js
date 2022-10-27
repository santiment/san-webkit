import { mutate } from './../api';
const UPDATE_PUMPKINS_MUTATION = (page) => `
mutation {
  updatePumpkins(page:"${page}")
}`;
export const mutateUpdatePumpkins = (page) => mutate(UPDATE_PUMPKINS_MUTATION(page));
const CREATE_PUMPKIN_CODE_MUTATION = `
mutation {
  createPumpkinCode
}`;
const createPumpkinCodeAccessor = ({ createPumpkinCode: code }) => code;
export const mutateCreatePumpkinCode = () => mutate(CREATE_PUMPKIN_CODE_MUTATION).then(createPumpkinCodeAccessor);
//# sourceMappingURL=halloween.js.map