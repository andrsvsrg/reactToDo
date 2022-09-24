import {
  ADD_TASK,
  CHANGE_SELECTED_DAY,
  DELETE_ALL_TASKS,
  DELETE_SELECTED_DAY_TASKS,
  DELETE_TASK,
  UPDATE_TASK,
} from '../../constants/actions-types/'

export function addTask(newTask) {
  return {
    type: ADD_TASK,
    data: { newTask },
  }
}

export function deleteTask(task) {
  return {
    type: DELETE_TASK,
    data: task,
  }
}

export function updateTask(taskId, changes) {
  return {
    type: UPDATE_TASK,
    data: { taskId, changes },
  }
}

export function changeSelectedDay(date) {
  return {
    type: CHANGE_SELECTED_DAY,
    data: date,
  }
}

export function deleteSelectedDayTasks() {
  return {
    type: DELETE_SELECTED_DAY_TASKS,
  }
}

export function deleteAllTasks() {
  return {
    type: DELETE_ALL_TASKS,
  }
}
