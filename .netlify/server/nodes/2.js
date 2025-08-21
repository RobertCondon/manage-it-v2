

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DBCkLxy6.js","_app/immutable/chunks/D6vd-AOp.js","_app/immutable/chunks/CJM1ljRB.js"];
export const stylesheets = ["_app/immutable/assets/2.CDgcHnO5.css"];
export const fonts = [];
