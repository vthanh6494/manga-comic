import { useRouter } from "next/router";
import style from "../../../styles/components/manga.module.scss";
import StarRatings from "react-star-ratings";
import { reduceTitle } from "@/utils/helper/func";
import { useContext } from "react";
import { Context } from "@/store";
import { COLOR_TEXT_DARK_THEME } from "../../../utils/constant";
import EyeIcon from "@/pages/components/svg/EyeIcon";

const starRatedColor = "#f25445";
const greyColor = "rgb(203, 211, 227)";

function Manga({ manga }) {
  const router = useRouter();
  const { state } = useContext(Context);
  function redirectReadView() {
    router.push(`/read-manga/${manga.slug}/1`);
  }
  let colorText = "#716e6e";
  let styleLatestInfo = {
    display: "grid",
    gridTemplateColumns: "45px 1fr",
  };
  let styleTitleManga = {};
  if (!manga) return
  if (manga.vol) {
    styleLatestInfo = {
      ...styleLatestInfo,
      gridTemplateColumns: "45px 25% 1fr",
    };
  }

  if (manga.isHot || manga.isNew) {
    styleTitleManga = { display: "grid", gridTemplateColumns: "35px 1fr" };
  }
  if (state.darkTheme) {
    colorText = COLOR_TEXT_DARK_THEME;
  }
  function generateLabelTite() {
    if (manga.isHot) {
      return (
        <div className={style.label} style={{ backgroundColor: "#ea344a" }}>
          <span>HOT</span>
        </div>
      );
    }
    if (manga.isNew) {
      return (
        <div className={style.label} style={{ backgroundColor: "#37b6d9" }}>
          <span>NEW</span>
        </div>
      );
    }
    return null;
  }
  return (
    <div className={`${style.mangaContainer}`}>
      <div onClick={redirectReadView} style={{ cursor: "pointer" }}>
        <img src={manga.thumbnail} alt="thumbnai" />
      </div>
      <div className={style.details}>
        <div className={style.titleManga} style={styleTitleManga}>
          {generateLabelTite()}
          <span className={style.name} onClick={redirectReadView}>
            {reduceTitle(manga.name)}
          </span>
        </div>
        <div className={style.views}>
          <EyeIcon />
          <div style={{ color: colorText }}>{manga.views}</div>
        </div>
        <div className={style.rate}>
          <StarRatings
            rating={manga.rating}
            starDimension="15px"
            starSpacing="0"
            starRatedColor={starRatedColor}
            starEmptyColor={greyColor}
          />
          <div className={style.ratingNumber}>{manga.rating}</div>
        </div>
        <div className={style.latestInfo} style={styleLatestInfo}>
          <div className={style.chapter}>
            <span>{`ch.${manga.chapters.length}`}</span>
          </div>
          {manga.vol && <div className={style.vol}>{`vol.${manga.vol}`}</div>}
          <div className={style.updatedTime} style={{ color: `${colorText}` }}>
            Jan 7, 08:18 PM
          </div>
        </div>
        <div className={style.latestInfo} style={styleLatestInfo}>
          <div className={style.chapter}>
            <span>{`ch.1`}</span>
          </div>
          {manga.vol && <div className={style.vol}>{`vol.${manga.vol}`}</div>}
          <div className={style.updatedTime} style={{ color: `${colorText}` }}>
            20 minutes ago
          </div>
        </div>
      </div>
    </div>
  );
}

export default Manga;
