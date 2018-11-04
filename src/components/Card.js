import React, { Component } from 'react';

class Card extends Component {

 
  

  render(){
    const { city } = this.props;

    return(
      <div className=" weather-card ">
        <h3>City:    {city.name}</h3>
        <h3>Country: {city.sys.country}</h3>
        <p>weather:  {city.weather[0].description}</p>
        <p>Temp:     {city.main.temp} C</p>
        <p>Min-Temp: {city.main.temp_min} C</p>
        <p>Max-Temp: {city.main.temp_max} C</p>
        
      </div>
    )
  }
}



export default Card;