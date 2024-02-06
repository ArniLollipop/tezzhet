<template>
	<div>
		<header class="news-header">
			<div class="restaurants-header__flex">
				<button
					class="restaurants-header__btn"
					@click="handleRouteHome"
				>
					<IconChevron class="rotate-90 -ml-2" />
				</button>
			</div>
			<NuxtImg
				loading="lazy"
				:src="
					newsDetails?.image || 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'
				"
				:alt="newsDetails?.title"
				class="news-header__img"
			/>
			<div class="news-header__bottom">
				<p class="news-header__text">{{ newsDetails?.title }}</p>
			</div>
		</header>
		<div class="content-grid">
			<div
				v-if="newsDetails"
				v-html="newsDetails.description"
				class="news-text"
			></div>
			<MainNewsList
				v-if="news"
				:news="news.results"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
const { $http } = useNuxtApp();

const route = useRoute();

const { data: newsDetails } = await useAsyncData<INews>(`news-${route.params.id}`, () => $http(`main_page/news/${route.params.id}/`));

const { data: news } = await useAsyncData<Pagination<INews>>("news", () => $http("main_page/news/"), {
	transform(data) {
		return {
			...data,
			results: data.results?.filter((item) => {
				return typeof item === "object" && "id" in item && (item as INews).id !== newsDetails.value?.id;
			}),
		};
	},
});

async function handleRouteHome() {
	await navigateTo("/");
}
</script>
