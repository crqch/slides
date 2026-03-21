<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	const {
		text,
		variant = 'default',
		size = 'medium',
		class: classVal
	}: {
		text: string;
		variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline';
		size?: 'small' | 'medium' | 'large';
		class?: ClassValue;
	} = $props();
</script>

<span class="badge {variant} {size} {classVal ?? ''}">{text}</span>

<style>
	.badge {
		display: inline-block;
		padding: 0.2em 0.6em;
		border-radius: 4px;
		font-size: 0.75em;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		vertical-align: middle;
	}

	.small {
		font-size: 0.65em;
		padding: 0.15em 0.4em;
	}

	.large {
		font-size: 0.9em;
		padding: 0.3em 0.8em;
	}

	.default {
		background: rgba(255, 255, 255, 0.1);
	}

	.primary {
		background: rgba(59, 130, 246, 0.3);
		color: #93c5fd;
	}

	.success {
		background: rgba(34, 197, 94, 0.3);
		color: #86efac;
	}

	.warning {
		background: rgba(251, 191, 36, 0.3);
		color: #fcd34d;
	}

	.danger {
		background: rgba(239, 68, 68, 0.3);
		color: #fca5a5;
	}

	.outline {
		background: transparent;
		border: 1px solid currentColor;
	}
</style>
