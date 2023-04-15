import { useEffect, useState } from "react";
import { getAllPlaces } from "../../services/places";
import { Place } from "../../interfaces/Places";
import { useQuery } from "@tanstack/react-query";

// todo use react query to fetch
// - [x] typescript
// - [x] devtools

export const PlacesList = () => {
  const { isLoading, isError, data, error } = useQuery<Place[], Error>({
    queryKey: ["places"],
    queryFn: getAllPlaces,
  });

  return (
    <div>
      <h1>Places List</h1>
      <ul>
        {isLoading && <p>loading...</p>}
        {isError && <p>Error: {error.toString()}</p>}
        {data?.map((place) => (
          <li key={place._id}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
};
