import { useEffect, useState } from "react";
import { getAllPlaces } from "../../services/places";
import { Place } from "../../interfaces/Places";

// todo use react query to fetch

export const PlacesList = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  // todo call service function to getAllPlaces
  useEffect(() => {
    const fetchPlaces = async () => {
      // todo fetch from service
      const data = await getAllPlaces();
      setPlaces(data);
    };

    fetchPlaces();
  }, []);

  return (
    <div>
      <h1>Places List</h1>
      <ul>
        {places?.map((place) => (
          <li key={place._id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};
