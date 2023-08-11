import { useCallback } from "react";
import useRequest from "./useRequest";

const useCompany = () => {
  const { get, response } = useRequest();

  const loadCompanies = useCallback(
    async (movies) => {
      const companies = await get("/movieCompanies");
      if (response.ok) {
        const movieWithCompanyName = movies.map(
          ({ filmCompanyId, ...rest }) => {
            const { name } = companies.find(({ id }) => id === filmCompanyId);
            return {
              ...rest,
              name,
            };
          }
        );

        return movieWithCompanyName;
      }
    },
    [get, response]
  );

  return loadCompanies;
};

export default useCompany;
