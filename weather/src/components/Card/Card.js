import React from 'react'
import {useDispatch} from 'react-redux'
import './Card.scss';
import {shallowEqual, useSelector} from 'react-redux';
import Moment from "react-moment";
import cardDeleteAction from '../../store/actions/cardDeleteAction';
import { getWeatherAction } from '../../store/actions/getWeatherAction';

const Card = ({city,id,data}) => {
  const dispatch = useDispatch();
  const [c,setC] = React.useState(false)
  const toggleTemperature = (e) =>{
        e.preventDefault();
        setC(!c)
  }
  React.useEffect(()=>{
    dispatch(getWeatherAction(city))
  },[dispatch,city])
  
  
  const celsius = (data.main.temp - 273).toFixed(2);
  const fahrenheit = data.main.temp.toFixed(1);

  let date = new Date();
  const getWeekDay = (date) =>{
    const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
    return days[date.getDay()]
  }
  
    return (
        <div className="content-body-row-item">
                    <div className="content-body-row-item__top">
                      <div className="content-body-row-item-information">
                        <p>{data.name},UA</p>
                        <p>{getWeekDay(date)},<Moment format="DD MMMM HH:mm"/></p>
                      </div>
                      <div className="content-body-row-item-weather">
                        <a href="*" style={{fontSize:24}}>*</a><span style={{marginLeft:'15px'}}>{data.weather[0].main}</span>
                        <span onClick={() =>dispatch(cardDeleteAction(id))} style={{color: 'red',cursor:'pointer',marginLeft:5}}>&times;</span>
                      </div>
                    </div>
                    <div className="content-body-row-item__bottom">
                       <div className="content-body-row-item-body">
                         <div className="content-body-row-item-body__column">
                              { <span style={{fontSize:44}}>{c ? celsius : fahrenheit}<sup><a href="*" onClick={toggleTemperature}>°C</a> | <a href="*" style={{color:'#ffa25b'}}>°F</a></sup></span>}
                              <p>Feels like: <span><b>{celsius}°C</b></span></p>
                         </div>
                         <div className="content-body-row-item-body__column">
                           <div className="content-body-row-item-body-row">
                             <span>Wind:</span><span>{data.wind.speed}m/s</span>
                           </div>
                           <div className="content-body-row-item-body-row">
                             <span>Humidity:</span><span>{data.main.humidity}%</span>
                           </div>
                           <div className="content-body-row-item-body-row">
                           <span>Pressure:</span><span>{data.main.pressure}Pa</span>
                           </div>
                           
                         </div>
                       </div>
                    </div>
                  </div>
    )
}

export default Card
