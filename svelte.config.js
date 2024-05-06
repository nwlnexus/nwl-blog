import { preprocessMeltUI, sequence } from '@melt-ui/pp';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config}*/
const config = {
	preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
	kit: {
		adapter: adapter(),
		alias: {
			$routes: 'src/routes',
			'$routes/*': 'src/routes/*',
			'$test-helpers': 'src/test-helpers',
			$constants: 'src/constants',
			$docs: 'src/docs',
			'$docs/*': 'src/docs/*',
			$components: 'src/components',
			'$components/*': 'src/components/*',
			$icons: 'src/components/icons',
			'$icons/*': 'src/components/icons/*',
			$utils: 'src/lib/utils',
			'utils/*': 'src/lib/utils/*'
		}
	}
};
export default config;
