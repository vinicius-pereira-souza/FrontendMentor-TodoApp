// import BgImage from "./ui/bg-image";

import Header from "./ui/header";

export default function Home() {
  return (
    <div
      className="min-h-screen flex justify-center
     bg-light-gray-lightest dark:bg-dark-blue-darkest px-6 pt-12 pb-16 lg:pt-20 lg:pb-12 relative"
    >
      <div className="w-full h-[200px] lg:h-[300px] bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
      <main className="flex-1 max-w-[540px] relative">
        <Header />
        <form action="">
          <div className="min-h-[60px] rounded-md flex items-center gap-x-6 py-[18px] px-5 bg-white dark:bg-dark-blue-darker">
            <label
              className="block w-[23px] h-[23px] rounded-full border border-dark-blue-medium"
              htmlFor="description"
            ></label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Create a new todo..."
              className="outline-none bg-transparent text-dark-blue-light text-lg leading-none"
            />
          </div>
        </form>
      </main>
    </div>
  );
}
