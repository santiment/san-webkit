import { halloweenData$ } from '@/stores/halloween'
import { mutateUpdatePumpkins } from '@/api/halloween'

export async function updatePumpkinsCount(count) {
  await mutateUpdatePumpkins(count)

  await halloweenData$.refetch()

  return Promise.resolve()
}
