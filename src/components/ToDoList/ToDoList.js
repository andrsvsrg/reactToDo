import "./ToDolist.css";

import React, { useMemo } from "react";

import Draggable from "react-draggable";
import ToDoItem from "./ToDoItem/ToDoItem";

const ToDoList = React.memo(function ToDoList({
  todo,
  selectedDay,
  deleteTask,
  completedTask,
  updateTaskPosition,
  changeTaskTitle,
}) {
  const selectedDayTasksId = useMemo(
    () => selectedDay.format("DDMMYYYY"),
    [selectedDay]
  );

  return (
    <div className="draggable-fild">
      {todo[selectedDayTasksId]?.length ? (
        todo[selectedDayTasksId].map((item, index) => (
          <Draggable
            key={item.id}
            position={null}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updateTaskPosition(data, index);
            }}
          >
            <div className="draggable-element">
              <ToDoItem
                changeTaskTitle={changeTaskTitle}
                completedTask={completedTask}
                deleteTask={deleteTask}
                selectedDay={selectedDay}
                item={item}
                index={index}
              />
            </div>
          </Draggable>
        ))
      ) : (
        <div className="header-taskNotFound">Tasks not found</div>
      )}
    </div>
  );
});

export default ToDoList;
