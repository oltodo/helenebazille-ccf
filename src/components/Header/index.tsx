import LogoImage from "@/assets/images/logo.svg";
import { Burger } from "@/components/Burger";
import { Button } from "@/components/Button";
import { useState } from "react";
import clsx from "clsx/lite";

import { ReponsiveText } from "../ResponsiveText";
import { Menu } from "./components/Menu";
import { useAppContext } from "@/libs/appContext";

type Props = {
  onClickBook: () => void;
  mode: "light" | "dark";
};

export function Header({ onClickBook, mode }: Props) {
  const { menuOpened, setMenuOpened } = useAppContext();

  return (
    <>
      <Menu open={menuOpened}>
        <Burger
          onClick={() => {
            setMenuOpened(false);
          }}
          yummy={menuOpened}
          mode="dark"
        />
      </Menu>
      <header className="fixed inset-x-0 top-0 z-[888] flex h-20 items-center gap-4 px-4 md:h-32 md:gap-8 md:px-8">
        <LogoImage
          className={clsx(
            "size-10 md:size-16",
            mode === "light" ? "text-sand" : "text-gunmetal",
          )}
        />

        <Button
          className={"ml-auto"}
          color={mode === "light" ? "sand" : "terracotta"}
          onClick={onClickBook}
        >
          <ReponsiveText alt="Prendre RDV">Prendre Rendez-vous</ReponsiveText>
        </Button>

        <Burger
          onClick={() => {
            setMenuOpened(true);
          }}
          yummy={menuOpened}
          mode={mode}
        />
      </header>
    </>
  );
}
