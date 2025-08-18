

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CGu1o2u2.js","_app/immutable/chunks/DxhZTZ8C.js","_app/immutable/chunks/DrSjkpCF.js"];
export const stylesheets = ["_app/immutable/assets/2.D9pMFkCf.css"];
export const fonts = [];
