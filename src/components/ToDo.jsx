import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import FloatingSideBar from "./FloatingSideBar.jsx";

const ToDo = () => {
  const [todo, setTodo] = useState({
    task: "",
    id: "",
    isCompleted: false,
  });
  
  
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  function handleChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }

  // Save todos to localStorage whenever the 'todos' state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // Dependency array: this effect runs whenever 'todos' changes

  const addTask = () => {
    if (todo.id) {
      const updatedTodo = todos.map((element) => {
        if (element.id === todo.id) {
          return { ...element, task: todo.task };
        } else {
          return element;
        }
      });
      setTodos(updatedTodo);
      // saveToLocalStorage();
    } else {
      setTodos((prev) => [...prev, { ...todo, id: uuidv4() }]);
      // saveToLocalStorage();
    }

    setTodo({
      task: "",
      id: "",
      isCompleted: false,
    });
  };

  const checkTask = (e) => {
    const id = e.target.id;
    const updatedTodos = todos.map((element) => {
      if (element.id === id) {
        console.log(element.isCompleted);

        return { ...element, isCompleted: !element.isCompleted };
      } else {
        return element;
      }
    });

    setTodos(updatedTodos);

    // saveToLocalStorage();
  };

  const deleteTask = (deleteId) => {
    const updatedTodos = todos.filter((element) => element.id !== deleteId);
    setTodos(updatedTodos);

    // saveToLocalStorage();
  };

  const editTask = (updateId) => {
    const todoIdx = todos.findIndex((item) => item.id === updateId);
    setTodo({
      task: todos[todoIdx].task,
      id: updateId,
      isCompleted: todos[todoIdx].isCompleted,
    });

    // saveToLocalStorage();
  };

  const [isOpen, setIsOpen] = useState(false);
  const displaySidebar = () => {
    setIsOpen((prev) => !prev);
  };


  console.log(todos);

  return (
    <>
      <FloatingSideBar isVisible={isOpen} toggleDisplay={displaySidebar} />
      <div className={`w-full md:w-3/4 flex flex-col `}>
        <div className="sticky top-0">
          <div className="px-3 md:px-5 py-2 md:py-8 bg-gradient-to-t flex items-center justify-between from-lime-700 to-lime-500 text-white">
            <div className="">
              <h1 className="text-xl md:text-3xl font-semibold py-1">My Day</h1>
              <h3 className="text-md md:text-lg font-semibold py-1">Today</h3>
            </div>
            <div className=" md:hidden text-4xl" onClick={displaySidebar}>
              <IoMenu />
            </div>
          </div>
        </div>

        <div
          id="TODO"
          className={`bg-gray-200 min-h-screen ${
            isOpen ? "overflow-hidden" : "min-h-screen"
          } `}
        >
          <div className="px-3 md:px-5 py-10">
            {/* Add todo or task in this input box */}

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Add Task......"
                value={todo.task}
                onChange={handleChange}
                className="rounded-md px-6 py-2 border w-full"
              />
              <button
                className="py-2 rounded-md px-4 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-800 font-semibold text-white"
                onClick={addTask}
              >
                save
              </button>
            </div>

            <div className="mt-14">
              {todos.map((todoObj) => {
                return (
                  <div
                    key={todoObj.id}
                    className="w-full flex items-center justify-between rounded-md shadow-lg shadow-gray-700 mt-5 px-6    py-3        border border-gray-200 bg-gray-300 gap-2.5"
                  >
                    <div id="front" className="flex items-center gap-2.5 w-3/4">
                      <input
                        type="checkbox"
                        checked={todoObj.isCompleted}
                        id={todoObj.id}
                        onChange={checkTask}
                      />
                      <div
                        className=" p-1 break-all"
                        style={{
                          textDecoration: todoObj.isCompleted
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todoObj.task}
                      </div>
                    </div>
                    <div id="back" className="flex items-center gap-2.5">
                      <button
                        className="px-3 md:px-6 py-2 md:py-3 rounded-md text-white shadow-md bg-green-800 hover:bg-black"
                        onClick={() => editTask(todoObj.id)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="px-3 md:px-6 py-2 md:py-3 rounded-md text-white shadow-md bg-red-700 hover:bg-black "
                        onClick={() => deleteTask(todoObj.id)}
                      >
                        <RiDeleteBin6Fill />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDo;
