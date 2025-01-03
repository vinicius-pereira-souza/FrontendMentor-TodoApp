import clsx from "clsx";
import { ButtonTaskItemWitchChecked, ButtonTaskItemDelect } from "./buttons";

export default function TaskItem({
  id,
  text,
  status,
}: {
  id: string;
  text: string;
  status: boolean;
}) {
  return (
    <>
      <li className="flex items-center p-4 lg:p-5 border-b border-b-light-gray-light dark:border-b-dark-blue-darkest2">
        <ButtonTaskItemWitchChecked id={id} status={status} />
        <p
          className={clsx(
            `flex-1 text-nowrap text-sm lg:text-lg overflow-x-hidden font-normal text-ellipsis select-none leading-none mr-[25px]`,
            { incompleteNote: !status, noteMarkedComplement: status },
          )}
        >
          {text}
        </p>
        <ButtonTaskItemDelect id={id} />
      </li>
    </>
  );
}
