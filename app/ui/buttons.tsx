"use client";

import { useTheme } from "../lib/context";
import Image from "next/image";

export function ButtonWitchTheme() {
  const { theme, changeToggleThemeValue } = useTheme();

  return (
    <>
      <button onClick={() => changeToggleThemeValue()}>
        {theme === "light" ? (
          <Image
            src={"/images/icon-moon.svg"}
            alt="icon moon"
            height={26}
            width={26}
            className="transition-all"
          />
        ) : (
          <Image
            src={"/images/icon-sun.svg"}
            alt="icon moon"
            height={26}
            width={26}
            className="transition-all"
          />
        )}
      </button>
    </>
  );
}

export function ButtonTaskItemUnchecked() {
  return (
    <>
      <button className="block w-[25px] h-[25px] rounded-full dark:bg-dark-blue-darker border border-dark-blue-medium mr-[25px]"></button>
    </>
  );
}

export function ButtonTaskItemChecked() {
  return (
    <>
      <button className="w-5 md:w-[25px] h-5 md:h-[25px] flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
        <Image
          src={"/images/icon-check.svg"}
          alt="icon check"
          width={11}
          height={9}
        />
      </button>
    </>
  );
}

export function ButtonTaskItemDelect() {
  return (
    <>
      <button className="w-3">
        <Image
          src={"/images/icon-cross.svg"}
          alt="icon delected"
          width={18}
          height={18}
        />
      </button>
    </>
  );
}

export function ButtonsFilterTask({ styles }: { styles?: string }) {
  return (
    <div
      className={`font-bold flex-1 flex items-center justify-center gap-x-4 ${styles}`}
    >
      <button className="text-blue-600">All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
