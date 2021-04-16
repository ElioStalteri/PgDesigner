<script>
	import { mouseEvent } from './transform';
	import { spring } from 'svelte/motion';

	// your script goes here
	let table;
	let height = 0;
	export let width = 0;
	const refreshDimension = () => {
		if (table) {
			height = table.offsetHeight + 10;
			width = table.offsetWidth;
		}
	};

	$: if (table) refreshDimension();

	export let x = Math.floor(Math.random() * 500);
	export let y = Math.floor(Math.random() * 500);
	// if we want a smooth transition of the table we can use the following
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
	bind:this={table}
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
			<span>user</span>
		</div>
		<div
			class="flex flex-col bg-white text-lg"
			style="box-shadow: rgb(0 0 0 / 33%) -2px 2px 12px 0px;"
		>
			<div class="flex flex-row items-center pr-4 pl-2 py-1">
				<span data-v-e2c8d50c="" class="mr-1 text-gray-800 flex-shrink-0"
					><i class="fas fa-key" /></span
				>
				<div
					data-v-e2c8d50c=""
					class="flex-grow text-grey-darker break-all flex flex-row items-center font-semibold"
				>
					id
				</div>
				<span data-v-e2c8d50c="" class="flex-grow-0 opacity-25 group-hover:opacity-100 ml-1">
					int
				</span>
			</div>
			<div class="flex flex-row items-center pr-4 pl-2 py-1">
				<span data-v-e2c8d50c="" class="mr-1 text-gray-800 flex-shrink-0"
					><i class="far fa-snowflake" /></span
				>
				<div
					data-v-e2c8d50c=""
					class="flex-grow text-grey-darker break-all flex flex-row items-center font-semibold"
				>
					id
				</div>
				<span data-v-e2c8d50c="" class="flex-grow-0 opacity-25 group-hover:opacity-100 ml-1">
					int</span
				>
			</div>
		</div>
		<!-- <div
					data-v-5f2bcc2a=""
					class="card--header bg-grey-lightest border border-b border-gray-300"
					on:mousedown|stopPropagation={mouseEvent('downObject', ([deltaX, deltaY]) => {
                        x += deltaX;
						y += deltaY;
					})}
					on:mouseup|stopPropagation={mouseEvent('up')}
				>
					<div
						data-v-5f2bcc2a=""
						class="card--header-text px-6 py-2 text-xl text-gray-700 text-center break-all font-medium"
					>
						users
						
					</div>
					
				</div>
				<div data-v-5f2bcc2a="" class="card--body">
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-5888c6eb-f94d-4d88-ad4b-f52532aa089a"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							><i data-v-e2c8d50c="" class="fa fa-key" /></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center font-bold"
						>
							id
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							int</span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-f6a7858e-132f-42ad-bc8f-d38585f0f804"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							name
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							varchar</span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-51f9a421-ad35-40cb-bbdf-83a0234e8f85"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							><i data-v-e2c8d50c="" class="fa fa-snowflake-o" /></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							email
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							varchar</span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-0865cd4c-1af2-4efb-96aa-e1ebae2c0c68"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							password
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							varchar</span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-5fe6eed6-746d-49c1-a71c-b560bca744f4"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							is_admin
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							boolean</span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-2bf317ba-87b3-4e50-b51d-afaa270ca973"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							preferences
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							text<span data-v-e2c8d50c="">?</span></span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-6bc451d2-a858-4f33-860f-b9b6bc1c53a3"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							remember_token
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							varchar<span data-v-e2c8d50c="">?</span></span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-4d9696f6-e1f1-47c2-9584-46e5068218d2"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							created_at
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							datetime</span
						>
					</div>
					<div
						data-v-e2c8d50c=""
						data-v-5f2bcc2a=""
						id="card-column-4da96969-74d0-47b2-ad73-a4f66fc7aa21"
						class="card-column flex items-center pr-4 pl-2 group hover:bg-sd-grey jtk-endpoint-anchor jtk-managed"
					>
						<span
							data-v-e2c8d50c=""
							class="col-index-type mr-1 text-grey-dark group-hover:text-purple-500 flex-shrink-0"
							></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							updated_at
							
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							datetime</span
						>
					</div>
					<div
						data-v-5f2bcc2a=""
						class="mx-3 my-2 pb-2 pt-1 rounded-lg bg-gray-200"
						style="display: none;"
					>
						<div data-v-5f2bcc2a="" class="text-gray-500 px-2 py-1 uppercase font-semibold text-sm">
							Indexes
						</div>
					</div>
				</div> -->
	</div>
</div>
