import { ENABLE_SLIDE } from "../../utils/constant";
import Cookies from "../../utils/helper/cookies"

export function enableSlide(state, action) {
  switch (action.type) {
    case ENABLE_SLIDE:
      Cookies.set('readSlide', action.payload)
      return { ...state, readSlide: action.payload };
    default:
      return state;
  }
}
