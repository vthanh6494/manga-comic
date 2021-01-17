import { FIRST_CHAPTER } from "../constant";

export const redirectChapter = ({
  prev = false,
  next = false,
  currentChapterNumber,
  slug,
}) => {
  if (next) {
    const nextChapter = parseInt(currentChapterNumber) + 1;
    return (window.location.href = `/read-manga/${slug}/${nextChapter}`);
  }
  if (prev) {
    if (parseInt(currentChapterNumber) === FIRST_CHAPTER) return
    const prevChapter = parseInt(currentChapterNumber) - 1;
    window.location.href = `/read-manga/${slug}/${prevChapter}`;
  }
};
