<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'

  import confetti from '../assets/confetti.svg'
</script>

<section class="flex flex-col items-center justify-center gap-6 text-center">
  <img src={confetti} alt="" class="h-32 w-32" />

  <div class="flex flex-col gap-2">
    <h1 class="text-2xl font-bold text-rhino">Thank you for your time! 🎯</h1>
    <p class="max-w-sm text-waterloo">
      As a reward, our expert will jump on a call with you to help you make the most out of
      Santiment.
    </p>
  </div>

  <footer>
    <Button variant="fill" href="https://calendly.com/santiment-team/santiment-walkthrough?back=1">
      Book a call
    </Button>
  </footer>
</section>
