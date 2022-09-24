export const getTodo = (state) => state.todosReducer.todo
export const getSelectedDay = (state) => state.todosReducer.selectedDay
export const getSelectedDayTasks = (state) => getTodo(state)[getSelectedDay(state)]
