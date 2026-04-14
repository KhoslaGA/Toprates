import { createClient, type SanityClient } from '@sanity/client';

/**
 * Sanity client.
 *
 * We intentionally do NOT throw at import time when env vars are missing —
 * the Studio hasn't been wired up yet (Week 1–2 task) and throwing would
 * break `next build`. Instead, the client is built lazily and will fail
 * loudly at the moment a real query is attempted without a project ID.
 *
 * Live preview via `createPreviewSubscriptionHook` was removed from
 * `next-sanity` v5+. The modern equivalent is the `@sanity/react-loader`
 * pattern with Next.js `draftMode()`. That will be added when Studio
 * deployment happens.
 */

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = '2023-11-28';

function build(readToken?: string): SanityClient {
  if (!projectId) {
    // Defer the error to first use, not module load.
    throw new Error(
      'NEXT_PUBLIC_SANITY_PROJECT_ID is not set. Configure it in .env.local or Vercel env.'
    );
  }
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !readToken,
    token: readToken,
  });
}

let _client: SanityClient | null = null;
let _previewClient: SanityClient | null = null;

export function client(): SanityClient {
  if (!_client) _client = build();
  return _client;
}

export function previewClient(): SanityClient {
  if (!_previewClient) _previewClient = build(process.env.SANITY_API_READ_TOKEN);
  return _previewClient;
}

export function getClient(usePreview = false): SanityClient {
  return usePreview ? previewClient() : client();
}
