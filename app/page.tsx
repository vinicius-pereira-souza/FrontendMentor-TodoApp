import Form from "./ui/form";
import Header from "./ui/header";
import TaskItem from "./ui/task-item";
import { ButtonsFilterTask } from "./ui/buttons";

export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center
     bg-light-gray-lightest dark:bg-dark-blue-darkest px-6 pt-12 pb-16 md:pt-20 md:pb-12 relative"
    >
      <div className="w-full h-[215px] md:h-[300px] bg-mobile-light dark:bg-mobile-dark md:bg-desktop-light dark:md:bg-desktop-dark bg-no-repeat bg-center bg-cover absolute top-0 left-0 transition-all " />
      <main className="flex-1 max-w-[540px] relative">
        <Header />
        <Form />
        <div
          className="bg-white dark:bg-dark-blue-darker rounded-md my-4 shadow-xl dark:shadow-md
         shadow-light-gray-light dark:shadow-gray-950 z-50"
        >
          <ul className="rounded-md md:rounded-none">
            <TaskItem
              key={1}
              text={"Complete online JavaScript"}
              status={true}
            />
          </ul>
          <div className="flex items-center justify-between gap-x-3 flex-nowrap text-xs md:text-sm py-5 px-6 text-dark-blue-dark">
            <p>
              <span>0</span> item left
            </p>
            <ButtonsFilterTask styles="hidden md:flex" />
            <button>Clear Completed</button>
          </div>
        </div>
        <ButtonsFilterTask
          styles="flex md:hidden text-sm py-5 px-6 text-dark-blue-dark bg-white mt-4 bg-white dark:bg-dark-blue-darker rounded-md shadow-xl dark:shadow-md
         shadow-light-gray-light dark:shadow-gray-950 gap-x-5"
        />
        <footer className="text-center mt-11 text-sm text-dark-blue-medium ">
          <p>Drag and drop to reorder list</p>
        </footer>
      </main>
    </div>
  );
}
