
export const ADD_CITY = 'ADD_CITY';
export const DELETE_CITY = 'DELETE_CITY';


   const addCity = (state = [],action) =>{
        switch(action.type){
            case ADD_CITY:
                return [...state,action.payload]
                
            case DELETE_CITY:
                 return state.filter(item => item.id !== action.payload.id)
                     
                  
                default:
                    return state;
             }
} 
export default addCity