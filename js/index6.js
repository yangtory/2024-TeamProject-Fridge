document.addEventListener("DOMContentLoaded", () => {
  const refrigerationButton = document.querySelector(".button:nth-child(1)");
  const freezingButton = document.querySelector(".button:nth-child(2)");
  const outdoorButton = document.querySelector(".button:nth-child(3)");

  // 버튼을 클릭했을 때 배경색이 바뀌는 함수를 정의합니다.
  function changeBackgroundColor(event) {
    // 선택된 버튼의 배경색을 변경합니다.
    event.target.style.backgroundColor = "#858585";

    // 다른 버튼들의 배경색을 초기화합니다.
    if (event.target !== refrigerationButton) {
      refrigerationButton.style.backgroundColor = "";
    }
    if (event.target !== freezingButton) {
      freezingButton.style.backgroundColor = "";
    }
    if (event.target !== outdoorButton) {
      outdoorButton.style.backgroundColor = "";
    }
  }

  // 각 버튼에 이벤트 리스너를 추가합니다.
  refrigerationButton.addEventListener("click", changeBackgroundColor);
  freezingButton.addEventListener("click", changeBackgroundColor);
  outdoorButton.addEventListener("click", changeBackgroundColor);

  const btn_add = document.querySelector("section button.save");
  btn_add.addEventListener;
});
