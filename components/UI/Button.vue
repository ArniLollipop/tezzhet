<template>
	<button
		class="button"
		:class="{
			'button-gray': props.isGray,
			'button-square': props.isSquare,
		}"
		:type="props.isSubmit ? 'submit' : 'button'"
		:disabled="props.isDisabled"
	>
		<div class="button-text">
			<slot />
		</div>
	</button>
</template>

<script setup>
const props = defineProps({
	isSubmit: Boolean,
	isDisabled: Boolean,
	isGray: Boolean,
	isSquare: Boolean,
});
</script>

<style scoped lang="scss"></style>
