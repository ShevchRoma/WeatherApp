import { DELETE_CITY } from "../reducers/addCityReducer"


const cardDeleteAction = (id) =>async dispatch => {
          dispatch({
              type: DELETE_CITY,
              payload: id
          })
       
}

export default cardDeleteAction
