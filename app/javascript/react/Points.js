import * as React from 'react';
import { Scene, Layers, Graphic, Symbols, Geometry } from 'react-arcgis';

const Points = props => {
  return (
    <Layers.GraphicsLayer>
    <Graphic>
        <Symbols.SimpleMarkerSymbol
            symbolProperties={{
                color: [255, 0, 0],
                outline: {
                    color: [255,  0, 0],
                    width: 3000
                }
            }}
        />
        <Geometry.Point
            geometryProperties={{
                latitude: -83,
                longitude: 38
            }}
        />
    </Graphic>
  </Layers.GraphicsLayer>
)
};

export default Points;
