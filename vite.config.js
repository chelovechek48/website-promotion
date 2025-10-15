import { defineConfig } from 'vite';
import { resolve } from 'path';

const repositoryName = '/website-promotion';
const setAlias = (localPath) => resolve(__dirname, localPath);

export default defineConfig({
	base: repositoryName,
	server: { port: 8080 },

	build: {
		rollupOptions: {
			input: ['index.html'],
			output: {
				manualChunks: {
					normalize: ['@styles/normalize.scss'],
					blocks: ['@styles/blocks/_index.scss'],
					main: ['@js/main.js'],
				},
			},
		},
	},

	resolve: {
		alias: {
			'@': setAlias('./src'),
			'@js': setAlias('./src/js'),
			'@styles': setAlias('./src/styles'),
		},
	},
});
