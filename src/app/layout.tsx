import type { Metadata } from "next";
import { Layout, Navbar, Footer } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Code 源码学习文档",
  description: "Claude Code CLI 源码分析与智能体开发指南",
};

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: "1.2rem" }}>CC Docs</span>
    }
    projectLink="https://github.com/anthropics/claude-code"
  />
);

const footer = (
  <Footer>
    CC Docs - Claude Code 源码学习文档 {new Date().getFullYear()}
  </Footer>
);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/anthropics/claude-code"
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 2, toggleButton: true }}
          toc={{ title: "本页目录", backToTop: true }}
          darkMode={true}
          nextThemes={{
            defaultTheme: "dark",
          }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
