let dashboard_scripts = [
    '../extend/string.extend.js::dashboard_scripts_loadend()',
    '../extend/json.extend.js::dashboard_scripts_loadend()',
    '../extend/canvas.extend.js::dashboard_scripts_loadend()',
    // '../extend/storage.extend.js::dashboard_scripts_loadend()',
    '../js/general.functions.js::dashboard_scripts_loadend()',
    './data.js::dashboard_scripts_loadend()',
    './storage.js::dashboard_scripts_loadend()',
    './rest.js::dashboard_scripts_loadend()',
    './builder.js::dashboard_scripts_loadend()',
    './filler.js::dashboard_scripts_loadend()',
    './main.js::dashboard_scripts_loadend()',
    './events.js::dashboard_scripts_loadend()',
]

dashboard_scripts.forEach((src) => {
	let parts = src.split(':');
	console.log("parts 0", parts[0], "parts 1", parts[1], "parts 2", parts[2]);
})