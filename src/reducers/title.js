import { SET_TITLE } from "actions/types";

export default function (state = 'okokok', action) {
  switch (action.type) {
    case SET_TITLE:
      return action.payload;
    default:
      return state;
  }
}
