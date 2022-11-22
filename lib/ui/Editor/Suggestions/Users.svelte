<script>import Suggestions from './Suggestions.svelte';
import { searchUserByUsername } from './../../../api/ws';
import ProfilePic from './../../../ui/Profile/Pic.svelte';
export let searchTerm = '';
export const href = ({
  id
}) => 'https://app.santiment.net/profile/' + id;
export const label = ({
  username
}) => '@' + username;
let items = [];

$: onInput(searchTerm);

function onInput(searchTerm) {
  searchUserByUsername(searchTerm).then(data => items = data.slice(0, 5));
}</script>

<Suggestions {...$$props} {items} key="id" let:item>
  <ProfilePic src={item.avatar_url} class="pic-HEyysX mrg-s mrg--r" />
  <span>
    @{item.username}
  </span>
</Suggestions>

<style>
  :global(.pic-HEyysX) {
    --img-size: 24px;
  }

  span {
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
