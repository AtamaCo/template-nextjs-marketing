import type { AtamaProps } from '@atamaco/nextjs';
import type { MetaData } from '../lib/atama';
import type { NextPage } from 'next';

import { getStaticPropsFactory, getStaticPathsFactory } from '@atamaco/nextjs';
import Head from 'next/head';
import { AtamaRenderer } from '@atamaco/renderer-react';

import { fetcher, COMPONENTS, LAYOUTS } from '../lib/atama';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

const ContentPage: NextPage<AtamaProps<MetaData>> = ({ data }) => (
  <>
    <Head>
      <title>
        {typeof data?.meta?.seoTitle === 'string' ? data?.meta?.seoTitle : ''}
      </title>
      <meta
        name="description"
        content={
          typeof data?.meta?.seoDescription === 'string'
            ? data?.meta?.seoDescription
            : ''
        }
      />
    </Head>
    <Header />
    <main>
      {data && (
        <AtamaRenderer layouts={LAYOUTS} components={COMPONENTS} data={data} />
      )}
    </main>
    <Footer />
  </>
);

export const getStaticPaths = getStaticPathsFactory(fetcher);
export const getStaticProps = getStaticPropsFactory(fetcher);

// eslint-disable-next-line import/no-default-export
export default ContentPage;
