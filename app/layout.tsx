// css
import Head from "next/head";

import { Header } from "@/components/layout/header";

import "../styles/article.css";
import "../styles/common.css";
import "../styles/globals.css";
import "../styles/hub-page.css";

export const metadata = {
  title: "Bustle Clone",
  description: "",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" prefix="og: http://ogp.me/ns#">
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body style={{ ["--viewportHeight" as any]: "465px" }}>
        <Header />
        {children}
      </body>
    </html>
  );
}
