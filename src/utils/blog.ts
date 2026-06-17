import { getCollection, type CollectionEntry } from 'astro:content';
import type { BlogSeriesSlug } from '../consts';

export async function getSortedPosts() {
	return (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}

export function paginatePosts<T>(items: T[], page: number, perPage: number) {
	const totalPages = Math.max(1, Math.ceil(items.length / perPage));
	const currentPage = Math.min(Math.max(1, page), totalPages);

	return {
		items: items.slice((currentPage - 1) * perPage, currentPage * perPage),
		currentPage,
		totalPages,
		totalItems: items.length,
	};
}

export function paginationHref(basePath: string, page: number) {
	const root = basePath.replace(/\/$/, '');
	if (page <= 1) return `${root}/`;
	return `${root}/page/${page}/`;
}

export function getExtraPaginationPages(totalItems: number, perPage: number) {
	const totalPages = Math.ceil(totalItems / perPage);
	if (totalPages <= 1) return [];

	return Array.from({ length: totalPages - 1 }, (_, index) => index + 2);
}

export async function getPostsBySeries(series: BlogSeriesSlug) {
	const posts = await getSortedPosts();
	return posts.filter((post) => post.data.series === series);
}

export function sortSeriesPosts(posts: CollectionEntry<'blog'>[]) {
	return [...posts].sort((a, b) => {
		const partA = a.data.seriesPart ?? Number.MAX_SAFE_INTEGER;
		const partB = b.data.seriesPart ?? Number.MAX_SAFE_INTEGER;
		if (partA !== partB) return partA - partB;
		return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
	});
}
