

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0b05b3f1.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.14d3feb7.js","_app/immutable/chunks/singletons.2d3114fd.js"];
export const stylesheets = [];
export const fonts = [];
