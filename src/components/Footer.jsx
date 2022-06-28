import React from 'react'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api';

export default function Footer() {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });

  if (isLoaded) return <div>Loading...</div>
  return (
    <Map />
  )
}

function Map() {
  return(
    <GoogleMap zoom={10}></GoogleMap>
  )
}
