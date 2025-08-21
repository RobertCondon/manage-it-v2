

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/cloud-backup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5REZZokS.js","_app/immutable/chunks/D6vd-AOp.js","_app/immutable/chunks/CJM1ljRB.js"];
export const stylesheets = [];
export const fonts = [];
