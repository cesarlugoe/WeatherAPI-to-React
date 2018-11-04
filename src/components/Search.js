import React, { Component } from 'react'

export default class Search extends Component {

  state = {
    cityID: ''
  }

  onChange = event => {
    this.setState({
      cityID: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { cityID } = this.state;
    this.props.handleSearchWeather(cityID);
  }

  render() {
  

    return (
      <form className=" form " onSubmit={this.handleSubmit}>
       <input className="input is-success" placeholder="" type="text" value={this.state.cityID}  onChange={this.onChange} />
       <input className="button is-success" type="submit" value="search"/>
      </form>
      
      
    )
  }
}
