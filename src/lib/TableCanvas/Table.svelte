<script>
	import Column from './Column.svelte';
	import { mouseEvent } from './transform';
	import { spring } from 'svelte/motion';
	export let table;

	let tableEl;
	export let width = 0;
	const refreshDimension = () => {
		if (tableEl) {
			width = tableEl.offsetWidth;
		}
	};

	$: if (tableEl) refreshDimension();

	export let x = Math.floor(Math.random() * 500);
	export let y = Math.floor(Math.random() * 500);
	// if we want a smooth transition of the tableEl we can use the following
	// const pos = spring(
	// 	{ x, y },
	// 	{
	// 		stiffness: 0.3,
	// 		damping: 0.5
	// 	}
	// );
	// $: pos.set({ x, y });
</script>

<div
	bind:this={tableEl}
	class="absolute p-5px select-none min-w-max"
	style="left:{x}px;top:{y}px;min-width: 256px;"
>
	<div
		class=" bg-gray-100 rounded-lg overflow-hidden shadow-md border-t-8 border-green-500 hover:shadow-lg leading-tight"
	>
		<div
			class="py-5 justify-center flex flex-row hover:cursor-pointer text-3xl font-bold px-4"
			on:mousedown|stopPropagation={mouseEvent('downObject', ([deltaX, deltaY]) => {
				x += deltaX;
				y += deltaY;
			})}
			on:mouseup|stopPropagation={mouseEvent('up')}
		>
			<span>{table.name}</span>
		</div>
		<div
			class="flex flex-col bg-white text-lg"
			style="box-shadow: rgb(0 0 0 / 33%) -2px 2px 12px 0px;"
		>
			{#each Object.keys(table.columns) as columnName}
				<Column bind:column={table.columns[columnName]} />
			{/each}
		</div>
	</div>
</div>
