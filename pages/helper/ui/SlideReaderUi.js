import React, { useContext, useEffect } from "react";
import { Context } from "../../../store";
import style from "../../../styles/components/SlideReaderUi.module.scss";
import MainLayout from "../../layout/main-layout/MainLayout";
import { useSlideHook } from "./hooks/slide";

export const SlideReaderUi = ({
  mangaItem,
  listChapter,
  currentChapterNumber,
  slug,
  styleImg,
}) => {
  const eleClass = "slide-wrapper";
  const { plusSlides } = useSlideHook({
    eleClass,
    currentChapterNumber,
    slug,
  });
  const { state } = useContext(Context);

  useEffect(() => {
    // init slide show
    if (state.readSlide) {
      plusSlides(0);
    }
  }, [state.readSlide]);

  return (
    <MainLayout>
      <div className={style.title}>{mangaItem.name}</div>
      <div className={`${style.slideshowContainer} ${style.fade}`}>
        {listChapter.map((img, idx) => (
          <div className={`${style.slideWrapper} ${eleClass}`} key={idx}>
            <div className={style.numbertext}>{`${idx + 1} / ${
              listChapter.length
            }`}</div>
            <img src={img} alt={idx} key={idx} style={styleImg} />
          </div>
        ))}
        <a className={style.prev} onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className={style.next} onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>
    </MainLayout>
  );
};
