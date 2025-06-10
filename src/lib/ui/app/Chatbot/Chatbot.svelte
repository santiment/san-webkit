<script lang="ts">
  import Input from '$ui/core/Input/Input.svelte'
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import { useChatContext } from '$lib/ctx/chat/index.svelte.js'

  const chat = useChatContext()

  let focused = $state(false)
  let chatOpened = $state(false)
  let inputValue = $state('')

  async function submit() {
    const text = inputValue.trim()
    if (!text) return
    chatOpened = true
    await chat.sendMessage(text)
    inputValue = ''
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      submit()
    }
  }
</script>

<div class="fixed bottom-6 right-6 flex gap-2 rounded-full bg-green-light-2 px-2 py-1">
  <div class="relative w-full">
    <Input
      placeholder="Ask AI for insights"
      type="text"
      class="pr-13 h-10 w-56 rounded-full shadow"
      inputClass={cn('text-base placeholder-casper pr-4 transition-all', focused ? 'pl-4' : 'pl-8')}
      onfocus={() => (focused = true)}
      onblur={() => (focused = false)}
      onchange={(e: any) => (inputValue = e.target.value)}
      onkeydown={onKeyDown}
    ></Input>

    <div
      class={cn(
        'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 transition-all',
        focused ? 'opacity-0' : 'opacity-100',
      )}
    >
      🤖
    </div>

    <Button
      icon="back-to-top"
      class="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-white hover:bg-green hover:fill-white"
      onclick={submit}
      disabled={chat.loading.$}
    ></Button>
  </div>

  <Button
    icon="social-trend"
    class="h-10 w-10 shrink-0 rounded-full bg-white shadow hover:fill-green"
    onclick={() => (chatOpened = true)}
  ></Button>
</div>

{#if chatOpened}
  <div
    class="fixed bottom-6 right-6 flex h-[600px] w-[600px] flex-col rounded-lg border border-porcelain bg-white px-6 pb-6 pt-[14px] text-base shadow"
  >
    <div class="flex justify-end">
      <Button icon="close" iconSize={12} onclick={() => (chatOpened = false)}></Button>
    </div>

    <!-- <div class="flex-1 space-y-3 overflow-y-auto pr-1"> -->
    <!--   <div> -->
    <!--     <div class="mb-4 text-center text-xs text-waterloo">Today 10:32 AM</div> -->
    <!---->
    <!--     <div class="mb-8 ml-auto w-fit self-end rounded-lg bg-porcelain px-2.5 py-2"> -->
    <!--       Summarise the dashboard -->
    <!--     </div> -->
    <!---->
    <!--     <div class="space-y-3"> -->
    <!--       <p> -->
    <!--         <span>Answer to the question:</span><br /> -->
    <!--         Yes, there are significant fears and concerns regarding Mantra Coin. A tweet reports that -->
    <!--         Mantra ($OM) experienced a dramatic crash of 90% in the last 24 hours, resulting in a $6 -->
    <!--         billion market cap loss. This event has sparked intense fears of a potential rug pull within -->
    <!--         the crypto community [1]. -->
    <!--       </p> -->
    <!---->
    <!--       <p> -->
    <!--         <span>Summary of the tweets:</span><br /> -->
    <!--         Mantra Coin ($OM) has seen a massive 90% drop in value over a 24-hour period, leading to -->
    <!--         a $6 billion loss in market capitalization.<br /> -->
    <!--         This sharp decline has raised serious concerns and fears of a rug pull among investors and -->
    <!--         the broader crypto community. -->
    <!--       </p> -->
    <!---->
    <!--       <p> -->
    <!--         <span>Tweet References:</span><br /> -->
    <!--         [1] -->
    <!--         <a href="https://x.com/blockchainrptr/status/1911686373570215985" class="link-pointer" -->
    <!--           >https://x.com/blockchainrptr/status/1911686373570215985</a -->
    <!--         > -->
    <!--       </p> -->
    <!--     </div> -->
    <!--   </div> -->
    <!-- </div> -->

    <div class="flex-1 space-y-3 overflow-y-auto pr-1">
      {#if chat.session.$}
        {#each chat.session.$.chatMessages as msg}
          <div
            class={msg.role === 'USER'
              ? 'ml-auto w-fit self-end rounded-lg bg-porcelain px-2.5 py-2'
              : ''}
          >
            {@html msg.content}
          </div>
        {/each}
      {/if}
    </div>

    <div class="relative mt-3 flex items-center">
      <textarea
        placeholder={`Ask Santiment AI...\nspace for 2 lines for text`}
        rows="2"
        class="min-h-16 flex-1 resize-none rounded-lg border border-porcelain bg-transparent px-3 py-2.5 placeholder-casper outline-none"
        bind:value={inputValue}
        onkeydown={onKeyDown}
      ></textarea>
      <Button
        icon="back-to-top"
        class="absolute bottom-1.5 right-1.5 h-8 w-8 rounded-full bg-casper fill-white hover:bg-green"
        onclick={submit}
        disabled={chat.loading.$}
      ></Button>
    </div>
  </div>
{/if}
