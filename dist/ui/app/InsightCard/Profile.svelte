<script lang="ts">import Svg from "../../core/Svg/index.js";
import Picture from "../Picture/index.js";
import { INSIGHTS_ORIGIN } from "../../../utils/links.js";
import { getTimeSince } from "../../../utils/dates.js";
const {
  user,
  publishedAt
} = $props();
const isTagName = user.username !== "anonymous";
const timeSincePublished = getTimeSince(new Date(publishedAt));
</script>

<div class="h-9 items-center gap-3 row" aria-label="User profile">
  <Picture src={user.avatarUrl || ''} alt="User profile" class="h-8 w-8 border border-transparent">
    <Svg id="user" w={16} h={16} />
  </Picture>
  <div class="column">
    <a href="{INSIGHTS_ORIGIN}/profile/{user.id}" class="text-sm hover:text-green"
      >{isTagName && user.username ? '@' : ''}{user.username || user.email}</a
    >
    <time class="text-xs font-medium text-waterloo">{timeSincePublished} ago</time>
  </div>
</div>
