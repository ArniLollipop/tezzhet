<template>
  <div class="container">
    <header class="header header-flex mb-10">
      <button @click="handleRouteHome">
        <IconChevron class="rotate-90" />
      </button>
      <h2 class="header-absolute">{{ $t("restaurants") }}</h2>
    </header>
    <Search @search="handleSearch" />
    <CategoryList :categories="categories.results" v-if="categories?.results" />
    <h2>{{ $t("allRestaurants") }}</h2>
    <!-- <div>
      <BigListRestaurants
        v-for="restaurant in restaurants?.results"
        :key="restaurant.id"
        :restaurant="restaurant"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
const { data: categories } = await useHttp<Pagination<ICategory>>(
  "category/rest_cats"
);
// const { data: restaurants } = await useHttp<Pagination<IRestaurant>>(
//   "catalog/restaurants"
// );

async function handleRouteHome() {
  await navigateTo("/");
}

async function handleSearch(search: string) {
  console.log(search);
}
</script>
