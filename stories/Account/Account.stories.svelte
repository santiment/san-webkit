<script>
  import { writable } from 'svelte/store'
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import AccountDropdown from '@/ui/AccountDropdown/index.svelte'

  const ui = writable({})

  const fiveDaysLater = new Date()
  fiveDaysLater.setDate(fiveDaysLater.getDate() + 3)

  // {
  //   id: number
  //   /** 'ACTIVE' | 'TRIALING' */
  //   status: string
  //   trialEnd?: string
  //   currentPeriodEnd: string
  //   cancelAtPeriodEnd?: boolean
  //   plan: {
  //     id: string
  //     name: string // 'PRO'
  //     product: SAN.Product
  //     amount: number
  //     interval: string
  //   }
  // }
</script>

<Meta title="Example/Profile" component={AccountDropdown} />

<!-- <Template let:args>
  <div style="height: 50px;width: 100%;margin: 0;padding:0" />
  <AccountDropdown
    isOpened
    {ui}
    currentUser={args.isLoggedIn
      ? {
          id: args.id,
          username: args.username,
          email: args.email,
          avatarUrl: args.avatarUrl,
          subscriptions: [],
        }
      : null} />
</Template> -->

<Story name="Account">
  <div class="row fluid justify">
    <section>
      <div class="h4">Anonymous</div>
      <div class="row v-center">
        <AccountDropdown isOpened {ui} />
      </div>
    </section>
    <section>
      <div class="h4">Login. New user. Free trial available (Variant 1)</div>
      <div class="row v-center">
        <AccountDropdown
          isOpened
          {ui}
          currentUser={{
            id: 1,
            username: 'test',
            email: 'test@local.dev',
            subscriptions: [{ trialEnd: fiveDaysLater }],
          }} />
      </div>
    </section>
  </div>
</Story>
