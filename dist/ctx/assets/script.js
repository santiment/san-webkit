import { queryAllProjects } from './api.js';
import { Query } from '../../api/executor.js';
export const fetchAllProjects = () => queryAllProjects({
    // @ts-ignore
    fetcher: globalThis.__VITE_GQL_FETCHER,
    executor: Query,
})().catch((e) => {
    console.error(e);
    return [];
});
