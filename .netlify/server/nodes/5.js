

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/cloud-backup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.6P2LFxhN.js","_app/immutable/chunks/DfNoZIRX.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/BYUcvlCH.js","_app/immutable/chunks/CXgNK_Qh.js"];
export const stylesheets = [];
export const fonts = [];
