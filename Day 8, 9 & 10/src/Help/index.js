import React, { Component } from 'react'

class Help extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: 'smily'
    }
    console.log("constructor calling");
  }
  componentDidMount(){
    console.log("name",this.state.name);
    console.log('component did mount calling');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");
  }
  componentWillUnmount(prevProps, prevState) {
    console.log("componentWillUnmount()");
  }
  
  render(){ 
   return <div>Help</div>
  }
}

export default Help