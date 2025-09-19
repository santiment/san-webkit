import { BROWSER } from 'esm-env';
import { ApiMutation } from '../../api/index.js';
import { Query } from '../../api/executor.js';
import { createCtx } from '../../utils/index.js';
import { useCustomerCtx } from '../customer/index.js';
const mutateUpdateUserSettings = ApiMutation((isNightMode) => `mutation {
    updateUserSettings(settings: { theme: "${isNightMode ? 'nightmode' : ''}" }) {
      theme
    }
  }`);
export const useUiCtx = createCtx('useUiCtx', ({ isLiteVersion = false } = {}) => {
    const { currentUser } = useCustomerCtx.get();
    const isNightMode = currentUser.$$?.settings.theme === 'nightmode' ||
        (BROWSER && document.body.classList.contains('night-mode'));
    const ui = $state({ isNightMode, isLiteVersion, timeZone: 'UTC' });
    if (BROWSER)
        document.body.classList.toggle('night-mode', isNightMode || false);
    return {
        ui: {
            get $$() {
                return ui;
            },
            toggleNightMode() {
                const isNightMode = document.body.classList.toggle('night-mode');
                if (currentUser.$$) {
                    mutateUpdateUserSettings(Query)(isNightMode);
                }
                ui.isNightMode = isNightMode;
            },
        },
    };
});
