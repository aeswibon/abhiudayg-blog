import type { ImageMetadata } from 'astro';
import {
	AUTHOR_NAME,
	GITHUB_URL,
	SITE_DESCRIPTION,
	SITE_TITLE,
	SITE_URL,
	TWITTER_URL,
} from '../consts';

export function formatTitle(pageTitle: string, siteTitle: string = SITE_TITLE) {
	if (pageTitle === siteTitle) return siteTitle;
	return `${pageTitle} | ${siteTitle}`;
}

export function absoluteUrl(path: string, site: URL | string = SITE_URL) {
	const base = typeof site === 'string' ? site : site.origin;
	return new URL(path, base).href;
}

export function resolveImageUrl(image: ImageMetadata | string | undefined, site: URL | string) {
	if (!image) return absoluteUrl('/og-default.jpg', site);
	if (typeof image === 'string') return absoluteUrl(image, site);
	return absoluteUrl(image.src, site);
}

export function twitterHandle() {
	const handle = TWITTER_URL.replace(/\/$/, '').split('/').pop();
	return handle ? `@${handle}` : undefined;
}

export function authorProfileUrl() {
	return GITHUB_URL;
}

export function personJsonLd(site: URL | string = SITE_URL) {
	return {
		'@type': 'Person',
		name: AUTHOR_NAME,
		url: authorProfileUrl(),
		sameAs: [GITHUB_URL, TWITTER_URL],
	};
}

export function websiteJsonLd(site: URL | string = SITE_URL) {
	return {
		'@type': 'WebSite',
		name: SITE_TITLE,
		description: SITE_DESCRIPTION,
		url: absoluteUrl('/', site),
		inLanguage: 'en-US',
		author: personJsonLd(site),
	};
}

export function blogJsonLd(site: URL | string = SITE_URL) {
	return {
		'@type': 'Blog',
		name: `${SITE_TITLE} Blog`,
		description: SITE_DESCRIPTION,
		url: absoluteUrl('/blog/', site),
		inLanguage: 'en-US',
		author: personJsonLd(site),
		publisher: personJsonLd(site),
	};
}

export function aboutPageJsonLd(site: URL | string = SITE_URL) {
	return {
		'@type': 'AboutPage',
		name: `About ${AUTHOR_NAME}`,
		description: SITE_DESCRIPTION,
		url: absoluteUrl('/about/', site),
		inLanguage: 'en-US',
		mainEntity: personJsonLd(site),
	};
}

export function collectionPageJsonLd({
	name,
	description,
	url,
}: {
	name: string;
	description: string;
	url: string;
}) {
	return {
		'@type': 'CollectionPage',
		name,
		description,
		url,
		inLanguage: 'en-US',
		isPartOf: {
			'@type': 'Blog',
			url: absoluteUrl('/blog/'),
		},
	};
}

export function blogPostJsonLd({
	title,
	description,
	url,
	image,
	pubDate,
	updatedDate,
	series,
}: {
	title: string;
	description: string;
	url: string;
	image: string;
	pubDate: Date;
	updatedDate?: Date;
	series?: string;
}) {
	return {
		'@type': 'BlogPosting',
		headline: title,
		description,
		url,
		image,
		datePublished: pubDate.toISOString(),
		dateModified: (updatedDate ?? pubDate).toISOString(),
		inLanguage: 'en-US',
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': url,
		},
		author: personJsonLd(),
		publisher: personJsonLd(),
		...(series ? { articleSection: series, keywords: series } : {}),
	};
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	};
}

export function graphJsonLd(...nodes: Record<string, unknown>[]) {
	return {
		'@context': 'https://schema.org',
		'@graph': nodes,
	};
}
