export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","about-us/main.svg","favicon.png","home/experts.png","home/home-banner.png","home/logo-diced.png","manageit-logo.png","robots.txt","services/cloud-migration-secondary.svg","services/cloud-migration.svg","services/endpoint-management.png","services/endpoint-management.svg","services/endpoint-secondary.svg","services/it-support-secondary.svg","services/it-support.png","services/it-support.svg","services/networking-secondary.svg","services/networking.png","services/networking.svg","sitemap.xml","sw.js","testimonials/ShantyTown.jpg","testimonials/WindowTreatments.jpg","testimonials/bond-refund-form.pdf"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".txt":"text/plain",".xml":"text/xml",".js":"text/javascript",".jpg":"image/jpeg",".pdf":"application/pdf"},
	_: {
		client: {start:"_app/immutable/entry/start.DVh-eMNH.js",app:"_app/immutable/entry/app.Boo-0WVc.js",imports:["_app/immutable/entry/start.DVh-eMNH.js","_app/immutable/chunks/BdgSMOkr.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEh0G9RR.js","_app/immutable/entry/app.Boo-0WVc.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEUEl-4r.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-us",
				pattern: /^\/about-us\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/services/cloud-backup",
				pattern: /^\/services\/cloud-backup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/services/cloud-migration",
				pattern: /^\/services\/cloud-migration\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services/endpoint-management",
				pattern: /^\/services\/endpoint-management\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/services/it-support",
				pattern: /^\/services\/it-support\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
