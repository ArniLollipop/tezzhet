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
const { data: banners } = await useHttp<Pagination<IBanner>>("main_page/banners/", {
	key: "banners",
});

const { data: weather } = await useHttp<IWeather>("main_page/weather_info/");

const { data: popularCats } = await useHttp<Pagination<ICategory>>("category/popular_cats/");

const { data: restaurants } = await useHttp<Pagination<IRestaurant>>("catalog/restaurants");

const { data: news } = await useHttp<Pagination<INews>>("main_page/news", {
	key: "news",
});

function handleSearch(search: string) {
	console.log(search);
}
</script>

<style lang="scss" scoped></style>
