<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let disabled: boolean;
	const dispatcher = createEventDispatcher<{ clicked: void; }>();
</script>

<button class="button"
	{disabled}
	type="button"
	on:click={() => dispatcher("clicked")}
>
	<slot></slot>
</button>

<style>
	:global(.button) {
		position: relative;
		height: 64px;
		padding: 0 24px;
		border: 1px solid var(--gray);
		border-radius: 4px;
		background: var(--white);
		color: var(--black);
		font-family: var(--font);
		outline: none;
		font-size: 20px;
		font-weight: 500;
		cursor: pointer;
		transition: 75ms background ease-in-out;
	}

	:global(.button:hover) {
		background: var(--gold);
		border-color: var(--dark-gold);
	}

	:global(.button:disabled) {
		background: lightgray;
		border-color: darkgray;
		color: gray;
		cursor: default;
	}
</style>