import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  search: {
    codeblocks: false,
  },
});

const nextConfig: NextConfig = withNextra({
  /* config options here */
});

export default nextConfig;
