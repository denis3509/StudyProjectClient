const constArray = ['dashboard', 'card', 'column'];

constArray.forEach((constant)=>{
  constant = constant.toUpperCase();

  console.log('export const NEW_'+constant+"_REQUEST = 'NEW_"+constant+"_REQUEST';");
  console.log('export const NEW_'+constant+"_SUCCESS = 'NEW_"+constant+"_SUCCESS';");
  console.log('export const NEW_'+constant+"_FAILURE = 'NEW_"+constant+"_FAILURE';");
  console.log();
  console.log('export const GET_'+constant+"_REQUEST = 'GET_"+constant+"_REQUEST';");
  console.log('export const GET_'+constant+"_SUCCESS = 'GET_"+constant+"_SUCCESS';");
  console.log('export const GET_'+constant+"_FAILURE = 'GET_"+constant+"_FAILURE';");
  console.log();
  console.log('export const UPDATE_'+constant+"_REQUEST = 'UPDATE_"+constant+"_REQUEST';");
  console.log('export const UPDATE_'+constant+"_SUCCESS = 'UPDATE_"+constant+"_SUCCESS';");
  console.log('export const UPDATE_'+constant+"_FAILURE = 'UPDATE_"+constant+"_FAILURE';");
  console.log();
  console.log('export const REMOVE_'+constant+"_REQUEST = 'REMOVE_"+constant+"_REQUEST';");
  console.log('export const REMOVE_'+constant+"_SUCCESS = 'REMOVE_"+constant+"_SUCCESS';");
  console.log('export const REMOVE_'+constant+"_FAILURE = 'REMOVE_"+constant+"_FAILURE';");
  console.log();

})