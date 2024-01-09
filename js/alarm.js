document.addEventListener("DOMContentLoaded", () => {
  // const btn_close = document.querySelector("span.close");
  const btn_close = document.querySelector("div.line ul");
  console.log(btn_close);
  btn_close.addEventListener("click", (event) => {
    const target = event.target;
    if (target.className === "close") {
      if (confirm("상품을 지우시겠습니까?")) {
        target.closest("li").style.display = "none";
      }
    }
    if (target.className === "date") {
      window.open("./food1.html", "self", "width=300, height300");
    }
  });
});
