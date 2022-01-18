import axios from "axios"

export const getAutocompleteAction = (term) =>async dispatch =>{
       const res = await axios.get('${BASE_URL}/api/symptoms?query=${term}')
        dispatch({
            type: GET_AUTOCOMPLETE,
            payload: res.data
        })
}