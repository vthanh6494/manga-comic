import {useReducer, createContext } from "react";
import { enableSlide } from "./reducers/enableSlide";
import { changeTheme } from "./reducers/themeChange";
import Cookies from '../utils/helper/cookies'


// initial state
const initialState = {
  darkTheme: Cookies.get('darkTheme') === 'true' || false,
  readSlide: Cookies.get('readSlide') === 'true' || false,
};

// create context
const Context = createContext({});

// combine reducer function
const combineReducers = (...reducers) => (state, action) => {
  for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action);
  return state;
};

// context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(combineReducers(changeTheme, enableSlide), initialState);
  const value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
