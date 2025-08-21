

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Q8qYYDev.js","_app/immutable/chunks/D6vd-AOp.js","_app/immutable/chunks/CJM1ljRB.js"];
export const stylesheets = [];
export const fonts = [];
