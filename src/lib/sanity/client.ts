import { createClient } from '@sanity/client';
import { createPreviewSubscriptionHook } from 'next-sanity';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = '2023-11-28';

if (!projectId || !dataset) {
  throw new Error('Missing Sanity environment variables: NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET');
}

// Regular Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Preview client for draft content
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

// Function to get client based on preview mode
export function getClient(usePreview: boolean = false) {
  return usePreview ? previewClient : client;
}

// Preview subscription hook for live preview
export const usePreviewSubscription = createPreviewSubscriptionHook({
  projectId,
  dataset,
});
