<!-- @format -->

<template>
  <swiper
    :modules="[SwiperPagination]"
    :pagination="{
      clickable: true,
      dynamicBullets: false,
    }"
    class="main-slider"
    :loop="true"
  >
    <swiper-slide v-for="banner in banners" :key="banner.id">
      <div class="main-banner">
        <img :src="banner.image" alt="" class="main-banner__img" />
        <p class="main-banner__p">
          {{ banner.title.split(" ")[0] }}
          <span class="main-banner__span">{{
            banner.title.slice(banner.title.indexOf(" ") + 1)
          }}</span>
        </p>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import type { IBanner } from "@/types/IMain";
import "swiper/css/pagination";
import "swiper/css";

const props = defineProps<{ banners: IBanner[] | [] }>();
</script>
