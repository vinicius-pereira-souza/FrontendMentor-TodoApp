import { ButtonNoteChecked } from "./ui/buttons";
import Form from "./ui/form";
import Header from "./ui/header";

import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center
     bg-light-gray-lightest dark:bg-dark-blue-darkest px-6 pt-12 pb-16 lg:pt-20 lg:pb-12 relative"
    >
      <div className="w-full h-[200px] lg:h-[300px] bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
      <main className="flex-1 max-w-[540px] relative">
        <Header />
        <Form />
        <div>
          <ul className="dark:bg-dark-blue-darker rounded-md my-4">
            <li className="flex items-center p-5">
              <ButtonNoteChecked />
              <p className="text-nowrap ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
              <button>
                <Image
                  src={"/images/icon-cross.svg"}
                  alt="icon delected"
                  width={18}
                  height={18}
                />
              </button>
            </li>
          </ul>
          <div className="dark:bg-dark-blue-darker rounded-md">
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
        <footer className="text-center mt-11 text-sm">
          <p>Drag and drop to reorder list</p>
        </footer>
      </main>
    </div>
  );
}
