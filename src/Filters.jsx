function Filters({ selectedFilter, onSelectFilter }) {
  return (
    <div className="mt-10 flex h-12 w-full items-center  justify-center gap-4 rounded-md bg-LT-very-light-gray   shadow-input dark:bg-DT-very-dark-blue-desaturated dark:shadow-input-dark desktop:w-[540px]  ">
      <button
        value="All"
        onClick={() => onSelectFilter("All")}
        className={`${selectedFilter === "All" ? "text-gradient-1 dark:text-gradient-2" : "text-LT-light-grayish-blue hover:cursor-pointer hover:text-LT-very-dark-grayish-blue  dark:text-DT-very-dark-grayish-blue-v2 hover:dark:text-LT-very-light-grayish"} text-sm font-700 tracking-[-0.19px] `}
      >
        All
      </button>
      <button
        value="Active"
        onClick={() => onSelectFilter("Active")}
        className={`${selectedFilter === "Active" ? "text-gradient-1 dark:text-gradient-2" : "text-LT-light-grayish-blue hover:cursor-pointer hover:text-LT-very-dark-grayish-blue  dark:text-DT-very-dark-grayish-blue-v2 hover:dark:text-LT-very-light-grayish"} text-sm font-700 tracking-[-0.19px] `}
      >
        Active
      </button>
      <button
        value="Completed"
        onClick={() => onSelectFilter("Completed")}
        className={`${selectedFilter === "Completed" ? "text-gradient-1 dark:text-gradient-2" : "text-LT-light-grayish-blue hover:cursor-pointer hover:text-LT-very-dark-grayish-blue  dark:text-DT-very-dark-grayish-blue-v2 hover:dark:text-LT-very-light-grayish"} text-sm font-700 tracking-[-0.19px] `}
      >
        Completed
      </button>
    </div>
  );
}

export default Filters;
