module.exports = {
	apps: [
		{
			name: "tezzhet",
			port: "3002",
			exec_mode: "cluster",
			instances: "max",
			script: "./.output/server/index.mjs",
		},
	],
};
