import "@mantine/core/styles.css";
import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";
import { Suspense } from "react";
import { RootLayout } from "@/components/RootLayout";
import GoogleAnalytics from "@/components/GoogleAnalytics";
// eslint-disable-next-line
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

const theme = createTheme({
  primaryColor: "green",
});

export const metadata: Metadata = {
  title: "Kitsuya Azuma's Portfolio",
  description: "東桔也（あずまきつや）のポートフォリオサイト",
  icons: {
    icon: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <ColorSchemeScript />
      </head>
      <body>
        <Suspense>
          <NextIntlClientProvider>
            <MantineProvider theme={theme}>
              <RootLayout>{children}</RootLayout>
            </MantineProvider>
          </NextIntlClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
