import {ADD_CITY} from '../reducers/addCityReducer';

export const addCityAction = (city) =>dispatch =>{
     dispatch({
         type: ADD_CITY,
         payload: city
     })
}