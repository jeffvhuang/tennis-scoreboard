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
