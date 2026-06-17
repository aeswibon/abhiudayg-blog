import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const seriesSlugs = ['manga-cdc', 'pipeline-compose', 'agent-brain'] as const;

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			series: z.enum(seriesSlugs).optional(),
			seriesPart: z.number().int().positive().optional(),
		}),
});

export const collections = { blog };
