import React from 'react'
import './Search.scss';
import { getWeatherAction } from '../../store/actions/getWeatherAction';
import {useDispatch} from 'react-redux';
import Alert from '../Alert/Alert';
import { addCityAction } from '../../store/actions/addCityAction';
import AutoComplete from 'react-autocomplete'



const Search = () => {
  const [city,setCity] = React.useState('');
  const [alert,setAlert] = React.useState(false);
  const dispatch = useDispatch();
  const onInputChange = (e) =>{
        setCity(e.target.value)
        //if(e.target.value.length >=3){
          //setTimeout(dispatch(setAutoCompleteAction(e.target.value)),1000)
  //}
}
  const onCityAdd = (e) =>{
    e.preventDefault()
      if(city.trim() === ''){
        setAlert(true);
      }else{
        dispatch(getWeatherAction(city));
        dispatch(addCityAction(city))
        setCity('');
      }
  }

  const members = [
    {
      name: "kyiv"
    },
    {
      name: "lviv"
    },
    {
      name: "london"
    },
    {
      name: 'new york'
    },
    {
      name: 'berlin'
    },
    {
      name: 'chicago'
    },
    {
      name: 'odesa'
    },
    {
      name: 'kharkiv'
    }

  ];
    return (
        <div className="search">
                  <div className="search-body">
                    <form className="search-body-form" onSubmit={onCityAdd} >
                     <AutoComplete
        getItemValue={(item) => item.name}
        items={members.filter((member) => member.name.includes(city))}
        renderItem={(item, isHighlighted) => (
          <div
            style={{
              verticalAlign: "middle",
              background: isHighlighted ? "lightgray" : "white"
            }}
          >
            <div style={{ display: "inline-block", minWidth: 200 }}>
              {item.name}
            </div>
          </div>
        )}
        wrapperStyle={{
          position: "relative",
        }}
        menuStyle={{
          border: "solid 2px #080",
          backgroundColor: "#dfd",
          zIndex: 2,
          position: "absolute",
          top: 30,
          left: 0,
          overflow: "auto",
          maxHeight: 100
        }}
        value={city}
        inputProps={{
          placeholder: "Enter city name",
          style: { fontSize: 14, width: "100%", padding: 10,borderRadius: '5px', }
        }}
        onChange={(e) => setCity(e.target.value)}
        onSelect={(city) => setCity(city)}
      /> 
                    {/* <Autocomplete
              getItemValue={item => item.label}
              items={[
                { label: "Kyiv" },
                { label: "London" },
                { label: "Chicago" },
                {label:'New York'},
                {label:'Lviv'}
              ]}
              renderInput={props => <input 
                      type="text"
                      value={city}
                      onChange={onInputChange}
                      className="search-body-form__input"
                      placeholder="City name..."
                      {...props}
                      /> }
              renderItem={(item, isHighlighted) => (
                <div
                  style={{ background: isHighlighted ? "lightgray" : "white" }}
                >
                  {item.label}
                </div>
              )}
              value={city||''}
             onChange={(e) => setCity(e.target.value)}
             onSelect={(city) => setCity(city)}
            />
 */}
                      <button className="search-body-form__button">Add</button>
                  </form>
                  {alert ? <Alert /> : ''}
                </div>
        </div>   
    )
}

export default Search





