import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './App.scss';
import Card from './components/Card/Card';
import Header from './components/Header/Header';




const App = () => {
  
  const weatherData = useSelector((state) => state.weather.data,shallowEqual);
  const cities = useSelector(state => state.addcity.cities,shallowEqual)
  
  console.log(weatherData);
  return (
    <div className="wrapper">
       <Header />
       <div className="content">
           <div className="content-body">
             <div className="content-body-row">
                 {cities.map((city,id) =>(
                  <div className="content-body-row__item"><Card data={weatherData} city={city} key={id} id={id}  /></div>
                 ))} 
                </div>
           </div>
           
         </div>
    </div>
  );
}

export default App;
