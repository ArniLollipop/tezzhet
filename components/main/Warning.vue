<template>
  <div class="main-warning">
    <IconInfo />
    <p class="main-warning__text">{{ $t("PossibleDeliveryDelays") }}</p>
    <NuxtImg
      loading="lazy"
      :src="'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png'"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string | undefined;
}>();
</script>
