import React, { Component } from "react";
import axios from "axios";

class slots extends Component {
  state = {
    slots: []
  };
  componentDidMount() {
    axios.get(`/api/slots.json`).then(res => {
      const slots = res.data;
      this.setState({ slots });
      console.log(slots);
    });
  }

  render() {
    return <div>Welcome to Interview Scheduler</div>;
  }
}

export default slots;
