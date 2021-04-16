<script lang="ts">
	import { drawPath } from './pathUtils';
	import Table from './Table.svelte';
	import { mouseEvent, transform } from './transform';

	export let data: any = {
		// this is an example format
		tables: {
			table1: {
				name: 'table1',
				columns: {
					id: {
						name: 'id',
						indexType: 'primary key', // Primary key Unique key Index None
						type: 'int'
					},
					email: {
						name: 'email',
						indexType: 'unique key', // Primary key Unique key Index None
						type: 'int'
					}
				},
				x: 0,
				y: 0,
				width: 0
			},
			table2: {
				name: 'table2',
				columns: {
					id: {
						name: 'id',
						indexType: 'primary key', // Primary key Unique key Index None
						type: 'int'
					},
					email: {
						name: 'email',
						indexType: 'unique key', // Primary key Unique key Index None
						type: 'int'
					}
				},
				x: 0,
				y: 0,
				width: 0
			}
		},
		links: {
			link1: { from: { table: 'table1', column: 'id' }, to: { table: 'table2', column: 'id' } }
		}
	};
	$: tables = Object.keys(data.tables);
	let canvasEl: HTMLElement;
	let viewBox = '0 0 0 0';
	$: if (canvasEl) {
		viewBox = `0 0 ${canvasEl.getBoundingClientRect().width} ${
			canvasEl.getBoundingClientRect().height
		}`;
	}
</script>

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
		{viewBox}
	>
		<g style="width:100%;height:100%;transform-origin: 50% 50%;" transform={$transform}>
			{#each Object.keys(data.links) as linkName}
				<path
					d={drawPath(
						{
							...data.tables[data.links[linkName].from.table],
							y:
								data.tables[data.links[linkName].from.table].y +
								data.tables[data.links[linkName].from.table].columns[
									data.links[linkName].from.column
								].topDistance
						},
						{
							...data.tables[data.links[linkName].to.table],
							y:
								data.tables[data.links[linkName].to.table].y +
								data.tables[data.links[linkName].to.table].columns[data.links[linkName].to.column]
									.topDistance
						}
					)}
					pointer-events="visibleStroke"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="#A0AEC0"
					style=""
					stroke-width="1.5"
				/>
			{/each}
			<!-- <path
				d={drawPath(data.tables.table1, data.tables.table2)}
				pointer-events="visibleStroke"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="#A0AEC0"
				style=""
				stroke-width="1.5"
			/> -->
		</g>
	</svg>
	<div class=" block absolute inset-0" style="transform-origin: 50% 50%;transform:{$transform};">
		{#each tables as tableName}
			<Table
				table={data.tables[tableName]}
				bind:x={data.tables[tableName].x}
				bind:y={data.tables[tableName].y}
				bind:width={data.tables[tableName].width}
			/>
		{/each}
	</div>
</div>
