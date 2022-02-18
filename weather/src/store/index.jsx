import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getWeather } from './reducers/weatherReducer';
import  addCity  from './reducers/addCityReducer'
import throttle from "lodash.throttle";


const rootReducer = combineReducers({
  weather:getWeather,
  addcity:addCity,
});


const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    
  }
};
const loadState = () =>{
  try{
   const serializedState = localStorage.getItem('state');
   if(serializedState === null){
     return undefined;
   }
   return JSON.parse(serializedState)
  }catch(err){
    return undefined;
  }
}
const persistedState = loadState();
const store = createStore(
  rootReducer,persistedState,composeWithDevTools(applyMiddleware(thunk))
)
store.subscribe(throttle(() =>{
  saveState(store.getState());
},1000)
);

export default store;
