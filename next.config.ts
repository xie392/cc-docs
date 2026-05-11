import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: "dracula",
        light: "github-light",
      },
      defaultLang: "plaintext",
    },
  },
});

const nextConfig: NextConfig = withNextra({
  /* config options here */
});

export default nextConfig;
