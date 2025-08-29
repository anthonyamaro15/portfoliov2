export default function Head() {
  const title = "Anthony Amaro — Full-Stack Software Engineer (React, Node, Rust)";
  const description = "I build high-performance web systems end-to-end: React/Next.js, Node/Postgres, and Rust where latency matters. Deploying to Vercel, AWS, Azure.";
  const url = "https://www.anthonyamaro.dev/";
  const og = `${url}opengraph-image?title=Anthony%20Amaro`;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={og} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={og} />
    </>
  );
}

