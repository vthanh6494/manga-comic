import { COLOR_TEXT_DARK_THEME } from "@/utils/constant";
import { Context } from "@/store";
import React, { useContext } from "react";
export default function ReadSlideIcon() {
  const { state } = useContext(Context);
  let colorIcon = "#fff";
  if (state.darkTheme) {
    colorIcon = COLOR_TEXT_DARK_THEME;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={colorIcon}
    >
      <path d="M13.744 8s1.522-8-3.335-8h-8.409v24h20v-13c0-3.419-5.247-3.745-8.256-3zm.256 11h-8v-1h8v1zm4-3h-12v-1h12v1zm0-3h-12v-1h12v1zm-3.432-12.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z" />
    </svg>
  );
}
