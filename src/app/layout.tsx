import type { Metadata } from "next";
import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Code 源码学习文档",
  description: "Claude Code CLI 源码分析与智能体开发指南",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = (
    <Navbar
      logo={
        <span>
          <b>CC Docs</b>{" "}
          <span style={{ opacity: "60%" }}>Claude Code 源码学习</span>
        </span>
      }
      projectLink="https://github.com/xie392/cc-docs"
    />
  );
  const pageMap = await getPageMap();

  return (
    <html lang="zh-CN" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body suppressHydrationWarning>
        <Layout
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © CC Docs</Footer>}
          editLink="在 GitHub 上编辑此页"
          docsRepositoryBase="https://github.com/xie392/cc-docs"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
