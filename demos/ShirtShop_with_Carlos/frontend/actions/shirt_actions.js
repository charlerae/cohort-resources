import * as ShirtApiUtil from "../utils/shirt_api_util"
export const RECEIVE_ALL_SHIRTS = "RECEIVE_ALL_SHIRTS";
export const RECEIVE_SHIRT = "RECEIVE_SHIRT"

//Action creators
export const receiveAllShirts = (shirts) => {
  debugger
  return {
    type: RECEIVE_ALL_SHIRTS,
    shirts: shirts
  }
};

export const receiveShirt = (shirt) => {
  debugger
  return {
    type: RECEIVE_SHIRT,
    shirt: shirt
  }
}
//Thunk action creators
export const fetchAllShirts = () => {
  debugger
  return (dispatch) => { // this is good!
    debugger
    return ShirtApiUtil.fetchAllShirts()
      .then((shirts) => {
        debugger
        dispatch(receiveAllShirts(shirts))
      });
  };
}

export const createShirt = (shirt) => {
  debugger
  return (dispatch) => {
    debugger
    return ShirtApiUtil.createShirt(shirt)
      .then(shirt => {
        debugger
        dispatch(receiveShirt(shirt))
        // return "banana"
      });
  }
};