import { useContext } from "react";
import { ContractsContext } from "../contexts/ContractsContext";

export const useToken = () => {
  const [token] = useContext(ContractsContext);

  if (token === undefined) {
    throw new Error(
      `It seems that you are trying to use ContractsProvider outside of its provider`
    );
  }

  return token;
};
