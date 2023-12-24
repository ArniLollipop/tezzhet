export const useUserStore = defineStore("user", () => {
  const user = ref({ name: "John Doe" });

  function setUserName(name: string) {
    user.value.name = name;
  }

  return {
    user,
    setUserName,
  };
});
