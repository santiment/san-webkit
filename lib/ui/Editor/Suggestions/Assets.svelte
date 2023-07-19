<script>import { SANBASE_ORIGIN } from './../../../utils/links';
import { queryProjects } from './../../../api/projects';
import ProjectIcon from './../../../ui/ProjectIcon.svelte';
import Suggestions from './Suggestions.svelte';
export let searchTerm = '';
export const href = ({ slug }) => SANBASE_ORIGIN + '/projects/' + slug;
export const label = ({ ticker }) => '$' + ticker.toUpperCase();
let loading = true;
let projects = [];
let items = projects;
queryProjects().then((data) => {
    projects = data;
    loading = false;
});
$: projects, onInput(searchTerm);
function onInput(searchTerm) {
    const value = searchTerm.toLowerCase();
    items = projects.filter(({ name, ticker }) => {
        return name.toLowerCase().includes(value) || ticker.toLowerCase().includes(value);
    });
}
</script>

<Suggestions {...$$props} {items} {loading} key="slug" let:item>
  <ProjectIcon slug={item.slug} class="mrg-s mrg--r" />
  <span class="name">{item.name}</span>
  <span class="c-waterloo mrg-xs mrg--l">{item.ticker}</span>
</Suggestions>

<style>
  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
