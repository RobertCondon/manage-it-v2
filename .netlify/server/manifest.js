export const manifest = (() => {
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
		client: {start:"_app/immutable/entry/start.C6DukDoB.js",app:"_app/immutable/entry/app.DUSH1xqQ.js",imports:["_app/immutable/entry/start.C6DukDoB.js","_app/immutable/chunks/Cp0S_0Xe.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEh0G9RR.js","_app/immutable/entry/app.DUSH1xqQ.js","_app/immutable/chunks/D2ApFA8o.js","_app/immutable/chunks/CEUEl-4r.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
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
})();
