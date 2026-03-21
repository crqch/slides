<script lang="ts">
	import type { ClassValue } from 'svelte/elements';

	interface TableColumn {
		key: string;
		label?: string;
		align?: 'left' | 'center' | 'right';
	}

	const {
		columns,
		data,
		caption,
		striped = true,
		borders = true,
		hover = true,
		class: classVal
	}: {
		columns: TableColumn[];
		data: Record<string, string | number>[];
		caption?: string;
		striped?: boolean;
		borders?: boolean;
		hover?: boolean;
		class?: ClassValue;
	} = $props();
</script>

<figure class="table-wrapper {classVal ?? ''}">
	<table class:striped class:has-borders={borders} class:hover>
		<thead>
			<tr>
				{#each columns as col (col.key)}
					<th style:text-align={col.align ?? 'left'}>{col.label ?? col.key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row (row.feature)}
				<tr>
					{#each columns as col (col.key)}
						<td style:text-align={col.align ?? 'left'}>{row[col.key]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style>
	.table-wrapper {
		margin: 0;
		overflow-x: auto;
	}

	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 0.6em 1em;
	}

	.has-borders th,
	.has-borders td {
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	th {
		font-weight: 600;
	}

	.striped tbody tr:nth-child(even) {
		background: rgba(255, 255, 255, 0.03);
	}

	.hover tbody tr:hover {
		background: rgba(255, 255, 255, 0.05);
	}

	figcaption {
		text-align: center;
		font-size: 0.8em;
		opacity: 0.7;
		margin-top: 0.75rem;
		font-style: italic;
	}
</style>
