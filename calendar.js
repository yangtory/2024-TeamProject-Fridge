document.addEventListener("DOMContentLoaded", () => {
  const main_nav = document.querySelector("body");

  main_nav.addEventListener("click", (event) => {
    const main_name = event.target.tagName;
    const nav_class = event.target.className;

    if (main_name === "I") {
      if (nav_class === "fa-solid fa-gear") {
        document.location.href = "./setting.html";
      } else if (nav_class === "fa-solid fa-calendar-days") {
        document.location.href = "./calendar.html";
      } else if (nav_class === "fa-solid fa-house") {
        document.location.href = "./index.html";
      } else if (nav_class === "fa-solid fa-bell") {
        document.location.href = "./bell.html";
      }
    }
  });
});
