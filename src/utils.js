export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
export function createDnD(columns) {

   const columnsDnD =  columns.map( (column, index) => {
    const cards = column.cards.map((card,index)=>{
      return {
        selected : false,
        order : index,
      }
    });
    return {
      selected : false,
      order : index,
      cards : cards,
    }
  });
  console.log(columnsDnD);
  return columnsDnD;

}