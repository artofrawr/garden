import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import { z } from 'zod';

export const { docs, meta } = defineDocs();

export default defineConfig({
  lastModifiedTime: 'git',
});

export const showcase = defineCollections({
  dir: 'content/showcase',
  schema: frontmatterSchema.extend({
    client: z.string(),
    thumb: z.string(),
    date: z.string().date().or(z.date()).optional(),
  }),
  type: 'doc',
});