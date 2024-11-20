export default function TodoCEForm({
  taskTitle,
  onChangeTitle,
  taskDate,
  onChangeDate,
  taskValue,
  onChangeTaskValue,
  handleCancel,
  handleAddCreate
}) {
  return (
    <div
      className={"absolute top-0 left-0 flex items-center justify-center w-screen h-screen z-20 backdrop-brightness-50 backdrop-blur-sm transition ease-in-out"
      }
    >
      <div
        className={" shadow-lg shadow-slate-400 box-content flex w-1/3 h-2/5 p-7 rounded-xl bg-slate-200"}
      >
        <form className=" box-border px-2 py-1 flex items-center justify-start flex-col gap-2 rounded-lg bg-white w-full">
          <h2 className="mt-4 mb-6 text-3xl text-gray-600 font-semibold">
            Create New Task
          </h2>
          <div className="w-full flex justify-between items-center px-4">
            <label
              htmlFor="todoTitle"
              className="text-gray-600 text-2xl font-semibold"
            >
              Task title:{" "}
            </label>
            <input
              className="w-1/2 focus:outline-none focus:border-indigo-700 py-1 px-2 border-[3px] border-indigo-400 rounded-md"
              id="todoTitle"
              type="text"
              value={taskTitle}
              onChange={(e) => {onChangeTitle(e.target.value)}}
              placeholder="Enter task title..."
              name="todoTitle"
              required
            />
          </div>
          <div className="w-full flex justify-between items-center px-4">
            <label
              className="text-gray-600 text-2xl font-semibold"
              htmlFor="todoDate"
            >
              Deadline:{" "}
            </label>
            <input
              className=" w-1/2 focus:outline-none focus:border-indigo-700 p-1 border-[3px] border-indigo-400 rounded-md"
              id="todoDate"
              type="datetime-local"
              value={taskDate}
              onChange={(e) => {onChangeDate(e.target.value)}}
              name="todoDate"
              required
            />
          </div>
          <div className="w-full flex justify-between items-center px-4">
            <label
              className="text-gray-600 text-2xl font-semibold"
              htmlFor="todoValue"
            >
              Value:
            </label>
            <input
              className="w-1/5 focus:outline-none focus:border-indigo-700 px-2 py-1 border-[3px] border-indigo-400 rounded-md"
              id="todoValue"
              type="number"
              name="todoImportance"
              value={taskValue}
              onChange={(e) => {onChangeTaskValue(e.target.value)}}
              min={1}
              max={3}
              required
            />
          </div>
          <div className="flex gap-4 mt-2">
            <button
              className="px-7 py-2 hover:bg-indigo-600 bg-indigo-500 text-white text-lg font-semibold rounded-md"
              type="submit"
              name="submitButton"
              onClick={handleAddCreate}
            >
              Create
            </button>
            <button
              className="px-7 py-2 hover:bg-red-600 bg-red-500/90 text-white text-lg font-semibold rounded-md"
              name="submitButton"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
