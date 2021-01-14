import { TYPE_CHANGE_THEME } from "../../pages/common/constant";
import Cookies from "../../pages/helper/cookies"

export function changeTheme(state, action) {
  switch (action.type) {
    case TYPE_CHANGE_THEME:
      Cookies.set('darkTheme', action.payload)
      return { ...state, darkTheme: action.payload };
    default:
      return state;
  }
}
