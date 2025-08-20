import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DmdlK7C8.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEUEl-4r.js","_app/immutable/chunks/CEh0G9RR.js"];
export const stylesheets = ["_app/immutable/assets/0.BAGQRBl8.css"];
export const fonts = [];
