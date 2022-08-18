import "./App.css";

import moment from "moment";
import React, { useEffect, useState, useMemo } from "react";

import Calendar from "./components/Calendar/Calendar";
import AddToDo from "./components/AddToDo/AddToDo";
import Header from "./components/Header/Header";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [todo, setToDo] = useState(
    () => JSON.parse(localStorage.getItem("items")) || {}
  );
  const [selectedDay, setSelectedDay] = useState(() => moment());
  const selectedDayTasksId = useMemo(
    () => selectedDay.format("DDMMYYYY"),
    [selectedDay]
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todo));
  }, [todo]);

  function addSelectedDayTask(newTask) {
    if (!todo[selectedDayTasksId]) {
      todo[selectedDayTasksId] = [];
    }
    const copySelectDayTasks = [...todo[selectedDayTasksId]];
    copySelectDayTasks.push(newTask);
    setToDo({ ...todo, [selectedDayTasksId]: copySelectDayTasks });
  }

  function deleteTaskFromSelectedDay(task) {
    const copySelectDayToDo = todo[selectedDayTasksId].filter((element) => {
      return element.id !== task.id;
    });
    setToDo({ ...todo, [selectedDayTasksId]: copySelectDayToDo });
  }

  function completedTask(task) {
    const copySelectDayToDo = todo[selectedDayTasksId].map((element) => {
      if (element.id === task.id) {
        element.isCompleted = !element.isCompleted;
        return element;
      }
      return element;
    });
    setToDo({ ...todo, [selectedDayTasksId]: copySelectDayToDo });
  }

  function updateTaskPosition(data, index) {
    const copySelectDayToDo = todo[selectedDayTasksId].map((element, i) => {
      if (index === i) {
        element.defaultPos = { x: data.x, y: data.y };
        return element;
      }
      return element;
    });
    setToDo({ ...todo, [selectedDayTasksId]: copySelectDayToDo });
  }

  function changeTaskTitle(task, newTitle) {
    const copySelectDayToDo = todo[selectedDayTasksId].map((element) => {
      if (element.id === task.id) {
        element.title = newTitle;
        return element;
      }
      return element;
    });
    setToDo({ ...todo, [selectedDayTasksId]: copySelectDayToDo });
  }

  function deleteSelectedDayAllTasks() {
    setToDo({ ...todo, [selectedDayTasksId]: [] });
  }

  function deleteAllTasks() {
    setToDo({});
  }

  return (
    <div className="app">
      <Header
        deleteSelectedDayAllTasks={deleteSelectedDayAllTasks}
        deleteAllTasks={deleteAllTasks}
      />
      <AddToDo selectedDay={selectedDay} addTask={addSelectedDayTask} />
      <ToDoList
        changeTaskTitle={changeTaskTitle}
        updateTaskPosition={updateTaskPosition}
        completedTask={completedTask}
        selectedDay={selectedDay}
        todo={todo}
        deleteTask={deleteTaskFromSelectedDay}
      />
      <Calendar
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        todo={todo}
      />
    </div>
  );
}

export default App;
