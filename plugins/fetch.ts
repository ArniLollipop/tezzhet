export default defineNuxtPlugin(() => {
	const runtimeConfig = useRuntimeConfig();
	const access = useCookie("access");
	const refresh = useCookie("refresh");

	const http = $fetch.create({
		baseURL: runtimeConfig.public.baseUrl,
		headers: {
			"Content-Type": "application/json",
			Authorization: access.value ? `Bearer ${access.value}` : "",
		},
		onResponseError: async (error) => {
			if (error.response?.status === 401) {
				const refresh = useCookie("refresh");
				try {
					const data = await http<{
						access: string;
						refresh: string;
					}>("auth/token/refresh/", {
						retry: 1,
						method: "post",
						body: {
							refresh: refresh.value,
						},
					});

					access.value = data.access;
					refresh.value = data.refresh;
				} catch (error) {
					access.value = null;
					refresh.value = null;
				}
			}
		},
	});

	return {
		provide: {
			http,
		},
	};
});
