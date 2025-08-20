

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about-us/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BrDWo7Lz.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEUEl-4r.js"];
export const stylesheets = [];
export const fonts = [];
