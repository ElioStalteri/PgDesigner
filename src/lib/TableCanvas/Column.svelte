<script lang="ts">
	export let column;

	let colEl: HTMLElement;
	$: if (colEl) {
		column.topDistance = colEl.offsetTop + colEl.offsetHeight / 2;
	}
</script>

<div class="flex flex-row items-center pr-4 pl-2 py-1" bind:this={colEl}>
	<span data-v-e2c8d50c="" class="mr-1 text-gray-400 flex-shrink-0">
		{#if column.indexType === 'primary key'}
			<i class="fas fa-key" />
		{:else if column.indexType === 'unique key'}
			<i class="far fa-snowflake" />
		{:else if column.indexType === 'index'}
			<i class="fas fa-neuter" />
		{/if}
	</span>
	<div
		data-v-e2c8d50c=""
		class="indent-2 flex-grow text-grey-darker break-all flex flex-row items-center font-semibold"
	>
		{column.name}
	</div>
	<span data-v-e2c8d50c="" class="flex-grow-0 opacity-25 group-hover:opacity-100 ml-1">
		{column.type}
	</span>
</div>
