import type { Metadata } from 'next';
import HomeClient from './_home/HomeClient';

export const metadata: Metadata = {
  title: 'TopRates.ca — Insurance, in plain English',
  description:
    'Independent Canadian insurance education. Plain-English guides on auto, home, life, business, travel, and mortgage. Talk to a LLQP-licensed advisor at KLC Group Canada Inc. for life insurance. Operated by Webhub4u Inc.',
};

export default function Page() {
  return <HomeClient />;
}
