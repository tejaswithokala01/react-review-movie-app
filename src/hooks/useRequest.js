import axios from "axios";

axios.defaults.baseURL =
  "https://comforting-starlight-f3456a.netlify.app/.netlify/functions";
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      try {
        const token = JSON.parse(accessToken);
        config.headers.Authorization = `Bearer ${token}`;
      } catch (e) {}
    }

    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => ({
    ...response,
    ok: true,
  }),
  (error) => {
    if (error.response.status >= 500) {
      return Promise.reject(
        new Error({
          ...error.response,
          ok: false,
        })
      );
    }

    return Promise.resolve({
      ...error.response,
      ok: false,
    });
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useRequest() {
  return { ...axios };
}

export default useRequest;
