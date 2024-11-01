import { docs, meta, showcase as showcaseSource } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/garden',
  source: createMDXSource(docs, meta),
});

export const showcase = loader({
  baseUrl: '/showcase',
  source: createMDXSource(showcaseSource, []),
});
