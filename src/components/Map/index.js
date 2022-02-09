import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from "react-google-maps"

const Map = () => {
  return (
    <div>
      <GoogleMap
          defaultZoom={18}
          defaultCenter={{ lat: 16.07585668897903, lng: 108.17000264549644 }}
        >
          <Marker
              position={{ lat: 16.07585668897903, lng: 108.17000264549644  }}
          />
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));

