import React from 'react'

export default class HogOptions extends React.Component{
  render(){
    console.log(this.props.sortByName)
    return(
      <div id = 'name-weight-button'>
        <button onClick={this.sortBy}>Sort By: {this.props.sortByName ? 'Weight' : 'Name'}</button>
      </div>
    )
  }



}
