import axios from "axios";
import { apiKey } from "./constants";

export const getTournaments = async () => {
  const response = await axios.get(
    `https://api.sportradar.com/tennis-t2/en/tournaments.json?api_key=${apiKey}`
  );

  console.log(response);
  // console.log(response.ok);
  // console.log(response.statusText());
  // if (response.ok) {
  //   const {token} = await response.json()
  //   return token
  // }

  // const errMessage = await response.text()
  // throw new Error(errMessage)
};
