import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className=" ">
        <p className="control has-icons-left">
          <input className="input is-info" type="text" placeholder="Filter" onChange={this.handleSearch}/>
          <span className="icon is-small is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      
    )
  }
}
