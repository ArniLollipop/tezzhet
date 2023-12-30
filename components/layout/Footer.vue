<template>
  <footer class="footer">
    <nuxt-link to="/" :class="getActiveClass('/') || getActiveClass('news')">
      <IconHome />
      <!-- {{ $t("main") }} -->
      Главная
    </nuxt-link>
    <nuxt-link to="/category" :class="getActiveClass('category')">
      <IconCategory />
      <!-- {{ $t("categories") }} -->
      Категории
    </nuxt-link>
    <nuxt-link to="/cart" :class="getActiveClass('cart')">
      <!-- <div class="footer-one__count" v-if="cart.cartitems?.length > 0">
        {{ cart.cartitems?.length }}
      </div> -->
      <IconCart />
      <!-- {{ $t("cart") }} -->
      Корзина
    </nuxt-link>
    <nuxt-link to="/profile" :class="getActiveClass('/profile')">
      <IconPerson />
      <!-- {{ $t("profile") }} -->
      Профиль
    </nuxt-link>
  </footer>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

function getActiveClass(path: string) {
  if (path === "/") {
    return route.fullPath === "/" ? "footer-one__active" : "footer-one";
  }
  return route.fullPath.includes(path) ? "footer-one__active" : "footer-one";
}
</script>
