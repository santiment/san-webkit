import { ApiQuery } from '../../api/index.js';
export const queryCurrentJti = ApiQuery(() => `{
    getAuthSessions {
      jti
      isCurrent
      hasExpired
    }
  }`, (gql) => {
    const activeSessions = gql.getAuthSessions?.filter(({ isCurrent, hasExpired }) => isCurrent && !hasExpired);
    if (!activeSessions?.length)
        return null;
    return activeSessions[0].jti;
});
