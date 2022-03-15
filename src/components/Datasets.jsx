import React from 'react';
import { Button } from '@mui/material';
import Dataset from './Dataset';
import ButtonBase from '@mui/material/ButtonBase';

export default class Datasets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      datasetClicked: false
    };
  }

  render() {
    return (
      <div>
             {this.state.datasetClicked && <p>You clicked on the dataset</p>}
        <p>You clicked {this.state.count} times</p>
        <Button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </Button>
        <ButtonBase onClick={() => this.setState({ datasetClicked: true })}>
          <Dataset />
        </ButtonBase>
      </div>
    );
  }
}