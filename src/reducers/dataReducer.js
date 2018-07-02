import * as types from '../actions/types';

const initialState = {
    testData: 'empty initial state',
    testDataObj: {'userId':0, 'title':'no title','body':'no body'},
    testDataArray: [{'userId':98, 'title':'no title A','body':'no body A'},
                    {'userId':99, 'title':'no title B','body':'no body B'}],
    testData_OLD: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
          
    case types.GET_DATA: 
      return {...state, ...action.payload }  
   
    default:
      return state;
  }
}