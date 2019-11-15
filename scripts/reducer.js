const constArray = ['user', 'link', 'table'];

constArray.forEach((constant) => {
  constant = constant.toUpperCase();

  console.log('[types.NEW_' + constant + "_REQUEST] : (state,action) => { return state},");
  console.log('[types.NEW_' + constant + "_SUCCESS] : (state,action) => { return state},");
  console.log('[types.NEW_' + constant + "_FAILURE] : (state,action) => { return state},");


  console.log();
  console.log('[types.GET_' + constant + "_REQUEST] : (state,action) => { return state},");
  console.log('[types.GET_' + constant + "_SUCCESS] : (state,action) => { return state},");
  console.log('[types.GET_' + constant + "_FAILURE] : (state,action) => { return state},");
  console.log();
  console.log('[types.UPDATE_' + constant + "_REQUEST] : (state,action) => { return state},");
  console.log('[types.UPDATE_' + constant + "_SUCCESS] : (state,action) => { return state},");
  console.log('[types.UPDATE_' + constant + "_FAILURE] : (state,action) => { return state},");
  console.log();
  console.log('[types.REMOVE_' + constant + "_REQUEST] : (state,action) => { return state},");
  console.log('[types.REMOVE_' + constant + "_SUCCESS] : (state,action) => { return state},");
  console.log('[types.REMOVE_' + constant + "_FAILURE] : (state,action) => { return state},");
  console.log();

});