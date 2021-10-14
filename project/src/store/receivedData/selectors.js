import { NameSpace } from "../root-reducer";

export const getHotels = (state) => state[NameSpace.RECEIVED_DATA].hotels;
