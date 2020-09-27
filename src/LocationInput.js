import React from 'react';

/**
 * A component to take location (simple text) input
 */
export default class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { value } = this.state;
    console.log(value);
  }

  onChange = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          autoFocus
          placeholder="Enter location..."
          value={value}
          onChange={this.onChange}
          style={{
            width: '95%',
            backgroundColor: 'transparent',
            color: '#fff',
            fontSize: '15px',
            padding: 10,
            borderStyle: 'none none solid none',
            outline: 'none'
          }}
        />
      </form>
    );
  }
}
