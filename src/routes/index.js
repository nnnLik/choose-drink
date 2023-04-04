import { First, Second, Third, Fourth } from "../pages";

export const routesData = [
  {
    path: "/",
    Element: First,
    actionType: "setTeam",
  },
  {
    path: "/second",
    Element: Second,
    actionType: "setDrink",
  },
  {
    path: "/third",
    Element: Third,
    actionType: "setSatisfy",
  },
  {
    path: "/fourth",
    Element: Fourth,
    actionType: "resetState",
  },
];
