import { useFetch } from "#app";

type useFetchType = typeof useFetch;

export const useHttp: useFetchType = (url: string, options) => {
  const runtimeConfig = useRuntimeConfig();

  return useFetch(`${runtimeConfig.public.baseUrl}${url}`, options);
};
