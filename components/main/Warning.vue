<template>
  <div class="main-warning">
    <IconInfo />
    <p class="main-warning__text">"PossibleDeliveryDelays"</p>
    <img :src="icon" alt="" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string | undefined;
}>();
</script>
