import clsx from "clsx";
import {
  ButtonNoteChecked,
  ButtonNoteUnchecked,
  ButtonNoteDelect,
} from "./buttons";

export default function Note({
  text,
  status,
}: {
  text: string;
  status: boolean;
}) {
  return (
    <>
      <li className="flex items-center gap-x-[25px] p-5 border-b border-b-light-gray-light dark:border-b-dark-blue-darkest2">
        {status ? <ButtonNoteChecked /> : <ButtonNoteUnchecked />}
        <p
          className={clsx(
            `flex-1 text-nowrap text-lg overflow-x-hidden font-normal text-ellipsis select-none leading-none `,
            { incompleteNote: !status, noteMarkedComplement: status },
          )}
        >
          {text}
        </p>
        <ButtonNoteDelect />
      </li>
    </>
  );
}
