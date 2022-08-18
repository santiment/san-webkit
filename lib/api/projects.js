import { query } from './../api';
const PROJECTS_QUERY = `{
  allProjects(minVolume: 0) {
    id
    slug
    name
    ticker
  }
}`;
const accessor = ({ allProjects }) => allProjects;
export const queryProjects = () => query(PROJECTS_QUERY).then(accessor);
//# sourceMappingURL=projects.js.map