<template>
  <div class="content-grid">
    <header class="header content-grid">
      <div class="header-main">
        <IconLogo />
        <button>
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
const { data: banners } = await useHttp<Pagination<IBanner>>(
  "main_page/banners/",
  {
    key: "banners",
  }
);

const { data: weather } = await useHttp<IWeather>("main_page/weather_info/");

const { data: popularCats } = await useHttp<Pagination<ICategory>>(
  "category/popular_cats/"
);

const { data: restaurants } = await useHttp<Pagination<IRestaurant>>(
  "catalog/restaurants"
);

const { data: news } = await useHttp<Pagination<INews>>("main_page/news", {
  key: "news",
});

async function handleSearch(search: string) {
  console.log(search);
}
</script>

<style lang="scss" scoped></style>
