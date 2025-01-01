import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-white uppercase font-bold mb-8 lg:mb-8">
      <h1 className="text-[27px] lg:text-[40px] tracking-[10px] lg:tracking-[15px]">
        Todo
      </h1>
      <button className="transition-all">
        <Image
          src={"/images/icon-sun.svg"}
          alt="icon moon"
          height={26}
          width={26}
        />
      </button>
    </header>
  );
}
