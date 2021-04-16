<script context="module">
	export const ssr = false;
</script>

<script lang="ts">
	import TableCanvas from './../lib/TableCanvas/TableCanvas.svelte';

	let data = { // this is an example format
		tables: {
			table1: {
				name: 'table1',
				columns: {
					id: {
						name: 'id',
                        indexType: "primary key", // Primary key Unique key Index None
                        type:"int"
					},
					email: {
						name: 'email',
                        indexType: "unique key", // Primary key Unique key Index None
                        type:"int"
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
                        indexType: "primary key", // Primary key Unique key Index None
                        type:"int"
					},
					email: {
						name: 'email',
                        indexType: "unique key", // Primary key Unique key Index None
                        type:"int"
					}
				},
				x: 0,
				y: 0,
				width: 0
			}
		},
		links: {
			link1: { from: { table: 'table1', column: 'id' }, to: { table: 'table2', column: 'id' } },
			link2: { from: { table: 'table1', column: 'email' }, to: { table: 'table2', column: 'email' } }
		}
	};
	

	
</script>

<TableCanvas {data} />

<style style lang="postcss">
</style>
