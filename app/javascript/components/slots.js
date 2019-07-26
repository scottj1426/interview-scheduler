import React, { Component } from "react";
import axios from "axios";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import { Button, Input, Form } from "semantic-ui-react";

class slots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slots: [],
      name: null
    };
    this.handlePickedSlotInfo = this.handlePickedSlotInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/slots.json`).then(res => {
      const slots = res.data;
      this.setState({ slots });
      console.log(slots);
    });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handlePickedSlotInfo() {
    event.preventDefault();

    const person = {
      name: this.state.name
    };

    axios.post(`/api/interview.json`, { person }).then(res => {
      this.setState({ name: "" });
    });
  }

  render() {
    var slots = this.state.slots.map(slot => {
      return (
        <div key={slot.id}>
          <h1>{slot.id}</h1>
          <p>{slot.start_time}</p>
          <Button type="button" onClick={this.handlePickedSlotInfo}>Select Slot</Button>
        </div>
      );
    });
    return (
      <div>
        <h1>
          {" "}
          Welcome To Interview Scheduler
          <div>
            <Input
              type="text"
              placeholder="Enter Your Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
        </h1>
        {slots}
      </div>
    );
  }
}

export default slots;
