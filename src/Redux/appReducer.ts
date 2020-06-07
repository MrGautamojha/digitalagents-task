import {UPDATE_APP_STATE, UPDATE_BULK_APP_STATE} from './types';

const initialState: any = {
  userData: [],
  loggedIn: false,
  showAlertMessage: false,
  language: 'EN', //'EN', "AR"
  employee: new Object(),
  tempemployee: new Object(),
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_APP_STATE: {
      const {name, value} = action.payload;
      const newState = {...state, [name]: value};
      return newState;
    }
    case UPDATE_BULK_APP_STATE: {
      const {values} = action.payload;
      const newState = {...state, ...values};
      return newState;
    }
    case 'ADD_EMPLOYEE': {
      state.employee[action.payload[0]] = action.payload[1];
      state.tempemployee[action.payload[0]] = action.payload[1];
      const newState = {...state};
      return newState;
    }
    case 'SEARCH': {
      console.log(action.payload[0]);
      const allemployee = state.employee;
      const emp = Object.values(allemployee);
      const s = emp.filter((data: any) => {
        console.log(data.login.includes(action.payload[0]));
        return data.login.includes(action.payload[0]);
      });
      state.tempemployee = new Object();
      s.map((item: any) => (state.tempemployee[item.id] = item));
      console.log(state.tempemployee);
      const newState = {...state};
      return newState;
    }
    case 'REMOVE_EMPLOYEE': {
      delete state.employee[action.payload];
      console.log(action.payload);
      const newState = {...state};
      return newState;
    }
    case 'EDIT_EMPLOYEE': {
      state.employee[action.payload[0]] = action.payload[1];
      const newState = {...state};
      return newState;
    }
    default:
      return state;
  }
};

export default appReducer;
