// increase image size on hover and reset on click
function zoomImage({ imageSelector }) {
  document.querySelectorAll(imageSelector).forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.style.cursor = "zoom-in";
    });
    image.addEventListener("click", () => {
      if (!image.classList.contains("zoomed")) {
        document.querySelector(imageSelector).classList.remove("zoomed");
        image.classList.add("zoomed");
        image.style.cursor = "zoom-out";
        image.style.transform = "scale(2)";
        console.log("zoom in");
      } else {
        image.classList.remove("zoomed");
        image.style.cursor = "zoom-in";
        image.style.transition = "transform 0.3s ease-in-out";
        image.style.transform = "scale(1)";
        console.log("zoom out");
      }
    });
  });
}

//   zoomImage({
//     imageSelector: ".question__img",
//   });

export default zoomImage;
