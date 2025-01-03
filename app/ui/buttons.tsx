"use client";

import { useTheme } from "../lib/context";
import Image from "next/image";
import { deleteTaskByIds, updateTaskCompletionStatus } from "@/app/lib/data";
import { clsx } from "clsx";

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

export function ButtonTaskItemWitchChecked({
  id,
  status,
}: {
  id: string;
  status: boolean;
}) {
  return (
    <>

      <button
        onClick={async () => await updateTaskCompletionStatus({ id, status })}
        className={clsx({
          buttontTaskCompleted: status === true,
          buttontTaskIncomplete: status === false,
        })}
      >
        {status == true ? (
          <Image
            src={"/images/icon-check.svg"}
            alt="icon check"
            width={11}
            height={9}
          />
        ) : (
          ""
        )}
    </>
  );
}


export function ButtonTaskItemDelect({ id }: { id: string }) {
  return (
    <>
      <button
        className="w-3"
        onClick={() => {
          deleteTaskByIds([id]);
        }}
      >
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
