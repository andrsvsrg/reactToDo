import {
  ADD_TASK,
  CHANGE_SELECTED_DAY,
  DELETE_ALL_TASKS,
  DELETE_SELECTED_DAY_TASKS,
  DELETE_TASK,
  UPDATE_TASK,
} from '../../../constants/actions-types'
import { getTodayDayId } from '../../../components/utils/data'

const initialState = {
  todo: JSON.parse(localStorage.getItem('items')) || {},
  selectedDay: getTodayDayId(),
}

export const todosReducer = (state = initialState, action) => {
  const { todo, selectedDay } = state
  switch (action.type) {
    case ADD_TASK: {
      const { newTask } = action.data
      const selectedDayTasks = todo[selectedDay]
      const newDayTask = selectedDayTasks ? [...selectedDayTasks, newTask] : [newTask]

      return { ...state, todo: { ...todo, [selectedDay]: newDayTask } }
    }

    case DELETE_TASK: {
      const task = action.data
      const newSelectDayToDo = todo[selectedDay].filter(({ id }) => {
        return id !== task.id
      })

      return { ...state, todo: { ...todo, [selectedDay]: newSelectDayToDo } }
    }

    case UPDATE_TASK: {
      const { taskId, changes } = action.data
      const newSelectedDayToDo = todo[selectedDay].map((task) => {
        if (task.id !== taskId) {
          return task
        }
        return { ...task, ...changes }
      })
      return { ...state, todo: { ...todo, [selectedDay]: newSelectedDayToDo } }
    }

    case DELETE_SELECTED_DAY_TASKS: {
      return { ...state, todo: { ...todo, [selectedDay]: {} } }
    }

    case DELETE_ALL_TASKS: {
      return { ...state, todo: {} }
    }

    case CHANGE_SELECTED_DAY: {
      return { ...state, selectedDay: action.data }
    }

    default:
      return state
  }
}
