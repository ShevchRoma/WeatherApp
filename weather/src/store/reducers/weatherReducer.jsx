export const GET_WEATHER = 'GET_WEATHER';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';

const initialState = {
    data: [],
    isLoaded: false
}
export const getWeather = (state = initialState,action) =>{
    switch(action.type){
        case GET_WEATHER:
            return{
                ...state,
                isLoaded: true
            }
        case GET_WEATHER_SUCCESS:
            return{
                ...state,
                data: action.payload,
                isLoaded: false
            }
            default:
                return state;
    }
}
export default getWeather;