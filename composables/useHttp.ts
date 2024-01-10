import { useFetch } from "#app";

type useFetchType = typeof useFetch;
// type useNuxtDataType = typeof useNuxtData;

// type useHttpType = (
//   url: string,
//   options?: any
// ) => ReturnType<useFetchType> | ReturnType<useNuxtDataType>;

// export const useHttp: useHttpType = (url: string, options) => {
//   const runtimeConfig = useRuntimeConfig();
//   const { data: someData } = useNuxtData(options?.key || "");

//   if (someData.value) {
//     return useNuxtData(options?.key || "");
//   }

//   return useFetch(`${runtimeConfig.public.baseUrl}${url}`, options);
// };

export const useHttp: useFetchType = (url: string, options) => {
	const runtimeConfig = useRuntimeConfig();

	return useFetch(`${runtimeConfig.public.baseUrl}${url}`, options);
};
