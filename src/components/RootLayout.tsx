"use client";
import { AppShell } from "@mantine/core";
import { Header } from "./common/Header";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell padding="md" header={{ height: 50 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
