document.addEventListener("DOMContentLoaded", () => {
  const date = new Date();
  document.getElementById("month").innerHTML = date
    .toDateString()
    .substring(4, 7);
  document.getElementById("day").innerHTML = date
    .toDateString()
    .substring(7, 10);
});
