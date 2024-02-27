import { useEffect, useState } from "react";
import Start from "./Start";
import TodoList from "./TodoList";
import MainSection from "./MainSection";
import Filters from "./Filters";

function TODO() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    return storedTodos || []; // If there are stored todos, use them, otherwise initialize with an empty array
  });

  const [newTodoName, setNewTodoName] = useState("");

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  //THEME HANDLER

  const savedTheme = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(savedTheme === "dark");
  const newTheme = darkMode ? "dark" : "light"; // Determine the new theme based on darkMode

  const toggleDarkMode = () => {
    const nextTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", nextTheme); // Save the theme preference to localStorage
  };

  useEffect(() => {
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, [savedTheme]);

  // hooks to provide serverless server experience, our program will start every new session with stored todo list, stored in local storage

  useEffect(() => {
    // Save todos to local storage whenever todos state changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    // Load todos from local storage whenever component mounts or updates
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  //function to add new todo in the wanted format, and clearing the value of todo afterwards

  function handleAddNewTodo() {
    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      checked: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoName("");

    const updatedFilteredTodos = [...filteredTodos, newTodo];
    setFilteredTodos(updatedFilteredTodos);
  }

  // handling the value change of the input field

  function handleSetNewTodoName(e) {
    const value = e.target.value;
    setNewTodoName(value);
  }

  //handling the checking and unchecking the todos on click

  //   function handleToggleTodo(id) {
  //     const updatedTodos = todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     );
  //     setTodos(updatedTodos);
  //   }

  //   //handling the deletion

  //   function handleDeleteTodo(id) {
  //     const updatedTodos = todos.filter((todo) => todo.id !== id);
  //     setTodos(updatedTodos);
  //   }

  //   function handleToggleTodo(id) {
  //     const updatedTodos = todos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     );
  //     setTodos(updatedTodos);

  //     const updatedFilteredTodos = filteredTodos.map((todo) =>
  //       todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //     );
  //     setFilteredTodos(updatedFilteredTodos);
  //   }

  //

  //this v2 will update both filtered and original array, and will have immediate
  // impact when the item's check property is changed

  function handleToggleTodo(id) {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    );
    setTodos(updatedTodos);

    const updatedFilteredTodos = updatedTodos.filter((todo) => {
      if (selectedFilter === "Active" && todo.checked) {
        return false;
      }
      if (selectedFilter === "Completed" && !todo.checked) {
        return false;
      }
      return true;
    });
    setFilteredTodos(updatedFilteredTodos);
  }

  // This version will keep the filtered and unfiltered version  in sync

  function handleDeleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    const updatedFilteredTodos = filteredTodos.filter((todo) => todo.id !== id);
    setFilteredTodos(updatedFilteredTodos);
  }

  //calculates how many unchecked items are there, based on the filtered array length

  const activeItems = todos.filter((todo) => !todo.checked).length;

  //function filters the array based on value of checked property of the todo, then sets the todos array to filtered array, thus clearing completed tasks

  function handleClearCompleted() {
    const updatedTodos = todos.filter((todo) => !todo.checked);
    setTodos(updatedTodos);

    const updatedFilteredTodos = filteredTodos.filter((todo) => !todo.checked);
    setFilteredTodos(updatedFilteredTodos);
  }

  function handleFilters(value) {
    setSelectedFilter(value);

    if (value === "All") {
      setFilteredTodos([...todos]);
    } else if (value === "Active") {
      const active = todos.filter((todo) => !todo.checked);
      setFilteredTodos([...active]);
    } else if (value === "Completed") {
      const completed = todos.filter((todo) => todo.checked);
      setFilteredTodos([...completed]);
    }
  }

  return (
    // wraps the whole app, with div of theme

    <div className={newTheme}>
      <div className="h-screen w-screen bg-LT-very-light-gray dark:bg-DT-very-dark-blue">
        <Start
          onSetTheme={toggleDarkMode}
          darkMode={darkMode}
          onAddNewTodo={handleAddNewTodo}
          onSetNewTodoName={handleSetNewTodoName}
          newTodoName={newTodoName}
        />
        <MainSection>
          <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            onToggleCompleted={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
            activeItems={activeItems}
            onClearCompleted={handleClearCompleted}
          />
          {todos.length > 0 && (
            <Filters
              filteredTodos={filteredTodos}
              onSelectFilter={handleFilters}
              selectedFilter={selectedFilter}
            />
          )}
        </MainSection>
      </div>
    </div>
  );
}

export default TODO;
