<script lang="ts">
  import Button from '$ui/core/Button'
  import { notification } from '$ui/core/Notifications'
  import Notification from '$ui/core/Notifications/Notification.svelte'
</script>

{#snippet content({ close }: { close: VoidFunction })}
  We will check you insight and <a
    href="about:blank"
    target="_blank"
    class="text-green"
    onclick={close}
  >
    publish it very soon
  </a>
{/snippet}

<div class="gap-4 p-3 column">
  <Notification icon="info" message="Info notification"></Notification>
  <Notification icon="checkmark-circle" message="Success notification"></Notification>
  <Notification icon="warning" message="Warning notification"></Notification>
  <Notification icon="error" message="Error notification"></Notification>

  <Notification
    icon="checkmark-circle"
    message="Long message: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, recusandae doloribus! Iure praesentium"
  ></Notification>
</div>

<div class="flex-coljustify-center flex divide-y p-6">
  <div class="flex flex-wrap gap-4">
    <Button
      variant="border"
      onclick={() =>
        notification.info('Thanks for your thoughts', {
          content,
        })}
    >
      Info
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.info('Informational', {
          content: 'We will check your insight and publish it very soon',
          action: {
            label: 'Button',
            onClick: (close) => close(),
          },
        })}
    >
      Info with button
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.info('Notification channel settings is changed', {
          content,
          action: {
            label: 'Undo',
            onClick: () => console.log('test'),
          },
        })}
    >
      Info with button
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.success('Event has been created', {
          content: 'We will check your insight and publish it very soon.',
        })}
      >Success
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.warning('Warning', {
          content:
            'To activate your SanR NFT subscription, you will need to cancel your existing Sanbase Pro subscription first.',
          class: 'bg-porcelain',
        })}
      >Warning
    </Button>

    <Button variant="border" onclick={() => notification.error('Event has been created')}
      >Error</Button
    >
  </div>
</div>
