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
		<MainWarning
			v-if="weather?.is_weather"
			:icon="weather?.icon"
		/>
		<MainBanner
			v-if="banners"
			:banners="banners?.results"
		/>
		<MainPopular
			v-if="popularCats"
			:categories="popularCats.results"
		/>
		<Search @search="handleSearch" />
		<RestaurantsMediumList
			v-if="restaurants"
			:restaurants="restaurants?.results || []"
		/>
		<MainNewsList
			v-if="news"
			:news="news.results || []"
		/>
	</div>
</template>

<script lang="ts" setup>
const { $http } = useNuxtApp();

const { data: banners } = await useAsyncData<Pagination<IBanner>>("banners", () => $http("main_page/banners/"));

const { data: weather } = await useAsyncData<IWeather>("weather", () => $http("main_page/weather_info/"));
const { data: popularCats } = await useAsyncData<Pagination<ICategory>>("popularCats", () => $http("category/popular_cats/"));
const { data: restaurants } = await useAsyncData<Pagination<IRestaurant>>("restaurants", () => $http("catalog/restaurants"));
const { data: news } = await useAsyncData<Pagination<INews>>("news", () => $http("main_page/news"));

function handleSearch(search: string) {
	console.log(search);
}
</script>

<style lang="scss" scoped></style>
