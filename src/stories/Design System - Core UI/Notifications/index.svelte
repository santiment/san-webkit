<script>
  import Button from '$ui/core/Button/index'
  import Notifications, { notifcation } from '$ui/core/Notifications/index'
</script>

<Notifications></Notifications>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <Button variant="border" onclick={() => notifcation('Event has been created')}>Info</Button>

    <Button
      variant="border"
      onclick={() =>
        notifcation.success('Event has been created', {
          description: 'This is a description',
        })}>Success</Button
    >

    <Button variant="border" onclick={() => notifcation.error('Event has been created')}
      >Error</Button
    >
  </div>
</div>
