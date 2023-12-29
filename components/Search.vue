<template>
  <label for="globalSearch" class="global-search">
    <input
      type="text"
      :placeholder="$t('search')"
      id="globalSearch"
      class="global-search__input"
      v-model="search"
    />
    <button>
      <IconSearch />
    </button>
  </label>
</template>

<script setup>
const emit = defineEmits(["search"]);

let search = ref("");

const emitSearchDebounced = useDebounce((value) => {
  emit("search", value);
}, 500);

watch(
  search,
  () => {
    emitSearchDebounced(search.value);
  },
  { deep: true, immediate: false }
);
</script>
