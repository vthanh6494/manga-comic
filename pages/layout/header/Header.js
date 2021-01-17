import FullPageIcon from "@/pages/components/svg/FullPageIcon";
import LightBuldOff from "@/pages/components/svg/LightBuldOff";
import LightBuldOn from "@/pages/components/svg/LightBuldOn";
import LoginIcon from "@/pages/components/svg/LoginIcon";
import ReadSlideIcon from "@/pages/components/svg/ReadSlideIcon";
import SearchIcon from "@/pages/components/svg/SearchIcon";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { Context } from "../../../store";
import style from "../../../styles/common.module.scss";
import { ENABLE_SLIDE, TYPE_CHANGE_THEME } from "../../../utils/constant";

function Header({ opt }) {
  const router = useRouter();
  const { state, dispatch } = useContext(Context);
  const [inputVal, setInputVal] = useState("");
  function toggleTheme() {
    dispatch({
      type: TYPE_CHANGE_THEME,
      payload: !state.darkTheme,
    });
  }

  function enableReadeSlide() {
    dispatch({
      type: ENABLE_SLIDE,
      payload: !state.readSlide,
    });
  }
  let styleDark = {};
  if (state.darkTheme) {
    styleDark = {
      background: "#000",
      borderBottom: "1px solid #ebebeb",
      color: "#bbb",
    };
  }

  return (
    <div className={`${style.commonHeader}`} style={styleDark}>
      <div className={style.commonContentHeader}>
        <div className={style.navigation}>
          <div className={style.logo} onClick={() => router.push(`/`)}>
            <img src={'/images/logo.png'} alt="logo" className={style.logoDestop}/>
            <img src={'/images/logo-short.png'} alt="logo" className={style.logoMobile}/>
          </div>
        </div>

        <div className={style.searchContainer}>
          <div className={style.search}>
            <SearchIcon />
            <input
              placeholder="search..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
        </div>
        <div className={style.setting}>
          <div className={style.changeTheme} onClick={toggleTheme}>
            {state.darkTheme ? <LightBuldOff /> : <LightBuldOn />}
          </div>
          <div
            className={style.readMode}
            onClick={enableReadeSlide}
            style={{ cursor: "pointer" }}
          >
            {state.readSlide ? <ReadSlideIcon/> : <FullPageIcon/>}
          </div>
          <div className={style.account}>
            <LoginIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
