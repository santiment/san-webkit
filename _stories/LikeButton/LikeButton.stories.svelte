<script>
  import { Story, Meta } from '@storybook/addon-svelte-csf'
  import LikeBtn from '@/ui/LikeButton/LikeButton.svelte'
</script>

<Meta title="Example/LikeButton" />

<Story name="LikeButton">
  <div class="row mrg-xxl mrg--t">
    <LikeBtn />
    <div class="mrg-xxl mrg--r" />
    <LikeBtn totalVotes={10} userVotes={3} />

    <div class="mrg-xxl mrg--r" />
    <LikeBtn totalVotes={1} disabled />
  </div>
</Story>
