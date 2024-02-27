function TodoList({
  filteredTodos,
  todos,
  onToggleCompleted,
  onDeleteTodo,
  activeItems,
  onClearCompleted,
}) {
  return (
    <div>
      <ul
        role="list"
        className="w-full rounded-md shadow-input dark:shadow-input-dark desktop:w-[540px] "
      >
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            className={` flex h-12  items-center justify-between border-b-[1px] border-b-LT-very-light-grayish bg-LT-very-light-gray  p-5 first-of-type:rounded-tl-md  first-of-type:rounded-tr-md dark:border-b-DT-dark-grayish-blue dark:bg-DT-very-dark-blue-desaturated desktop:p-6`}
          >
            <div className="flex items-center justify-start gap-2">
              <div
                onClick={() => onToggleCompleted(todo.id)}
                className={`flex aspect-square w-5 items-center justify-center
                        rounded-full hover:cursor-pointer ${todo.checked ? "border-none bg-gradient-to-tr from-gradient-1 to-gradient-2" : "border-[1px] border-LT-very-light-grayish bg-LT-very-light-gray hover:border-primary dark:border-DT-dark-grayish-blue dark:bg-DT-very-dark-blue-desaturated hover:dark:border-gradient-2 "}`}
              >
                {todo.checked && <img src="assets/images/icon-check.svg" />}
              </div>
              <p
                className={`${todo.checked ? "text-LT-light-grayish-blue line-through dark:text-DT-very-dark-grayish-blue-v2" : "text-LT-very-dark-grayish-blue no-underline dark:text-DT-light-grayish-blue "}`}
              >
                {todo.name}
              </p>
            </div>
            <img
              src="assets/images/icon-cross.svg"
              alt=""
              onClick={() => onDeleteTodo(todo.id)}
              className="aspect-square w-5 hover:cursor-pointer"
            />
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <div className="flex h-12 w-full items-center justify-between  rounded-bl-md  rounded-br-md  bg-LT-very-light-gray   p-5 shadow-input dark:bg-DT-very-dark-blue-desaturated dark:shadow-input-dark desktop:w-[540px] desktop:p-6 ">
          <p className=" text-sm font-700 tracking-[-0.19px] text-LT-light-grayish-blue dark:text-DT-very-dark-grayish-blue-v2 ">
            <span className="text-LT-very-dark-grayish-blue dark:text-LT-very-light-grayish">
              {activeItems}
            </span>{" "}
            Items left
          </p>
          <button
            onClick={onClearCompleted}
            className=" text-sm font-700 tracking-[-0.19px] text-LT-light-grayish-blue hover:cursor-pointer  hover:text-LT-very-dark-grayish-blue dark:text-DT-very-dark-grayish-blue-v2 hover:dark:text-LT-very-light-grayish"
          >
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
