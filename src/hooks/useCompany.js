import { useSnackbar } from "notistack";
import { useCallback } from "react";
import useRequest from "./useRequest";

const useCompany = () => {
  const { get } = useRequest();
  const { enqueueSnackbar } = useSnackbar();

  const loadCompanies = useCallback(
    async (movies) => {
      try {
        const { data } = await get("/movieCompanies");
        const movieWithCompanyName = movies.map(
          ({ filmCompanyId, ...rest }) => {
            const { name } = data.find(({ id }) => id === filmCompanyId);
            return {
              ...rest,
              companyName: name,
            };
          }
        );
        return movieWithCompanyName;
      } catch (error) {
        enqueueSnackbar(`API failed with error: ${error}`, {
          variant: "error",
        });
      }
    },
    [enqueueSnackbar, get]
  );

  return loadCompanies;
};

export default useCompany;
