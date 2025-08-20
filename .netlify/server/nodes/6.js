

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/services/cloud-migration/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.CpSdU1vi.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEUEl-4r.js"];
export const stylesheets = [];
export const fonts = [];
