import "./listitemstyle.css";

import React, { useState, useMemo } from "react";

import Draggable from "react-draggable";

import iconCross from "../../icon/cross.svg";
import { ReactComponent as Done } from "../../icon/done.svg";
import iconEdit from "../../icon/edit.svg";
import save from "../../icon/save.svg";

const ListItem = ({ todo, setToDo, setSelectedDay, selectedDay }) => {
  const [editingId, setEditingId] = useState(null);
  const [value, setValue] = useState("");
  const selectDayStr = useMemo(() => selectedDay.format("DDMMYYYY") , [selectedDay]) ;

  function deleteToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr] = todo[selectDayStr].filter(
      (obj) => obj.id !== id
    );
    setToDo(todoCopy);
  }

  function isCompletedToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr] = todo[selectDayStr].map((obj) => {
      if (obj.id === id) {
        obj.isCompleted = !obj.isCompleted;
      }
      return obj;
    });
    setToDo(todoCopy);
  }

  function editToDo(id, title) {
    setEditingId(id);
    setValue(title);
  }

  function saveToDo(id) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr] = todo[selectDayStr].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setToDo(todoCopy);
    setEditingId(null);
  }

  function updatePosition(data, index) {
    const todoCopy = JSON.parse(JSON.stringify(todo));
    todoCopy[selectDayStr][index].defaultPos = { x: data.x, y: data.y };
    setToDo(todoCopy);
  }

  return (
    <div className="draggable_fild">
      {todo[selectDayStr]?.length  ? (
        todo[selectDayStr].map((item, index) => (
          <Draggable
            key={item.id}
            position={null}
            defaultPosition={item.defaultPos}
            onStop={(e, data) => {
              updatePosition(data, index);
            }}
          >
            <div className="list_item" style={{ backgroundColor: item.color }}>
              {editingId === item.id ? (
                <div>
                  {index + 1}.
                  <input
                    className="list_item-input-change"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                  />
                </div>
              ) : (
                <div
                  className={
                    item.isCompleted
                      ? "list_item-title-nochange item_done"
                      : "list_item-title-nochange"
                  }
                >
                  {index + 1}. {item.title}
                </div>
              )}
              {editingId === item.id ? (
                <div>
                  <button
                    className="listitem_btn"
                    onClick={() => saveToDo(item.id)}
                  >
                    <img
                      src={save}
                      alt="close"
                      width="15px"
                      height="15px"
                    />
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    className="listitem_btn"
                    onClick={() => deleteToDo(item.id)}
                  >
                    <img
                      src={iconCross}
                      alt="close"
                      width="15px"
                      height="15px"
                    />
                  </button>
                  <button
                    className="listitem_btn"
                    onClick={() => editToDo(item.id, item.title)}
                  >
                    <img
                      src={iconEdit}
                      alt="close"
                      width="15px"
                      height="15px"
                    />
                  </button>
                  <button
                    className="listitem_btn"
                    onClick={() => isCompletedToDo(item.id)}
                  >
                    <Done className="done_svg" width="15px" height="15px" />
                  </button>
                </div>
              )}
            </div>
          </Draggable>
        ))
      ) : (
        <div style={{ textAlign: "center" }}>Tasks not found</div>
      )}
    </div>
  );
};

export default ListItem;
