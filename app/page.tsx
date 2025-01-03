import Form from "./ui/form";
import Header from "./ui/header";
import { fetchAllTasks } from "@/app/lib/data";
import TasksList from "./ui/tasks-list";

export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center
     bg-light-gray-lightest dark:bg-dark-blue-darkest px-6 pt-12 pb-16 lg:pt-20 lg:pb-12 relative"
    >
      <div className="w-full h-[215px] lg:h-[300px] bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark bg-no-repeat bg-center bg-cover absolute top-0 left-0 transition-all" />
      <main className="flex-1 max-w-[540px] relative">
        <Header />
        <Form />
        <div
          className="lg:bg-white dark:bg-dark-blue-darker rounded-md my-4 shadow-xl dark:shadow-lg
         shadow-light-gray-light dark:shadow-gray-950"
        >
          <TasksList taskPromise={fetchAllTasks()} />
          <div className="flex items-center justify-between gap-x-3 flex-nowrap text-xs lg:text-sm py-5 px-6 text-dark-blue-dark">
            <p>
              <span>0</span> item left
            </p>
            <div className="font-bold flex-1 flex items-center justify-center gap-x-4">
              <button className="text-blue-600">All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
            <button>Clear Completed</button>
          </div>
        </div>
        <footer className="text-center mt-11 text-sm text-dark-blue-medium">
          <p>Drag and drop to reorder list</p>
        </footer>
      </main>
    </div>
  );
}
