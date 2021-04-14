<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	import { drawPath } from '$lib/pathUtils';

	import Table from '$lib/Table.svelte';
	import { mouseEvent, transform } from '$lib/transform';

	let data = {
		tables: {
			table1: {
				name: 'table1',
				x: 0,
				y: 0,
				width:0,
			},
			table2: {
				name: 'table2',
				x: 0,
				y: 0,
				width:0,
			}
		},
		links: {
			link1: { from: 'table1', to: 'table2' }
		}
	};
	let tables = Object.keys(data.tables);
</script>

<svelte:body on:mousewheel={mouseEvent('scroll')} />
<svg
	xmlns="http://www.w3.org/2000/svg"
	style="position:fixed;top:0;left:0;width:100%;height:100%;background-color:#f1f6f8;"
	viewBox="0 0 500 500"
	on:mousedown|stopPropagation={mouseEvent('down')}
	on:mousemove|stopPropagation={mouseEvent('move')}
	on:mouseup|stopPropagation={mouseEvent('up')}
>
	<g width="100%" height="100%" transform={$transform} style="transform-origin: 50% 50%;">
		

		<path
			d={drawPath(data.tables.table1, data.tables.table2)}
			pointer-events="visibleStroke"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="#A0AEC0"
			style=""
			stroke-width="1.5"
		/>
		{#each tables as tableName}
			<Table bind:x={data.tables[tableName].x} bind:y={data.tables[tableName].y} bind:width={data.tables[tableName].width} />
		{/each}
	</g>
</svg>

<style>
</style>
