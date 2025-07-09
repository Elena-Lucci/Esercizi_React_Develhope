// useCurrentLocation
//Write the useCurrentLocation custom hook, that uses the browser's navigator.geolocation API to get the current location of the user through the getCurrentPosition builtin method. The hook should return the current location as well as a function to get the current location, and the error and loading states. The details on how to use this API can be found here: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API

import { useState, useCallback } from "react";

export function useCurrentLocation() {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
  }, []);

  return { location, getLocation, error, loading };
}
