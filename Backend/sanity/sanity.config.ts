import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

// Document schemas
import post from './schemas/post';
import author from './schemas/author';
import category from './schemas/category';
import newsletterSubscription from './schemas/newsletterSubscription';

// Object / reusable schemas
import blockContent from './schemas/blockContent';
import seo from './schemas/seo';
import faqItem from './schemas/faqItem';
import sourceCitation from './schemas/sourceCitation';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error('Missing Sanity configuration variables');
}

export default defineConfig({
  name: 'toprates_ca',
  title: 'Toprates.ca',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [
      // Documents
      post,
      author,
      category,
      newsletterSubscription,
      // Objects
      blockContent,
      seo,
      faqItem,
      sourceCitation,
    ],
  },
});
