import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string().default('Other'),
    youtubeId: z.string(),
    thumbnail: z.string().default(''),
    featured: z.boolean().default(false),
    client: z.string().default(''),
    role: z.string().default(''),
    draft: z.boolean().default(false)
  })
});
export const collections = { projects };
