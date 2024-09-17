<script lang="ts">import Button from "../../../../core/Button/index.js";
import { useConnectMetamaskFlow } from "../../../../../flow/web3/wallet.js";
const { onConnectMetamaskClick } = useConnectMetamaskFlow();
function onClick() {
  onConnectMetamaskClick();
}
</script>

<Button variant="fill" size="lg" class="center" onclick={onClick}>
  <img src="/webkit/icons/metamask.svg" alt="MetaMask" class="h-4" />
  Connect MetaMask
</Button>
