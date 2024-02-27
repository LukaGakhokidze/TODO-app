function NewTaskInput({ onAddNewTodo, onSetNewTodoName, newTodoName }) {
  function onSubmit(e) {
    e.preventDefault();
    onAddNewTodo();
  }
  return (
    <form
      className="mt-10 flex h-12 w-full items-center justify-start gap-2 rounded-md bg-LT-very-light-gray p-5 shadow-input dark:bg-DT-very-dark-blue-desaturated dark:shadow-input-dark desktop:w-[540px]  desktop:p-6"
      onSubmit={onSubmit}
    >
      <div
        className="aspect-square w-5 rounded-full border-[1px]
      border-LT-very-light-grayish bg-LT-very-light-gray
      dark:border-DT-dark-grayish-blue dark:bg-DT-very-dark-blue-desaturated
      "
      ></div>
      <input
        value={newTodoName}
        onChange={(e) => onSetNewTodoName(e)}
        type="text"
        placeholder="Create a new todo..."
        className="text-DT-very-dark-grayish-blue-v2 caret-primary outline-none placeholder:text-LT-light-grayish-blue dark:bg-DT-very-dark-blue-desaturated dark:text-DT-light-grayish-blue dark:placeholder:text-DT-dark-grayish-blue"
      />
    </form>
  );
}

export default NewTaskInput;
