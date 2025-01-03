import { ButtonWitchTheme } from "./buttons";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-white uppercase font-bold mb-8 md:mb-8">
      <h1 className="text-[27px] md:text-[40px] tracking-[10px] md:tracking-[15px]">
        Todo
      </h1>
      <ButtonWitchTheme />
    </header>
  );
}
