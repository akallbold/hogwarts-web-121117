import React from "react";

class Hog extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      expanded: false
    }
  }

  handleClick = (event) => {
    console.log(event)
    event.persist()
    this.setState({expanded: !this.state.expanded})
  };

  render(){
    if (this.state.expanded === false){
      return (
        <div className="hog" onClick={this.handleClick}>
          <img src={this.props.imgURL}  />
          <h3>{this.props.name}</h3>
        </div>
      );
    } else {
      return(
        <div className="hog" onClick={this.handleClick}>
          <h3>{this.props.name} Details</h3>
          <p>Specialty: {this.props.specialty}</p>
          <p>{this.props.greased ? null : "Not"} Greased</p>
          <p>Weight: {this.props.weight}</p>
          <p>Highest Medal: {this.props.achieved}</p>
        </div>
      )
    }
  }
}

export default Hog;
