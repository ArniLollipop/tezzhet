<template>
  <Swiper
    :modules="[SwiperPagination]"
    :pagination="{
      clickable: true,
      dynamicBullets: false,
    }"
    class="main-slider"
    :loop="true"
  >
    <SwiperSlide v-for="banner in banners" :key="banner.id">
      <div class="main-banner">
        <NuxtImg :src="banner.image" alt="" class="main-banner__img" />
        <p class="main-banner__p">
          {{ banner.title.split(" ")[0] }}
          <span class="main-banner__span">{{
            banner.title.slice(banner.title.indexOf(" ") + 1)
          }}</span>
        </p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import "swiper/css/pagination";
import "swiper/css";

const props = defineProps<{ banners: IBanner[] | [] }>();
</script>
