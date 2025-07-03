"use client";
import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";

export interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <MantineProvider>{children}</MantineProvider>;
}
