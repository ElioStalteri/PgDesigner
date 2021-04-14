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

<foreignObject class="node" x={$pos.x} y={$pos.y} height="{height}px" width="{width}px">
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
				<div data-v-b329ee4c="" data-v-5f2bcc2a="" tabindex="-1" class="resize-observer">
					<object aria-hidden="true" tabindex="-1" type="text/html" data="about:blank" />
				</div>
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
	/*! CSS Used from: https://drawsql.app/css/sparkless/sparkless.css?id=c918b734984acefe7210 */
	::-moz-focus-inner {
		border-style: none;
		padding: 0;
	}
	:-moz-focusring {
		outline: 1px dotted ButtonText;
	}
	*,
	:after,
	:before {
		box-sizing: border-box;
		border: 0 solid #edf2f7;
	}
	object {
		display: block;
		vertical-align: middle;
	}
	.bg-transparent {
		background-color: transparent;
	}
	.bg-white {
		--tw-bg-opacity: 1;
		background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
	}
	.bg-gray-200 {
		--tw-bg-opacity: 1;
		background-color: rgba(237, 242, 247, var(--tw-bg-opacity));
	}
	.bg-grey-lightest {
		--tw-bg-opacity: 1;
		background-color: rgba(248, 250, 252, var(--tw-bg-opacity));
	}
	.hover\:bg-sd-grey:hover {
		--tw-bg-opacity: 1;
		background-color: rgba(245, 247, 250, var(--tw-bg-opacity));
	}
	.border-gray-300 {
		--tw-border-opacity: 1;
		border-color: rgba(226, 232, 240, var(--tw-border-opacity));
	}
	.rounded-lg {
		border-radius: 0.5rem;
	}
	.border {
		border-width: 1px;
	}
	.border-t-8 {
		border-top-width: 8px;
	}
	.border-b {
		border-bottom-width: 1px;
	}
	.hover\:cursor-pointer:hover {
		cursor: pointer;
	}
	.flex {
		display: -webkit-box;
		display: flex;
	}
	.flex-row {
		-webkit-box-direction: normal;
		flex-direction: row;
	}
	.flex-row {
		-webkit-box-orient: horizontal;
	}
	.items-center {
		-webkit-box-align: center;
		align-items: center;
	}
	.flex-grow-0 {
		-webkit-box-flex: 0;
		flex-grow: 0;
	}
	.flex-grow {
		-webkit-box-flex: 1;
		flex-grow: 1;
	}
	.flex-shrink-0 {
		flex-shrink: 0;
	}
	.font-medium {
		font-weight: 500;
	}
	.font-semibold {
		font-weight: 600;
	}
	.font-bold {
		font-weight: 700;
	}
	.text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.text-xl {
		line-height: 1.75rem;
	}
	.text-xl {
		font-size: 1.25rem;
	}
	.leading-tight {
		line-height: 1.25;
	}
	.my-2 {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.mx-3 {
		margin-left: 0.75rem;
		margin-right: 0.75rem;
	}
	.mr-1 {
		margin-right: 0.25rem;
	}
	.ml-1 {
		margin-left: 0.25rem;
	}
	.opacity-25 {
		opacity: 0.25;
	}
	.group:hover .group-hover\:opacity-100 {
		opacity: 1;
	}
	.overflow-hidden {
		overflow: hidden;
	}
	.py-1 {
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
	.py-2 {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.px-2 {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
	}
	.px-6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	.px-5px {
		padding-left: 5px;
		padding-right: 5px;
	}
	.pt-1 {
		padding-top: 0.25rem;
	}
	.pb-2 {
		padding-bottom: 0.5rem;
	}
	.pl-2 {
		padding-left: 0.5rem;
	}
	.pr-4 {
		padding-right: 1rem;
	}
	.absolute {
		position: absolute;
	}
	* {
		--tw-shadow: 0 0 transparent;
	}
	.shadow-md {
		--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	}
	.shadow-md {
		box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
			var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
	}
	.hover\:shadow-lg:hover {
		box-shadow: var(--tw-ring-offset-shadow, 0 0 transparent),
			var(--tw-ring-shadow, 0 0 transparent), var(--tw-shadow);
	}
	.hover\:shadow-lg:hover {
		--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	}
	* {
		--tw-ring-inset: var(--tw-empty);
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgba(66, 153, 225, 0.5);
		--tw-ring-offset-shadow: 0 0 transparent;
		--tw-ring-shadow: 0 0 transparent;
	}
	.text-center {
		text-align: center;
	}
	.text-gray-500 {
		--tw-text-opacity: 1;
		color: rgba(160, 174, 192, var(--tw-text-opacity));
	}
	.text-gray-700 {
		--tw-text-opacity: 1;
		color: rgba(74, 85, 104, var(--tw-text-opacity));
	}
	.text-grey-darker {
		--tw-text-opacity: 1;
		color: rgba(96, 111, 123, var(--tw-text-opacity));
	}
	.text-grey-dark {
		--tw-text-opacity: 1;
		color: rgba(135, 149, 161, var(--tw-text-opacity));
	}
	.group:hover .group-hover\:text-purple-500 {
		--tw-text-opacity: 1;
		color: rgba(159, 122, 234, var(--tw-text-opacity));
	}
	.uppercase {
		text-transform: uppercase;
	}
	.break-all {
		word-break: break-all;
	}
	/*! CSS Used from: Embedded */
	.resize-observer[data-v-b329ee4c] {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		border: none;
		background-color: transparent;
		pointer-events: none;
		display: block;
		overflow: hidden;
		opacity: 0;
	}
	.resize-observer[data-v-b329ee4c] object {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index: -1;
	}
	/*! CSS Used from: Embedded */
	.resize-observer[data-v-b329ee4c] {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
		border: none;
		background-color: transparent;
		pointer-events: none;
		display: block;
		overflow: hidden;
		opacity: 0;
	}
	.resize-observer[data-v-b329ee4c] object {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		overflow: hidden;
		pointer-events: none;
		z-index: -1;
	}
	/*! CSS Used from: Embedded */
	.col-index-type[data-v-e2c8d50c] {
		width: 15px;
	}
	.card-column[data-v-e2c8d50c] {
		padding-top: 0.35rem;
		padding-bottom: 0.35rem;
	}
	/*! CSS Used from: Embedded */
	.div-table-outer[data-v-5f2bcc2a] {
		width: -webkit-fit-content;
		width: -moz-fit-content;
		width: fit-content;
		min-width: 266px;
	}
	.div-table-outer.table__selected[data-v-5f2bcc2a] {
		z-index: 1999999999 !important;
	}
	.div-table-outer.table__selected .card--header[data-v-5f2bcc2a] {
		background-color: #ebf4ff !important;
	}
	.div-table-outer.table__selected .card--header .card--header-text[data-v-5f2bcc2a] {
		color: #4c51bf !important;
	}
	.div-table-outer.table__selected .div-table-inner[data-v-5f2bcc2a]:after {
		content: ' ';
		z-index: 10;
		display: block;
		position: absolute;
		height: calc(100% + 3px);
		top: -3px;
		left: 0;
		right: 0;
		margin: 0 5px 0 5px;
		pointer-events: none;
		border-radius: 0.5rem;
		border: 3px #5a67d8 solid !important;
	}
	/*! CSS Used from: Embedded */
	.canvas .card {
		min-width: 256px;
		max-width: 360px;
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
