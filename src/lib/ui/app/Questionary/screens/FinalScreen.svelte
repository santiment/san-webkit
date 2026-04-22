<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'

  import confetti from '../assets/confetti.svg'
</script>

<section class="flex flex-col items-center justify-center gap-6 text-center">
  <img src={confetti} alt="" class="h-32 w-32" />

  <div class="flex flex-col gap-4">
    <h1 class="text-lg-3 font-medium text-rhino">Thanks for your help!</h1>

    <p class="max-w-[290px] text-base">
      As a reward, our expert will jump on a call with you to help you make the most out of
      Santiment.
    </p>
  </div>

  <footer>
    <Button variant="fill" href="https://calendly.com/santiment-team/santiment-walkthrough?back=1">
      Go to calendar
    </Button>
  </footer>
</section>
