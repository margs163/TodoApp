import TodoRow from "./TodoRow";

function tasksSort(tasksArray, mode = 1) {
  let arraySlice = tasksArray.slice();
  let swapped = false;

  switch (mode) {
    case 1:
      break;

    case 2:
      do {
        swapped = false;
        for (let i = 0; i < arraySlice.length - 1; i++) {
          if (arraySlice[i].date > arraySlice[i + 1].date) {
            [arraySlice[i], arraySlice[i + 1]] = [
              arraySlice[i + 1],
              arraySlice[i],
            ];
            swapped = true;
          }
        }
      } while (swapped);
      break;

    case 3:
      arraySlice = arraySlice.filter((task) => {
        if (task.isCompleted) {
          return task;
        }
      });
      break;

    case 4:
      arraySlice = arraySlice.filter((task) => {
        if (!task.isCompleted) {
          return task;
        }
      });
      break;
  }

  return arraySlice;
}

export default function TodoContain({
  todoSort,
  todoArray,
  handleCompletion,
  handleDeletion,
  setEditClicked,
}) {
  const sortedTasks = tasksSort(todoArray, todoSort);
  const rows = sortedTasks.map((todoObj, index) => {
    return (
      <li key={todoObj["id"]}>
        <TodoRow
          setEditClicked={setEditClicked}
          todoObj={todoObj}
          elID={todoObj["id"]}
          title={todoObj["title"]}
          date={todoObj["date"]}
          isCompleted={todoObj["isCompleted"]}
          value={todoObj["value"]}
          index={index}
          handleCompleted={handleCompletion}
          handleDeletion={handleDeletion}
        />
      </li>
    );
  });

  return (
    <div className="p-5 bg-slate-200 drop-shadow-md rounded-md">
      <ol
        id="todo-list"
        className={`flex h-[304px] overflow-y-scroll scroll-w-0 flex-col gap-4 bg-slate-200 rounded-md`}
      >
        {rows}
      </ol>
    </div>
  );
}
