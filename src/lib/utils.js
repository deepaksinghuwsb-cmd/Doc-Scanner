export function cn(...values){return values.flat(Infinity).filter(Boolean).join(' ')}
export function formatBytes(bytes=0){if(!bytes)return '0 B';const unit=Math.min(3,Math.floor(Math.log(bytes)/Math.log(1024)));return `${(bytes/1024**unit).toFixed(unit?1:0)} ${['B','KB','MB','GB'][unit]}`}
export function downloadBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),30000)}
