import Header from "@/pages/layout/header/Header";
import style from "@/styles/common.module.scss";
import Footer from "@/pages/layout/footer/Footer";
import { useContext } from "react";
import { Context } from "@/store";
import {
  COLOR_TEXT_BRIGHT_THEME,
  COLOR_TEXT_DARK_THEME,
} from "@/utils/constant";

function MainLayout({ children, hasDevider = false }) {
  const { state } = useContext(Context);
  console.log("state", state);
  let colorText = COLOR_TEXT_BRIGHT_THEME;
  const margin = hasDevider ? "0" : "65px";
  let styleDevider = {};
  if (state.darkTheme) {
    colorText = COLOR_TEXT_DARK_THEME;
    styleDevider = {
      background: "transparent",
    };
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={state.darkTheme ? style.commonBackgroundDark : "no-background"} />
      <Header />
      {hasDevider && <div className={style.devider} style={styleDevider} />}
      <div
        className={style.commonContainer}
        style={{ color: `${colorText}`, marginTop: `${margin}` }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
