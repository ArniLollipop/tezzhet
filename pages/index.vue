<template>
  <div class="content-grid">
    <header class="header content-grid">
      <div class="header-main">
        <IconLogo />
        <button @click="navigateTo('/about')">
          <IconBell />
        </button>
      </div>
    </header>
    <MainWarning v-if="weather?.is_weather" :icon="weather?.icon" />
    <MainBanner :banners="banners?.results" v-if="banners" />
    <MainPopular :categories="popularCats.results" v-if="popularCats" />
    <Search @search="handleSearch" />
    <RestaurantsMediumList
      :restaurants="restaurants?.results || []"
      v-if="restaurants"
    />
    <MainNewsList :news="news.results || []" v-if="news" />
  </div>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

const { data: banners } = await useHttp<Pagination<IBanner>>(
  `${runtimeConfig.public.baseUrl}main_page/banners/`
);

const { data: weather } = await useHttp<IWeather>(
  `${runtimeConfig.public.baseUrl}main_page/weather_info/`
);

const { data: popularCats } = await useHttp<Pagination<ICategory>>(
  `${runtimeConfig.public.baseUrl}category/popular_cats/`
);

const { data: restaurants } = await useHttp<Pagination<IRestaurant>>(
  `${runtimeConfig.public.baseUrl}catalog/restaurants`
);

const { data: news } = await useHttp<Pagination<INews>>(
  `${runtimeConfig.public.baseUrl}main_page/news`
);

async function handleSearch(search: string) {
  console.log(search);
}
</script>

<style lang="scss" scoped></style>
