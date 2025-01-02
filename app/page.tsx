import Form from "./ui/form";
import Header from "./ui/header";
import Note from "./ui/note";

export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center
     bg-light-gray-lightest dark:bg-dark-blue-darkest px-6 pt-12 pb-16 lg:pt-20 lg:pb-12 relative"
    >
      <div className="w-full h-[200px] lg:h-[300px] bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark bg-no-repeat bg-center bg-cover absolute top-0 left-0 transition-all" />
      <main className="flex-1 max-w-[540px] relative">
        <Header />
        <Form />
        <div className="lg:bg-white dark:bg-dark-blue-darker rounded-md my-4">
          <ul>
            <Note key={1} text={"Complete online JavaScript"} status={true} />
          </ul>
          <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
          </div>
        </div>
        <footer className="text-center mt-11 text-sm text-dark-blue-medium">
          <p>Drag and drop to reorder list</p>
        </footer>
      </main>
    </div>
  );
}
