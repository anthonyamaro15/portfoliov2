/** @type {import('next').NextConfig} */
let withMDX = (config) => config;
try {
  // Ensure both @next/mdx and its peer loader exist before enabling.
  require.resolve('@mdx-js/loader');
  const mdx = require('@next/mdx');
  withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [require('remark-gfm')],
    },
  });
} catch (e) {
  // If MDX dependencies are missing, skip enabling MDX so config still loads.
}

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
