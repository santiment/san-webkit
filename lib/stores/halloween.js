import { query } from './../api';
import { QueryStore } from './../stores/utils';
export const PUMPKINS_COUNT_QUERY = `{
  getPumpkins
}`;
const accessor = ({ getPumpkins }) => new Set(getPumpkins);
export const queryPumpkinsCount = () => query(PUMPKINS_COUNT_QUERY).then(accessor);
export const DEFAULT = new Set([]);
export const halloweenData$ = QueryStore(DEFAULT, queryPumpkinsCount, PUMPKINS_COUNT_QUERY);
//# sourceMappingURL=halloween.js.map