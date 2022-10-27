import { halloweenData$ } from '@/stores/halloween'
import { mutateUpdatePumpkins } from '@/api/halloween'

export async function updatePumpkins(page) {
  await mutateUpdatePumpkins(page)

  await halloweenData$.refetch()

  return Promise.resolve()
}
