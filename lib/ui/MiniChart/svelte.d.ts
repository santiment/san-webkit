export { default } from './index.svelte';
export type Props = {
    data: {
        [key: string]: any | number;
    }[] | number[];
    points: string[];
    width: number;
    height: number;
    valueKey?: string;
    style?: string;
};
