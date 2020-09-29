import React from 'react';
import LocationInput from './LocationInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    };
  }

  updateData = (data) => {
    this.setState({ data });
  }

  render() {
    const titleFontSize = window.innerWidth > 1000 ? '50px' : '6vw';

    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'grid',
          justifyContent: 'center',
          alignContent: 'center',
          gridTemplateColumns: 'auto',
          backgroundColor: '#000',
          margin: -8,
          padding: 0,
          fontFamily: 'sans-serif',
          color: '#e0e0e0',
        }}
      >
        <h1
          style={{
            fontSize: titleFontSize,
            textAlign: 'center'
          }}
        >
          Simple Weather App
        </h1>
        <LocationInput update={this.updateData} />
      </div>
    );
  }
}
