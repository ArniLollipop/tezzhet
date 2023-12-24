<template>
  <div class="content-grid height-200vh">
    <header class="header">
      <header class="header-main">
        <IconLogo />
        <button @click="navigateTo('/about')">
          <IconBell />
        </button>
      </header>
    </header>
    <MainWarning v-if="weather?.is_weather" :icon="weather?.icon" />
    <MainBanner :banners="banners?.results || []" />
  </div>
</template>

<script lang="ts" setup>
import type { IBanner, Pagination, IWeather } from "@/types/IMain";

const runtimeConfig = useRuntimeConfig();

const { data: banners } = useLazyFetch<Pagination<IBanner> | null>(
  `${runtimeConfig.public.baseUrl}main_page/banners/`
);

const { data: weather } = useLazyFetch<IWeather | null>(
  `${runtimeConfig.public.baseUrl}main_page/weather_info/`
);
</script>

<style lang="scss" scoped></style>
