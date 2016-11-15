import React from 'react';

import JsonInput from './JsonInput';
import FormsView from './FormsView';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {structure: {}};
  }

  handleJsonChange(json) {
    try {
      const structure = JSON.parse(json);
      this.setState({structure});
    }
    catch (error) {
      this.setState({error});
      console.log(error);
    }
  }

  render() {
    return(
      <div>
        <JsonInput onChange={(json) => this.handleJsonChange(json)} />
        <FormsView structure={this.state.structure} />
      </div>
    );
  }
}
