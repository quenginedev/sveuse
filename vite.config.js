import { sveltekit } from '@sveltejs/kit/vite';
import {resolve} from 'path'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'svelteuse': resolve('src/lib'),
		}
	}
};

export default config;
