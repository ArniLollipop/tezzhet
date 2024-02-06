<template>
	<form
		class="login-create"
		@submit.prevent="handleSubmit"
	>
		<label
			for="name"
			class="login-input"
		>
			<IconPhone />
			<input
				type="text"
				name="login"
				id="name"
				placeholder="+7 (777) 777 77 77"
				v-mask="'+7 (###)-###-##-##'"
				v-model="username"
			/>
		</label>

		<label
			for="name"
			class="login-input"
		>
			<IconLock />
			<input
				type="password"
				name="login"
				id="password"
				placeholder="Пароль"
				v-model="password"
			/>
		</label>

		<div
			@click="$emit('tab')"
			class="login-forget__btn"
		>
			Забыли пароль?
		</div>
		<div
			v-if="isLoading"
			class="login-btn"
		>
			<UILoader />
		</div>
		<button
			type="submit"
			v-else
			class="login-btn"
		>
			Войти
		</button>
	</form>
</template>

<script setup lang="ts">
const { $http } = useNuxtApp();

const access = useCookie("access");
const refresh = useCookie("refresh");

const userStore = useUserStore();

const isLoading = ref(false);
const username = ref("");
const password = ref("");

async function handleSubmit() {
	isLoading.value = true;
	try {
		const data = await $http<IUser>("auth/token/", {
			method: "post",
			body: { username: username.value, password: password.value },
		});
		access.value = data.access;
		refresh.value = data.refresh;
		userStore.setUser(data);
		await navigateTo("/");
	} catch (e: any) {
		console.log(e?.data, "login");
	} finally {
		isLoading.value = false;
	}
}
</script>
