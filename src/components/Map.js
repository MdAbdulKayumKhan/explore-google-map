import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: 24.744221,
    lng: 90.403008
};

const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={12}
            >
                { /* Child components, such as markers, info windows, etc. */}
                <></>
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;