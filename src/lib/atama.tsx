import { FetcherAtama } from '@atamaco/fetcher-atama';

import { Banner } from '../components/banner';
import { FreeformPage } from '../layouts/freeform-page';
import { Card } from '../components/card';
import { CallToAction } from '../components/call-to-action';
import { Homepage } from '../layouts/homepage';
import { LandingPage } from '../layouts/landing-page';

export const fetcher = new FetcherAtama({
  apiKey: process.env.ATAMA_API_KEY as string,
  workspaceId: process.env.ATAMA_WORKSPACE_ID as string,
  url: process.env.ATAMA_API_URL as string,
  environment: process.env.ATAMA_ENVIRONMENT as 'prod' | 'preview',
});

export interface MetaData {
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
}

export const LAYOUTS = {
  freeform: FreeformPage,
  homepage: Homepage,
  'landing-page': LandingPage,
};

export const COMPONENTS = {
  Banner,
  Card,
  CallToAction,
};
