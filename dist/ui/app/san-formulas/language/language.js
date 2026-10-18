import { languages } from 'monaco-editor/esm/vs/editor/editor.api.js';
export const LANGUAGE_ID = 'san-formulas';
languages.register({ id: LANGUAGE_ID });
languages.setLanguageConfiguration(LANGUAGE_ID, {
    comments: {
    //blockComment: ['/*', '*/'],
    },
    brackets: [['(', ')']],
    autoClosingPairs: [
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
    surroundingPairs: [
        { open: '(', close: ')' },
        { open: '"', close: '"' },
    ],
});
