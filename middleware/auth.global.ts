export default defineNuxtRouteMiddleware(async (to, from) => {
	const userStore = useUserStore();

	if (to.path.includes("/profile") && !userStore.user.access && to.path !== "/profile/login" && to.path !== "/profile/register") {
		return navigateTo("/profile/login", { redirectCode: 301 });
	}
});
