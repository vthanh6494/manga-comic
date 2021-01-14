import { COLOR_TEXT_DARK_THEME } from "@/pages/common/constant";
import { Context } from "@/store";
import React, { useContext } from "react";
export default function MenuIcon() {
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
      <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
    </svg>
  );
}
