export interface SlideMeta {
	slug: string;
	title: string;
	description: string;
	category: string;
	tags: string[];
	date?: string;
	author?: string;
}

interface MetadataModule {
	metadata?: Omit<SlideMeta, 'slug'>;
}

// 1. Use '**' to search subdirectories recursively
const slideModules = import.meta.glob<MetadataModule>('/src/routes/slides/**/metadata.ts', {
	eager: true
});

export const slides: SlideMeta[] = Object.entries(slideModules).map(([path, module]) => {
	// 2. Fix Slug Logic:
	// Strip the prefix and the filename to get the full relative path as the slug
	// Example: '/src/routes/slides/web/css/metadata.ts' -> 'web/css'
	const slug = path.replace('/src/routes/slides/', '').replace('/metadata.ts', '');

	const meta = module.metadata;

	if (meta) {
		return { slug, ...meta };
	}

	// Fallback for missing metadata
	return {
		slug,
		title:
			slug
				.split('/')
				.pop()
				?.replace(/-/g, ' ')
				.replace(/\b\w/g, (c) => c.toUpperCase()) ?? 'Untitled',
		description: '',
		category: 'Uncategorized',
		tags: []
	};
});

export function getSlidesByCategory() {
	return slides.reduce(
		(acc, slide) => {
			const category = slide.category || 'Uncategorized';
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push(slide);
			return acc;
		},
		{} as Record<string, SlideMeta[]>
	);
}
