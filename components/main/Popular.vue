<template>
  <section class="main-popular">
    <h2 class="main-popular__h2">{{ $t("popularCategory") }}</h2>
    <div class="main-popular__list">
      <div
        @click="handleSearch(category)"
        class="main-popular__one"
        v-for="(category, index) in props.categories"
        :key="index"
      >
        <div class="main-popular__box">
          <div class="main-popular__circle">
            <NuxtImg
              loading="lazy"
              :src="category?.category_image || ''"
              alt=""
              class="main-popular__img"
            />
          </div>
        </div>
        <p class="main-popular__text">{{ category?.category_name }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  categories: ICategory[];
}>();

async function handleSearch(category: ICategory) {
  await navigateTo("/category/cat/" + category?.slug);
}
</script>
