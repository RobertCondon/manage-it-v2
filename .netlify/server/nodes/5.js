

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/cloud-backup/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.y0CPqUAj.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEUEl-4r.js"];
export const stylesheets = [];
export const fonts = [];
