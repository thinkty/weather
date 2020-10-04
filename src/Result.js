import React from 'react';

/**
 * Component to show the result of the weather query
 */
export default function Result(props) {
  const { data } = props;
  const { current, daily } = data;
  const fontSize = window.innerWidth > 1000 ? '50px' : '18px';

  const { temp, feels_like, humidity, wind_speed, weather } = current;
  const { temp: daily_temp } = daily[0];

  const fields = [
    {
      label: 'Current',
      value: `${temp} °C`
    },
    {
      label: 'Feels Like',
      value: `${feels_like} °C`
    },
    {
      label: 'Min',
      value: `${daily_temp.min} °C`
    },
    {
      label: 'Max',
      value: `${daily_temp.max} °C`
    },
    {
      label: 'Humidity',
      value: `${humidity} %`
    },
    {
      label: 'Wind',
      value: `${wind_speed} m/s`
    },
    {
      label: 'Weather',
      value: `${weather[0].main}`
    },
  ];

  return (
    <div
      style={{
        marginTop: '30px',
        display: 'grid',
        justifyContent: 'start',
        alignContent: 'center',
        gridTemplateColumns: 'auto'
      }}
    >
      {
        fields.map((field) => (
          <div
            key={field.label}
            style={{
              display: 'grid',
              justifyContent: 'start',
              alignContent: 'center',
              gridTemplateColumns: 'auto auto'
            }}
          >
            <h1
              style={{
                margin: 0,
                color: '#696969',
                fontSize
              }}
            >
              { field.label } :
            </h1>
            <h1
              style={{
                margin: 0,
                fontSize
              }}
            >
              &nbsp;&nbsp;{ field.value }
            </h1>
          </div>
        ))
      }
    </div>
  );
}
