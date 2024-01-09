<template>
  <button
    class="button"
    :class="{
      'button-gray': isGray,
      'button-square': isSquare,
    }"
    :type="isSubmit ? 'submit' : 'button'"
    :disabled="isDisabled"
  >
    <div class="button-text">
      <slot />
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  isSubmit: Boolean,
  isDisabled: Boolean,
  isGray: Boolean,
  isSquare: Boolean,
});
</script>

<style scoped lang="scss">
</style>
