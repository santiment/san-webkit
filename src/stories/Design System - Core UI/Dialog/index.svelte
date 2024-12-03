<script>
  import { useDeviceCtx } from '$lib/ctx/device'
  import Dialog, { showDialog$ } from './Dialog.svelte'
  import StoryDialog from './StoryDialog.svelte'

  const showDialog = showDialog$()
  useDeviceCtx()

  const repeat = [1, 2, 3, 4]
</script>

<div class="flex flex-col justify-center divide-y p-6">
  {#each repeat as _}
    <div class="my-10 flex gap-4">
      <button class="flex" onclick={() => showDialog({ customProp: true })}>Open</button>
    </div>

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas perspiciatis, repudiandae
      amet, sit similique, labore iure minus rerum esse facere dignissimos modi ullam nostrum
      molestias sint quam culpa accusamus excepturi libero molestiae vero mollitia? Asperiores
      deserunt quo eveniet quidem, dolores molestias explicabo hic quasi dicta eligendi quibusdam?
      Nobis quo delectus enim dolor iure laudantium voluptas at nihil labore, eum officiis obcaecati
      praesentium possimus adipisci quasi iusto earum velit ipsam quae eveniet illo. Qui, blanditiis
      laborum harum maxime atque quidem fuga, voluptate, ea tempore incidunt cumque. Sint, et? Saepe
      cumque dignissimos numquam repellendus repellat veniam quam et maxime voluptate? Quae mollitia
      voluptate, asperiores ipsa illo soluta magni qui ut explicabo itaque sed ullam corrupti quam?
      Qui, cumque eos laborum quam rerum distinctio nemo, ad iure, perferendis quo corporis nulla.
      Dignissimos deserunt fugiat, at repellendus nobis sequi hic, corporis asperiores pariatur
      incidunt quasi tempore ipsa alias ab quos accusamus assumenda dicta corrupti. At ad repellat
      aliquid, ducimus veritatis vitae fugit dicta iure? Vero obcaecati commodi ipsam maxime
      suscipit nesciunt itaque minus aspernatur cupiditate! Magnam unde, iste dolore eligendi sunt
      repellendus ab esse delectus sint reprehenderit nihil repellat distinctio voluptatibus non
      laboriosam quis perferendis totam maxime sed, eius corrupti expedita eos. Velit enim ratione
    </p>
  {/each}
</div>

<StoryDialog render={Dialog} rest="any"></StoryDialog>
