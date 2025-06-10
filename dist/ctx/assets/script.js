import { queryAllProjects } from './api.js';
import { Query } from '../../api/executor.js';
import { fetcher } from '../../../../scripts/fetch.js';
export const fetchAllProjects = () => queryAllProjects({
    executor: Query,
    fetcher,
})().catch((e) => {
    console.error(e);
    return [];
});
