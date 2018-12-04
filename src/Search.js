import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _submit(event) {
    event.preventDefault();
    this.props.refresh(this.state.value);
  }

  render() {
    return (
      <form className="float-left" onClick={event => this._submit(event)}>
        <input
          type="text"
          placeholder="Enter a city"
          autoComplete="off"
          autoFocus="on"
          onChange={event => this._handleChange(event)}
          value={this.state.value}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
    );
  }
}
