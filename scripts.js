const galleryItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightClose = document.querySelector(".lightbox-close");


galleryItem.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector(".gallery-img").getAttribute("data-src");
    lightboxImg.setAttribute("src", imgSrc);
    lightbox.style.display = "flex";
    console.log("teste")
  });
});

lightClose.addEventListener("click",() =>{
  lightbox.style.display = "none";
})
