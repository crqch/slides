<script lang="ts">
	import type { TransitionStyle } from 'reveal.js';
	import type { Snippet } from 'svelte';
	import type { ClassValue } from 'svelte/elements';

	const {
		id,
		animate = false,
		restart = false,
		transition,
		transitionSpeed,
		align = 'left',
		bgImage,
		bgSize,
		bgPosition,
		bgRepeat,
		bgColor,
		fragment = false,
		fragmentIndex,
		children,
		class: classVal
	}: {
		id?: string;
		animate?: boolean;
		restart?: boolean;
		transition?: TransitionStyle;
		transitionSpeed?: 'default' | 'fast' | 'slow';
		align?: 'left' | 'center' | 'right';
		bgImage?: string;
		bgSize?: string;
		bgPosition?: string;
		bgRepeat?: string;
		bgColor?: string;
		fragment?: boolean;
		fragmentIndex?: number;
		children: Snippet;
		class?: ClassValue;
	} = $props();

	const style = $derived(
		[
			bgColor ? `--bg-color: ${bgColor}` : '',
			bgImage ? `--bg-image: url('${bgImage}')` : '',
			bgSize ? `--bg-size: ${bgSize}` : '',
			bgPosition ? `--bg-position: ${bgPosition}` : '',
			bgRepeat ? `--bg-repeat: ${bgRepeat}` : ''
		]
			.filter(Boolean)
			.join('; ')
	);
</script>

<section
	class={classVal}
	data-auto-animate-id={id}
	data-auto-animate={animate || null}
	data-auto-animate-restart={restart || null}
	data-transition={transition}
	data-transition-speed={transitionSpeed}
	data-align={align}
	style={style || undefined}
	data-fragment={fragment ? String(fragmentIndex ?? 0) : null}
>
	{@render children()}
</section>
