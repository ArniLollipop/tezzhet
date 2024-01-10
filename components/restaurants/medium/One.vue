<template>
	<div>
		<div
			class="medium-list__one"
			@click="handleRouteRestaurant(props.restaurant.id)"
		>
			<div
				v-if="!props.restaurant.is_working"
				class="not-active"
			></div>
			<div class="medium-list__head">
				<NuxtImg
					loading="lazy"
					:src="props.restaurant.image"
					alt=""
					:class="props.restaurant.is_working ? 'medium-list__img' : 'medium-list__img not-active__img'"
				/>
				<div class="medium-list__flex">
					<div class="medium-list__rating">
						<p class="medium-list__number">{{ props.restaurant.rating }}</p>
						<IconSmallStar class="medium-list__star" />
						<p class="medium-list__count">(50+)</p>
					</div>
					<button class="medium-list__favorite">
						<IconFavourite :class="{ active: isFavourite }" />
					</button>
				</div>
				<div
					v-if="props.restaurant.is_working"
					class="medium-list__sale"
				>
					<p class="medium-list__sale__text">-10% OFF</p>
				</div>
			</div>
			<div
				v-if="props.restaurant.is_working"
				class="medium-list__footer"
			>
				<p class="medium-list__name">{{ props.restaurant.name }}</p>
				<p class="medium-list__category">
					<span
						v-for="(category, index) in props.restaurant.category"
						:key="index"
					>
						{{ category.category_name + (index < props.restaurant.category.length - 1 ? ", " : "") }}
					</span>
				</p>

				<div class="medium-list__delivery">
					<div class="medium-list__delivery__info">
						<IconMoped class="medium-list__delivery__svg" />
						<p class="medium-list__delivery__text">
							{{ props.restaurant.cost + " ₸" || "Бесплатно" }}
						</p>
					</div>
					<div class="medium-list__delivery__info">
						<IconClock class="medium-list__delivery__svg" />
						<p class="medium-list__delivery__text">30-60 мин.</p>
					</div>
				</div>
			</div>
			<div v-else>
				<p class="not-active__text">{{ $t("notWorking") }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	restaurant: IRestaurant;
}>();

const isFavourite = ref(false);

async function handleRouteRestaurant(id: number) {
	await navigateTo(`/category/restaurants/${id}`);
}
</script>
