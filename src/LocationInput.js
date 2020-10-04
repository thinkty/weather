import React from 'react';

/**
 * A component to take location input
 */
export default class LocationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: '',
      hover: false
    };
  }

  /**
   * Send a request to the API server with latitude and longitude as parameters
   * Parse the weather data from the response and update the parent component's
   * state
   */
  onSubmit = (event) => {
    event.preventDefault();
    const { lat, lon } = this.state;
    
    const url = new URL('http://localhost:8080/api/weather');
    const params = { lat, lon, units: 'metric' };
    url.search = new URLSearchParams(params).toString();

    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        this.props.update(data);
      })
      .catch(() => {
        alert('Oops, something went wrong');
      });
  }

  onChange = (event) => {
    this.setState({ [event.target.id] : event.target.value });
  }

  onMouseEnter = () => {
    this.setState({ hover: true });
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    const { lat, lon, hover } = this.state;
    const isMobile = window.innerWidth < 1000;
    const width = isMobile ? '60vw' : '150px';
    const inputStyle = {
      width,
      backgroundColor: 'transparent',
      color: '#fff',
      fontSize: '15px',
      padding: 10,
      borderStyle: 'none none solid none',
      outline: 'none'
    };
    const submitStyle = {
      backgroundColor: hover ? '#696969' : '#000',
      borderRadius: 25,
      color: '#fff',
      fontSize: '12px',
      padding: 10,
      borderStyle: 'solid',
      outline: 'none'
    };

    return (
      <form
        onSubmit={this.onSubmit}
        style={{
          display: 'grid',
          justifyContent: 'center',
          alignContent: 'center',
          gridTemplateColumns: isMobile ? 'auto' : 'auto auto auto',
          gap: isMobile ? '10px' : '40px'
        }}
      >
        <input
          required
          type="number"
          step="0.000001"
          placeholder="Latitude"
          id="lat"
          value={lat}
          min={-90}
          max={90}
          onChange={this.onChange}
          style={inputStyle}
        />
        <input
          required
          type="number"
          step="0.000001"
          placeholder="Longitude"
          id="lon"
          value={lon}
          min={-180}
          max={180}
          onChange={this.onChange}
          style={inputStyle}
        />
        <input
          type="submit"
          value="Submit"
          onMouseEnter={this.onMouseEnter}
          onMouseDown={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onMouseUp={this.onMouseLeave}
          style={submitStyle}
        />
      </form>
    );
  }
}
