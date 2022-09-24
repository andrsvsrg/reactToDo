export const getTodo = (state) => state.todosReducer.todo
export const getSelectedDay = (state) => state.todosReducer.selectedDay
export const getSelectedDayTasks = (state) => getTodo(state)[getSelectedDay(state)]
export const mapStateToDoToProps = (state) => {
  return { todo: getTodo(state), selectedDay: getSelectedDay(state) }
}
