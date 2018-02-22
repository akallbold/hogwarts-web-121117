import React from "react";
import hogs from "../porkers_data";
import HogList from "./HogList";
import HogOptions from "./HogOptions"


class HogListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      hogs_data: hogs,
      sortByName:true,
      greaseFilter:false
    };
  }

  sortBy = () => {
    this.setState({sortByName: !this.state.sortByName})
  }

  greaseFilter(){
      this.setState({greaseFilter: !this.state.greaseFilter})
  }

  orderHogs = (hogs_data) => {

  }

  render() {
    console.log(this.props)
    return(
    <div>
    <HogList hogs_data={this.state.hogs_data} />
    <HogOptions sortBy={this.sortBy}
                sortByName={this.state.sortByName}
                greaseFilter={this.state.greaseFilter}/>
    </div>
  )
  }
}

export default HogListContainer;
