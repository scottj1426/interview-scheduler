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
    var slots = this.state.slots.map(slot => {
      return (
        <div key={slot.id}>
          <h1>{slot.id}</h1>
          <p>{slot.start_time}</p>
        </div>
      );
    });
    return (
      <div>
        <h1> Welcome To Interview Scheduler</h1>
        {slots}
      </div>
    );
  }
}

export default slots;
