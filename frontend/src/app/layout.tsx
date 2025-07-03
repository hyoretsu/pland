import { ColorSchemeScript, mantineHtmlProps } from "@mantine/core";
import "@mantine/core/styles.css";
import type { PropsWithChildren } from "react";
import "./_global.css";
import WebVitals from "./components/WebVitals";
import { Providers } from "./lib/providers";

const siteName = "UniDB";

export const metadata = {
  appleWebApp: {
    title: siteName,
  },
  applicationName: siteName,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  openGraph: {
    images: [
      {
        alt: siteName,
        height: 627,
        url: "/opengraph.jpg",
        width: 1200,
      },
    ],
    siteName,
    type: "website",
  },
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  twitter: {
    card: "summary_large_image",
    creator: `${process.env.NEXT_PUBLIC_SITE_CONTENT_CREATOR}` || "@hyoretsu",
  },
};
export const viewport = {
  themeColor: "#4F53B7",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <link href="/site.webmanifest" rel="manifest" />
        <meta content={viewport.themeColor} name="theme-color" />

        <ColorSchemeScript />
      </head>
      <body>
        <Providers>{children}</Providers>

        {process.env.NODE_ENV === "production" && <WebVitals />}
      </body>
    </html>
  );
}
