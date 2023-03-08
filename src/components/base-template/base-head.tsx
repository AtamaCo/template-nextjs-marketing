import Head from 'next/head';

/**
 * Adds basic meta elements to the page
 */
export function BaseHead({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const siteName = 'Atama';
  const pageTitle = `${title} | ${siteName}`;
  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />

      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
    </Head>
  );
}
