import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { RSS_FEED_URL, SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog')).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	const latestPost = posts[0]?.data.pubDate ?? new Date();

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
		xmlns: {
			atom: 'http://www.w3.org/2005/Atom',
		},
		customData: `
			<atom:link href="${RSS_FEED_URL}" rel="self" type="application/rss+xml" />
			<language>en-us</language>
			<lastBuildDate>${latestPost.toUTCString()}</lastBuildDate>
		`,
	});
}
