const galleryItem = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightContent = document.querySelector(".lightbox-content");

galleryItem.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.querySelector(".gallery-item").getAttribute("img")
    console.log(imgSrc)
    // lightContent.setAttribute(imgSrc)
    // console.log(lightContent)
});
})