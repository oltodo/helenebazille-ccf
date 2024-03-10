import { createContext, useContext } from "react";

type Context = {
  menuOpened: boolean;
  setMenuOpened: (value: boolean) => void;
};

const context = createContext<Context>({
  menuOpened: false,
  setMenuOpened: () => {},
});

export default context;

export function useAppContext() {
  return useContext(context);
}
