import { ENABLE_SLIDE } from "../../pages/common/constant";
import Cookies from "../../pages/helper/cookies"

export function enableSlide(state, action) {
  switch (action.type) {
    case ENABLE_SLIDE:
      Cookies.set('readSlide', action.payload)
      return { ...state, readSlide: action.payload };
    default:
      return state;
  }
}
