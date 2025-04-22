<script lang="ts">
  import type { TChannel, TChannelSource } from '$ui/app/Alerts/channels.js'
  import type { TState } from '../schema.js'

  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import Input from '$ui/core/Input/index.js'

  import Channel from './Channel.svelte'
  import Section from './Section.svelte'

  type TProps = {
    state: { $$: TState }
  }

  const { state }: TProps = $props()

  const { currentUser } = useCustomerCtx()

  const channel = $derived(state.$$.channel)
  const alertNotifyEmail = $derived(currentUser.$$?.settings.alertNotifyEmail ?? false)
  const alertNotifyTelegram = $derived(currentUser.$$?.settings.alertNotifyTelegram ?? false)

  function updateChannel<GSource extends TChannelSource>(
    source: GSource,
    value: TChannel[GSource],
  ) {
    state.$$.channel[source] = value
  }
</script>

<Section title="Alert action">
  <Channel
    class="border-b px-4 py-3.5"
    label="Email"
    disabled={!alertNotifyEmail}
    isActive={channel.email}
    onCheckedChange={(v) => updateChannel('email', v)}
  >
    {#snippet right()}
      <span class="text-waterloo">
        {currentUser.$$?.email}
      </span>
    {/snippet}
  </Channel>

  <Channel
    class="border-b px-4 py-3.5"
    label="Telegram"
    disabled={!alertNotifyTelegram}
    isActive={channel.telegram}
    onCheckedChange={(v) => updateChannel('telegram', v)}
  >
    {#snippet right()}
      <div class="text-waterloo">
        You will receive notifications to the connected telegram account
      </div>
    {/snippet}
  </Channel>

  <Channel
    class="border-b px-4 py-3.5"
    label="Telegram public channel"
    isActive={channel.telegram_channel !== undefined}
    onCheckedChange={(v) => updateChannel('telegram_channel', v ? '' : undefined)}
  >
    {#snippet right()}
      {@const disabled = channel.telegram_channel === undefined}

      <Input
        placeholder="@Channel name"
        type="text"
        {disabled}
        class="border"
        value={channel.telegram_channel}
        oninput={(e) => updateChannel('telegram_channel', e.currentTarget.value)}
      />
    {/snippet}

    {#snippet bottom()}
      To allow notification for your telegram channel. Open your telegram channel, press info, go to
      Administrators, add Admin. Search for Santiment Signals bot. The Signals bot must be made an
      admin of the channel with only Post Messages privileges.
    {/snippet}
  </Channel>

  <Channel
    class="px-4 py-3.5"
    label="Webhook URL"
    isActive={channel.webhook !== undefined}
    onCheckedChange={(v) => updateChannel('webhook', v ? '' : undefined)}
  >
    {#snippet right()}
      {@const disabled = channel.webhook === undefined}

      <Input
        placeholder="https://"
        type="text"
        class="border"
        {disabled}
        value={channel.webhook}
        oninput={(e) => updateChannel('webhook', e.currentTarget.value)}
      />
    {/snippet}
  </Channel>
</Section>
