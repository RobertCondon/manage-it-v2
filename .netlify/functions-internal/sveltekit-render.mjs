import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","about-us/main.svg","favicon.png","home/experts.png","home/home-banner.png","home/logo-diced.png","manageit-logo.png","robots.txt","services/cloud-migration-secondary.svg","services/cloud-migration.svg","services/endpoint-management.png","services/endpoint-management.svg","services/endpoint-secondary.svg","services/it-support-secondary.svg","services/it-support.png","services/it-support.svg","services/networking-secondary.svg","services/networking.png","services/networking.svg","sitemap.xml","testimonials/ShantyTown.jpg","testimonials/WindowTreatments.jpg","testimonials/bond-refund-form.pdf"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain",".xml":"text/xml",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.D40SCL-j.js",app:"_app/immutable/entry/app.W486W_t0.js",imports:["_app/immutable/entry/start.D40SCL-j.js","_app/immutable/chunks/CdXUqkNc.js","_app/immutable/chunks/D6vd-AOp.js","_app/immutable/chunks/4iQg-bEn.js","_app/immutable/entry/app.W486W_t0.js","_app/immutable/chunks/D6vd-AOp.js","_app/immutable/chunks/CJM1ljRB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about-us","/contact","/services/cloud-backup","/services/cloud-migration","/services/endpoint-management","/services/it-support"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
