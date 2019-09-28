import axios from "axios";
import { API_KEY } from "./constants";
import { apiResponse } from "./tennis-tournaments"; // mock data

// Functions to be used in action creators where error catching will occur
export const getTournaments = async () => {
  const response = await axios.get(
    `https://api.sportradar.com/tennis-t2/en/tournaments.json?api_key=${API_KEY}`
  );
  // const response = apiResponse;

  const now = new Date();
  const year = now.getFullYear();
  // return only atp tournaments
  const atp = response.data.tournaments.filter(
    x => x.category.name === "ATP" && x.current_season.year == year
  );

  return atp;
};
