import { downloadBlob } from './download/index.js';
export async function downloadFile(src, filename) {
    const response = await fetch(src);
    const blob = await response.blob();
    downloadBlob(blob, filename);
}
