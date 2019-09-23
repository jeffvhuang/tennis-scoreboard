import { AsyncStorage } from "react-native";

export const apiKey = "";
export const STORAGE_KEY = "TENNIS_SCOREBOARD";

export const tennisGameScores = [
  {
    key: "0",
    label: "0",
    value: "0"
  },
  {
    key: "15",
    label: "15",
    value: "15"
  },
  {
    key: "30",
    label: "30",
    value: "30"
  },
  {
    key: "40",
    label: "40",
    value: "40"
  },
  {
    key: "Adv",
    label: "Adv",
    value: "Adv"
  }
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const monthTriNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC"
];

export function getDateStringFromTimestamp(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  const month = monthTriNames[date.getMonth()];
  return `${date.getDate()} ${month} ${date.getFullYear()}`;
}

// date in format yyyy-mm-dd
export function getDateAndTriMonth(dateString) {
  const dateParts = dateString.split("-");
  const date =
    dateParts[2].charAt(0) == "0" ? dateParts[2].substring(1) : dateParts[2];
  const monthNum = parseInt(dateParts[1]);
  const month = monthTriNames[monthNum - 1];
  return `${date} ${month}`;
}

// Save the match into the phone's local storage
export async function saveMatchToStorage(match) {
  const response = await AsyncStorage.getItem(STORAGE_KEY);
  const matchToSave = { ...match, modified: Date.now() };
  let storedMatches = JSON.parse(response);

  if (storedMatches) {
    const index = storedMatches.findIndex(x => x.id == match.id);
    // Remove if it exists (instead of replace to keep in last modified order)
    if (index != -1) storedMatches.splice(index, 1);
    storedMatches.push(matchToSave);
  } else {
    storedMatches = [matchToSave];
  }

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(storedMatches));
}

// REDUX FUNCTIONS =======================
/* Create object of actions for redux in format:
{
  UPDATE_PLAYER: "UPDATE_PLAYER",
  UPDATE_SCORE: "UPDATE_SCORE"
}
*/
export function createStringConstants(...constants) {
  return constants.reduce((acc, constant) => {
    const obj = acc;

    if (typeof constant !== "string")
      throw new Error(
        `arguments passed to utils.createStringConstants() must be strings - ${constant} is a ${typeof constant}`
      );

    obj[constant] = constant;
    return obj;
  }, {});
}
