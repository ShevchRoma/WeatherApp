
export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';

const initialState = {
   cities: []
}

   const addCity = (state = initialState, action) =>{
        switch(action.type){
            case ADD_CITY:
                return{
               ...state,
                   cities: [...state.cities,action.payload]
                }
                
            case DELETE_CITY:
              return{
                cities:[
                    ...state.cities.slice(0,action.payload),
                    ...state.cities.slice(action.payload + 1)
                ]
              }
                     
                  
                default:
                    return state;
             }
} 
export default addCity
