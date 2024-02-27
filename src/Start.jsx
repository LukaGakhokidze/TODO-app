import NewTaskInput from "./NewTaskInput";

function Start({
  darkMode,
  onSetTheme,
  onAddNewTodo,
  onSetNewTodoName,
  newTodoName,
}) {
  return (
    <div className="desktop:bg-desktop-light dark:desktop:bg-desktop-dark bg-mobile-light dark:bg-mobile-dark h-52 px-6 pt-12 desktop:flex desktop:h-64 desktop:flex-col desktop:items-center desktop:justify-start desktop:pt-16">
      <div className="flex items-center justify-between desktop:w-[540px] ">
        <p className="text-2xl font-700  tracking-[15px] text-LT-very-light-gray desktop:text-logo">
          TODO
        </p>
        <img
          onClick={onSetTheme}
          src={`assets/images/icon-${darkMode ? "sun" : "moon"}.svg`}
          alt=""
          className="aspect-square w-5 cursor-pointer desktop:w-7"
        />
      </div>
      <NewTaskInput
        onAddNewTodo={onAddNewTodo}
        onSetNewTodoName={onSetNewTodoName}
        newTodoName={newTodoName}
      />
    </div>
  );
}

export default Start;
