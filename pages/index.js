import { useState, useEffect } from "react";

export default function Home() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => console.error(error),
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    <div>
      <h1>Real-Time Location Sharing</h1>
      {location ? (
        <p>
          Your Location: {location.latitude}, {location.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}
