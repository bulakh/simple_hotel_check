import { NameSpace } from "../root-reducer";

export const getLocation = (state) => state[NameSpace.INPUT_DATA].location;
export const getDate = (state) => state[NameSpace.INPUT_DATA].date;
export const getDayCount = (state) => state[NameSpace.INPUT_DATA].dayCount;
