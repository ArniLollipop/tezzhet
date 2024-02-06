<template>
	<div class="container">
		<header class="header header-flex mb-10">
			<button @click="handleRouteHome">
				<IconChevron class="rotate-90" />
			</button>
			<h2 class="header-absolute">{{ $t("restaurants") }}</h2>
		</header>
		<Search @search="handleSearch" />
		<CategoryList
			v-if="categories?.results"
			:categories="categories.results"
		/>
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
const { $http } = useNuxtApp();

const { data: categories } = await useAsyncData<Pagination<ICategory>>("categories", () => $http("category/rest_cats"));

async function handleRouteHome() {
	await navigateTo("/");
}

function handleSearch(search: string) {
	console.log(search);
}
</script>
