import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{ height: 60 }}
			navbar={{
				breakpoint: "sm",
				collapsed: { mobile: !opened },
				width: 300,
			}}
			padding="md"
		>
			<AppShell.Header>
				<Burger hiddenFrom="sm" onClick={toggle} opened={opened} size="sm" />
				<div>Logos</div>
			</AppShell.Header>

			<AppShell.Main>Main</AppShell.Main>

			<AppShell.Footer mb="xs">Footer</AppShell.Footer>
		</AppShell>
	);
}
