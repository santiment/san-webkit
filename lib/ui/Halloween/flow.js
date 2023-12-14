import { halloweenData$ } from './../../stores/halloween.js';
import { mutateUpdatePumpkins } from './../../api/halloween.js';
export async function updatePumpkins(page) {
    await mutateUpdatePumpkins(page);
    return halloweenData$.refetch();
}
//# sourceMappingURL=flow.js.map