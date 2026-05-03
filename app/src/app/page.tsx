import type { Metadata } from 'next';
import HomeClient from './_home/HomeClient';

export const metadata: Metadata = {
  title: 'TopRates.ca — Insurance, in plain English',
  description:
    'Independent Canadian insurance education. Plain-English guides on auto, home, life, business, travel, and mortgage. Life content reviewed by LLQP-licensed advisors at KLC Group Canada Inc. Education today. Quotes summer 2027. Operated by Webhub4u Inc.',
};

export default function Page() {
  return <HomeClient />;
}
