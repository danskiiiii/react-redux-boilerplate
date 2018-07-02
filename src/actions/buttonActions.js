import { GET_DATA } from './types';
import store from '../store';

const API_LINK= 'https://jsonplaceholder.typicode.com'

export const onGetSingleClick = () => { 
  return async (dispatch) => {
    try {
      const response = await fetch(`${API_LINK}/posts/1`);
      const jsonObj = await response.json();
      dispatch({ type: GET_DATA, 
        payload: { testData: JSON.stringify(jsonObj),
                   testDataObj: jsonObj,
                   testData_OLD: 'this was previous state of test data: ' + store.getState().data.testData  } })
    } 
    catch (exc) {
      dispatch({ type: GET_DATA, payload: { testData: exc.message } })
    }
  }
}
  
export const onGetMultipleClick = () => { 
    return async (dispatch) => {
      try {
        const response = await fetch(`${API_LINK}/posts`);
        const jsonObj = await response.json();
        dispatch({ type: GET_DATA, 
          payload: { testData: JSON.stringify(jsonObj),
                     testDataArray: jsonObj,
                     testData_OLD: 'this was previous state of test data: ' + store.getState().data.testData  } })
      } 
      catch (exc) {
        dispatch({ type: GET_DATA, payload: { testData: exc.message } })
      }
    }
  }