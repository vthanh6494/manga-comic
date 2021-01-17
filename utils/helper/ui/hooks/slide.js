import { redirectChapter } from "../../funcs";

export const useSlideHook = ({ eleClass, currentChapterNumber, slug }) => {
  let slideIndex = 1;

  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName(eleClass);
    if (!slides.length) return;
    if (n > slides.length) {
      slideIndex = 1;
      redirectChapter({ next: true, slug, currentChapterNumber });
    }
    if (n < 1) {
      redirectChapter({ prev: true, slug, currentChapterNumber });
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
  }

  return { plusSlides };
};
