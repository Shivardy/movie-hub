import { Actions } from "./../types/common";
import { State } from "../types/common";

export default function appReducer(state: State, action: Actions): State {
  if (action.type === "DISPLAY_SEARCH") {
    return { ...state, displaySearch: action.payload };
  }
  return state;
}
