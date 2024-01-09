<template>
  <div>
    <div
      @click="
        restaurant.is_working &&
          navigateTo(`/category/restaurants/${restaurant.id}`)
      "
      class="medium-list__one"
    >
      <div v-if="!restaurant.is_working" class="not-active"></div>
      <div class="medium-list__head">
        <NuxtImg
          loading="lazy"
          :src="restaurant.image"
          alt=""
          :class="
            restaurant.is_working
              ? 'medium-list__img'
              : 'medium-list__img not-active__img'
          "
        />
        <div class="medium-list__flex">
          <div class="medium-list__rating">
            <p class="medium-list__number">{{ restaurant.rating }}</p>
            <IconSmallStar class="medium-list__star" />
            <p class="medium-list__count">(50+)</p>
          </div>
          <button class="medium-list__favorite">
            <IconFavourite :class="{ active: isFavourite }" />
          </button>
        </div>
        <div class="medium-list__sale" v-if="restaurant.is_working">
          <p class="medium-list__sale__text">-10% OFF</p>
        </div>
      </div>
      <div class="medium-list__footer" v-if="restaurant.is_working">
        <p class="medium-list__name">{{ restaurant.name }}</p>
        <p class="medium-list__category">
          <span v-for="(category, index) in restaurant.category" :key="index">
            {{
              category.category_name +
              (index < restaurant.category.length - 1 ? ", " : "")
            }}
          </span>
        </p>

        <div class="medium-list__delivery">
          <div class="medium-list__delivery__info">
            <IconMoped class="medium-list__delivery__svg" />
            <p class="medium-list__delivery__text">
              {{ restaurant.cost + " ₸" || "Бесплатно" }}
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
// const { setFavourite, deleteFavourite } = useHttp();
const props = defineProps<{
  restaurant: IRestaurant;
}>();
// const favourite = useFavourite();
// const router = useRouter();
const isFavourite = ref(false);

// async function handleSetFavourite() {
//   await setFavourite({ item_id: props.restaurant.id, is_shop: false }).then(
//     (res) => {
//       if (!useCookie("access_token").value) {
//         router.push("/profile/login");
//       } else {
//         if (res.success) {
//           isFavourite.value = true;
//           favourite.value = res.favourite;
//           console.log(favourite.value);
//         }
//       }
//     }
//   );
// }

// async function handleDeleteFavourite() {
//   await deleteFavourite({
//     item_id: props.restaurant.id,
//     is_shop: false,
//   }).then((res) => {
//     if (res.success) {
//       isFavourite.value = false;
//       favourite.value = res.favourite;
//     }
//   });
// }

// onMounted(() => {
//   favourite.value.restaurant?.forEach((restaurant) => {
//     if (restaurant.id == props.restaurant.id) {
//       isFavourite.value = true;
//     }
//   });
// });
</script>
