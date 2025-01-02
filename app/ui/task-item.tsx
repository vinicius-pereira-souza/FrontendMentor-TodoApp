import clsx from "clsx";
import {
  ButtonTaskItemChecked,
  ButtonTaskItemUnchecked,
  ButtonTaskItemDelect,
} from "./buttons";

export default function TaskItem({
  text,
  status,
}: {
  text: string;
  status: boolean;
}) {
  return (
    <>
      <li className="flex items-center gap-x-[25px] p-4 lg:p-5 border-b border-b-light-gray-light dark:border-b-dark-blue-darkest2">
        {status ? <ButtonTaskItemChecked /> : <ButtonTaskItemUnchecked />}
        <p
          className={clsx(
            `flex-1 text-nowrap text-sm lg:text-lg overflow-x-hidden font-normal text-ellipsis select-none leading-none `,
            { incompleteNote: !status, noteMarkedComplement: status },
          )}
        >
          {text}
        </p>
        <ButtonTaskItemDelect />
      </li>
    </>
  );
}
