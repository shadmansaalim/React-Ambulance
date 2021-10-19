import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { geolocated } from 'react-geolocated';

const DEFAULT_LONGITUDE = -123;
const DEFAULT_LATITUDE = 48;


class Contact extends React.Component {
    render() {
        const longitude = this.props.coords ? this.props.coords.longitude : DEFAULT_LONGITUDE;
        const latitude = this.props.coords ? this.props.coords.latitude : DEFAULT_LATITUDE;
        return (
            <div className="my-5" >
                <MapContainer center={[longitude, latitude]} zoom={12}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'>

                    </TileLayer>
                    {
                        !this.props.coords ?
                            <div className="loading">Loading</div>
                            :
                            <Marker position={[longitude, latitude]}>
                                <Popup>
                                    You are here!
                                </Popup>
                            </Marker>
                    }
                </MapContainer>
            </div>
        );
    }
};
export default geolocated({
    positionOptions: {
        enableHighAccuracy: false
    },
    userDecisionTimeout: 10000
})(Contact);
