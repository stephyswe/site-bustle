// css
import "../styles/globals.css";
import "../styles/common.css";
import "../styles/hub-page.css";
import "../styles/article.css";
import Head from "next/head";

export const metadata = {
  title: "Bustle Clone",
  description: "",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
