<template>
  <section class="medium">
    <h2>{{ $t("restaurants") }}</h2>
    <div class="medium-list" v-auto-animate>
      <RestaurantsMediumOne
        v-for="item in props.restaurants"
        :key="item.id"
        :restaurant="item"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{ restaurants: IRestaurant[] | [] }>();
</script>
