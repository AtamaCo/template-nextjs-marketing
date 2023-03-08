import type { NextPage } from 'next';
import type { AtamaProps } from '@atamaco/nextjs';
import type { MetaData } from '../lib/atama';

import { AtamaRenderer } from '@atamaco/renderer-react';
import { getStaticPropsFactory } from '@atamaco/nextjs';

import { COMPONENTS, fetcher, LAYOUTS } from '../lib/atama';
import { BaseHead } from '../components/base-template/base-head';
import { Header } from '../components/header';
import { Footer } from '../components/footer';

export const Home: NextPage<AtamaProps<MetaData>> = ({ data }) => (
  <>
    <BaseHead
      title={
        typeof data?.meta?.seoTitle === 'string' ? data?.meta?.seoTitle : 'Home'
      }
      description={
        typeof data?.meta?.seoDescription === 'string'
          ? data?.meta?.seoDescription
          : ''
      }
    />
    <>
      <Header />
      <main>
        {data && (
          <AtamaRenderer
            layouts={LAYOUTS}
            components={COMPONENTS}
            data={data}
          />
        )}
      </main>
      <Footer />
    </>
  </>
);

export const getStaticProps = getStaticPropsFactory(fetcher, 60, '', 'index');

// eslint-disable-next-line import/no-default-export
export default Home;
