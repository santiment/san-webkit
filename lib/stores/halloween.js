import { query } from '@/api';
import { QueryStore } from '@/stores/utils';
export const PUMPKINS_QUERY = `{
   pages:getPumpkins
   code:getPumpkinCode
}`;
const accessor = ({ pages, code }) => ({
    pages: new Set(pages),
    code: code,
});
export const queryPumpkins = () => query(PUMPKINS_QUERY).then(accessor);
export const DEFAULT = {
    pages: new Set([]),
    code: null,
};
export const halloweenData$ = QueryStore(DEFAULT, queryPumpkins, PUMPKINS_QUERY);
//# sourceMappingURL=halloween.js.map