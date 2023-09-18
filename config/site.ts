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
			label: "Inicio",
			href: "/",
		},
		{
			label: "Productos",
			href: "/products",
		},
		{
			label: "Carrito",
			href: "/cart",
		},
		{
			label: "Órdenes",
			href: "/quote",
		},
	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
		},
		{
			label: "Productos",
			href: "/products",
		},
		{
			label: "Carrito",
			href: "/cart",
		},
		{
			label: "Órdenes",
			href: "/quote",
		},
		{
			label: "Logout",
			href: "/login",
		},
	],
	links: {

	},
};
