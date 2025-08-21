

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CNdzrWbo.js","_app/immutable/chunks/D6vd-AOp.js","_app/immutable/chunks/CJM1ljRB.js"];
export const stylesheets = [];
export const fonts = [];
