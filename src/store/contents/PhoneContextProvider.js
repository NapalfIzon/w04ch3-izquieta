import { useReducer } from "react";
import PhoneContext from "./PhoneContext";

const PhoneContextProvider = ({ children }) => {
  const [keys, dispatch] = useReducer();
  return <PhoneContext.Provider>{children}</PhoneContext.Provider>;
};

export default PhoneContextProvider;
