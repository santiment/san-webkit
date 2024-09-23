import { describe, it, expect, beforeEach } from 'vitest';
import { ApiQuery } from './index.js';
import { firstValueFrom } from 'rxjs';
import { ApiMock } from './mock.js';
import { Query } from './executor.js';
describe('API mocking', () => {
    const queryCurrentUser = ApiQuery(() => `{ currentUser { id  } }`, (gql) => gql.currentUser);
    beforeEach(() => {
        ApiMock.reset();
    });
    it('RxQuery (Observable-based)', async () => {
        ApiMock.add('currentUser', {
            mock: () => ({ id: 0 }),
        });
        const data = await firstValueFrom(queryCurrentUser()());
        expect(data).toMatchObject({ id: 0 });
    });
    it('Query (Promise-based)', async () => {
        ApiMock.add('currentUser', {
            mock: () => ({ id: 1 }),
        });
        const data = await queryCurrentUser(Query)();
        expect(data).toMatchObject({ id: 1 });
    });
});
