export const useUserStore = defineStore("user", () => {
	const user = ref({} as IUser);

	async function setUser(newUser: IUser) {
		user.value = newUser;
	}

	return {
		user,
		setUser,
	};
});
