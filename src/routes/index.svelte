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
				width: 0
			},
			table2: {
				name: 'table2',
				x: 0,
				y: 0,
				width: 0
			}
		},
		links: {
			link1: { from: 'table1', to: 'table2' }
		}
	};
	let tables = Object.keys(data.tables);


	let canvasEl:HTMLElement
	let viewBox = "0 0 0 0"
	$: if(canvasEl){
		viewBox = `0 0 ${canvasEl.getBoundingClientRect().width} ${canvasEl.getBoundingClientRect().height}`
	}
</script>

<svelte:body />
<div
	bind:this={canvasEl}
	class=" block relative w-full h-screen overflow-hidden bg-gray-50"
	style="background-color:#f1f6f8;"
	on:mousedown|stopPropagation={mouseEvent('down')}
	on:mousemove|stopPropagation={mouseEvent('move')}
	on:mouseup|stopPropagation={mouseEvent('up')}
	on:mousewheel={mouseEvent('scroll')}
>
<svg
	xmlns="http://www.w3.org/2000/svg"
	style="position:absolute;top:0;left:0;width:100%;height:100%;"
	viewBox={viewBox}
>
	<g style="width:100%;height:100%;transform-origin: 50% 50%;" transform={$transform}>
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
	</g>
</svg>
	<div class=" block absolute inset-0" style="transform-origin: 50% 50%;transform:{$transform};">
		{#each tables as tableName}
			<Table
				bind:x={data.tables[tableName].x}
				bind:y={data.tables[tableName].y}
				bind:width={data.tables[tableName].width}
			/>
		{/each}
	</div>
</div>

<style style lang="postcss">
</style>
