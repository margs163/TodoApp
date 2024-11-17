import { useState } from "react";
import TodoCEForm from "./TodoCreateEditForm";
import { Search } from "lucide-react";

export default function SearchAddBar({
  setSearchList,
  handleCreate,
  handleSortChange,
  stateTodo,
  editClicked,
  handleChange,

  taskTitle,
  taskDate,
  taskValue,
  setTaskDate,
  setTaskTitle,
  setTaskValue,
  parseDate,
  handleEditCancel
}) {
  const [createClicked, setCreateClicked] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  function searchStateTodo(todoArray) {
    const copyArray = todoArray.slice();
    const searchedArray = copyArray.filter((dict) => {
      if (dict.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        return dict;
      }
    });
    setSearchList(searchedArray);
  }

  function handleClick() {
    setCreateClicked(!createClicked);
  }

  function handleCancel(e) {
    e.preventDefault();
    setCreateClicked(!createClicked);
  }

  function handleCreateTodo(e) {
    setCreateClicked(!createClicked);
    e.preventDefault();
    const nextTask = {
      id: Math.random().toString(16).slice(2),
      title: taskTitle,
      date: parseDate(new Date(taskDate)),
      isCompleted: false,
      value: Number(taskValue),
    };

    if (!taskTitle) {
      alert("Can not create an empty task!");
      setCreateClicked(createClicked);
    } else {
      handleCreate([...stateTodo, nextTask]);
      setSearchList([...stateTodo, nextTask]);
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <button
          onClick={handleClick}
          className="shadow-md shadow-indigo-400/30 bg-indigo-500 hover:bg-indigo-600 text-gray-50 px-6 py-1 text-lg font-semibold rounded-md"
        >
          Add
        </button>
        <div className="flex gap-4 items-center">
          <div className="relative">
            <input
              className="p-[0.4rem] shadow-sm pl-10 rounded-md"
              placeholder="Search todos..."
              value={searchValue}
              type="search"
              name="todoSearch"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <Search
              className="hover:cursor-pointer top-2 absolute left-3"
              color="gray"
              size={20}
              onClick={() => {searchStateTodo(stateTodo)}}
            />
          </div>
          <select
            id="sortList"
            className="bg-gray-200 shadow-sm px-2 py-1 rounded-md hover:cursor-pointer text-gray-600 text-lg font-semibold"
            onChange={(e) => {
              handleSortChange(Number(e.target.value));
            }}
          >
            <option value={"1"} defaultValue={true}>
              All
            </option>
            <option value={"2"}>Date</option>
            <option value={"3"}>Completed</option>
            <option value={"4"}>Not completed</option>
          </select>
        </div>
      </div>
      {createClicked && (
        <TodoCEForm
          taskTitle={taskTitle}
          taskDate={taskDate}
          taskValue={taskValue}
          onChangeTitle={setTaskTitle}
          onChangeDate={setTaskDate}
          onChangeTaskValue={setTaskValue}
          handleCancel={handleCancel}
          handleAddCreate={handleCreateTodo}
        />
      )}
      {editClicked && (
        <TodoCEForm
          taskTitle={taskTitle}
          taskDate={taskDate}
          taskValue={taskValue}
          onChangeTitle={setTaskTitle}
          onChangeDate={setTaskDate}
          onChangeTaskValue={setTaskValue}
          handleCancel={handleEditCancel}
          handleAddCreate={handleChange}
        />
      )}
    </div>
  );
}
