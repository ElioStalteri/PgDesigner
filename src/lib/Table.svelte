<script>
	import { mouseEvent } from './transform';
    import { spring } from 'svelte/motion';

	// your script goes here
	let table;
	let height = 0;
	export let width = 0;
    const refreshDimension = ()=>{
        if (table) {
            height = table.offsetHeight+10;
            width =table.offsetWidth;
        }
    }

	$:if (table)refreshDimension()

    
	export let x = Math.floor(Math.random() * 500);
	export let y = Math.floor(Math.random() * 500);
    const pos = spring({ x, y }, {
		stiffness: 0.4,
		damping: 1
	})
    $: pos.set({ x, y })
</script>

<foreignObject class="node" x={x} y={y} height="{height}px" width="{width}px">
	<body style="margin:0;padding:0;box-sizing: border-box; user-select: none;padding-top:5px;"
		><div
			bind:this={table}
			data-v-5f2bcc2a=""
			data-v-d0eb8d26=""
			id="table-6d871587-b32d-407a-b348-d08a28e151d8"
			class="multi-selectable div-table-outer px-5px bg-transparent table__selected hover:cursor-pointer"
			style="position:relative;"
		>
			<div
				data-v-5f2bcc2a=""
				class="div-table-inner card rounded-lg overflow-hidden shadow-md bg-white border-t-8 hover:shadow-lg leading-tight"
				style="border-color: rgb(246, 109, 155);"
			>
				<div
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
						<!---->
					</div>
					<!---->
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
							<!---->
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							int<!----></span
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
							><!----></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							name
							<!---->
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							varchar<!----></span
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
							<!---->
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							varchar<!----></span
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
							><!----></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							password
							<!---->
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							varchar<!----></span
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
							><!----></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							is_admin
							<!---->
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							boolean<!----></span
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
							><!----></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							preferences
							<!---->
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
							><!----></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							remember_token
							<!---->
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
							><!----></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							created_at
							<!---->
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							datetime<!----></span
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
							><!----></span
						>
						<div
							data-v-e2c8d50c=""
							class="flex-grow text-grey-darker group-hover:text-purple-500 break-all flex flex-row items-center"
						>
							updated_at
							<!---->
						</div>
						<span
							data-v-e2c8d50c=""
							class="flex-grow-0 opacity-25 group-hover:text-purple-500 group-hover:opacity-100 ml-1"
						>
							datetime<!----></span
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
				</div>
			</div>
		</div>
	</body>
</foreignObject>

<style>
	/*! CSS Used from: https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css */
	.fa {
		display: inline-block;
		font: normal normal normal 14px/1 FontAwesome;
		font-size: inherit;
		text-rendering: auto;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.fa-key:before {
		content: '\f084';
	}
	.fa-snowflake-o:before {
		content: '\f2dc';
	}
	
	/*! CSS Used fontfaces */
	@font-face {
		font-family: 'FontAwesome';
		src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0');
		src: url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot#iefix&v=4.7.0')
				format('embedded-opentype'),
			url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0')
				format('woff2'),
			url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0')
				format('woff'),
			url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0')
				format('truetype'),
			url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular')
				format('svg');
		font-weight: normal;
		font-style: normal;
	}
</style>
