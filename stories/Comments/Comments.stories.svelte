<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Comments from '@/ui/Comments/svelte'
  import Dialogs from '@/ui/Dialog/Dialogs.svelte'
  import { CommentsType } from '@/api/comments'
</script>

<Meta title="Example/Comments" component={Comments} />

<Story name="Insight's comments">
  <Comments
    type={CommentsType.Insight}
    commentsFor={{
      id: 16436,
      user: {
        id: 113,
      },
    }}
    currentUser={{ id: '113' }} />
</Story>

<Dialogs />
