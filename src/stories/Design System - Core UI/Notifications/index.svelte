<script>
  import Button from '$ui/core/Button/index'
  import Notifications, { notification } from '$ui/core/Notifications/index'
</script>

<Notifications></Notifications>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <Button
      variant="border"
      onclick={() =>
        notification.info('Thanks for your thoughts', {
          description: 'We will check your insight and publish it very soon.',
        })}>Info</Button
    >

    <Button
      variant="border"
      onclick={() => notification.info('Notification channel settings is changed bla bla bla bla')}
    >
      Short Info
    </Button>

    <Button
      variant="border"
      onclick={() =>
        notification.info('Notification channel settings is changed bla bla bla bla', {
          action: {
            label: 'Got it',
            onClick: () => console.log('!'),
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
        notification.warning('Event has been created', {
          description: 'We will check your insight and publish it very soon.',
          action: {
            label: 'Undo',
            onClick: () => console.log('!'),
          },
        })}
      >Warning
    </Button>

    <Button variant="border" onclick={() => notification.error('Event has been created')}
      >Error</Button
    >
  </div>
</div>
