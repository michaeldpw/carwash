import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react' 

class MapContainer extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={16}
              style={mapStyles}
              initialCenter={{ lat: -37.594910, lng: 144.913269}}
            >
                 <Marker position={{ lat: -37.594910,  lng: 144.913269}} />
            </Map>
        );
      }
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyB5DywKUKkX9oK7pqZYwwC2zbGV3WHmFzM'
  })(MapContainer);

  const mapStyles = {
    width: '100%',
    height: '500px'
  };