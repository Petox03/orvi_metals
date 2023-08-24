export type SiteConfig = typeof siteConfig;


export const logonConfig = {
	name: "Orvi Metals - Inicia Sesión",
	description: "Inicio de sesión o registro de los usuarios",
	links: {
		loginSuccesfull: '/tienda/',
		
	},
}

export const siteConfig = {
	name: "Orvi Metals",
	description: "Tienda en línea de Orvi Metals.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "Docs",
			href: "docs",
		},
		{
			label: "Pricing",
			href: "/pricing",
		},
		{
			label: "Blog",
			href: "/blog",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "logout",
			href: "/login",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/login",
		},
	],
	links: {

	},
};
