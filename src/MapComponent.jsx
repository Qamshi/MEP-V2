import { Map } from 'pigeon-maps'
import React, { useState } from 'react'

export function MyMap() {
  const [center, setCenter] = useState([33.6844, 73.0479]) // Coordinates for the center of Pakistan
  const [zoom, setZoom] = useState(5) // Adjust the initial zoom level as needed

  return (
    <Map 
      height={500}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => {
        setCenter(center)
        setZoom(zoom)
      }} 
    />
  )
}