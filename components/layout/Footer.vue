<template>
	<footer class="footer">
		<NuxtLink
			to="/"
			:class="getActiveClass('/') || getActiveClass('news')"
		>
			<IconHome />
			<!-- {{ $t("main") }} -->
			Главная
		</NuxtLink>
		<NuxtLink
			to="/category"
			:class="getActiveClass('category')"
		>
			<IconCategory />
			<!-- {{ $t("categories") }} -->
			Категории
		</NuxtLink>
		<NuxtLink
			to="/cart"
			:class="getActiveClass('cart')"
		>
			<!-- <div class="footer-one__count" v-if="cart.cartitems?.length > 0">
        {{ cart.cartitems?.length }}
      </div> -->
			<IconCart />
			<!-- {{ $t("cart") }} -->
			Корзина
		</NuxtLink>
		<NuxtLink
			to="/profile"
			:class="getActiveClass('/profile')"
		>
			<IconPerson />
			<!-- {{ $t("profile") }} -->
			Профиль
		</NuxtLink>
	</footer>
</template>

<script setup lang="ts">
const route = useRoute();

function getActiveClass(path: string) {
	if (path === "/") {
		return route.fullPath === "/" ? "footer-one__active" : "footer-one";
	}
	return route.fullPath.includes(path) ? "footer-one__active" : "footer-one";
}
</script>
