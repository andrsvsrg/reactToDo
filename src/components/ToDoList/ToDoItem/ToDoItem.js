import "./ToDoItem.css";

import React, { useState } from "react";
import EditTask from "./EditTask/EditTask";
import ShowTask from "./ShowTask/ShowTask";

const ToDoItem = React.memo(function ToDoItem({
  item,
  index,
  deleteTask,
  completedTask,
  changeTaskTitle,
}) {
  const [editingId, setEditingId] = useState(null);
  const [titleChangeInput, setTitleChangeInput] = useState("");

  function editToDo(id, title) {
    setEditingId(id);
    setTitleChangeInput(title);
  }

  function handlerTitleChange(newTitle) {
    setTitleChangeInput(newTitle);
  }

  return (
    <div>
      {editingId === item.id ? (
        <EditTask
          changeTaskTitle={changeTaskTitle}
          value={titleChangeInput}
          onInputChange={handlerTitleChange}
          setEditingId={setEditingId}
          item={item}
          index={index}
        />
      ) : (
        <ShowTask
          completedTask={completedTask}
          deleteTask={deleteTask}
          item={item}
          editToDo={editToDo}
          index={index}
        />
      )}
    </div>
  );
});

export default ToDoItem;
