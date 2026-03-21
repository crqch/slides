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

const slideModules = import.meta.glob<MetadataModule>('/src/routes/slides/*/metadata.ts', {
	eager: true
});

export const slides: SlideMeta[] = Object.entries(slideModules).map(([path, module]) => {
	const slug = path.split('/').at(-2) ?? '';
	const meta = module.metadata;

	if (meta) {
		return { slug, ...meta };
	}

	return {
		slug,
		title: slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
		description: '',
		category: 'Uncategorized',
		tags: []
	};
});

export function getSlidesByCategory() {
	return slides.reduce(
		(acc, slide) => {
			if (!acc[slide.category]) {
				acc[slide.category] = [];
			}
			acc[slide.category].push(slide);
			return acc;
		},
		{} as Record<string, SlideMeta[]>
	);
}
