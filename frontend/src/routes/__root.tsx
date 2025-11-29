import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Providers } from "../lib/providers";

export const Route = createRootRoute({
	component: RootComponent,
	notFoundComponent: NotFound,
});

function RootComponent() {
	return (
		<Providers>
			<Outlet />
		</Providers>
	);
}

function NotFound() {
	return (
		<div className="flex h-full flex-col items-center justify-center [&>span]:text-3xl [&>svg]:h-[20%] [&>svg]:w-auto [&>svg]:text-[#f00]">
			<span>Error 404</span>
			<span>Not Found</span>
		</div>
	);
}
