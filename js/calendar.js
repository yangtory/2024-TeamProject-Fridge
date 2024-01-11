document.addEventListener("DOMContentLoaded", () => {
  let month_num = 0;
  const days_click = document.querySelector("div.days");
  const date = new Date();
  document.getElementById("year").innerHTML = date
    .toDateString()
    .substring(10);
  document.getElementById("month").innerHTML = date
    .toDateString()
    .substring(4, 7);
  const month = document.querySelector("div.month");
  days_click.addEventListener("click", (event) => {
    const target_text = event.target.innerHTML;
    const target_class = event.target.className;

    if (target_class === "day") {
      if (target_text) {
        document.location.href = "./calendar_in.html";
      }
    }
  });
  month.addEventListener("click", (event) => {
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
