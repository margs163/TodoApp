import { Trash2 } from "lucide-react";
import { Pencil } from "lucide-react";
import { useState } from "react";

export default function TodoRow({
  todoObj,
  elID,
  title,
  date,
  isCompleted,
  handleCompleted,
  value,
  index,
  handleDeletion,
  setEditClicked
}) {
  const [completed, setCompleted] = useState(false);
  const valueStyles = [
    ["text-green-600", "bg-green-100"],
    ["text-blue-600", "bg-blue-100"],
    ["text-orange-600", "bg-red-100"],
  ];
  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 rounded-md">
      <div className="flex justify-start items-center gap-6 w-2/4">
        <div>
          <input
            type="checkbox"
            className="scale-[2.0] accent-indigo-500 cursor-pointer"
            checked={todoObj.isCompleted}
            onChange={() => {
              setCompleted(!completed);
              handleCompleted(elID, !completed);
            }}
          />
        </div>
        <div>
          <h3
            className={`text-gray-600 leading-snug font-semibold text-lg ${
              isCompleted && "line-through decoration-2 text-gray-500/80"
            }`}
          >
            {title}
          </h3>
          <p className="text-gray-500 tracking-wide leading-7 font-medium text-sm">{date}</p>
        </div>
      </div>
      <div
        className={`flex justify-center items-center w-20 py-2 ${
          valueStyles[value - 1][1]
        } rounded-2xl`}
      >
        <h3
          className={`${
            valueStyles[value - 1][0]
          } tracking-wider font-medium text-sm`}
        >
          {(value === 1 && "LOW") ||
            (value === 2 && "MIDDLE") ||
            (value === 3 && "HIGH")}
        </h3>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            handleDeletion(index);
          }}
        >
          <Trash2
            size={18}
            color="#44403c"
            className="rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer box-content py-2 px-2"
          />
        </button>
        <button onClick={() => {
          setEditClicked(elID);
        }}>
          <Pencil
            size={18}
            color="#44403c"
            className="rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer box-content py-2 px-2"
          />
        </button>
      </div>
    </div>
  );
}
