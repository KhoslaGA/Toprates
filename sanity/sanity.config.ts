import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import post from './schemas/post';
import author from './schemas/author';
import category from './schemas/category';
import blockContent from './schemas/blockContent';

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
    types: [blockContent, post, author, category],
  },
});
