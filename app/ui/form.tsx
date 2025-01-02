export default function Form() {
  return (
    <form action="">
      <div className="min-h-[50px] lg:min-h-[60px] rounded-md flex items-center gap-x-6 py-3 lg:py-[18px] px-5 bg-white dark:bg-dark-blue-darker transition-all">
        <label
          className="block w-[20px] lg:w-[23px] h-[20px] lg:h-[23px] rounded-full border border-dark-blue-medium"
          htmlFor="description"
        ></label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Create a new todo..."
          className="outline-none bg-transparent text-dark-blue-light text-sm lg:text-lg leading-none"
        />
      </div>
    </form>
  );
}
