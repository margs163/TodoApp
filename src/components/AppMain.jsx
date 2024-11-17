import { useState } from "react";
import SearchAddBar from "./SearchAddBar";
import TodoContain from "./TodoContainer";

export default function AppMain() {
  function parseDate(date) {
    return `${date.getHours()}:0${date.getMinutes()}, ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  }

  const todoList = JSON.parse(localStorage.getItem("history"));

  const [stateTodoList, setStateTodoList] = useState(todoList);
  const [sortType, setSortType] = useState(1);
  const [searchList, setSearchList] = useState(stateTodoList);
  const [editClicked, setEditClicked] = useState(false);

  const [editId, setEditID] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());
  const [taskValue, setTaskValue] = useState(1);

  localStorage.setItem("history", JSON.stringify(stateTodoList));

  function handleCompletion(id, isCompleted) {
    const nextTodoList = stateTodoList.slice();
    nextTodoList.forEach((element) => {
      if (element.id == id) {
        element.isCompleted = isCompleted;
      }
    });
    setStateTodoList(nextTodoList);
    setSearchList(nextTodoList);
  }

  function handleDeletion(index) {
    const nextTodoList = stateTodoList.slice();
    const newList = nextTodoList.filter((element, id) => {
      if (id !== index) {
        return element;
      }
    });
    setStateTodoList(newList);
    setSearchList(newList);
  }

  function handleChange(e) {
    setEditClicked(!editClicked);
    e.preventDefault();

    if (!taskTitle) {
      alert("Can not create an empty task!");
      setEditClicked(editClicked);
    } else {
      const listCopy = stateTodoList.slice();
      const editedList = listCopy.map((task) => {
        if (task.id === editId) {      
          const nextTask = {
            id: task.id,
            title: taskTitle,
            date: parseDate(new Date(taskDate)),
            isCompleted: false,
            value: Number(taskValue),
          };
          return nextTask;
        }
        return task;
      });
      setStateTodoList(editedList);
      setSearchList(editedList);
    }
  }

  function handleEditCancel() {
    setEditClicked(!editClicked);
  }

  function setEdit(id) {
    setEditID(id);
    setEditClicked(!editClicked);
  }

  return (
    <div className=" w-full flex flex-col gap-4 justify-start">
      <SearchAddBar
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
        taskValue={taskValue}
        setTaskValue={setTaskValue}
        editClicked={editClicked}
        setSearchList={setSearchList}
        handleCreate={setStateTodoList}
        handleChange={handleChange}
        handleSortChange={setSortType}
        handleEditCancel={handleEditCancel}
        stateTodo={stateTodoList}
        parseDate={parseDate}
      />
      <TodoContain
        setEditClicked={setEdit}
        todoSort={sortType}
        todoArray={searchList}
        handleCompletion={handleCompletion}
        handleDeletion={handleDeletion}
      />
    </div>
  );
}
