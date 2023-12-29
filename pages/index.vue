<template>
  <div class="content-grid">
    <header class="header">
      <div class="header-main">
        <IconLogo />
        <button @click="navigateTo('/about')">
          <IconBell />
        </button>
      </div>
    </header>
    <MainWarning v-if="weather?.is_weather" :icon="weather?.icon" />
    <MainBanner :banners="banners?.results || []" />
    <MainPopular :categories="popularCats?.results || []" />
    <Search @search="handleSearch" />
    <RestaurantsMediumList
      :restaurants="restaurants?.results || []"
      v-if="restaurants"
    />
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const { data: banners } = useLazyFetch<Pagination<IBanner> | null>(
  `${runtimeConfig.public.baseUrl}main_page/banners/`
);

const { data: weather } = useLazyFetch<IWeather | null>(
  `${runtimeConfig.public.baseUrl}main_page/weather_info/`
);

const { data: popularCats } = useLazyFetch<Pagination<ICategory> | null>(
  `${runtimeConfig.public.baseUrl}category/popular_cats/`
);

const { data: restaurants } = useLazyFetch<Pagination<IRestaurant>>(
  `${runtimeConfig.public.baseUrl}catalog/restaurants`
);

async function handleSearch(search: string) {
  console.log(search);
}
</script>

<style lang="scss" scoped></style>
