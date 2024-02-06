<template>
	<div>
		<header class="header py-15 px-10">
			<h2 class="text-center">{{ $t("profile") }}</h2>
		</header>
		<section class="container">
			<div
				class="login"
				v-auto-animate
			>
				<div class="login-top">
					<div class="login-top__input">
						<input
							type="radio"
							name="login"
							id="login1"
							style="display: none"
							:checked="route.path === '/profile/register'"
						/>
						<label
							@click="handleRoute('/profile/register')"
							for="login1"
						>
							Создать аккаунт
						</label>
					</div>
					<div class="login-top__border"></div>
					<div class="login-top__input">
						<input
							type="radio"
							name="login"
							id="login2"
							:checked="route.path === '/profile/login'"
							style="display: none"
						/>
						<label
							@click="handleRoute('/profile/login')"
							for="login2"
						>
							Войти
						</label>
					</div>
				</div>
				<slot />
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();

async function handleRoute(path: string) {
	await navigateTo(path);
}
</script>

<style></style>
