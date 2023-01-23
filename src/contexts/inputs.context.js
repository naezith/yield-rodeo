import { createContext } from "react";

export const emptyInputs = {
  capital: 100000,
  amountBefore: 100000,
  amountAfter: 125000,
};

export const defaultInputs = {
  ...emptyInputs,
};

const InputsContext = createContext(defaultInputs);

export default InputsContext;
