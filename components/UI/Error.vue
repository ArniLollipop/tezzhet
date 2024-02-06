<template>
	<p class="error">{{ props.error }}</p>
</template>

<script setup lang="ts">
const props = defineProps<{
	error: string;
}>();
</script>

<style scoped lang="scss">
.error {
	font-size: 14px;
	color: darkred;
	text-align: start;
}
</style>
