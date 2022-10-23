const clouds = document.querySelectorAll(".cloud"),
  boat = document.querySelector(".boat");
window.addEventListener("scroll", () => {
  boat.style = `transform:translateX(${window.scrollY}px)`;
  clouds.forEach((cloud) => {
    let speed = cloud.getAttribute("speed")
    cloud.style =`transform:translateX(${window.scrollY*speed}px)`
  });
});
