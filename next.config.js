/** @type {import('next').NextConfig} */
const path = require('path');
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
