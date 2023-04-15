/**
 * Could be a class of functions
 *
 * Or a grouping of service functions
 * - usage: import * as placesClient from './places'
 */

const { VITE_API_URL: API_URL } = import.meta.env;

const getAllPlaces = async () => {
  try {
    const res = await fetch(`${API_URL}/places`);
    if (!res.ok) {
      throw new Error("Error fetching places: " + res);
    }
    const data = res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getAllPlaces,
  // ...
};
