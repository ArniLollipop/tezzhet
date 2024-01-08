<template>
  <div class="main-warning">
    <IconInfo />
    <p class="main-warning__text">{{ $t("PossibleDeliveryDelays") }}</p>
    <NuxtImg loading="lazy" :src="props?.icon" alt="" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string | undefined;
}>();
</script>
