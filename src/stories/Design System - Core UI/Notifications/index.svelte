<script>
  import Button from '$ui/core/Button'
  import Notifications, { notification } from '$ui/core/Notifications'
</script>

<Notifications></Notifications>

{#snippet description()}
  We will check you insight and <a
    href="https://www.example.com"
    target="_blank"
    class="text-green"
  >
    publish it very soon
  </a>
{/snippet}

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <Button
      variant="border"
      onclick={() =>
        notification.info('Thanks for your thoughts', {
          description,
        })}
    >
      Info
    </Button>

    <Button variant="border" onclick={() => notification.info('One line title without decription')}>
      Short Info
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.info('Informational', {
          description: 'We will check your insight and publish it very soon',
          action: {
            label: 'Button',
            onClick: () => console.log('test'),
          },
        })}
    >
      Info with button
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.info('Notification channel settings is changed', {
          description,
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
          description: 'We will check your insight and publish it very soon.',
        })}
      >Success
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.warning('Warning', {
          description:
            'To activate your SanR NFT subscription, you will need to cancel your existing Sanbase Pro subscription first.',
        })}
      >Warning
    </Button>

    <Button variant="border" onclick={() => notification.error('Event has been created')}
      >Error</Button
    >
  </div>
</div>
