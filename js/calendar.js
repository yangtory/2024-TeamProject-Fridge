document.addEventListener("DOMContentLoaded", () => {
  const main_nav = document.querySelector("body");
  let month_num = 0;
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

  const date = new Date();
  document.getElementById("year").innerHTML = date
    .toDateString()
    .substring(10);
  document.getElementById("month").innerHTML = date
    .toDateString()
    .substring(4, 7);

  const month = document.querySelector("div.month");
  const month_prev = document.querySelector("li.prev");
  const month_next = document.querySelector("li.next");
  month.addEventListener("click", (event) => {
    const target = event.target;
    const tag_class = event.target.className;

    if (tag_class === "next") {
      month_num = month_num + 1;
      const date = new Date(2024, month_num);
      document.getElementById("year").innerHTML = date
        .toDateString()
        .substring(10);
      document.getElementById("month").innerHTML = date
        .toDateString()
        .substring(4, 7);
    } else if (tag_class === "prev") {
      month_num = month_num - 1;
      const date = new Date(2024, month_num);
      document.getElementById("year").innerHTML = date
        .toDateString()
        .substring(10);
      document.getElementById("month").innerHTML = date
        .toDateString()
        .substring(4, 7);
    }
  });
});
