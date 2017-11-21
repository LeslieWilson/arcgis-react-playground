import React from 'react';
import ReactDOM from 'react-dom';
import { Scene, Popup } from 'react-arcgis';//package of dependacies(look up react argis , npm explains package)
import Points from './Points'

const Map = props => {
  return(
    <div>

      <Scene className="Map"

        mapProperties = {{basemap: "satellite" }}
        viewProperties = {{
          zoom:4,
          center:[-83, 38]
        }}
      >


      <Popup className="pop"
             popupProperties={{
                 content: 'This is a random popup that I made.',
                 location: [-122.4443, 47.2529],
                 title: 'My Popup'
             }}
         />
      </Scene>

    </div>
  )
}




export default Map
//props- and on like 10 is an example of a prop. style is a property. within teh bject you haev prop value parieing s but its css there.
