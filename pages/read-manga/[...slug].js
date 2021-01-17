import { useRouter } from "next/router";
import data from "../api/data.json";
import style from "@/styles/components/FullPageRead.module.scss";
import { useContext } from "react";
import { Context } from "../../store";
import MainLayout from "../layout/main-layout/MainLayout";
import { SlideReaderUi } from "../../utils/helper/ui/SlideReaderUi";
import { redirectChapter } from "../../utils/helper/funcs";

const ReadManga = () => {
  const router = useRouter();
  const res = router.query;
  const { state } = useContext(Context);
  if (!res.slug) return null;
  const chapterId = res.slug[1];
  const slug = res.slug[0];
  const mangaItem = Object.values(data).find((item) => item.slug === slug);
  const listChapter = mangaItem.chapters[chapterId - 1];
  let styleImg = {}
  if (state.darkTheme) {
    styleImg = {filter: 'brightness(0.8)'}
  }

  console.log("state.readSlide", state.readSlide);

  if (state.readSlide) {
    return (
      <SlideReaderUi
        mangaItem={mangaItem}
        listChapter={listChapter}
        currentChapterNumber={chapterId}
        slug={slug}
        styleImg={styleImg}
      />
    );
  }

  return (
    <MainLayout>
      <div className={style.fullWrap}>
        <div className={style.title}>{mangaItem.name}</div>
        {listChapter.map((img, idx) => (
          <img src={img} alt={idx} key={idx} style={styleImg}/>
        ))}
        <div className={style.redirectChapterBtn}>
          <div
          className={style.button}
            onClick={() =>
              redirectChapter({
                prev: true,
                slug,
                currentChapterNumber: chapterId,
              })
            }
          >
            prev
          </div>
          <div
          className={style.button}
            onClick={() =>
              redirectChapter({
                next: true,
                slug,
                currentChapterNumber: chapterId,
              })
            }
          >
            next
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ReadManga;
