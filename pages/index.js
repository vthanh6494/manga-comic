import data from "./api/data.json";
import styles from "../styles/pages/Home.module.scss";
import MainLayout from "./layout/main-layout/MainLayout";
import Manga from "./common/manga-items/Manga";

function ListManga() {
  const listData = Object.values(data);
  console.log("data", listData);
  return (
    <MainLayout hasDevider={true}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.commentShape}>
            <img src="images/star-icon.svg" alt="star" />
          </div>

          <span>LIST OF MANGA</span>
        </div>
        <div className={styles.listMangaContainer}>
          {listData.map((manga) => (
            <div key={manga.id}>
              <Manga manga={manga} />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default ListManga;
