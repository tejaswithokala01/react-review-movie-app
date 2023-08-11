import { useFetch } from "use-http";
import { useLocalStorage } from "usehooks-ts";

function useRequest(overrideOptions) {
  const [accessToken] = useLocalStorage("accessToken", "");

  const fetch = useFetch(
    "https://comforting-starlight-f3456a.netlify.app/.netlify/functions",
    {
      cachePolicy: "no-cache",
      ...overrideOptions,
      interceptors: {
        request: async ({ options }) => {
          if (options?.headers) {
            options.headers.Authorization = `Bearer ${accessToken}`;
          }

          return options;
        },
      },
    },
    []
  );

  return { ...fetch };
}

export default useRequest;
