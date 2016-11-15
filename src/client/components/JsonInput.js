import React from 'react';

export default class JsonInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <input 
        value={this.state.value}
        onChange={(e) => this.handleChange(e)} />
    );
  }
}
