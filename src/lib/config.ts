import type { NavItem, SidebarNavItem } from '$lib/types';

export const siteConfig = {
	name: 'NWL Blog',
	url: 'https://nwlnexus.com',
	ogImage: 'https://nwlnexus.com/og.jpg',
	description: 'Ponderings, musings and ramblings of a mind.',
	links: {
		github: 'https://github.com/nwlnexus/nwl-blog',
		discord: 'https://nwlnexus.com/discord'
	},
	keywords: 'nwl, nwlnexus'
};

type NavConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const navConfig: NavConfig = {
	mainNav: [
		{
			title: 'Blog',
			href: '/blog'
		}
	],
	sidebarNav: []
};
