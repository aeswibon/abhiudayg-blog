export const SITE_TITLE = 'Dev Journey';
export const SITE_DESCRIPTION =
	'Notes, experiments, and lessons from building software — documented as I go.';
export const AUTHOR_NAME = 'Abhiuday';
export const SITE_URL = 'https://abhiudayg-blog.vercel.app';
export const RSS_FEED_URL = `${SITE_URL}/rss.xml`;

export const GITHUB_URL = 'https://github.com/aeswibon';
export const TWITTER_URL = 'https://x.com/aeswibon';
export const LINKEDIN_URL = 'https://linkedin.com/in/aeswibon';
export const DEVTO_URL = 'https://dev.to/abhiudayg';
export const HASHNODE_URL = 'https://hashnode.com/@abhiudayg';
export const REDDIT_URL = 'https://www.reddit.com/user/abhiudayg/';
export const REPO_URL = 'https://github.com/aeswibon/abhiudayg-blog';

export type SocialIconId = 'github' | 'x' | 'linkedin' | 'devto' | 'hashnode' | 'reddit';

export const SOCIAL_LINKS: ReadonlyArray<{
	name: string;
	href: string;
	icon: SocialIconId;
}> = [
	{ name: 'GitHub', href: GITHUB_URL, icon: 'github' },
	{ name: 'X', href: TWITTER_URL, icon: 'x' },
	{ name: 'LinkedIn', href: LINKEDIN_URL, icon: 'linkedin' },
	{ name: 'dev.to', href: DEVTO_URL, icon: 'devto' },
	{ name: 'Hashnode', href: HASHNODE_URL, icon: 'hashnode' },
	{ name: 'Reddit', href: REDDIT_URL, icon: 'reddit' },
];

export const BLOG_SERIES = {
	'manga-cdc': {
		title: 'manga-cdc',
		description: 'A change-data-capture pipeline for manga chapter releases across six sources.',
		repoUrl: 'https://github.com/aeswibon/manga-cdc',
	},
	'pipeline-compose': {
		title: 'pipeline-compose',
		description: 'Cross-repo CI orchestration that stays inside GitHub Actions.',
		repoUrl: 'https://github.com/aeswibon/pipeline-compose',
	},
	'agent-brain': {
		title: 'agent-brain',
		description: 'Local MCP routing for agents, skills, rules, and memory under a token budget.',
		repoUrl: 'https://github.com/aeswibon/agent-brain',
	},
} as const;

export type BlogSeriesSlug = keyof typeof BLOG_SERIES;

export const BLOG_SERIES_SLUGS = Object.keys(BLOG_SERIES) as BlogSeriesSlug[];

export const POSTS_PER_PAGE = 10;
