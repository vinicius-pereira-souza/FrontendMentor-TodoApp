// import BgImage from "./ui/bg-image";

import Header from "./ui/header";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center
     bg-light-gray-lightest dark:bg-dark-blue-darkest px-6 pt-12 pb-16 lg:pt-20 lg:pb-12 relative"
    >
      <div className="w-full h-[200px] lg:h-[300px] bg-mobile-light dark:bg-mobile-dark lg:bg-desktop-light dark:lg:bg-desktop-dark bg-no-repeat bg-center bg-cover absolute top-0 left-0" />
      <main className="flex-1 max-w-[540px] relative">
        <Header />
      </main>
    </div>
  );
}
