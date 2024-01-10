<template>
	<label
		for="globalSearch"
		class="global-search"
	>
		<input
			id="globalSearch"
			v-model="search"
			type="text"
			:placeholder="$t('search')"
			class="global-search__input"
		/>
		<button>
			<IconSearch />
		</button>
	</label>
</template>

<script setup>
const emit = defineEmits(["search"]);

const search = ref("");

const emitSearchDebounced = useDebounce((value) => {
	emit("search", value);
}, 500);

watch(
	search,
	() => {
		emitSearchDebounced(search.value);
	},
	{ deep: true, immediate: false },
);
</script>
