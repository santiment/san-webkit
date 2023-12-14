import { query } from './../../api/index.js';
const LAYOUTS_QUERY = (userId) => `{
  chartConfigurations(userId:${userId}) {
    id
    title
    metrics
  }
}`;
const accessor = ({ chartConfigurations }) => chartConfigurations;
export const queryUserLayouts = (userId) => query(LAYOUTS_QUERY(userId)).then(accessor);
//# sourceMappingURL=layouts.js.map