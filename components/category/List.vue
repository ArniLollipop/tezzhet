<template>
	<section class="small">
		<h2>{{ $t("categories") }}</h2>
		<div class="small-overflow">
			<div class="small-list">
				<div
					v-for="item in props.categories"
					:key="item.id"
					class="small-list__one"
					@click="handleSearch(item)"
				>
					<NuxtImg
						loading="lazy"
						:src="item.category_image || ''"
						:alt="item.category_name || ''"
						class="small-list__img"
					/>

					<div class="small-list__block">
						<p class="small-list__text">{{ item?.category_name }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps<{
	categories: ICategory[];
}>();

async function handleSearch(category: ICategory) {
	await navigateTo("/category/cat/" + category.slug);
}
</script>
