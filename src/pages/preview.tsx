import type { NextPage } from 'next';

import Head from 'next/head';
import { AtamaRenderer } from '@atamaco/renderer-react';
import { withPreview } from '@atamaco/preview-react';

import { Header } from '../components/header';
import { COMPONENTS, LAYOUTS } from '../lib/atama';
import { Footer } from '../components/footer';

const Preview = withPreview(
  AtamaRenderer,
  process.env.ATAMA_PREVIEW_MESSAGES_ORIGIN || 'https://composer.atama.app',
);

const PreviewPage: NextPage = () => (
  <div>
    <Head>
      <title>Preview</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>
      <Preview layouts={LAYOUTS} components={COMPONENTS} />
    </main>
    <Footer />
  </div>
);

// eslint-disable-next-line import/no-default-export
export default PreviewPage;
