<script>
  import AccountDropdown from '$ui/app/AccountDropdown'
  import { showAcknowledgmentsDialog$ } from '$ui/app/AcknowledgmentsDialog/index.js'

  const showAcknowledgmentsDialog = showAcknowledgmentsDialog$()
</script>

<div class="flex center">
  <AccountDropdown onAcknowledgmentsClick={showAcknowledgmentsDialog}></AccountDropdown>
</div>
