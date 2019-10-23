import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react' 

class MapContainer extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{ lat: -37.812973, lng: 144.960330}}
            >
                 <Marker position={{ lat: -37.812973,  lng: 144.960330}} />
            </Map>
        );
      }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyB5DywKUKkX9oK7pqZYwwC2zbGV3WHmFzM'
  })(MapContainer);

  const mapStyles = {
    width: '100%',
    height: '500px',
  };